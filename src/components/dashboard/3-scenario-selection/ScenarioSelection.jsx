import { useState } from "react";
import AccountTreeRoundedIcon from "@mui/icons-material/AccountTreeRounded";
import AwsScenarios from "./AwsScenarios";
import AzureScenarios from "./AzureScenarios";
import GcpScenarios from "./GcpScenarios";

export default function ScenarioSelection({
  platform,
  selectedService,
  selectedScenario,
  onScenarioSelect,
}) {
  const renderScenarioContent = () => {
    switch (platform) {
      case "aws":
        return (
          <AwsScenarios
            selectedService={selectedService}
            selectedScenario={selectedScenario}
            onScenarioSelect={onScenarioSelect}
          />
        );
      case "azure":
        return (
          <AzureScenarios
            selectedService={selectedService}
            selectedScenario={selectedScenario}
            onScenarioSelect={onScenarioSelect}
          />
        );
      case "gcp":
        return (
          <GcpScenarios
            selectedService={selectedService}
            selectedScenario={selectedScenario}
            onScenarioSelect={onScenarioSelect}
          />
        );
      default:
        return null;
    }
  };

  if (!selectedService) return null;

  return (
    <div className="w-full mt-8">
      <div className="max-w-[1120px] mx-auto">
        <div className="flex flex-row items-center gap-3 mb-6">
          <AccountTreeRoundedIcon className="text-[#C8FF88]" />
          <h2 className="text-xl font-bold">Select your Scenario</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {renderScenarioContent()}
        </div>
      </div>
    </div>
  );
}
