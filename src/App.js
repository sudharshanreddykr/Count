import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Count from './component/Count';
import './App.css';
class App extends Component {

  constructor(props) {
    super(props);
    this.mount = this.mount.bind(this);
    this.unMount = this.unMount.bind(this);
  }

  mount() {
    ReactDOM.render(<Count num={0}/>, document.getElementById("renderHere"));
  }
  unMount() {
    ReactDOM.unmountComponentAtNode(document.getElementById("renderHere"));
  }
  render() {
    return(
      <div className="App">
        <div className="App-header">
          <h1>React Lifecycle</h1>

          <button onClick={this.mount} className="btnMount">Mount</button>
          <button onClick={this.unMount} className="btnUnMount">Un Mount</button>

          <div id="renderHere"></div>
        </div>
      </div>
    )
  }
}



export default App;
