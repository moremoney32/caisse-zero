/****
 *
 */
import "../css/acess.css";
import { NavBar } from "../components/NavBar.js";
import { Footer } from "../components/Footer.js";
import { Button } from "../components/Button";
import "../css/identificationCaisseZero.css";
import "../css/formulaire.css";
import { NavLink } from "react-router-dom";
export function IdentificationCaisseZero() {
  return (
    <div className="contenairAcess">
      <div className="masque">
        <NavBar />
        <div className="parentButon">
          <div className="envoiCaisseZero">
            <NavLink to="/compteZero" className="envoiFormulaireLeft">
              Créer un nouveau CAISSE ZERO pour votre entreprise
            </NavLink>
          </div>
          <div className="envoiCaisseZero">
            <NavLink
              to="/compteZeroExistant"
              className="envoiFormulaireLeftRight"
            >
              Accéder à Votre CAISSE ZERO existant
            </NavLink>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
