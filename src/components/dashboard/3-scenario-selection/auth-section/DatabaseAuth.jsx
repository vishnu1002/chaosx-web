import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Input } from "@heroui/react";

export default function DatabaseAuth({ credentials, onCredentialsChange }) {
  const [showAppPassword, setShowAppPassword] = useState(false);
  const [showRootPassword, setShowRootPassword] = useState(false);

  const handleInputChange = (field, value) => {
    onCredentialsChange((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="w-96 p-6 bg-neutral-900/50 rounded-xl border border-neutral-800">
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Database Authentication</h2>
        <p className="text-sm text-neutral-400">
          Please enter your database credentials to proceed with the scenario.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {/* Host and Port in one row */}
        <div className="flex gap-4">
          <Input
            autoFocus
            label="Hostname"
            placeholder="Enter hostname"
            variant="bordered"
            value={credentials.hostname}
            onValueChange={(value) => handleInputChange("hostname", value)}
            className="flex-1"
          />
          <Input
            label="Port"
            placeholder="Enter port"
            variant="bordered"
            value={credentials.port}
            onValueChange={(value) => {
              const numericValue = value.replace(/[^0-9]/g, "");
              handleInputChange("port", numericValue);
            }}
            type="number"
            min="1"
            max="65535"
            className="w-32"
          />
        </div>

        {/* App Credentials */}
        <div>
          <p className="text-sm font-semibold mb-2 text-neutral-400">
            App Credentials
          </p>
          <div className="flex flex-col gap-3">
            <Input
              label="App Username"
              placeholder="Enter app username"
              variant="bordered"
              value={credentials.appUsername}
              onValueChange={(value) => handleInputChange("appUsername", value)}
            />
            <Input
              label="App Password"
              placeholder="Enter app password"
              type={showAppPassword ? "text" : "password"}
              variant="bordered"
              value={credentials.appPassword}
              onValueChange={(value) => handleInputChange("appPassword", value)}
              endContent={
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setShowAppPassword(!showAppPassword);
                  }}
                >
                  {showAppPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </button>
              }
            />
          </div>
        </div>

        {/* Root Credentials */}
        <div>
          <p className="text-sm font-semibold mb-2 text-neutral-400">
            Root Credentials
          </p>
          <div className="flex flex-col gap-3">
            <Input
              label="Root Username"
              placeholder="Enter root username"
              variant="bordered"
              value={credentials.rootUsername}
              onValueChange={(value) =>
                handleInputChange("rootUsername", value)
              }
            />
            <Input
              label="Root Password"
              placeholder="Enter root password"
              type={showRootPassword ? "text" : "password"}
              variant="bordered"
              value={credentials.rootPassword}
              onValueChange={(value) =>
                handleInputChange("rootPassword", value)
              }
              endContent={
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setShowRootPassword(!showRootPassword);
                  }}
                >
                  {showRootPassword ? (
                    <VisibilityIcon />
                  ) : (
                    <VisibilityOffIcon />
                  )}
                </button>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
