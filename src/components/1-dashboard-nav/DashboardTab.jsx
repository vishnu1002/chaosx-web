import { useState } from "react";
import { Tabs, Tab } from "@heroui/react";
import CloudRoundedIcon from "@mui/icons-material/CloudRounded";
import OnPremiseCards from "./on-premise/OnPremiseCards";
import CloudPlatformCards from "./cloud-platforms/CloudPlatformCards";

export default function DashboardTab() {
  const [selectedNestedTab, setSelectedNestedTab] = useState("overview");

  const renderNestedContent = () => {
    switch (selectedNestedTab) {
      case "cloud-platforms":
        return (
          <div className="w-full flex justify-center">
            <CloudPlatformCards />
          </div>
        );
      case "on-premise":
        return (
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <OnPremiseCards />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col w-full mt-20 bg-neutral-800">
      {/* Select a Platform */}
      <div className="flex flex-row items-center gap-3">
        <CloudRoundedIcon />
        <p className="text-xl font-bold">Select a Platform</p>
      </div>

      {/* Sub Tabs */}
      <Tabs
        aria-label="Dashboard Sub Tabs"
        selectedKey={selectedNestedTab}
        onSelectionChange={setSelectedNestedTab}
        className="mt-4"
        variant="underlined"
      >
        <Tab key="cloud-platforms" title="Cloud Platforms" />
        <Tab key="on-premise" title="On-Premise" />
      </Tabs>

      <div className="mt-4">{renderNestedContent()}</div>

      {/* Select a Service */}
      <div className="flex flex-row items-center gap-3">
        <CloudRoundedIcon />
        <p className="text-xl font-bold">Select a Service</p>
      </div>

      {/* Sub Tabs */}
      <Tabs
        aria-label="Dashboard Sub Tabs"
        selectedKey={selectedNestedTab}
        onSelectionChange={setSelectedNestedTab}
        className="mt-4"
        variant="underlined"
      >
        <Tab key="cloud-platforms" title="Cloud Platforms" />
        <Tab key="on-premise" title="On-Premise" />
      </Tabs>

      <div className="mt-4">{renderNestedContent()}</div>
    </div>
  );
}
