import React, { Component } from 'react';
import Radium from 'radium';
import Person from './Person/Person';
import UserOutput from './User/UserOutput';
import Validation from './Validation/Validation';
import './App.css';
import './User/User.css';
import UserInput from './User/UserInput';
import Char from './Validation/Char';

class App extends Component {
  state = {
    persons: [{ name: 'sanjeev', age: 27 }],
    username: 'sanjeev',
    showUser: false,
    userInput: '',
  };
  nameChangedHandler = (event) => {
    this.setState({
      persons: [{ name: event.target.value, age: 27 }],
    });
  };
  toggleUser = () => {
    this.setState({ showUser: !this.state.showUser });
  };
  countCharacters = (event) => {
    this.setState({ userInput: event.target.value });
  };
  userNameChangedHandler = (event) => {
    this.setState({ username: event.target.value });
  };
  deleteCharHandler = (index) => {
    const textArr = this.state.userInput.split('');
    textArr.splice(index, 1);
    this.setState({ userInput: textArr.join('') });
  };
  render() {
    const style = {
      marginTop: '10px',
    };
    const btnStyle = {
      border: '1px solid red',
      padding: '10px',
      marginTop: '5px',
      backgroundColor: '#ececec',
      ':hover': {
        backgroundColor: 'yellow',
        color: 'black',
      },
    };
    let userData = null;
    if (this.state.showUser) {
      userData = (
        <div className='User' style={style}>
          <UserInput
            nameChanged={this.userNameChangedHandler}
            username={this.state.username}
          />
          <UserOutput name={this.state.username} />
        </div>
      );
    }
    const charList = this.state.userInput.split('').map((char, index) => {
      return <Char char={char} clicked={() => this.deleteCharHandler(index)} />;
    });
    return (
      <div className='App'>
        <h1>I am root react component</h1>
        {/* <button onClick={this.stateChangeHandler}>Change State</button> */}
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          changed={this.nameChangedHandler}
        >
          Playing Cricket
        </Person>
        <button onClick={this.toggleUser} style={btnStyle}>
          Toggle User
        </button>
        {userData}
        <br />
        <input
          onChange={(event) => this.countCharacters(event)}
          value={this.state.userInput}
        />
        <p>{this.state.userInput.length}</p>
        <Validation count={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}
App = Radium(App);
//React useState hook

// const App = function () {
//   const [state, setStateFn] = useState({
//     persons: [
//       { name: 'sanjeev', age: 27 },
//       { name: 'abc', age: 28 },
//     ],
//   });
//   const stateChangeHandler = function() {
//     setStateFn({
//       persons: [
//         { name: 'state changed', age: 27 },
//         { name: 'abc 2', age: 28 },
//       ],
//     });
//   };
//   return (
//     <div className='App'>
//       <h1>I am root react component</h1>
//       <button onClick={stateChangeHandler}>Change State</button>
//       <Person name={state.persons[0].name} age={state.persons[0].age}>
//         Playing Cricket
//       </Person>
//       <Person name={state.persons[1].name} age={state.persons[1].age}>
//         Playing Piano
//       </Person>
//     </div>
//   );
// };
export default App;
