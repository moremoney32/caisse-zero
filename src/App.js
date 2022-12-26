import { Home } from "./pages/Home";
import React from "react";
import { AcessApplication } from "./pages/AcessApplication";
import { IdentificationCaisseZero } from "./pages/IdentificationCaisseZero";
import { CompteZero } from "./pages/CompteZero";
import { BrowserRouter, Routes, Route, link } from "react-router-dom";
import { ControlsCard } from "./components/ControlsCards";
import { ContactCaisseZero } from "./components/ContactCaisseZero";
import { Commentaire } from "./components/Commentaires";
import { Inscription } from "./components/Inscription";

export function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ContactCaisse" element={<ContactCaisseZero />} />
          <Route path="/commentaire" element={<Commentaire />} />
          <Route path="/Inscription" element={<Inscription />} />
          <Route path="/AcessApplication" element={<AcessApplication />} />
          <Route
            path="/compteZeroNouveau"
            element={<IdentificationCaisseZero />}
          />
          <Route path="/compteZero" element={<CompteZero />} />
          <Route path="/compteZeroExistant" element={<CompteZero />} />
          <Route path="/controls" element={<ControlsCard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
