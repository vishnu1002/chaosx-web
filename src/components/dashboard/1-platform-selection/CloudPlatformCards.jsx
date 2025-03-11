import { Card, CardHeader, CardBody, Image } from "@heroui/react";
import awsLogo from "../../../assets/icons/platform/aws-logo2.svg";
import azureLogo from "../../../assets/icons/platform/azure-logo.svg";
import gcpLogo from "../../../assets/icons/platform/gcp-logo.svg";
import ibmLogo from "../../../assets/icons/platform/ibm-logo2.svg";
import digitalOceanLogo from "../../../assets/icons/platform/digitalocean-logo.svg";
import openStackLogo from "../../../assets/icons/platform/openstack-logo.svg";

export default function CloudPlatformCards({
  selectedPlatform,
  onPlatformSelect,
}) {
  const cards = [
    { id: "aws", logo: awsLogo, name: "AWS", width: 100 },
    { id: "azure", logo: azureLogo, name: "Azure", width: 90 },
    { id: "gcp", logo: gcpLogo, name: "GCP", width: 100 },
    { id: "ibm", logo: ibmLogo, name: "IBM Cloud", width: 110 },
    {
      id: "digitalocean",
      logo: digitalOceanLogo,
      name: "DigitalOcean",
      width: 100,
    },
    { id: "openstack", logo: openStackLogo, name: "OpenStack", width: 110 },
  ];

  const handleCardClick = (cardId) => {
    onPlatformSelect(selectedPlatform === cardId ? null : cardId);
    console.log("Selected platform:", cardId);
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 max-w-[1120px] mx-auto">
      {cards.map((card) => (
        <Card
          key={card.id}
          className={`bg-neutral-900 w-[260px] h-[200px] flex flex-col items-center justify-between rounded-xl cursor-pointer transition-all duration-200
            ${
              selectedPlatform === card.id
                ? "border-2 border-[#C8FF88] shadow-3xl"
                : "border-2 border-neutral-700"
            }
            hover:border-[#C8FF88] hover:border-opacity-50`}
          onPress={() => handleCardClick(card.id)}
          isPressable
        >
          <CardBody className="flex items-center justify-center flex-grow py-4">
            <Image
              alt={`${card.name} Logo`}
              className="object-contain"
              src={card.logo}
              width={card.width}
              height={card.width}
            />
          </CardBody>
          <CardHeader className="w-full flex justify-center items-center pb-4">
            <p
              className={`text-base ${
                selectedPlatform === card.id
                  ? "text-[#C8FF88]"
                  : "text-neutral-400"
              }`}
            >
              {card.name}
            </p>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}
