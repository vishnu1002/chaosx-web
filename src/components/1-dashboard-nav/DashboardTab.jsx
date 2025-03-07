import { useState } from "react";
import { Tabs, Tab, Card, CardBody } from "@heroui/react";

export default function DashboardTab() {
  const [selectedNestedTab, setSelectedNestedTab] = useState("overview");

  const renderNestedContent = () => {
    switch (selectedNestedTab) {
      case "overview":
        return (
          <Card className="w-full">
            <CardBody>Dashboard Overview Content</CardBody>
          </Card>
        );
      case "analytics":
        return (
          <Card className="w-full">
            <CardBody>Dashboard Analytics Content</CardBody>
          </Card>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col w-full">
      <Tabs
        aria-label="Dashboard Sub Tabs"
        selectedKey={selectedNestedTab}
        onSelectionChange={setSelectedNestedTab}
      >
        <Tab key="overview" title="Overview" />
        <Tab key="analytics" title="Analytics" />
      </Tabs>

      <div className="mt-4">{renderNestedContent()}</div>
    </div>
  );
}
