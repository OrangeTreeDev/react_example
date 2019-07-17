import React from 'react';
import bugPng from './bug-report.png';

class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 };
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }
  render() {
    return (
      <div style={{height: '100%'}} onMouseMove={this.handleMouseMove}>
        { this.props.render(this.state) }
        <p>The current mouse position is ({this.state.x}, {this.state.y})</p>
      </div>
    );
  }
}

class Cat extends React.Component {
  render() {
    const {x, y} = this.props.mouse;
    return (
      <img alt="cat" src={bugPng} style={{position: 'absolute', left: `${x}px`, top: `${y}px`}}></img>
    );
  }
}

class MouseTracker extends React.Component {
  render() {
    return (
      <div style={{height: '400px'}}>
        <h1>Move the mouse around</h1>
        <Mouse render={mouse => <Cat mouse={mouse}></Cat>}></Mouse>
      </div>
    );
  }
}

export default MouseTracker;
