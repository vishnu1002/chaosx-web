import NavbarComponent from "./components/navbar/NavbarComponent";
import FooterComponent from "./components/footer/FooterComponent";
import DashboardView from "./components/dashboard/DashboardView";
import TestsView from "./components/tests-nav/TestsView";
import ReportsView from "./components/reports-nav/ReportsView";
import { useState } from "react";

export default function App() {
  const [activeView, setActiveView] = useState("dashboard");

  const renderView = () => {
    switch (activeView) {
      case "dashboard":
        return <DashboardView />;
      case "tests":
        return <TestsView />;
      case "reports":
        return <ReportsView />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col">
      <NavbarComponent activeView={activeView} onViewChange={setActiveView} />
      <main className="container mx-auto px-4 flex-grow mb-32">
        {renderView()}
      </main>
      <FooterComponent />
    </div>
  );
}
