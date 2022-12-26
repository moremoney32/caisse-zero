/****
 * component that manages the home page of the zero cash site */

import caisseimage from "../images/caisseimage.png";
import "../css/home.css";
import { NavLink } from "react-router-dom";

import React from "react";

export function Home() {
  return (
    <div className="contenair">
      <img src={caisseimage} alt="" />
      <NavLink to="/AcessApplication" className="button">
        suivant
      </NavLink>
    </div>
  );
}
