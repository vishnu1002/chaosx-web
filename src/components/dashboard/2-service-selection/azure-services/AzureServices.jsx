import { Card, CardHeader, CardBody, Image } from "@heroui/react";
// Import Azure service logos

export default function AzureServices({
  selectedTab,
  selectedService,
  onServiceSelect,
}) {
  const serviceCards = {
    compute: [
      // Add Azure compute services
    ],
    storage: [
      // Add Azure storage services
    ],
    database: [
      // Add Azure database services
    ],
    network: [
      // Add Azure network services
    ],
  };

  const handleCardClick = (cardId) => {
    onServiceSelect(selectedService === cardId ? null : cardId);
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 max-w-[1120px] mx-auto">
      {serviceCards[selectedTab]?.map((card) => (
        <Card
          key={card.id}
          className={`bg-neutral-900 w-[260px] h-[200px] flex flex-col items-center justify-between rounded-xl cursor-pointer transition-all duration-200
            ${
              selectedService === card.id
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
                selectedService === card.id
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
