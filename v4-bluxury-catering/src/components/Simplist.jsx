import React, { useContext, useState, useEffect } from "react";
import SearchBox from "../common/SearchBox";
import Filter from "../common/Filter";
import ProductsGrid from "../common/ProductsGrid";
// import { ProductsContext } from "../contexts/ProductsContext";
import PopupMsg from "./PopupMsg";
import { AdminContext } from "../contexts/AdminContext";
import useFetchProducts from "../customHook/useFectchProducts";
import simplistLogoWithText from "../assets/simplistLogoWithText.JPG";
import simplistLogo from "../assets/simplistLogo.png";

const Simplist = () => {
  const products = useFetchProducts("simplist", "simplistProducts");
  const { admin } = useContext(AdminContext);
  const defaultSrc =
    "https://scontent.ftpe11-2.fna.fbcdn.net/v/t1.0-9/118357132_102096594957330_7643131861856996871_n.jpg?_nc_cat=106&_nc_sid=85a577&_nc_ohc=R6lhp2UfybUAX9DN-mq&_nc_ht=scontent.ftpe11-2.fna&oh=87849d515a8cacedd527c19404651a70&oe=5F7176F2";
  const categories = ["牛肉", "雞肉", "豬肉", "其他商品"];
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
          src={defaultSrc}
          categories={categories}
          doc="simplist"
          collection="simplistProducts"
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
        <img
          src={simplistLogo}
          alt="simplistLogo"
          width="100px"
          height="80px"
        />
        <img
          src={simplistLogoWithText}
          alt="simplistLogoWithText"
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
        doc="simplist"
        collection="simplistProducts"
        src={defaultSrc}
      />
    </div>
  );
};

export default Simplist;
