import { useState } from "react";
import { Tabs, Tab } from "@heroui/react";
import MiscellaneousServicesRoundedIcon from "@mui/icons-material/MiscellaneousServicesRounded";
import AwsServices from "./aws-services/AwsServices";
import AzureServices from "./azure-services/AzureServices";
import GcpServices from "./gcp-services/GcpServices";

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
    <div className="mt-8">
      <div className="flex flex-row items-center gap-3">
        <MiscellaneousServicesRoundedIcon className="text-[#C8FF88]" />
        <p className="text-xl font-bold">Select your Service</p>
      </div>

      <Tabs
        aria-label="Service Selection Tabs"
        selectedKey={selectedServiceTab}
        onSelectionChange={setSelectedServiceTab}
        className="mt-4"
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
