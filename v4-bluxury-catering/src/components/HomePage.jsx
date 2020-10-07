import React from "react";

import img1 from "../assets/1.png";
import img5 from "../assets/5.png";
import Slide from "../common/Slide";

const HomePage = () => {
  return (
    <div>
      <Slide src={[img1, img5]} />
    </div>
  );
};

export default HomePage;
