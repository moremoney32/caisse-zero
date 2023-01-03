/***
 * page qui permet d ajouter un utilisateur par l administarteur
 */
import "../css/acess.css";
import "../css/handleuser.css";
import "../css/compteZero.css";
import { NavBar } from "../components/NavBar.js";
import { Footer } from "../components/Footer.js";
import { EmailButton } from "../components/EmailButton";
import { NavLink } from "react-router-dom";
import "../css/home.css";
export function HandleUser() {
  return (
    <div className="contenairAcess">
      <div className="masque">
        <NavBar />
        <div className="handleuser">
          <div className="sous-handleuser">
            <h1 className="sous-handleuserh1">AJOUTER UN AUTRE UTILISATEUR</h1>
            <EmailButton email="toto@gmail.com" entreprise="ENTREPRISE DELTA" />
          </div>
          <div className="invitationuser">
            <span className="invitationuserspan">
              Mail de l’utilisateur à inviter
            </span>
            <button className="invitationuserbutton">Lambda@gmail.com</button>
          </div>
          <button className="sendinvitationuser">Inviter l’utilisateur</button>
          <h2>Détails des autorisations données</h2>
          <table>
            <thead>
              <tr>
                <th>CZ</th>
                <th>Mail</th>
                <th>Admin</th>
                <th>Compta</th>
                <th>Stock </th>
                <th>Com</th>
                <th>Paie</th>
                <th>Immos</th>
                <th>Budget</th>
                <th>Rap</th>
              </tr>
              <tr>
                <td>DELTA</td>
                <td className="tdemail">toto@gmail.com</td>
                <td>Oui/No n</td>
                <td>Non/Visual/M odif</td>
                <td>Non/Vi sual/M odif</td>
                <td>Non/Vi sual/M odif</td>
                <td>Non/Vi sual/M odif</td>
                <td>Non/Vi sual/M odif</td>
                <td>Non/Vi sual/M odif</td>
                <td>Non/Vi sual/M odif</td>
              </tr>
              <tr>
                <td>DELTA</td>
                <td className="tdemail">Lambda@gmail.com</td>
                <td>Oui/No n</td>
                <td>Non/Vi sual/M odif</td>
                <td>Non/Vi sual/M odif</td>
                <td>Non/Vi sual/M odif</td>
                <td>Non/Vi sual/M odif</td>
                <td>Non/Vi sual/M odif</td>
                <td>Non/Vi sual/M odif</td>
                <td>Non/Vi sual/M odif</td>
              </tr>
            </thead>
          </table>
          <NavLink to="/MenuAplication" className="buttontable">
            suivant
          </NavLink>
        </div>
        <Footer />
      </div>
    </div>
  );
}
