import { useState } from "react";
import { Tabs, Tab } from "@heroui/react";
import CloudRoundedIcon from "@mui/icons-material/CloudRounded";
import OnPremiseCards from "./on-premise/OnPremiseCards";

export default function DashboardTab() {
  const [selectedNestedTab, setSelectedNestedTab] = useState("overview");

  const renderNestedContent = () => {
    switch (selectedNestedTab) {
      case "cloud-platforms":
        return <div className="flex flex-wrap gap-4"></div>;
      case "on-premise":
        return (
          <div className="flex flex-wrap gap-4">
            <OnPremiseCards />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col w-full mt-20 bg-neutral-800">
      {/* Choose a Platform */}
      <div className="flex flex-row items-center gap-3">
        <CloudRoundedIcon />
        <p className="text-xl font-bold">Choose a Platform</p>
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
