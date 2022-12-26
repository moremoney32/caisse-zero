/****
 *
 */
import "../css/formulaire.css";
//import { NavLink } from "react-router-dom";
import { Button } from "./Button";

export function Formulaire({ email, mdp, confirmMdp, enter, close }) {
  function closeModal() {
    let connect = document.querySelector(".connexionn");

    let bouttonLeft = document.querySelector(".buttonInscriptionLeft");
    bouttonLeft.style.display = "block";
    connect.style.display = "none";
  }
  return (
    <div className="connexionn">
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
        <div className="space">
          <label for="confirmkeyPassword">{confirmMdp}</label>
          <input
            type="text"
            name="confirmpassword"
            id="confirmkeyPassword"
            className="confirmpassword"
          />
        </div>
        <Button enter="Compte Utilisateur" />
      </form>
    </div>
  );
}
