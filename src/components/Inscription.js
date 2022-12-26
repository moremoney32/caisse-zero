/*****
 *
 */
import "../css/inscription.css";
import "../css/formulaire.css";
import { Formulaire } from "./Formulaire.js";
import { Label } from "./Label.js";
import close from "../images/close.svg";
import { Button } from "./Button.js";
//import { formulaire } from "./formulaire.js";
export function Inscription() {
  function formulaire() {
    let connect = document.querySelector(".connexionn");

    let bouttonLeft = document.querySelector(".buttonInscriptionLeft");

    bouttonLeft.style.display = "none";
    connect.style.display = "block";
    connect.style.zIndex = 10000;
  }
  //formulaire();
  const button = {
    fontSize: "20px",
    fontWeight: "bold",
    color: "blue",
    padding: "11px",
    paddingLeft: "30px",
    width: "250px",
    height: "50px",
    border: "none",
    backgroundColor: "darkgray",
    borderRadius: "10px",
    cursor: "pointer",
    lineHeight: "50px",
    display: "flex",
    margin: "auto",
    fontFamily: "Trebuchet MS Lucida Sans Unicode Lucida Grande",
  };
  function formulaireLabel() {
    let connect = document.querySelector(".connexionnRight");

    let bouttonRight = document.querySelector(".buttonInscriptionRight");
    bouttonRight.style.display = "none";
    connect.style.display = "block";
  }

  return (
    <div className="inscriptionFormulaire">
      <div className="inscription">
        <div className="inscriptionLeft">
          <span className="buttonInscriptionLeft" onClick={formulaire}>
            Accédez à CAISSE ZERO
          </span>
        </div>
        <div className="inscriptionRight">
          <span
            to="/accesCompteZero"
            className="buttonInscriptionRight"
            onClick={formulaireLabel}
          >
            Identifiez-vous…
          </span>
        </div>
      </div>
      <Formulaire
        email="E-MAIL"
        mdp="Mot de Passe
"
        confirmMdp="Confirmation Mdp
"
        // enter="Compte Utilisateur"
        close={close}
      />
      <Label
        email="E-MAIL"
        mdp="Mot de Passe
"
        close={close}
      />

      {/* <div className="formulaire">
        <form className="connexion" method="post">
          <div className="space">
            <label for="email">email</label>
            <input
              type="text"
              name="keyemail"
              id="email"
              className="keyemail"
            />
          </div>
          <div className="space">
            <label for="keyPassword">mot de passe</label>
            <input
              type="text"
              name="password"
              id="keyPassword"
              className="password"
            />
          </div>
          <div className="envoiFormulaire">
            <span className="envoiFormulaireLeft">Compte Utilisateur</span>
          </div>
        </form>
      </div> */}
    </div>
  );
}
