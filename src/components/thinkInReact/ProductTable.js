import React from 'react';
import ProductCategory from './ProductCategoryRow';
import ProductRow from './ProductRow';

class ProductTable extends React.Component {
  render() {
    const groups = this.props.groups;
    const groupElems = Object.keys(groups).map((category) => {
      const list = groups[category].map((item) => {
        return <ProductRow key={item.name} name={item.name} price={item.price}></ProductRow>;
      });
      return (
        <div className="productGroup" key={category}>
          <ProductCategory name={category}></ProductCategory>
          <ul>
            {list}
          </ul>
        </div>
      );
    })
    return (
      <div className="productTable">
        {groupElems}
      </div>  
    );
  }
}

export default ProductTable;
