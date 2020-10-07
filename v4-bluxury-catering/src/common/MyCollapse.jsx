import React from "react";
import Emoji from "./Emoji";

const MyCollapse = ({ product, href }) => {
  if (href) {
    var firstChar = href.charAt(0);
    if (firstChar > 0 && firstChar < 9) {
      href = "a" + href;
    }
  }

  // collapse id不能數字開頭

  return (
    <div>
      <a
        id="myCollapse"
        data-toggle="collapse"
        href={"#" + href}
        role="button"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        商品介紹
        <Emoji symbol=" 👇🏼" />
      </a>
      <div className="collapse" id={href}>
        <textarea
          className="pt-2"
          id="desc"
          rows="5"
          cols="33"
          value={product.desc}
          readOnly
        ></textarea>
      </div>
    </div>
  );
};

export default MyCollapse;
