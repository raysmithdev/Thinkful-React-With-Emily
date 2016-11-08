import React, { Component } from 'react';
import './App.css';
import Intro from './components/Intro'
import Navbar from './components/Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Intro
          name="Ray"
          buttonColor="success"
          bio="Hello my name is Ray"
        />
        <Intro
          name="Emily"
          buttonColor="danger"
          bio="Hello my name is Emily"
        />
      </div>
    );
  }
}

export default App;

// var App = React.CreateClass {
//   render: function() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
//
// module.exports = App;
