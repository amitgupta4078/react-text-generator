import React, { Component } from "react";

class Controls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paras: this.props.paras
    };
  }

  handleInputChange = (event) => {
    this.setState({
      paras: event.target.value
    });
    this.props.updateUserPrefs(event.target.value);
  }

  render() {
    return (
      <div className="row">
        <div className="col">
          <label className="form-label float-end"><small>Select number of paragraphs (default 4)</small>
            <input type="number" name="paras" className="form-control" min="1" max="10" onChange={this.handleInputChange} value={this.state.paras} />
          </label>
        </div>
      </div>
    );
  }
}

export default Controls;
