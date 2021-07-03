import React, { Component } from 'react';

export default class CalculateHeight extends Component {
  state = {
    dimensions: null,
  };

  componentDidMount() {
    this.setState({
      dimensions: {
        width: this.container.offsetWidth,
        height: this.container.offsetHeight,
      },
    });
  }

  renderContent() {
    const { dimensions } = this.state;

    return (
      <div>
        width: {dimensions.width}
        <br />
        height: {dimensions.height}
      </div>
    );
  }

  render() {
    const { dimensions } = this.state;

    return (
      <div className="Hello" ref={el => (this.container = el)}>
        {dimensions && this.renderContent()}
      </div>
    );
  }
}