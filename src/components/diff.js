import React from 'react';

class Button extends React.Component {
  componentWillMount() {
    console.log('Button componentWillMount');
  }

  componentWillReceiveProps() {
    console.log('Button componentWillReceiveProps');
  }

  componentWillUpdate() {
    console.log('Button componentWillUpdate');
  }

  componentWillUnmount() {
    console.log('Button componentWillUnmount');
  }
  
  render() {
    return (
      <button onClick={ this.props.onClick }>{ 'hello' }</button>
    );
  }
}

class Text extends React.Component {

  componentWillReceiveProps() {
    console.log('Text componentWillReceiveProps');
  }

  componentWillUpdate() {
    console.log('Text componentWillUpdate');
  }

  render() {
    return (
      <span>{ this.props.text }</span>
    );
  }
}

class RootDiff extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSecond: false,
    };
  }

  handleClick = () => {
    this.setState({
      isSecond: !this.state.isSecond,
    });
  }

  render() {
    let elements = (<div>
      <Text text='第一次'></Text>
      <Button onClick={this.handleClick}>click</Button>
    </div>)
    if (this.state.isSecond) (
      // root element type different, updating will tear down the old dom tree
      elements = (<p>
        <Text text='第二次'></Text>
        <Button onClick={() => this.handleClick()}>click</Button>
      </p>)

      // when a componet updated, react will update the props of the underlying component whether the props has changed
      // elements = (<div>
      //   <Text text='第一次'></Text>
      //   <Button onClick={this.handleClick}>click</Button>
      // </div>)
    )
    return elements;
  }
}

export default RootDiff;
