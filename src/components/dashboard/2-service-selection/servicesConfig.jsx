// AWS service icons
import ec2Logo from "../../../assets/icons/aws/ec2-logo.svg";
import lambdaLogo from "../../../assets/icons/aws/lambda-logo.svg";
import fargateLogo from "../../../assets/icons/aws/fargate-logo.svg";
import ecsLogo from "../../../assets/icons/aws/ecs-logo.svg";
import eksLogo from "../../../assets/icons/aws/eks-logo.svg";
import batchLogo from "../../../assets/icons/aws/batch-logo.svg";
import auroraLogo from "../../../assets/icons/aws/aurora-logo.svg";
import dynamoDBLogo from "../../../assets/icons/aws/dynamodb-logo.svg";
import rdsLogo from "../../../assets/icons/aws/rds-logo.svg";
import neptuneLogo from "../../../assets/icons/aws/neptune-logo.svg";
import elastiCacheLogo from "../../../assets/icons/aws/elasticache-logo.svg";
import redshiftLogo from "../../../assets/icons/aws/redshift-logo.svg";
import s3Logo from "../../../assets/icons/aws/s3-logo.svg";
import s3GlacierLogo from "../../../assets/icons/aws/s3glacier-logo.svg";
import ebsLogo from "../../../assets/icons/aws/ebs-logo.svg";
import efsLogo from "../../../assets/icons/aws/efs-logo.svg";
import storageGatewayLogo from "../../../assets/icons/aws/storagegateway-logo.svg";
import fsxLogo from "../../../assets/icons/aws/fsx-logo.svg";
// Azure service icons
import vmLogo from "../../../assets/icons/azure/vm-logo.svg";
import functionsLogo from "../../../assets/icons/azure/functionapps-logo.svg";
import aciLogo from "../../../assets/icons/azure/containerinstances-logo.svg";
import aksLogo from "../../../assets/icons/azure/aks-logo.svg";
import sfcLogo from "../../../assets/icons/azure/sfc-logo.svg";
import springAppsLogo from "../../../assets/icons/azure/springapps-logo.svg";
import sqlDBLogo from "../../../assets/icons/azure/sqldb-logo.svg";
import cosmosDBLogo from "../../../assets/icons/azure/cosmosdb-logo.svg";
import postgresLogo from "../../../assets/icons/azure/postgresql-logo.svg";
import mariaDBLogo from "../../../assets/icons/azure/mariadb-logo.svg";
import redisLogo from "../../../assets/icons/azure/cacheredis-logo.svg";
import synapseLogo from "../../../assets/icons/azure/synapseanalytics-logo.svg";
import queueLogo from "../../../assets/icons/azure/queue-logo.svg";
import fileLogo from "../../../assets/icons/azure/files-logo.svg";
import dataLakeLogo from "../../../assets/icons/azure/datalake-logo.svg";
import netAppLogo from "../../../assets/icons/azure/netappfiles-logo.svg";
// GCP service icons
import computeengineLogo from "../../../assets/icons/gcp/computeengine-logo.svg";
import cloudfunctionsLogo from "../../../assets/icons/gcp/cloudfunctions-logo.svg";
import cloudrunLogo from "../../../assets/icons/gcp/cloudrun-logo.svg";
import gkeLogo from "../../../assets/icons/gcp/gke-logo.svg";
import anthosLogo from "../../../assets/icons/gcp/anthos-logo.svg";
import sqlLogo from "../../../assets/icons/gcp/sql-logo.svg";
import spannerLogo from "../../../assets/icons/gcp/spanner-logo.svg";
import bigtableLogo from "../../../assets/icons/gcp/bigtable-logo.svg";
import firestoreLogo from "../../../assets/icons/gcp/firestore-logo.svg";
import bigqueryLogo from "../../../assets/icons/gcp/bigquery-logo.svg";
import cloudstorageLogo from "../../../assets/icons/gcp/cloudstorage-logo.svg";
import persistentdiskLogo from "../../../assets/icons/gcp/persistentdisk-logo.svg";
import filestoreLogo from "../../../assets/icons/gcp/filestore-logo.svg";
import localssdLogo from "../../../assets/icons/gcp/localssd-logo.svg";
import datastoreLogo from "../../../assets/icons/gcp/datastore-logo.svg";

// AWS Services Configuration
export const awsServiceCards = {
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

// Azure Services Configuration
export const azureServiceCards = {
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

// GCP Services Configuration
export const gcpServiceCards = {
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
