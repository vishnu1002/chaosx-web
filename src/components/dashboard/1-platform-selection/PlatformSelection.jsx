import CloudPlatformCards from "./CloudPlatformCards";
import OnPremiseCards from "./OnPremiseCards";

export default function PlatformSelection({
  selectedTab,
  selectedPlatform,
  onPlatformSelect,
}) {
  return (
    <div className="w-full flex justify-center">
      {selectedTab === "cloud-platforms" ? (
        <CloudPlatformCards
          selectedPlatform={selectedPlatform}
          onPlatformSelect={onPlatformSelect}
        />
      ) : (
        <OnPremiseCards
          selectedPlatform={selectedPlatform}
          onPlatformSelect={onPlatformSelect}
        />
      )}
    </div>
  );
}
