import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  Tab,
  Tabs,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@heroui/react";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import ScienceRoundedIcon from "@mui/icons-material/ScienceRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";

export default function NavbarComponent({ activeView, onViewChange }) {
  return (
    <Navbar isBordered position="static" height="80px">
      <NavbarBrand>
        <p className="font-bold text-inherit">ChaosX</p>
      </NavbarBrand>

      <NavbarContent className="flex-grow justify-center">
        <Tabs
          selectedKey={activeView}
          onSelectionChange={onViewChange}
          aria-label="Navigation"
          radius="full"
          color="primary"
          classNames={{
            tabContent: "group-data-[selected=true]:text-[#000000]",
          }}
        >
          <Tab
            key="dashboard"
            title={
              <div className="flex items-center gap-2">
                <DashboardRoundedIcon className="w-5 h-5" />
                <span>Dashboard</span>
              </div>
            }
          />
          <Tab
            key="tests"
            title={
              <div className="flex items-center gap-2">
                <ScienceRoundedIcon className="w-5 h-5" />
                <span>Tests</span>
              </div>
            }
          />
          <Tab
            key="reports"
            title={
              <div className="flex items-center gap-2">
                <BarChartRoundedIcon className="w-5 h-5" />
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
              color="primary"
              name="User"
              size="md"
              src="https://i.pravatar.cc/150"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">user@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">Settings</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
