import BoltIcon from "@mui/icons-material/Bolt";
import StorageIcon from "@mui/icons-material/Storage";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import SecurityIcon from "@mui/icons-material/Security";
import NetworkCheckIcon from "@mui/icons-material/NetworkCheck";

// AWS Scenarios Configuration
export const awsScenarios = {
  // EC2 Scenarios
  ec2: [
    {
      id: "ec2_cpu_stress",
      name: "CPU Stress Test",
      description: "Simulate high CPU load on EC2 instances",
      icon: <BoltIcon className="w-6 h-6" />,
    },
    {
      id: "ec2_memory_leak",
      name: "Memory Leak Simulation",
      description: "Simulate memory leaks in EC2 instances",
      icon: <StorageIcon className="w-6 h-6" />,
    },
    {
      id: "ec2_network_latency",
      name: "Network Latency",
      description: "Introduce network latency between EC2 instances",
      icon: <NetworkCheckIcon className="w-6 h-6" />,
    },
  ],
  // Lambda Scenarios
  lambda: [
    {
      id: "lambda_timeout",
      name: "Function Timeout",
      description: "Test function behavior on timeout",
      icon: <BoltIcon className="w-6 h-6" />,
    },
    {
      id: "lambda_concurrent",
      name: "Concurrent Executions",
      description: "Test concurrent function executions",
      icon: <CloudQueueIcon className="w-6 h-6" />,
    },
  ],
  // RDS Scenarios
  rds: [
    {
      id: "rds_failover",
      name: "Database Failover",
      description: "Test RDS failover mechanism",
      icon: <StorageIcon className="w-6 h-6" />,
    },
    {
      id: "rds_connection_leak",
      name: "Connection Pool Exhaustion",
      description: "Simulate database connection pool exhaustion",
      icon: <SecurityIcon className="w-6 h-6" />,
    },
  ],
};

// Azure Scenarios Configuration
export const azureScenarios = {
  // Virtual Machines Scenarios
  vm: [
    {
      id: "vm_resource_exhaustion",
      name: "Resource Exhaustion",
      description: "Simulate resource exhaustion in VMs",
      icon: <BoltIcon className="w-6 h-6" />,
    },
    {
      id: "vm_disk_failure",
      name: "Disk Failure",
      description: "Simulate disk failures in VMs",
      icon: <StorageIcon className="w-6 h-6" />,
    },
    {
      id: "vm_network_partition",
      name: "Network Partition",
      description: "Test VM behavior during network partitions",
      icon: <NetworkCheckIcon className="w-6 h-6" />,
    },
  ],
  // Azure Functions Scenarios
  functions: [
    {
      id: "func_cold_start",
      name: "Cold Start Impact",
      description: "Test function cold start performance",
      icon: <BoltIcon className="w-6 h-6" />,
    },
    {
      id: "func_scaling",
      name: "Auto-scaling Test",
      description: "Test function auto-scaling behavior",
      icon: <CloudQueueIcon className="w-6 h-6" />,
    },
  ],
  // Azure SQL Scenarios
  sqldb: [
    {
      id: "sql_failover",
      name: "Database Failover",
      description: "Test SQL Database failover scenarios",
      icon: <StorageIcon className="w-6 h-6" />,
    },
    {
      id: "sql_security",
      name: "Security Testing",
      description: "Test SQL Database security measures",
      icon: <SecurityIcon className="w-6 h-6" />,
    },
  ],
};

// GCP Scenarios Configuration
export const gcpScenarios = {
  // Compute Engine Scenarios
  computeEngine: [
    {
      id: "ce_instance_failure",
      name: "Instance Failure",
      description: "Simulate instance failures in Compute Engine",
      icon: <BoltIcon className="w-6 h-6" />,
    },
    {
      id: "ce_zone_outage",
      name: "Zone Outage",
      description: "Test behavior during zone outages",
      icon: <CloudQueueIcon className="w-6 h-6" />,
    },
    {
      id: "ce_network_issues",
      name: "Network Issues",
      description: "Simulate various network problems",
      icon: <NetworkCheckIcon className="w-6 h-6" />,
    },
  ],
  // Cloud Functions Scenarios
  cloudFunctions: [
    {
      id: "cf_memory_limits",
      name: "Memory Limits",
      description: "Test function memory limitations",
      icon: <StorageIcon className="w-6 h-6" />,
    },
    {
      id: "cf_cold_start",
      name: "Cold Start",
      description: "Analyze cold start performance",
      icon: <BoltIcon className="w-6 h-6" />,
    },
  ],
  // Cloud SQL Scenarios
  cloudSql: [
    {
      id: "sql_high_load",
      name: "High Load Test",
      description: "Test database under high load",
      icon: <BoltIcon className="w-6 h-6" />,
    },
    {
      id: "sql_backup_recovery",
      name: "Backup & Recovery",
      description: "Test backup and recovery procedures",
      icon: <SecurityIcon className="w-6 h-6" />,
    },
  ],
};
