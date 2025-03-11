import React from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarContent, Button } from "@heroui/react";

const LandingNavbar = ({ scrollToSection }) => {
  const navigate = useNavigate();

  return (
    <Navbar
      isBordered
      className="fixed bg-neutral-900/80 backdrop-blur-md border-neutral-800"
    >
      <NavbarBrand>
        <Button
          onPress={() => navigate("/")}
          className="font-bold text-inherit text-2xl text-indigo-400 min-w-0 p-0"
        >
          ChaosX
        </Button>
      </NavbarBrand>

      <NavbarContent className="hidden md:flex gap-8 justify-center">
        <Button
          variant="light"
          onPress={() => scrollToSection("core-values")}
          className="text-neutral-300"
        >
          About Us
        </Button>
        <Button
          variant="light"
          className="text-neutral-300"
          onPress={() => navigate("/pricing")}
        >
          Pricing
        </Button>
        <Button
          variant="light"
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
          onPress={() => navigate("/get-started")}
        >
          Get Started
        </Button>
        <Button
          variant="bordered"
          color="primary"
          onPress={() => navigate("/dashboard")}
        >
          Login
        </Button>
      </NavbarContent>
    </Navbar>
  );
};

export default LandingNavbar;
