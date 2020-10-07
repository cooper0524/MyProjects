import React, { useContext, useState, useEffect } from "react";
import SearchBox from "../common/SearchBox";
import Filter from "../common/Filter";
import ProductsGrid from "../common/ProductsGrid";
// import { ProductsContext } from "../contexts/ProductsContext";
import PopupMsg from "./PopupMsg";
import { AdminContext } from "../contexts/AdminContext";
import useFetchProducts from "../customHook/useFectchProducts";
import memoryLogoWithText from "../assets/memoryLogoWithText.JPG";
import memoryLogo from "../assets/memoryLogo.png";

const Memory = () => {
  const products = useFetchProducts("memory", "memoryProducts");
  const { admin } = useContext(AdminContext);

  const categories = ["生乳捲", "生乳塔", "常溫蛋糕", "節慶禮盒", "其他商品"];
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("全部商品");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setSelectedGenre("全部商品");
  };
  const handleItemCategoryChange = (category) => {
    setSelectedGenre(category);
    setSearchTerm("");
  };
  useEffect(() => {
    let results = products;
    if (searchTerm)
      results = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    else if (selectedGenre === "全部商品") results = products;
    else if (selectedGenre) {
      results = products.filter(
        (product) => product.category === selectedGenre
      );
    }
    setSearchResults(results);
  }, [products, searchTerm, selectedGenre]);

  return (
    <div style={{ alignItems: "baseline" }}>
      {admin && (
        <PopupMsg
          src={
            "https://scontent.ftpe12-1.fna.fbcdn.net/v/t31.0-0/p206x206/22712353_648259815562546_9040069549059309313_o.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=4RxqhClM2n0AX9KLJX_&_nc_ht=scontent.ftpe12-1.fna&_nc_tp=6&oh=c2710cb7a11d7c2f90527348f4d35902&oe=5F624FE0"
          }
          categories={categories}
          doc="memory"
          collection="memoryProducts"
        />
      )}
      <div
        className="d-flex mt-2"
        style={{
          justifyContent: "center",
          backgroundColor: "white",
          alignItems: "center",
        }}
      >
        <img src={memoryLogo} alt="memoryLogo" width="100px" height="80px" />
        <img
          src={memoryLogoWithText}
          alt="memoryLogoWithText"
          width="250px"
          height="100px"
        />
      </div>

      <div className="row">
        <div className="col-sm-8" style={{ paddingTop: "20px" }}>
          <Filter
            products={products}
            categories={categories}
            selectedGenre={selectedGenre}
            onClick={handleItemCategoryChange}
          />
        </div>
        <div className="col-sm-4" style={{ paddingTop: "20px" }}>
          <SearchBox
            products={products}
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <ProductsGrid
        searchResults={searchResults}
        categories={categories}
        doc="memory"
        collection="memoryProducts"
      />
    </div>
  );
};

export default Memory;
