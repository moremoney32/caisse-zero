/*****
 *composant qui s occupe de l inscription
 */
import "../css/inscription.css";
import "../css/formulaire.css";
import { Formulaire } from "./Formulaire.js";
import { Label } from "./Label.js";
import close from "../images/close.svg";
export function Inscription() {
  function formulaire() {
    let comment = document.querySelector(".sous-controlsCommentaire");
    let connect = document.querySelector(".connexionn");
    let bouttonLeft = document.querySelector(".buttonInscriptionLeft");
    let footer = document.querySelector(".Footer");
    let bouttonRight = document.querySelector(".buttonInscriptionRight");
    comment.style.opacity = 0.1;
    footer.style.display = "none";
    bouttonRight.style.display = "none";
    bouttonLeft.style.display = "none";
    connect.style.display = "block";
    connect.style.zIndex = 10000;
  }

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
    let comment = document.querySelector(".sous-controlsCommentaire");
    let bouttonLeft = document.querySelector(".buttonInscriptionLeft");
    let footer = document.querySelector(".Footer");
    let connect = document.querySelector(".connexionnRight");

    let bouttonRight = document.querySelector(".buttonInscriptionRight");
    bouttonRight.style.display = "none";
    bouttonLeft.style.display = "none";
    connect.style.display = "block";
    comment.style.opacity = 0.1;
    footer.style.display = "none";
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
        close={close}
      />
      <Label
        email="E-MAIL"
        mdp="Mot de Passe
"
        close={close}
      />
    </div>
  );
}
