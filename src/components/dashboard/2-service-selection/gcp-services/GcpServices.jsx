import { Card, CardHeader, CardBody, Image } from "@heroui/react";
// GCP compute services
import computeengineLogo from "../../../../assets/icons/gcp/computeengine-logo.svg";
import cloudfunctionsLogo from "../../../../assets/icons/gcp/cloudfunctions-logo.svg";
import cloudrunLogo from "../../../../assets/icons/gcp/cloudrun-logo.svg";
import gkeLogo from "../../../../assets/icons/gcp/gke-logo.svg";
import anthosLogo from "../../../../assets/icons/gcp/anthos-logo.svg";
// GCP database services
import sqlLogo from "../../../../assets/icons/gcp/sql-logo.svg";
import spannerLogo from "../../../../assets/icons/gcp/spanner-logo.svg";
import bigtableLogo from "../../../../assets/icons/gcp/bigtable-logo.svg";
import firestoreLogo from "../../../../assets/icons/gcp/firestore-logo.svg";
import bigqueryLogo from "../../../../assets/icons/gcp/bigquery-logo.svg";
// GCP storage services
import cloudstorageLogo from "../../../../assets/icons/gcp/cloudstorage-logo.svg";
import persistentdiskLogo from "../../../../assets/icons/gcp/persistentdisk-logo.svg";
import filestoreLogo from "../../../../assets/icons/gcp/filestore-logo.svg";
import localssdLogo from "../../../../assets/icons/gcp/localssd-logo.svg";
import datastoreLogo from "../../../../assets/icons/gcp/datastore-logo.svg";

export default function GcpServices({
  selectedTab,
  selectedService,
  onServiceSelect,
}) {
  const serviceCards = {
    compute: [
      {
        id: "computeengine",
        name: "Compute Engine",
        description: "Compute Engine for GCP",
        logo: computeengineLogo,
        width: 60,
      },
      {
        id: "cloudfunctions",
        name: "Cloud Functions",
        description: "Cloud Functions for GCP",
        logo: cloudfunctionsLogo,
        width: 60,
      },
      {
        id: "cloudrun",
        name: "Cloud Run",
        description: "Cloud Run for GCP",
        logo: cloudrunLogo,
        width: 60,
      },
      {
        id: "gke",
        name: "GKE",
        description: "GKE for GCP",
        logo: gkeLogo,
        width: 60,
      },
      {
        id: "anthos",
        name: "Anthos",
        description: "Anthos for GCP",
        logo: anthosLogo,
        width: 60,
      },
    ],
    storage: [
      {
        id: "cloudstorage",
        name: "Cloud Storage",
        description: "Cloud Storage for GCP",
        logo: cloudstorageLogo,
        width: 60,
      },
      {
        id: "persistentdisk",
        name: "Persistent Disk",
        description: "Persistent Disk for GCP",
        logo: persistentdiskLogo,
        width: 60,
      },
      {
        id: "filestore",
        name: "Filestore",
        description: "Filestore for GCP",
        logo: filestoreLogo,
        width: 60,
      },
      {
        id: "localssd",
        name: "Local SSD",
        description: "Local SSD for GCP",
        logo: localssdLogo,
        width: 60,
      },
      {
        id: "datastore",
        name: "Datastore",
        description: "Datastore for GCP",
        logo: datastoreLogo,
        width: 60,
      },
    ],
    database: [
      {
        id: "sql",
        name: "SQL",
        description: "SQL for GCP",
        logo: sqlLogo,
        width: 60,
      },
      {
        id: "spanner",
        name: "Spanner",
        description: "Spanner for GCP",
        logo: spannerLogo,
        width: 60,
      },
      {
        id: "bigtable",
        name: "Bigtable",
        description: "Bigtable for GCP",
        logo: bigtableLogo,
        width: 60,
      },
      {
        id: "firestore",
        name: "Firestore",
        description: "Firestore for GCP",
        logo: firestoreLogo,
        width: 60,
      },
      {
        id: "bigquery",
        name: "Bigquery",
        description: "Bigquery for GCP",
        logo: bigqueryLogo,
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
