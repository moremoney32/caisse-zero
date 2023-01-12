/*****
 *composant bouton
 */
import "../css/inscription.css";
import { NavLink } from "react-router-dom";
export function Button({ buttoninput, enter }) {
  return (
    <div>
      <NavLink to="/compteZeroNouveau">
        <button style={buttoninput}>{enter}</button>
      </NavLink>
    </div>
  );
}
