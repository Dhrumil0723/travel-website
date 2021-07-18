import React from "react";
import { useState } from "react";
import "./header.style.css";

const LeftSide = () => {
  return (
    <nav className="left-side links">
      <p>
        Destination <i className="far fa-chevron-down"></i>
      </p>
      <p>Blogs</p>
      <p>Events</p>
    </nav>
  );
};

const MidSide = () => {
  return (
    <div className="mid-side logo">
      <p>Travel.</p>
    </div>
  );
};

const RightSide = ({ click, setClick }) => {
  return (
    <div className="right-side search-area">
      <div className="search-box">
        <input type="text" autoComplete="off" placeholder="Search Places" />
        <i className="far fa-search"></i>
      </div>
      <div
        className="select-lang"
        onClick={() => {
          if (click === false) {
            setClick(true);
          } else {
            setClick(false);
          }
        }}
      >
        <div className="icons">
          <i className="far fa-globe"></i>
          <i className="far fa-chevron-down"></i>
        </div>
        {click ? (
          <div className="lang-list">
            <p>English</p>
            <p>English</p>
            <p>English</p>
            <p>English</p>
            <p>English</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

const Header = () => {
  const [click, setClick] = useState(false);

  return (
    <div className="header">
      <LeftSide />
      <MidSide />
      <RightSide click={click} setClick={setClick} />
    </div>
  );
};

export default Header;
