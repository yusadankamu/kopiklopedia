import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { OriginsPage } from "./pages/OriginsPage";
import { ConsumptionPage } from "./pages/ConsumptionPage";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="origins" element={<OriginsPage />} />
          <Route path="consumption" element={<ConsumptionPage />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
