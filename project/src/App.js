import React, { Component } from 'react';
import axios from 'axios';
import User from './components/User'

class App extends Component {
  state = {user: [], followers: []};

  componentDidMount() {

    axios
      .get('https://api.github.com/users/glassbones')
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err));

    axios
      .get(`https://api.github.com/users/glassbones/followers`)
      .then(res => this.setState({ followers: res.data }))
      .catch(err => console.log(err))

  }

  render() {
    return (<>
      <h1>GitHub Info</h1>
      <User user={this.state.user} followers={this.state.followers} />
    </>)
  }
}

export default App;
