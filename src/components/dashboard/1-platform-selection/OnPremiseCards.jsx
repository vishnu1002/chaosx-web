import { Card, CardHeader, CardBody, Image } from "@heroui/react";
import { useState } from "react";
import databaseIcon from "../../../assets/icons/database-logo.svg";
import serverIcon from "../../../assets/icons/server-logo.svg";

export default function OnPremiseCards() {
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    { id: "servers", logo: serverIcon, name: "Servers", width: 80 },
    { id: "database", logo: databaseIcon, name: "Database", width: 100 },
  ];

  const handleCardClick = (cardId) => {
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
              alt={`${card.name} icon`}
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
