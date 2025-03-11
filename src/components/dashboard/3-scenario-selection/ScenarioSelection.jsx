import { useState } from "react";
import AccountTreeRoundedIcon from "@mui/icons-material/AccountTreeRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import AwsScenarios from "./AwsScenarios";
import AzureScenarios from "./AzureScenarios";
import GcpScenarios from "./GcpScenarios";
import DatabaseAuth from "./auth-section/DatabaseAuth";
import { Button, Spinner, Input } from "@heroui/react";

// Add the style for gradient animation
const gradientStyle = `
  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  .animate-gradient {
    background: linear-gradient(
      270deg,
      rgba(200, 255, 136, 0.8),
      rgba(0, 255, 136, 0.8),
      rgba(136, 255, 0, 0.8),
      rgba(255, 247, 32, 0.8)
    );
    background-size: 300% 300%;
    animation: gradientAnimation 8s ease infinite;
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .animate-gradient:hover {
    background: linear-gradient(
      270deg,
      rgba(200, 255, 136, 0.8),
      rgba(0, 255, 136, 0.8),
      rgba(136, 255, 0, 0.8),
      rgba(255, 247, 32, 0.8)
    );
    background-size: 300% 300%;
    animation: gradientAnimation 12s ease infinite;
    box-shadow: 0 0 25px rgba(200, 255, 136, 0.6);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    transform: scale(1.02);
  }

  .animate-gradient:disabled {
    opacity: 1 !important;
    background: linear-gradient(
      270deg,
      rgba(200, 255, 136, 0.8),
      rgba(0, 255, 136, 0.8),
      rgba(136, 255, 0, 0.8),
      rgba(255, 247, 32, 0.8)
    ) !important;
    background-size: 300% 300% !important;
    animation: gradientAnimation 8s ease infinite !important;
    cursor: not-allowed !important;
    pointer-events: none !important;
  }

  .loading-gradient {
    opacity: 1 !important;
    background: linear-gradient(
      270deg,
      rgba(200, 255, 136, 1),
      rgba(0, 255, 136, 1),
      rgba(136, 255, 0, 1),
      rgba(255, 247, 32, 1)
    ) !important;
    background-size: 300% 300% !important;
    animation: gradientAnimation 6s ease infinite !important;
    box-shadow: 0 0 25px rgba(200, 255, 136, 0.6) !important;
  }
`;

export default function ScenarioSelection({
  platform,
  selectedService,
  selectedScenario,
  onScenarioSelect,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [showAppPassword, setShowAppPassword] = useState(false);
  const [showRootPassword, setShowRootPassword] = useState(false);

  // State for form fields
  const [credentials, setCredentials] = useState({
    hostname: "",
    port: "",
    appUsername: "",
    appPassword: "",
    rootUsername: "",
    rootPassword: "",
  });

  // Check if the selected service is a database service
  const isDatabaseService = () => {
    const databaseServices = {
      aws: ["aurora", "dynamodb", "rds", "neptune", "elasticache", "redshift"],
      azure: ["sqldb", "cosmosdb", "postgresql", "mariadb", "redis", "synapse"],
      gcp: ["sql", "spanner", "bigtable", "firestore", "bigquery"],
    };

    return databaseServices[platform]?.includes(selectedService) || false;
  };

  const handleScenarioSelect = (scenario) => {
    onScenarioSelect(scenario);
  };

  const handleInputChange = (field, value) => {
    setCredentials((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleLogin = async () => {
    if (!selectedScenario) {
      console.log("Error: Please select a scenario first");
      return;
    }

    // For database services, validate credentials
    if (isDatabaseService()) {
      if (Object.values(credentials).some((value) => !value.trim())) {
        console.log("Error: Please fill all credential fields");
        return;
      }
    }

    setIsLoading(true);

    try {
      const payload = {
        scenario: {
          id: selectedScenario.id,
          name: selectedScenario.name,
          platform,
          service: selectedService,
        },
      };

      // Add credentials only if it's a database service
      if (isDatabaseService()) {
        payload.credentials = {
          connection: {
            hostname: credentials.hostname,
            port: credentials.port,
          },
          app: {
            username: credentials.appUsername,
            password: credentials.appPassword,
          },
          root: {
            username: credentials.rootUsername,
            password: credentials.rootPassword,
          },
        };
      }

      const response = await fetch("http://localhost:8000/execute", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to generate scenario");
      }

      console.log("Success: Scenario generated successfully", payload);

      // Reset form after successful save
      if (isDatabaseService()) {
        setCredentials({
          hostname: "",
          port: "",
          appUsername: "",
          appPassword: "",
          rootUsername: "",
          rootPassword: "",
        });
      }
    } catch (error) {
      console.error("Error: Failed to generate scenario", error);
    } finally {
      setIsLoading(false);
    }
  };

  const renderScenarioContent = () => {
    switch (platform) {
      case "aws":
        return (
          <AwsScenarios
            selectedService={selectedService}
            selectedScenario={selectedScenario}
            onScenarioSelect={handleScenarioSelect}
          />
        );
      case "azure":
        return (
          <AzureScenarios
            selectedService={selectedService}
            selectedScenario={selectedScenario}
            onScenarioSelect={handleScenarioSelect}
          />
        );
      case "gcp":
        return (
          <GcpScenarios
            selectedService={selectedService}
            selectedScenario={selectedScenario}
            onScenarioSelect={handleScenarioSelect}
          />
        );
      default:
        return null;
    }
  };

  if (!selectedService) return null;

  return (
    <div>
      <style>{gradientStyle}</style>
      <div className="flex flex-row items-center gap-3 mb-6">
        <AccountTreeRoundedIcon className="text-[#C8FF88]" />
        <h2 className="text-xl font-bold">Select your Scenario</h2>
      </div>
      <p className="text-sm text-neutral-400 mt-3 mb-7">
        Choose a pre-configured scenario that matches your use case. Each
        scenario provides optimized settings and configurations for your
        selected service.
      </p>

      <div className="flex gap-8">
        <div className="ml-12">
          {isDatabaseService() && (
            <DatabaseAuth
              credentials={credentials}
              onCredentialsChange={setCredentials}
              selectedScenario={selectedScenario}
            />
          )}
        </div>

        {/* Scenario Cards */}
        <div
          className={`flex-1 flex flex-wrap gap-4 ${
            isDatabaseService() ? "justify-start" : "justify-center"
          }`}
        >
          {renderScenarioContent()}
        </div>
      </div>

      <div className="flex justify-center mt-[55px]">
        <Button
          className={`text-white
            transition-all duration-800 ease-in-out
            ${selectedScenario ? "animate-gradient" : ""}
            ${isLoading ? "loading-gradient" : ""}
            active:scale-95
            hover:scale-105
            disabled:opacity-100 disabled:cursor-not-allowed
            flex items-center justify-center gap-2
            ${
              selectedScenario ? "hover:shadow-lg hover:shadow-[#C8FF88]" : ""
            }`}
          startContent={
            isLoading ? (
              <Spinner
                size="sm"
                color="current"
                variant="wave"
                className="self-center"
              />
            ) : (
              <AutoAwesomeRoundedIcon />
            )
          }
          size="lg"
          radius="md"
          variant="flat"
          color="primary"
          onPress={handleLogin}
          disabled={isLoading || !selectedScenario}
        >
          <p className="self-center">Generate the Scenario</p>
        </Button>
      </div>
    </div>
  );
}
