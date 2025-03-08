import { Card, CardHeader, CardBody, Image } from "@heroui/react";
import { useState } from "react";
import awsLogo from "../../../assets/icons/aws-logo2.svg";
import azureLogo from "../../../assets/icons/azure-logo.svg";
import gcpLogo from "../../../assets/icons/gcp-logo.svg";
import ibmLogo from "../../../assets/icons/ibm-logo2.svg";
import digitalOceanLogo from "../../../assets/icons/digitalocean-logo.svg";
import openStackLogo from "../../../assets/icons/openstack-logo.svg";

export default function CloudPlatformCards() {
  const [selectedCard, setSelectedCard] = useState(null);

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
    // If clicking the same card, deselect it, otherwise select the new card
    setSelectedCard(selectedCard === cardId ? null : cardId);
    console.log("Selected card:", cardId);
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 max-w-[1120px] mx-auto">
      {cards.map((card) => (
        <Card
          key={card.id}
          className={`bg-neutral-900 w-[260px] h-[200px] flex flex-col items-center justify-between rounded-xl cursor-pointer transition-all duration-200
            ${
              selectedCard === card.id
                ? "border-2 border-[#C8FF88]"
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
                selectedCard === card.id ? "text-[#C8FF88]" : "text-neutral-400"
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
