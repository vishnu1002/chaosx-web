import { useState } from "react";
import { Tabs, Tab } from "@heroui/react";
import MiscellaneousServicesRoundedIcon from "@mui/icons-material/MiscellaneousServicesRounded";
import AwsServices from "./AwsServices";
import AzureServices from "./AzureServices";
import GcpServices from "./GcpServices";

export default function ServiceSelection({
  platform,
  selectedService,
  onServiceSelect,
}) {
  const [selectedServiceTab, setSelectedServiceTab] = useState("compute");

  const renderServiceContent = () => {
    switch (platform) {
      case "aws":
        return (
          <AwsServices
            selectedTab={selectedServiceTab}
            selectedService={selectedService}
            onServiceSelect={onServiceSelect}
          />
        );
      case "azure":
        return (
          <AzureServices
            selectedTab={selectedServiceTab}
            selectedService={selectedService}
            onServiceSelect={onServiceSelect}
          />
        );
      case "gcp":
        return (
          <GcpServices
            selectedTab={selectedServiceTab}
            selectedService={selectedService}
            onServiceSelect={onServiceSelect}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="flex flex-row items-center gap-3">
        <MiscellaneousServicesRoundedIcon className="text-[#C8FF88]" />
        <p className="text-xl font-bold">Select your Service</p>
      </div>
      <p className="text-sm text-neutral-400 mt-3">
        Browse through different service categories to find the specific service
        you need. Services are organized by compute, storage, and database
        capabilities.
      </p>

      <Tabs
        aria-label="Service Selection Tabs"
        selectedKey={selectedServiceTab}
        onSelectionChange={setSelectedServiceTab}
        className="mt-4"
        classNames={{
          cursor: "w-full bg-[transparent]",
          tabContent: "group-data-[selected=true]:text-[#C8FF88]",
        }}
        variant="underlined"
      >
        <Tab key="compute" title="Compute" />
        <Tab key="storage" title="Storage" />
        <Tab key="database" title="Database" />
      </Tabs>

      <div className="mt-4">{renderServiceContent()}</div>
    </div>
  );
}
