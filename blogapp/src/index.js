import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import axios from 'axios';
import RootReducer from './Reducers/RootReducer';

function reducer() {
  axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then((res) => {
      const store = createStore(RootReducer, { posts: res.data.slice(0, 10) });
      ReactDOM.render(
        <React.StrictMode>
          <Provider store={store}>
            <App />
          </Provider>
        </React.StrictMode>,
        document.getElementById('root')
      );
    })
    .catch((err) => {
      ReactDOM.render(<h1 style={{textAlign:"center"}}>{err.message}</h1>, document.getElementById('root'));
    });
}
reducer();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
