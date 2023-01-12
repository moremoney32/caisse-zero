/**
 * composants qui permet de confirmer l email
 */
import { ImgLogos } from "../components/ImgLogos.js";
import { Footer } from "../components/Footer.js";
import { Button } from "../components/Button.js";
import "../css/confirmationemail.css";

export function ConfirmationEmail() {
  const contenairimg = {
    width: "100%",
    height: "250px",
    objectFit: "cover",
  };
  const contenairlogo = {
    position: "absolute",
    right: "20px",
    top: "55px",
    width: "150px",
    height: "150px",
    objectFit: "cover",
    boxShadow: " 1px 13px 24px -22px rgba(0,0,0,0.9)",
    borderRadius: "50%",
  };
  const footernav = {
    display: "flex",
    flexDirection: "column",
    gap: "50px",
    background: "orange",
    height: "150px",
    padding: "50px",
    transform: "translate3d(0,48px,0)",
  };
  const button = {
    outline: "none",
    textTransform: "capitalize",
    fontSize: "1.3rem",
    padding: "15px 23px",
    margin: "0",
    borderRadius: "15px",
    cursor: "pointer",
    margin: "auto",
    color: "orange",
  };
  return (
    <div className="contenair">
      <ImgLogos contenairimg={contenairimg} contenairlogo={contenairlogo} />
      <div className="confirmemail">
        <p className="confirmemailmessage">
          veuillez consulter votre email, puis entrer le code de confirmation
        </p>
        <input type="text" className="keyemail" />
        <Button buttoninput={button} enter="envoyer" />
      </div>
      <Footer Footernav={footernav} />
    </div>
  );
}
