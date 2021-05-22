import React, { Component } from "react";
import axios from "axios";
import Output from "./components/output";
import Controls from "./components/controls";
import { HeartFill } from 'react-bootstrap-icons';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paras: 4,
      text: [],
    };
  }

  componentDidMount() {
    this.getText();
  }

  getText = () => {
    const url = `https://hipsum.co/api/?type=hipster-centric&paras=${this.state.paras}&start-with-lorem=true`;
    axios.get(url).then((response) => {
      this.setState({
        text: response.data
      })
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.paras !== this.state.paras) {
      this.getText();
    }
  }

  handleUserPrefs = (value) => {
    this.setState({
      paras: value
    });
  }

  render() {
    return (
      <div className="container py-4">
        <header className="border-bottom mb-3 pb-2">
          <span className="fs-4">Text Generator</span>
          <span className="fs-6 float-end mt-2">Built with <HeartFill color="#dc3545" /> by Aosis</span>
        </header>
        <Controls updateUserPrefs={this.handleUserPrefs} paras={this.state.paras} />
        <Output text={this.state.text} />
      </div>
    );
  }
}

export default App;
