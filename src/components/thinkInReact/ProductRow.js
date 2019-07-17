import React from 'react';

class ProductRow extends React.Component {
  render() {
    const {name, price} = this.props;
    return (
      <li>
        <span className="column">{name}</span>
        <span className="column">{price}</span>
      </li>
    );
  }
}

export default ProductRow;
