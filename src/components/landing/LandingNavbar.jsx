import React from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarContent, Button } from "@heroui/react";

const LandingNavbar = ({ scrollToSection }) => {
  const navigate = useNavigate();

  return (
    <Navbar isBordered position="static" height="80px">
      <NavbarBrand>
        <p
          onPress={() => navigate("/")}
          className="font-bold text-inherit text-2xl text-chaosMint cursor-pointer"
        >
          ChaosX
        </p>
      </NavbarBrand>

      <NavbarContent className="hidden md:flex gap-8 justify-center">
        <Button
          variant="light"
          radius="full"
          onPress={() => scrollToSection("core-values")}
          className="text-neutral-300"
        >
          About Us
        </Button>
        <Button
          variant="light"
          radius="full"
          className="text-neutral-300"
          onPress={() => navigate("/pricing")}
        >
          Pricing
        </Button>
        <Button
          variant="light"
          radius="full"
          className="text-neutral-300"
          onPress={() => navigate("/dashboard")}
        >
          Dashboard
        </Button>
      </NavbarContent>

      <NavbarContent justify="end">
        <Button
          color="primary"
          variant="solid"
          radius="full"
          onPress={() => navigate("/get-started")}
        >
          Get Started
        </Button>
        <Button
          variant="bordered"
          color="primary"
          radius="full"
          onPress={() => navigate("/dashboard")}
        >
          Login
        </Button>
      </NavbarContent>
    </Navbar>
  );
};

export default LandingNavbar;
