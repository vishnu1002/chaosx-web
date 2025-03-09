import { Card, CardHeader, CardBody, Image } from "@heroui/react";
import { gcpServiceCards } from "../servicesConfig.jsx";

export default function GcpServices({
  selectedTab,
  selectedService,
  onServiceSelect,
}) {
  const handleCardClick = (cardId) => {
    onServiceSelect(selectedService === cardId ? null : cardId);
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 max-w-[1120px] mx-auto">
      {gcpServiceCards[selectedTab]?.map((card) => (
        <Card
          key={card.id}
          className={`bg-neutral-900 w-[210px] h-[200px] flex flex-col items-center justify-between rounded-xl cursor-pointer transition-all duration-200
            ${
              selectedService === card.id
                ? "border-2 border-[#C8FF88]"
                : "border-2 border-neutral-700"
            }
            hover:border-[#C8FF88] hover:border-opacity-50`}
          onPress={() => handleCardClick(card.id)}
          isPressable
        >
          <CardBody className="flex flex-col items-center p-0 pt-5">
            <Image
              alt={`${card.name} Logo`}
              className="object-contain"
              src={card.logo}
              width={card.width}
              height={card.width}
              radius="none"
            />
            <p className="text-base mt-2">{card.name}</p>
          </CardBody>
          <CardHeader className="w-full flex justify-center items-center p-0 px-2 pb-5">
            <p
              className={`text-sm ${
                selectedService === card.id
                  ? "text-[#C8FF88]"
                  : "text-neutral-400"
              }`}
            >
              {card.description}
            </p>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}
