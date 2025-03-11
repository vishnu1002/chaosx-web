import NavbarComponent from "./components/navbar/NavbarComponent";
import FooterComponent from "./components/pages/FooterComponent";
import DashboardView from "./components/dashboard/DashboardView";
import TestsView from "./components/tests-nav/TestsView";
import ReportsView from "./components/reports-nav/ReportsView";
import NotFoundPage from "./components/utils/404Page";
import LandingPage from "./components/landing/LandingPage";
import UnderDevelopment from "./components/utils/UnderDevelopment";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// App Layout for dashboard routes
const DashboardLayout = ({ children }) => (
  <>
    <NavbarComponent />
    <main className="container mx-auto px-4 flex-grow mb-32">{children}</main>
    <FooterComponent />
  </>
);

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-neutral-950 flex flex-col">
        <Routes>
          {/* Landing and Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/service" element={<UnderDevelopment />} />
          <Route path="/pricing" element={<UnderDevelopment />} />
          <Route path="/resource" element={<UnderDevelopment />} />
          <Route path="/get-started" element={<UnderDevelopment />} />
          <Route path="/login" element={<UnderDevelopment />} />

          {/* Dashboard Routes with NavbarComponent */}
          <Route
            path="/dashboard"
            element={
              <DashboardLayout>
                <DashboardView />
              </DashboardLayout>
            }
          />
          <Route
            path="/tests"
            element={
              <DashboardLayout>
                <TestsView />
              </DashboardLayout>
            }
          />
          <Route
            path="/reports"
            element={
              <DashboardLayout>
                <ReportsView />
              </DashboardLayout>
            }
          />

          {/* 404 Route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
