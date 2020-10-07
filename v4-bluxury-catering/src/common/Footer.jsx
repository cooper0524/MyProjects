import React from "react";

function Footer() {
  return (
    <footer id="footer" className="text-black-50  text-center">
      <div id="socialIcons" style={{ display: "flex", alignItems: "center" }}>
        <a
          href="https://www.facebook.com/Memorydessert2017/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i id="social-fb" className="fa fa-facebook-square fa-3x social"></i>
        </a>
        <a
          href="https://www.instagram.com/memory_dessert/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i id="social-ins" className="fa fa-instagram fa-3x social"></i>
        </a>
        <div>
          <a
            href="https://lin.ee/Quz5dqu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              id="social-line"
              src="https://scdn.line-apps.com/n/line_add_friends/btn/zh-Hant.png"
              alt="line-add-friends"
              height="36"
            />
          </a>
        </div>
      </div>
      <p className="text-center" id="copyRight" style={{ fontSize: "10px" }}>
        2020 Cooper Yeh &copy; BLUXURY CATERING
      </p>
    </footer>
  );
}

export default Footer;
