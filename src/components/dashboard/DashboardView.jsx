import { useState, useRef } from "react";
import { Tabs, Tab } from "@heroui/react";
import CloudRoundedIcon from "@mui/icons-material/CloudRounded";
import MiscellaneousServicesRoundedIcon from "@mui/icons-material/MiscellaneousServicesRounded";
import PlatformSelection from "./1-platform-selection/PlatformSelection";
import ServiceSelection from "./2-service-selection/ServiceSelection";
import ScenarioSelection from "./3-scenario-selection/ScenarioSelection";

export default function DashboardView() {
  const [selectedPlatformTab, setSelectedPlatformTab] =
    useState("cloud-platforms");
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedScenario, setSelectedScenario] = useState(null);

  // References for scrolling
  const servicesSectionRef = useRef(null);
  const scenariosSectionRef = useRef(null);

  // Handle platform tab change
  const handlePlatformTabChange = (key) => {
    setSelectedPlatformTab(key);
    // Clear selections when switching tabs
    setSelectedPlatform(null);
    setSelectedService(null);
    setSelectedScenario(null);
  };

  // Handle platform selection
  const handlePlatformSelect = (platform) => {
    setSelectedPlatform(platform);
    setSelectedService(null);
    setSelectedScenario(null);
    if (platform) {
      setTimeout(() => {
        servicesSectionRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  // Handle service selection
  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setSelectedScenario(null);
    if (service) {
      setTimeout(() => {
        scenariosSectionRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <div className="mt-5">
      {/* Platform Selection Section */}
      <div className="flex flex-col w-full p-4 border border-neutral-800">
        {/* Select a Platform Header */}
        <div className="flex flex-row items-center gap-3">
          <CloudRoundedIcon className="text-[#C8FF88]" />
          <p className="text-xl font-bold">Select your Platform</p>
        </div>
        <p className="text-sm text-neutral-400 mt-3">
          Choose your preferred cloud provider or on-premise infrastructure to
          begin configuring your environment. Each platform offers unique
          services and capabilities.
        </p>

        {/* Platform Type Tabs */}
        <Tabs
          aria-label="Platform Selection Tabs"
          h
          selectedKey={selectedPlatformTab}
          onSelectionChange={handlePlatformTabChange}
          className="mt-4"
          classNames={{
            cursor: "w-full bg-[transparent]",
            tabContent: "group-data-[selected=true]:text-[#C8FF88]",
          }}
          variant="underlined"
        >
          <Tab key="cloud-platforms" title="Cloud Platforms" />
          <Tab key="on-premise" title="On-Premise" />
        </Tabs>

        {/* Platform Cards */}
        <div className="mt-4">
          <PlatformSelection
            selectedTab={selectedPlatformTab}
            selectedPlatform={selectedPlatform}
            onPlatformSelect={handlePlatformSelect}
          />
        </div>
      </div>

      {/* Service Selection - Only shown when a cloud platform is selected */}
      {selectedPlatform && selectedPlatformTab === "cloud-platforms" && (
        <div
          ref={servicesSectionRef}
          className="flex flex-col w-full mt-4 p-4 border border-neutral-800"
        >
          <ServiceSelection
            platform={selectedPlatform}
            selectedService={selectedService}
            onServiceSelect={handleServiceSelect}
          />
        </div>
      )}

      {/* Scenario Selection - Only shown when a service is selected */}
      {selectedService && selectedPlatformTab === "cloud-platforms" && (
        <div
          ref={scenariosSectionRef}
          className="flex flex-col w-full mt-4 p-4 border border-neutral-800"
        >
          <ScenarioSelection
            platform={selectedPlatform}
            selectedService={selectedService}
            selectedScenario={selectedScenario}
            onScenarioSelect={setSelectedScenario}
          />
        </div>
      )}
    </div>
  );
}
