import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Tabs,
  Tab,
} from "@heroui/react";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import ScienceRoundedIcon from "@mui/icons-material/ScienceRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import DashboardTab from "./1-dashboard-nav/DashboardTab";
import TestsTab from "./2-tests-nav/TestsTab";
import ReportsTab from "./3-reports-nav/ReportsTab";

export default function NavbarComp() {
  const [selectedTab, setSelectedTab] = useState("dashboard");

  return (
    <>
      <Navbar>
        <NavbarBrand>
          <p className="font-bold text-inherit">ChaosX</p>
        </NavbarBrand>

        <NavbarContent className="flex-grow justify-center">
          <Tabs
            aria-label="Main Tab Panels"
            selectedKey={selectedTab}
            onSelectionChange={setSelectedTab}
            radius="full"
          >
            <Tab
              key="dashboard"
              title={
                <div className="flex items-center space-x-2">
                  <DashboardRoundedIcon />
                  <span>Dashboard</span>
                </div>
              }
            />
            <Tab
              key="tests"
              title={
                <div className="flex items-center space-x-2">
                  <ScienceRoundedIcon />
                  <span>Tests</span>
                </div>
              }
            />
            <Tab
              key="reports"
              title={
                <div className="flex items-center space-x-2">
                  <BarChartRoundedIcon />
                  <span>Reports</span>
                </div>
              }
            />
          </Tabs>
        </NavbarContent>

        <NavbarContent as="div" justify="end">
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="default"
                name="Jason Hughes"
                size="sm"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">zoey@example.com</p>
              </DropdownItem>
              <DropdownItem key="settings">My Settings</DropdownItem>
              <DropdownItem key="team_settings">Team Settings</DropdownItem>
              <DropdownItem key="analytics">Analytics</DropdownItem>
              <DropdownItem key="system">System</DropdownItem>
              <DropdownItem key="configurations">Configurations</DropdownItem>
              <DropdownItem key="help_and_feedback">
                Help & Feedback
              </DropdownItem>
              <DropdownItem key="logout" color="danger">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      </Navbar>

      {/* Content area below navbar */}
      <main className="container mx-auto px-4 mt-4">
        <TabContent selectedTab={selectedTab} />
      </main>
    </>
  );
}

// Create a new component for the tab content
function TabContent({ selectedTab }) {
  switch (selectedTab) {
    case "dashboard":
      return <DashboardTab />;
    case "tests":
      return <TestsTab />;
    case "reports":
      return <ReportsTab />;
    default:
      return null;
  }
}
