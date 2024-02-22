import React, { Component } from "react";
import classNames from "classnames";
import "../style/aboutMenu.css";

const AboutMenuItem = ({ title, active, onClick }) => {
  return (
    <div className={classNames("item", { active })} onClick={onClick}>
      <h2 className="title">{title}</h2>
    </div>
  );
};

export default AboutMenuItem;
