/****
 * page qui gere les achats
 */
import { NavBar } from "../components/NavBar.js";
import { Footer } from "../components/Footer.js";
import { HeaderTransactions } from "../components/HeaderTransactions";
import { DetailsCreances } from "../components/DetailsCreances.js";
import { ContainDate } from "../components/ContainDate.js";
import { AchatsTable } from "../components/AchatsTable.js";
import { BlocCash } from "../components/BlocCash.js";
import { ControlsFooterTransactions } from "../components/ControlsFooterTransactions.js";
import "../css/acess.css";
export function Achats() {
  return (
    <div className="contenairAcess">
      <div className="masque">
        <NavBar />
        <div className="dettescreances">
          <HeaderTransactions
            h5="ACHATS

          "
            spantransaction="N° Transactions 83749"
          />
          <ContainDate
            spanDate="Date"
            spanDate1="29/11/2022"
            spanDate2="11"
            spanDate3="4"
            spanDate4="2002"
            spanDateButton="Enregistrer"
          />
          <DetailsCreances
            tilteleft="Détails Achats"
            tilteright="Monnaie: XAF"
          />
          <AchatsTable
            td1="Prod "
            td2=" PU Info"
            td3="Qt Av"
            td4="Qt Achat  "
            td5="PU Réel "
            td6="Total TTC  "
            td7="Qt 
            Apres"
            td8="Observ
            "
          />
          <BlocCash
            Cash1="Cash"
            Cash2=""
            Cash3="Crédit"
            Cash4=""
            Cash5="Total Achat: 150 000"
            Cash6="Tiers "
            Cash7="Client Divers"
            Cash8="Solde Tiers"
            Cash9="0"
            Cash10="Compte Tréso"
            Cash11="Caisse 02 "
            Cash12="Solde Tréso"
            Cash13="450 000"
          />
          <ControlsFooterTransactions
            span1="Contrôle équilibre"
            span2="0"
            span3="Attaches:"
            span4="Annulation"
            span5="Date Annul."
            span6=" 30/11/2022"
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}