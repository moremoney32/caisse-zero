/****
 *
 */
import { NavLink } from "react-router-dom";
import "../css/formulaire.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function Label({ email, mdp, close }) {
  function closeModal() {
    let connect = document.querySelector(".connexionnRight");
    let comment = document.querySelector(".sous-controlsCommentaire");
    let footer = document.querySelector(".Footer");
    let bouttonLeft = document.querySelector(".buttonInscriptionLeft");
    let bouttonRight = document.querySelector(".buttonInscriptionRight");
    bouttonRight.style.display = "block";
    bouttonLeft.style.display = "block";
    connect.style.display = "none";
    comment.style.opacity = 1;
    footer.style.display = "block";
  }
  const navigate = useNavigate();

  const initValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChanges = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validateForms(formValues));
    setIsSubmit(true);
  };
  const validateForms = (values) => {
    const errors = {};

    let passworD = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,36}$/;
    let rejectEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!values.email) {
      errors.email = "veuillez remplir de l email";
    } else if (!rejectEmail.test(values.email)) {
      errors.email = "mauvais format d email";
    }
    if (!values.password) {
      errors.password = "veuillez mettre un mot de passe";
    } else if (!passworD.test(values.password)) {
      errors.password = "mauvais format de mot de passe";
    }

    return errors;
  };
  return (
    <div className="connexionnRight">
      <img src={close} alt="" className="close" onClick={closeModal} />
      <form className="space" onSubmit={handSubmit}>
        <div className="space">
          <label>{email}</label>
          <input
            type="text"
            name="email"
            id="email"
            className="keyemail"
            value={formValues.email}
            onChange={handleChanges}
          />
        </div>
        <span className="formErrors">{formErrors.email}</span>
        <div className="space">
          <label>{mdp}</label>
          <input
            type="text"
            name="password"
            id="keyPassword"
            className="password"
            value={formValues.password}
            onChange={handleChanges}
          />
          <small>
            8 caractères minimum, 1 majuscule, 1 minuscule,1 chiffre, 1
            caractère spécial
          </small>
        </div>
        <span className="formErrors">{formErrors.password}</span>
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          navigate("/compteZeroNouveau")
        ) : (
          <button className="envoiFormulaire">Entrez</button>
        )}

        <NavLink to="/" className="forgetmdp">
          Mot de Passe Oublié?
        </NavLink>
      </form>
    </div>
  );
}
