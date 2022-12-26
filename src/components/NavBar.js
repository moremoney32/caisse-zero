/*****
 * component that manages the navbar of the pages
 */

import flecheMain from "../images/flecheMain.svg";
import logoCaisse from "../images/logoCaisse.png";
import { NavLink } from "react-router-dom";

export function NavBar() {
  function changes() {
    let blocContenair = document.querySelector(".blocFlecheMain");
    blocContenair.style.display = "block";
  }
  return (
    <div className="sous-contenairAcess">
      <img src={logoCaisse} alt="" />
      <div className="navlink">
        <NavLink to="/" className="accueil">
          ACCUEIL
        </NavLink>
        <NavLink to="/controls" className="accueil">
          Qui sommes-nous
        </NavLink>
        <NavLink to="/contactCaisse" className="accueil">
          Nous contacter
        </NavLink>
        <NavLink to="/commentaire" className="accueil">
          Ce qu 'ils disent de nous
        </NavLink>
        <NavLink className="accueil">Pricing...</NavLink>
        <img src={flecheMain} alt="" className="flecheMain" onClick={changes} />
        <div className="blocFlecheMain">
          <NavLink to="/Inscription" className="connexion">
            <p className="brown">Se connecter</p>
          </NavLink>
          <NavLink to="/" className="deconnexion">
            <p className="brown">Se deconnecter</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
