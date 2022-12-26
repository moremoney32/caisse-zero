/***
 *
 */
import "../css/acess.css";
import { NavBar } from "../components/NavBar.js";
import { Footer } from "../components/Footer.js";
export function CompteZero() {
  return (
    <div className="contenairAcess">
      <div className="masque">
        <NavBar />
        <Footer />
      </div>
    </div>
  );
}
