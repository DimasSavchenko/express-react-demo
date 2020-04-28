import React from 'react';
import './App.css';

const API_URL = 'http://localhost:5000/api';

class App extends React.Component {
  async componentDidMount() {
    const res = await fetch(API_URL);
    const data = await res.json();

    console.log(data);
  }

  render() {
    return (
        <h2>Home page</h2>
    );
  }
}

export default App;
