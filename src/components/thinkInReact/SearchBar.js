import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleCheckChange = this.handleCheckChange.bind(this);
  }
  handleSearchChange(event) {
    this.props.onSearchChange(event.target.value);
  }
  handleCheckChange(event) {
    this.props.onCheckChange(event.target.checked);
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.search}
          placeholder="Search..."
          onChange={this.handleSearchChange}
        >
        </input>
        <br></br>
        <label>
          <input type="checkbox" checked={this.props.isStock} onChange={this.handleCheckChange}></input>
          Only show Products in stock
        </label>
      </div>
    );
  }
}

export default SearchBar;
