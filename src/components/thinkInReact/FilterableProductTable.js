import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

const model = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      isStock: false,
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleCheckChange = this.handleCheckChange.bind(this);
  }

  handleSearchChange(search) {
    this.setState({
      search: search,
    });
  }

  handleCheckChange(isStock) {
    this.setState({
      isStock: isStock,
    });
  }

  render() {
    const filters = model.filter((item) => {
      let condition = true;
      if (this.state.isStock) {
        condition = item.stocked;
      }
      return condition
        && item.name.indexOf(this.state.search) > -1;
    });
    const groups = filters.reduce((groups, item) => {
      if (groups[item.category]) {
        groups[item.category].push(item);
      } else {
        groups[item.category] = [item];
      }
      return groups;
    }, {});
    return (
      <div>
        <SearchBar isStock={this.state.isStock}
          search={this.state.search}
          onSearchChange={this.handleSearchChange}
          onCheckChange={this.handleCheckChange}
        >
        </SearchBar>
        <ProductTable groups={groups}></ProductTable>
      </div>
    );
  }
}

export default FilterableProductTable;
