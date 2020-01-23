import React from 'react';
import Header from '../../../components/Header/Header';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header />
        {/* <Calendar /> */}
      </div>
    );
  }
}

export default Home;
