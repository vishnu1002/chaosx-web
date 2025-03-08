import { Card, CardHeader, CardBody, Image } from "@heroui/react";
// AWS compute services
import ec2Logo from "../../../../assets/icons/aws/ec2-logo.svg";
import lambdaLogo from "../../../../assets/icons/aws/lambda-logo.svg";
import fargateLogo from "../../../../assets/icons/aws/fargate-logo.svg";
import ecsLogo from "../../../../assets/icons/aws/ecs-logo.svg";
import eksLogo from "../../../../assets/icons/aws/eks-logo.svg";
import batchLogo from "../../../../assets/icons/aws/batch-logo.svg";
// AWS database services
import auroraLogo from "../../../../assets/icons/aws/aurora-logo.svg";
import dynamoDBLogo from "../../../../assets/icons/aws/dynamodb-logo.svg";
import rdsLogo from "../../../../assets/icons/aws/rds-logo.svg";
import neptuneLogo from "../../../../assets/icons/aws/neptune-logo.svg";
import elastiCacheLogo from "../../../../assets/icons/aws/elasticache-logo.svg";
import redshiftLogo from "../../../../assets/icons/aws/redshift-logo.svg";
// AWS storage services
import s3Logo from "../../../../assets/icons/aws/s3-logo.svg";
import s3GlacierLogo from "../../../../assets/icons/aws/s3glacier-logo.svg";
import ebsLogo from "../../../../assets/icons/aws/ebs-logo.svg";
import efsLogo from "../../../../assets/icons/aws/efs-logo.svg";
import storageGatewayLogo from "../../../../assets/icons/aws/storagegateway-logo.svg";
import fsxLogo from "../../../../assets/icons/aws/fsx-logo.svg";

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
      {
        id: "fargate",
        logo: fargateLogo,
        name: "Fargate",
        description: "Run containers without managing servers",
        width: 60,
      },
      {
        id: "ecs",
        logo: ecsLogo,
        name: "ECS",
        description: "Run and scale containerized applications",
        width: 60,
      },
      {
        id: "eks",
        logo: eksLogo,
        name: "EKS",
        description: "Run Kubernetes on AWS",
        width: 60,
      },
      {
        id: "batch",
        logo: batchLogo,
        name: "Batch",
        description: "Run batch jobs on AWS",
        width: 60,
      },
    ],
    storage: [
      {
        id: "s3",
        logo: s3Logo,
        name: "S3",
        description: "Object storage for the internet",
        width: 60,
      },
      {
        id: "s3glacier",
        logo: s3GlacierLogo,
        name: "S3 Glacier",
        description: "Archival storage for the internet",
        width: 60,
      },
      {
        id: "ebs",
        logo: ebsLogo,
        name: "EBS",
        description: "Block storage for EC2",
        width: 60,
      },
      {
        id: "efs",
        logo: efsLogo,
        name: "EFS",
        description: "Elastic File System",
        width: 60,
      },
      {
        id: "storagegateway",
        logo: storageGatewayLogo,
        name: "Storage Gateway",
        description: "Hybrid storage for on-premises and cloud",
        width: 60,
      },
      {
        id: "fsx",
        logo: fsxLogo,
        name: "FSx",
        description: "File storage for Linux",
        width: 60,
      },
    ],
    database: [
      {
        id: "aurora",
        logo: auroraLogo,
        name: "Aurora",
        description: "Relational database for the internet",
        width: 60,
      },
      {
        id: "dynamodb",
        logo: dynamoDBLogo,
        name: "DynamoDB",
        description: "NoSQL database for the internet",
        width: 60,
      },
      {
        id: "rds",
        logo: rdsLogo,
        name: "RDS",
        description: "Relational database for the internet",
        width: 60,
      },
      {
        id: "neptune",
        logo: neptuneLogo,
        name: "Neptune",
        description: "Graph database for the internet",
        width: 60,
      },
      {
        id: "elasticache",
        logo: elastiCacheLogo,
        name: "ElastiCache",
        description: "In-memory database for the internet",
        width: 60,
      },
      {
        id: "redshift",
        logo: redshiftLogo,
        name: "RedShift",
        description: "Data warehouse for the internet",
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
