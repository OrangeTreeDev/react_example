import React from 'react';

class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.textInput.current.focus();
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.textInput}></input>
        <input type="button" onClick={this.handleClick} value="focus"></input>
      </div>
    );
  }
}

export default CustomTextInput;
