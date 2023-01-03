/****
 *composant qui s occupe du formulaire d inscription
 */
import "../css/formulaire.css";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

export function Formulaire({ email, mdp, confirmMdp, enter, close }) {
  const navigate = useNavigate();
  function closeModal() {
    let connect = document.querySelector(".connexionn");

    let bouttonLeft = document.querySelector(".buttonInscriptionLeft");
    bouttonLeft.style.display = "block";
    connect.style.display = "none";
  }
  const initValues = { email: "", password: "", confirmpassword: "" };
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
    if (!values.confirmpassword) {
      errors.confirmpassword = "veuillez confirmer le mot de passe";
    } else if (values.password !== values.confirmpassword) {
      errors.confirmpassword = "veuillez reecrire le meme mot de passe";
    }

    return errors;
  };

  return (
    <div className="connexionn">
      <img src={close} alt="" className="close" onClick={closeModal} />
      <form className="space" onSubmit={handSubmit}>
        <div className="space">
          <label for="email">{email}</label>
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
          <label for="keyPassword">{mdp}</label>
          <input
            type="password"
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
        <div className="space">
          <label for="confirmkeyPassword">{confirmMdp}</label>
          <input
            type="password"
            name="confirmpassword"
            id="confirmkeyPassword"
            className="confirmpassword"
            value={formValues.confirmpassword}
            onChange={handleChanges}
          />
        </div>
        <span className="formErrors">{formErrors.confirmpassword}</span>
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          navigate("/compteZeroNouveau")
        ) : (
          <button className="envoiFormulaire">Compte Utilisateur</button>
        )}
      </form>
    </div>
  );
}
