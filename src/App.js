import React, { Component } from 'react';
import {Header} from './components';
import {PostContainer} from './containers';

class App extends Component {
  render() {
    return (
      <div onKeyDown={this.onKeyDown}>
        <Header/>
        <PostContainer/>
      </div>
    );
  }
}

export default App;
