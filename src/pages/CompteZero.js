/***
 *page qui gere l installation du compte de l entreprise avec son logos
 */
import "../css/acess.css";
import "../css/compteZero.css";
import { NavBar } from "../components/NavBar.js";
import { Footer } from "../components/Footer.js";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
export function CompteZero() {
  const [file, setFile] = useState();

  const handleChanges = (e) => {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <div className="contenairAcess">
      <div className="masque">
        <NavBar />
        <div className="createcompteZero">
          <div className="createcompteZeroLogos">
            <label>telecharger le logo de votre Entreprise</label>
            <input type="file" className="fileinput" onChange={handleChanges} />
          </div>
          <img src={file} alt="" className="file" />
          <div className="nameOfstructure">
            <span>Nom de l’entreprise</span>
            <input className="nameOfstructurebutton" />
          </div>
          <div className="containDateLine">
            <span className="dateLine">Date limite utilisation 31/12/2022</span>
            <NavLink to="/handleuser">
              <button className="buttonlogos">validez creation</button>
            </NavLink>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
