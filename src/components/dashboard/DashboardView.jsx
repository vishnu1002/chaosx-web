import { useState, useRef } from "react";
import { Tabs, Tab } from "@heroui/react";
import CloudRoundedIcon from "@mui/icons-material/CloudRounded";
import PlatformSelection from "./1-platform-selection/PlatformSelection";
import ServiceSelection from "./2-service-selection/ServiceSelection";

export default function DashboardView() {
  const [selectedPlatformTab, setSelectedPlatformTab] =
    useState("cloud-platforms");
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  // Reference for service section to scroll to
  const servicesSectionRef = useRef(null);

  // Handle platform tab change
  const handlePlatformTabChange = (key) => {
    setSelectedPlatformTab(key);
    // Clear platform selection when switching tabs
    setSelectedPlatform(null);
    // Clear service selection when switching tabs
    setSelectedService(null);
  };

  // Handle platform selection
  const handlePlatformSelect = (platform) => {
    setSelectedPlatform(platform);
    if (platform) {
      setTimeout(() => {
        servicesSectionRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <div className="mt-5">
      {/* Platform Selection Section */}
      <div className="flex flex-col w-full p-4 border border-red-800">
        {/* Select a Platform Header */}
        <div className="flex flex-row items-center gap-3">
          <CloudRoundedIcon className="text-[#C8FF88]" />
          <p className="text-xl font-bold">Select your Platform</p>
        </div>

        {/* Platform Type Tabs */}
        <Tabs
          aria-label="Platform Selection Tabs"
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
          className="flex flex-col w-full mt-4 p-4 border border-red-800"
        >
          <ServiceSelection
            platform={selectedPlatform}
            selectedService={selectedService}
            onServiceSelect={setSelectedService}
          />
        </div>
      )}
    </div>
  );
}
