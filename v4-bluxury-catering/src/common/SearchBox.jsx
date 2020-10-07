import React from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <div className="form-group">
      <input
        type="text"
        name=""
        placeholder="商品名稱搜尋..."
        className="form-control"
        id="searchBar"
        value={value}
        onChange={onChange}
        style={{ borderColor: "silver" }}
      />
    </div>
  );
};

export default SearchBox;
