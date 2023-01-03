/***
 * pages de remboursements des dettes
 */
import "../css/dettesCreances.css";
import { NavBar } from "../components/NavBar.js";
import { Footer } from "../components/Footer.js";
import { HeaderTransactions } from "../components/HeaderTransactions";
import { DetailsCreances } from "../components/DetailsCreances.js";
import { FacturesTables } from "../components/FacturesTables.js";
import { Table } from "../components/Table.js";
import { ControlsFooterTransactions } from "../components/ControlsFooterTransactions.js";
import { ContainDate } from "../components/ContainDate.js";
export function RembDettes() {
  return (
    <div className="contenairAcess">
      <div className="masque">
        <NavBar />
        <div className="dettescreances">
          <HeaderTransactions
            h5="REMB. DES DETTES & CREANCES
            "
            spantransaction="N° Transactions 84621"
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
            tilteleft="Détails Créances ou Dettes à créer"
            tilteright="Monnaie: XAF"
          />
          <FacturesTables
            td1="Tiers "
            td2="Client XXX
            "
            td3="Solde Tier"
            td4="415 000"
            td5="Libellé"
            td6="Remb. Facture AAA
            "
            td7="Remb créances dues par Tiers"
            td8="150.000"
            td9="Remb. Notre Dette au Tiers"
            td10="0"
          />
          <DetailsCreances
            tilteleft="Les comptes (charges, produits, capital, biens, etc.)
            "
            tilteright="Total: 150 000"
          />
          <Table
            td1="Num Comptes Tréso"
            td2="Montant"
            td3="Solde Compte"
            td4="Banque 01 "
            td5="100 000 "
            td6="528 000 "
            td7="Caisse 03"
            td8="50 000"
            td9="24 000"
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
