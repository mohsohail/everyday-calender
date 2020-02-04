import React, { Component } from 'react';
import Home from '../HomePage/views/Home';

class HomePage extends Component {
  render() {
    return (
      <div>
        <Home {...this.props} />
      </div>
    );
  }
}

export default HomePage;
