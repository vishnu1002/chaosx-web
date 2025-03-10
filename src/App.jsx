import NavbarComponent from "./components/navbar/NavbarComponent";
import FooterComponent from "./components/footer/FooterComponent";
import DashboardView from "./components/dashboard/DashboardView";
import TestsView from "./components/tests-nav/TestsView";
import ReportsView from "./components/reports-nav/ReportsView";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-neutral-950 flex flex-col">
        <NavbarComponent />
        <main className="container mx-auto px-4 flex-grow mb-32">
          <Routes>
            <Route path="/dashboard" element={<DashboardView />} />
            <Route path="/tests" element={<TestsView />} />
            <Route path="/reports" element={<ReportsView />} />
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </main>
        <FooterComponent />
      </div>
    </BrowserRouter>
  );
}
