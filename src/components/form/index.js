import React from 'react';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      essay: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    this.setState({
      [target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input name="name" type="text" value="ddd" onChange={this.handleInputChange}></input>
        </label>
        <label>
          Essay:
          <textarea name="essay" value={this.state.essay} onChange={this.handleInputChange}></textarea>
        </label>
        <input type="submit" value="submit"></input>
      </form>
    );
  }
}

export default NameForm;
