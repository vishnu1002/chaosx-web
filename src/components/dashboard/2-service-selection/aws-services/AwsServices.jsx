import { Card, CardHeader, CardBody, Image } from "@heroui/react";
import ec2Logo from "../../../../assets/icons/aws/ec2-logo.svg";
import lambdaLogo from "../../../../assets/icons/aws/lambda-logo.svg";

export default function AwsServices({
  selectedTab,
  selectedService,
  onServiceSelect,
}) {
  const serviceCards = {
    compute: [
      {
        id: "ec2",
        logo: ec2Logo,
        name: "EC2",
        description: "Scalable virtual servers for running applications",
        width: 60,
      },
      {
        id: "lambda",
        logo: lambdaLogo,
        name: "Lambda",
        description: "Run code without provisioning or managing servers",
        width: 60,
      },
    ],
    storage: [
      // Add storage services
    ],
    database: [
      // Add database services
    ],
    network: [
      // Add network services
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
