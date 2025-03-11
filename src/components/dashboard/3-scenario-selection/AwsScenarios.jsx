import { Card, CardBody } from "@heroui/react";
import { awsScenarios } from "./scenarioConfig.jsx";

export default function AwsScenarios({
  selectedService,
  onScenarioSelect,
  selectedScenario,
}) {
  const handleScenarioClick = (scenarioId) => {
    onScenarioSelect(selectedScenario === scenarioId ? null : scenarioId);
    console.log("Selected AWS scenario:", scenarioId);
  };

  // Get scenarios for the selected service
  const scenarios = awsScenarios[selectedService] || [];

  return (
    <div className="flex flex-wrap justify-center gap-4 max-w-[1120px] mx-auto">
      {scenarios.map((scenario) => (
        <Card
          key={scenario.id}
          className={`bg-neutral-900 w-[300px] h-[200px] flex flex-col items-start justify-between rounded-xl cursor-pointer transition-all duration-200 
            ${
              selectedScenario === scenario.id
                ? "border-2 border-[#C8FF88] shadow-3xl"
                : "border-2 border-neutral-700"
            }
            hover:border-[#C8FF88] hover:border-opacity-50`}
          onPress={() => handleScenarioClick(scenario.id)}
          isPressable
        >
          <CardBody className="flex flex-col items-start w-full px-5 pt-5">
            {scenario.icon}
            <p className="text-base mt-2">{scenario.name}</p>
            <p className="text-sm text-left mt-5 text-neutral-400">
              {scenario.description}
            </p>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
