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
        >
          <Tab key="dashboard" title="Dashboard" />
          <Tab key="tests" title="Tests" />
          <Tab key="reports" title="Reports" />
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
              name="User"
              size="sm"
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
