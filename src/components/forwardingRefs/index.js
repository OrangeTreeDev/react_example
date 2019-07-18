import React from 'react';

class FancyButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {color: 'red'};
  }
  changeColor(color) {
    this.setState({
      color: color
    });
  }
  render() {
    return (
      <button className="fancybutton" style={{color: this.state.color}}>{this.props.children}</button>
    );
  }
}

function logProps(WrappedComponent) {
  class LogProps extends React.Component {
    componentDidUpdate(prevProps) {
      console.log('old props:', prevProps);
      console.log('new props:', this.props);
    }

    render() {
      const {forwardRef, ...props} = this.props;
      return (
        <WrappedComponent ref={forwardRef} {...props}></WrappedComponent>
      );
    }
  }

  return React.forwardRef((props, ref) => {
    return <LogProps forwardRef={ref} {...props}></LogProps>
  });
}

export default logProps(FancyButton);
