import React from "react";

const Filter = ({ products, selectedGenre, onClick }) => {
  const categories = ["全部商品"];
  products.forEach(function (item) {
    if (categories.indexOf(item.category) < 0) {
      categories.push(item.category);
    }
  });

  return (
    <div className="btn-group d-flex" role="group">
      {categories.map((category) => (
        <button
          key={category}
          className={
            category === selectedGenre
              ? "btn btn-outline-info w-100 active"
              : "btn btn-outline-info w-100"
          }
          id="cat-button"
          onClick={() => onClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Filter;
