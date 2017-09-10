import React, { Component } from 'react';
import '../App.css';
import UserList from '../containers/user-list.js';
import UserDetails from '../containers/user-details.js';
class App extends Component {
  render() {
    return (
     <div>
      <h2>Username List:
      </h2>
      <UserList/>
      <hr/>
      <h2>User Details
      </h2>
      <UserDetails/>
     </div>
    );
  }
}

export default App;
