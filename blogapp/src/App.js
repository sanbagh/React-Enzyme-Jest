import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import PostDetail from './Components/PostDetail';
class App extends Component {
  state = {};
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/:id' component={PostDetail} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
