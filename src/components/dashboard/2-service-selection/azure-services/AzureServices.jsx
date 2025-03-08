import { Card, CardHeader, CardBody, Image } from "@heroui/react";
// Azure compute services
import vmLogo from "../../../../assets/icons/azure/vm-logo.svg";
import functionsLogo from "../../../../assets/icons/azure/functionapps-logo.svg";
import aciLogo from "../../../../assets/icons/azure/containerinstances-logo.svg";
import aksLogo from "../../../../assets/icons/azure/aks-logo.svg";
import sfcLogo from "../../../../assets/icons/azure/sfc-logo.svg";
import springAppsLogo from "../../../../assets/icons/azure/springapps-logo.svg";
// Azure database services
import sqlDBLogo from "../../../../assets/icons/azure/sqldb-logo.svg";
import cosmosDBLogo from "../../../../assets/icons/azure/cosmosdb-logo.svg";
import postgresLogo from "../../../../assets/icons/azure/postgresql-logo.svg";
import mariaDBLogo from "../../../../assets/icons/azure/mariadb-logo.svg";
import redisLogo from "../../../../assets/icons/azure/cacheredis-logo.svg";
import synapseLogo from "../../../../assets/icons/azure/synapseanalytics-logo.svg";
// Azure storage services
import queueLogo from "../../../../assets/icons/azure/queue-logo.svg";
import fileLogo from "../../../../assets/icons/azure/files-logo.svg";
import dataLakeLogo from "../../../../assets/icons/azure/datalake-logo.svg";
import netAppLogo from "../../../../assets/icons/azure/netappfiles-logo.svg";

export default function AzureServices({
  selectedTab,
  selectedService,
  onServiceSelect,
}) {
  const serviceCards = {
    compute: [
      {
        id: "vm",
        name: "Virtual Machine",
        description: "Flexible, and scalable computing resources",
        logo: vmLogo,
        width: 60,
      },
      {
        id: "functionapps",
        name: "Function Apps",
        description: "Serverless computing resources",
        logo: functionsLogo,
        width: 60,
      },
      {
        id: "containerinstances",
        name: "Container Instances",
        description: "Serverless container computing resources",
        logo: aciLogo,
        width: 60,
      },
      {
        id: "aks",
        name: "AKS",
        description: "Kubernetes as a Service",
        logo: aksLogo,
        width: 60,
      },
      {
        id: "sfc",
        name: "Service Fabric",
        description: "Microservices platform",
        logo: sfcLogo,
        width: 60,
      },
      {
        id: "springapps",
        name: "Spring Apps",
        description: "Spring-based microservices platform",
        logo: springAppsLogo,
        width: 60,
      },
    ],
    storage: [
      {
        id: "queue",
        name: "Queue Storage",
        description: "Queue storage for Azure",
        logo: queueLogo,
        width: 60,
      },
      {
        id: "files",
        name: "Files",
        description: "File storage for Azure",
        logo: fileLogo,
        width: 60,
      },
      {
        id: "datalake",
        name: "Data Lake",
        description: "Data lake for Azure",
        logo: dataLakeLogo,
        width: 60,
      },
      {
        id: "netappfiles",
        name: "NetApp Files",
        description: "NetApp Files for Azure",
        logo: netAppLogo,
        width: 60,
      },
    ],
    database: [
      {
        id: "sqldb",
        name: "SQL Database",
        description: "SQL Database for Azure",
        logo: sqlDBLogo,
        width: 60,
      },
      {
        id: "cosmosdb",
        name: "Cosmos DB",
        description: "Cosmos DB for Azure",
        logo: cosmosDBLogo,
        width: 60,
      },
      {
        id: "postgresql",
        name: "PostgreSQL",
        description: "PostgreSQL for Azure",
        logo: postgresLogo,
        width: 60,
      },
      {
        id: "mariadb",
        name: "MariaDB",
        description: "MariaDB for Azure",
        logo: mariaDBLogo,
        width: 60,
      },
      {
        id: "cacheredis",
        name: "Cache Redis",
        description: "Cache Redis for Azure",
        logo: redisLogo,
        width: 60,
      },
      {
        id: "synapseanalytics",
        name: "Synapse Analytics",
        description: "Synapse Analytics for Azure",
        logo: synapseLogo,
        width: 60,
      },
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
            />
            <p className="text-base mt-2">{card.name}</p>
          </CardBody>
          <CardHeader className="w-full flex justify-center items-center p-0 px-2 pb-5">
            <p
              className={`text-base ${
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
