/****
 * page qui permet d acceder directement a son entreprise deja creer
 */

import "../css/acess.css";
import "../css/compteZero.css";
import "../css/compteZeroExistant.css";
import flecheMain from "../images/flecheMain.svg";
import { NavBar } from "../components/NavBar.js";
import { Footer } from "../components/Footer.js";
import { NavLink } from "react-router-dom";
export function CompteZeroExistant() {
  return (
    <div className="contenairAcess">
      <div className="masque">
        <NavBar />
        <div className="compteZeroExistant">
          <div className="compteZeroExistantstructure">
            <span className="titlecompteZeroExistantstructure">
              Sélectionnez parmi vos applications
            </span>
            <div className="logosImg">
              <span className="nameOfstructurebutton">
                <img
                  src={flecheMain}
                  alt=""
                  className="nameOfstructurebuttonimg"
                />
              </span>

              <div className="containerEntreprise">
                <span>Entreprise Delta</span>
                <span>Entreprise Gama</span>
                <span>Entreprise Omega</span>
              </div>
            </div>
          </div>
          <NavLink to="/handleuserr">
            <button className="buttoncompteZeroExistant">Accedez</button>
          </NavLink>
          <button className="buttoncompteZeroExistant">
            Ajouter un autre utilisateur
          </button>
        </div>
        <Footer />
      </div>
    </div>
  );
}
