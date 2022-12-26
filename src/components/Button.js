/*****
 *
 */
import "../css/inscription.css";
import { NavLink } from "react-router-dom";
export function Button({ enter }) {
  //   function formulaire() {
  //     let connect = document.querySelector(".connexionn");

  //     let bouttonLeft = document.querySelector(".buttonInscriptionLeft");
  //     bouttonLeft.style.display = "none";
  //     connect.style.display = "block";
  //   }
  return (
    <div className="envoiFormulaire">
      <NavLink to="/compteZeroNouveau" className="envoiFormulaireLeft">
        {enter}
      </NavLink>
    </div>
  );
}
