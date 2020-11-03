import React,{ Component } from 'react';
import './App.css';

class App extends Component {
  render(){
    const name = "Abhishek!!"
    const loading = true;
  return (
    <div className="App">
      {loading ? <h1>Hello ,{name}</h1>:<h1>Failed..</h1>}
    </div>
  );
  }
}

export default App;
