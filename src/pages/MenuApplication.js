/***
 * page qui gere le menu de l application
 */
import { NavBar } from "../components/NavBar.js";
import { Footer } from "../components/Footer.js";
import { EmailButton } from "../components/EmailButton";
import "../css/handleuser.css";
import "../css/acess.css";
import "../css/menu.css";
import achatsventes from "../images/achatsventes.svg";
import transaction from "../images/transaction.svg";
import bagmoney from "../images/bagmoney.svg";
import dettes from "../images/dettes.jpg";
import gestionimmobilier from "../images/gestionimmobilier.svg";
import gestionbudget from "../images/gestionbudget.svg";
import tableaubord from "../images/tableaubord.svg";
import { NavLink } from "react-router-dom";
export function MenuApplication() {
  return (
    <div className="contenairAcess">
      <div className="masque">
        <NavBar />
        <div className="menuPrincipalUser">
          <div className="sous-menuPrincipalUser">
            <h4>MENU PRINCIPAL</h4>
            <EmailButton email="toto@gmail.com" entreprise="ENTREPRISE DELTA" />
          </div>
          <div className="containmenuPrincipalUser">
            <div className="menuPrincipalUsericon">
              <img src={achatsventes} alt="" className="Usericonmenu" />
              <span className="Usericonmenuspan">ACHATS/VENTES</span>
            </div>
            <div className="menuPrincipalUsericon">
              <img src={transaction} alt="" className="Usericonmenu" />
              <span className="Usericonmenuspan">TRANSACT</span>
            </div>
            <div className="menuPrincipalUsericon">
              <NavLink to="/DettesCreances">
                <img src={dettes} alt="" className="Usericonmenu" />
              </NavLink>
              <span className="Usericonmenuspan">DETTES</span>
            </div>
            <div className="menuPrincipalUsericon">
              <img src={bagmoney} alt="" className="Usericonmenu" />
              <span className="Usericonmenuspan">TRANSFERT CPT CPT</span>
            </div>
            <div className="menuPrincipalUsericon">
              <NavLink to="/REMBDETTES">
                <img src={dettes} alt="" className="Usericonmenu" />
              </NavLink>
              <span className="Usericonmenuspan">REMB.DETTES</span>
            </div>
            <div className="menuPrincipalUsericon">
              <img
                src={gestionimmobilier}
                alt=""
                className="Usericonmenugestion"
              />
              <span className="Usericonmenuspangestion">GESTION/IMMO</span>
            </div>
            <div className="menuPrincipalUsericon">
              <img src={gestionbudget} alt="" className="Usericonmenugestion" />
              <span className="Usericonmenuspangestion">GESTION/BUDGET</span>
            </div>
            <div className="menuPrincipalUsericon">
              <img src={bagmoney} alt="" className="Usericonmenugestion" />
              <span className="Usericonmenuspangestion">GESTION/FACTURES</span>
            </div>
            <div className="menuPrincipalUsericon">
              <img src={bagmoney} alt="" className="Usericonmenugestion" />
              <span className="Usericonmenuspangestion">GESTION/PAIE</span>
            </div>
            <div className="menuPrincipalUsericon">
              <img src={dettes} alt="" className="Usericonmenureports" />
              <span className="Usericonmenuspangestion">REPORTS</span>
            </div>
            <div className="menuPrincipalUsericon">
              <img src={tableaubord} alt="" className="Usericonmenutabord" />
              <span className="Usericonmenuspangestion">TAB BORD</span>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}