import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/dashboard";
import { Auth } from "./pages/auth";
import { FinancialRecordsProvider } from "./contexts/financial-record-context";
import ProtectedRoute from "./components/ProtectedRoute";
import { Features } from "./pages/headerFields/features";
import { About } from "./pages/headerFields/about";
import { Contact } from "./pages/headerFields/contact";
import { DashContact } from "./pages/dashHeaderFields/dashContact";
import { DashFeatures } from "./pages/dashHeaderFields/dashFeatures";
import { DashAbout } from "./pages/dashHeaderFields/dashAbout";

function App() {

  return (
    <Router>
      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/features" element={<Features />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/DashContact" element={<DashContact />} />
          <Route path="/DashFeatures" element={<DashFeatures />} />
          <Route path="/DashAbout" element={<DashAbout />} />
          <Route element={<ProtectedRoute />}>
            <Route
              path="/dashboard"
              element={
                <FinancialRecordsProvider>
                  <Dashboard />
                </FinancialRecordsProvider>
              }
            />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
