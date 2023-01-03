/****
 *composant qui gere le footer de cazisse zero
 */
import "../css/acess.css";
import logoCaisse from "../images/logoCaisse.png";
export function Footer() {
  return (
    <div className="Footer">
      <div className="footer">
        <img src={logoCaisse} alt="" className="footerImg" />
        <p className="footerp">© 2020 CAISSE-ZERO. All rights reserved</p>
      </div>
    </div>
  );
}
