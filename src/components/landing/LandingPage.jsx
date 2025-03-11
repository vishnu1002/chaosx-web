import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardBody, CardHeader } from "@heroui/react";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import InsightsRoundedIcon from "@mui/icons-material/InsightsRounded";
import LandingNavbar from "./LandingNavbar";
import FooterComponent from "../pages/FooterComponent";

const LandingPage = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-neutral-950">
      <LandingNavbar scrollToSection={scrollToSection} />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-indigo-400 font-medium mb-4">
            REVOLUTIONIZE YOUR TESTING
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Chaos Engineering Made Simple
          </h1>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto mb-8">
            Strengthen your system's resilience with our advanced chaos
            engineering platform
          </p>
          <div className="flex justify-center gap-4">
            <Button
              color="primary"
              size="lg"
              onPress={() => navigate("/get-started")}
            >
              Start Free Trial
            </Button>
            <Button
              onPress={() => scrollToSection("core-values")}
              variant="bordered"
              color="primary"
              size="lg"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section
        id="core-values"
        className="min-h-screen flex items-center bg-neutral-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Why Choose ChaosX?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <Card className="bg-neutral-800 border-neutral-700">
              <CardHeader className="pb-0 pt-6 px-6 flex items-start">
                <div className="w-12 h-12 bg-indigo-900/30 rounded-lg flex items-center justify-center">
                  <RocketLaunchRoundedIcon className="text-2xl text-indigo-400" />
                </div>
              </CardHeader>
              <CardBody className="pb-6 pt-4">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Seamless Integration
                </h3>
                <p className="text-neutral-300">
                  Effortlessly integrate chaos experiments into your existing
                  infrastructure with our intuitive platform.
                </p>
              </CardBody>
            </Card>

            {/* Value 2 */}
            <Card className="bg-neutral-800 border-neutral-700">
              <CardHeader className="pb-0 pt-6 px-6 flex items-start">
                <div className="w-12 h-12 bg-indigo-900/30 rounded-lg flex items-center justify-center">
                  <ShieldRoundedIcon className="text-2xl text-indigo-400" />
                </div>
              </CardHeader>
              <CardBody className="pb-6 pt-4">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Enhanced Reliability
                </h3>
                <p className="text-neutral-300">
                  Build resilient systems by identifying and fixing
                  vulnerabilities before they impact your users.
                </p>
              </CardBody>
            </Card>

            {/* Value 3 */}
            <Card className="bg-neutral-800 border-neutral-700">
              <CardHeader className="pb-0 pt-6 px-6 flex items-start">
                <div className="w-12 h-12 bg-indigo-900/30 rounded-lg flex items-center justify-center">
                  <InsightsRoundedIcon className="text-2xl text-indigo-400" />
                </div>
              </CardHeader>
              <CardBody className="pb-6 pt-4">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Data-Driven Insights
                </h3>
                <p className="text-neutral-300">
                  Make informed decisions with comprehensive analytics and
                  detailed experiment reports.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Section (Placeholder) */}
      <section className="min-h-screen flex items-center bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Coming Soon: More Amazing Features
          </h2>
          <p className="text-xl text-neutral-300">
            We're working on something exciting. Stay tuned!
          </p>
        </div>
      </section>

      <FooterComponent />
    </div>
  );
};

export default LandingPage;
