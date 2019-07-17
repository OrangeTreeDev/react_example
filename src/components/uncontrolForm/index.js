import React from 'react';

class UncontrolledForm extends React.Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    alert('A name was submitted: ' + this.input.current.value);
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          name:
          <input defaultValue="sunlixiang" type="text" ref={this.input}></input>
        </label>
        <input type="submit"></input>
      </form>
    );
  }
}

export default UncontrolledForm;
