/****
 *
 */
import { NavLink } from "react-router-dom";
import "../css/formulaire.css";
import { Button } from "./Button";

export function Label({ email, mdp, enter, close }) {
  function closeModal() {
    let connect = document.querySelector(".connexionnRight");

    let bouttonRight = document.querySelector(".buttonInscriptionRight");
    bouttonRight.style.display = "block";
    connect.style.display = "none";
  }
  return (
    <div className="connexionnRight">
      <img src={close} alt="" className="close" onClick={closeModal} />
      <form className="space" method="post">
        <div className="space">
          <label for="email">{email}</label>
          <input type="text" name="keyemail" id="email" className="keyemail" />
        </div>
        <div className="space">
          <label for="keyPassword">{mdp}</label>
          <input
            type="text"
            name="password"
            id="keyPassword"
            className="password"
          />
        </div>
        <Button enter="Entrez" />

        {/* <div className="envoiFormulaire">
          <NavLink to="/CaisseZeroExistant" className="envoiFormulaireLeft">
            {enter}
          </NavLink>
        </div> */}
        <NavLink to="/" className="forgetmdp">
          Mot de Passe Oublié?
        </NavLink>
      </form>
    </div>
  );
}
