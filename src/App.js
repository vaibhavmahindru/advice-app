import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    advice: "",
  };
  componentDidMount() {
    this.handleFetch();
  }
  handleFetch = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((response) => {
        const { advice } = response.slip;

        this.setState({ advice: advice });
      });
  };
  render() {
    return (
      <div className="App">
        <div className="card">
          <h1 className="advice">{this.state.advice}</h1>
          <button className="button" onClick={this.handleFetch}>
            <span>random advice!!</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
