import React from 'react';

class CounterButton extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(nextProps, nextState);
  //   if (this.props.color !== nextProps.color) {
  //     return true;
  //   }
  //   if (this.state.count !== nextState.count) {
  //     return true;
  //   }
  //   return false;
  // }

  render() {
    console.log('CounterButton render call');
    return (
      <button
        style={{color: this.props.color}}
        onClick={() => this.setState(state => ({count: state.count + 1}))}>
        Count: {this.state.count}
      </button>
    );
  }
}

class ButtonPanel extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {color: 'red'};
  }
  render() {
    console.log('ButtonPanel render call');
    return (
      <div>
        <CounterButton color={this.state.color}></CounterButton>
        <button onClick={() => this.setState({color: 'blue'})}>Change Color</button>
      </div>
    );
  }
}

export default ButtonPanel;
