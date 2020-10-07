import React from "react";
import ProductItem from "./ProductItem";
import _ from "lodash";

const ProductsGrid = ({ searchResults, categories, doc, collection }) => {
  return (
    <div id="productGrid">
      {searchResults.length === 0 ? (
        <p>查無商品</p>
      ) : (
        _.sortBy(searchResults, "editTime")
          .reverse()
          .map((result) => (
            <ProductItem
              key={result.id}
              product={result}
              categories={categories}
              doc={doc}
              collection={collection}
            />
          ))
      )}
    </div>
  );
};

export default ProductsGrid;
