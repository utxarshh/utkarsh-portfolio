export const profile = {
  name: "Utkarsh Anand",
  title: "Data Engineer",
  tagline: "Designing scalable data platforms on Snowflake and Azure",
  location: "Bengaluru, India",
  phone: "+91 9122914936",
  email: "utxarshh@gmail.com",
  github: {
    label: "utxarshh",
    href: "https://github.com/utxarshh",
  },
} as const;

export const summary = {
  headline: "About",
  body:
    "Data Engineer with experience designing and operating production-grade data platforms on Snowflake and Azure. Specialized in scalable ELT pipelines with dbt, dimensional modeling, and warehouse performance and cost optimization. Strong on orchestration, testing discipline, and CI/CD-driven deployments—translating business logic into maintainable, analytics-ready models.",
  bullets: [
    "ELT pipelines & incremental processing",
    "dbt, dimensional models, SCD Type 2",
    "Snowflake tuning, clustering, cost control",
  ],
} as const;

export type PipelineNodeId =
  | "azure_blob"
  | "snowflake"
  | "dbt"
  | "airflow"
  | "bi";

export type PipelineNode = {
  id: PipelineNodeId;
  label: string;
  short: string;
  description: string;
  tech: string[];
};

export const pipelineNodes: PipelineNode[] = [
  {
    id: "azure_blob",
    label: "Data Sources",
    short: "Ingest",
    description:
      "Generic ingestion layer for file and database sources before warehouse loading.",
    tech: ["Azure Blob / ADLS", "Relational Sources", "Azure Data Factory", "Key Vault"],
  },
  {
    id: "snowflake",
    label: "Snowflake",
    short: "Warehouse",
    description:
      "Central analytics store with right-sized virtual warehouses and query optimization.",
    tech: ["Snowflake", "Clustering", "Warehouse tuning"],
  },
  {
    id: "dbt",
    label: "dbt",
    short: "Transform",
    description:
      "Versioned transformations, incremental models, and dimensional marts for analytics consumption.",
    tech: ["dbt", "SCD Type 2", "Dimensional models"],
  },
  {
    id: "airflow",
    label: "Airflow",
    short: "Orchestrate",
    description:
      "DAG-based scheduling with dependency controls, retries, and monitoring across jobs.",
    tech: ["Apache Airflow", "Scheduling", "Dependency management"],
  },
  {
    id: "bi",
    label: "BI",
    short: "Consume",
    description:
      "Analytics-ready outputs for dashboarding and KPI tracking with reliable datasets.",
    tech: ["Power BI", "Sigma", "KPI standardization"],
  },
];

export type ExperienceId = "tiger" | "zenarate" | "outfront";

export type ExperienceNode = {
  id: ExperienceId;
  title: string;
  company: string;
  location: string;
  period: string;
  role: string;
  impact: string;
  tech: string[];
  responsibilities: string[];
};

export const experienceNodes: ExperienceNode[] = [
  {
    id: "tiger",
    title: "Senior Software Engineer",
    company: "Tiger Analytics",
    location: "Bengaluru",
    period: "Feb 2025 — Present",
    role: "Data platform engineering",
    impact:
      "Built and operated production Snowflake + dbt systems with measurable cost and reliability gains.",
    tech: ["Azure Blob", "Snowflake", "dbt", "Airflow", "SQL", "Python"],
    responsibilities: [
      "Owned ingestion-to-mart architecture across staging, intermediate, and reporting layers.",
      "Implemented incremental pipelines and SCD Type 2 snapshots for historical correctness at scale.",
      "Reduced warehouse cost through query tuning, clustering strategy, and right-sized compute.",
      "Set up robust checks with dbt tests and source-level health checks for critical models.",
      "Worked with analysts on dimensional models and stable KPI definitions.",
    ],
  },
  {
    id: "zenarate",
    title: "Associate Software Engineer",
    company: "Zenarate",
    location: "Gurgaon, India",
    period: "Jan 2024 — Feb 2025",
    role: "Analytics workflow engineering",
    impact:
      "Shipped SQL/Python validation workflows that improved release confidence and debugging speed.",
    tech: ["SQL", "Python", "Snowflake", "dbt", "Jenkins", "Selenium"],
    responsibilities: [
      "Built Python utilities for analytics and reporting operations.",
      "Created reconciliation SQL and checks for cross-system consistency.",
      "Contributed to Snowflake/dbt transformations and production issue triage.",
      "Supported cross-environment data verification during deployments.",
    ],
  },
  {
    id: "outfront",
    title: "Data Engineer",
    company: "Outfront",
    location: "Remote",
    period: "Jan 2022 — Dec 2023",
    role: "Transformation and modeling",
    impact:
      "Developed reusable dbt transformation patterns and dimensional models for scalable reporting.",
    tech: ["Snowflake", "dbt", "SQL", "Macros", "Dimensional Modeling"],
    responsibilities: [
      "Built Snowflake transformations from raw ingestion to reporting outputs.",
      "Created reusable dbt macros and modular model structure for consistency.",
      "Implemented incremental + SCD Type 2 patterns for reprocessing efficiency.",
      "Partnered with stakeholders to model facts and dimensions for dashboards.",
    ],
  },
];

export const experienceDagOrder: ExperienceId[] = ["outfront", "zenarate", "tiger"];

export type ProjectId = "medallion" | "azure_databricks" | "azure_snowflake";

export type ProjectRow = {
  id: ProjectId;
  name: string;
  tech: string[];
  description: string;
  architecture: string[];
  tools: string[];
};

export const projects: ProjectRow[] = [
  {
    id: "medallion",
    name: "Medallion Architecture Data Platform",
    tech: ["Snowflake", "dbt Cloud", "Airflow", "SQL", "Python"],
    description:
      "Built a bronze → silver → gold system for clean lineage and reliable business datasets.",
    architecture: [
      "Bronze ingestion for raw source capture.",
      "Silver standardization for cleaned, conformed entities.",
      "Gold marts for analytics and KPI-ready outputs.",
      "Airflow orchestration with retry and dependency controls.",
    ],
    tools: ["Snowflake", "dbt Cloud", "Airflow", "SQL", "Python"],
  },
  {
    id: "azure_databricks",
    name: "Azure Data Pipeline with Databricks & Delta Lake",
    tech: ["Azure Data Factory", "ADLS", "Databricks", "PySpark", "Delta Lake"],
    description:
      "Implemented ingestion and processing on Azure with Delta-backed reliability.",
    architecture: [
      "Source ingestion through ADF into ADLS.",
      "Transformations in Databricks with PySpark jobs.",
      "Delta Lake storage for ACID guarantees and schema evolution.",
      "Secure secrets and reusable pipeline parameterization.",
    ],
    tools: ["Azure Data Factory", "ADLS", "Databricks", "PySpark", "Delta Lake"],
  },
  {
    id: "azure_snowflake",
    name: "Cross-Platform ELT (Azure → Snowflake)",
    tech: ["Azure Blob", "Python", "Airflow", "Snowflake", "dbt"],
    description:
      "Designed cross-cloud ELT to move and transform Azure data for Snowflake analytics.",
    architecture: [
      "Ingested source drops from Azure Blob into Snowflake landing tables.",
      "Scheduled dependencies in Airflow for reliable batch execution.",
      "Modeled incremental dimensional outputs with dbt.",
    ],
    tools: ["Azure Blob", "Python", "Airflow", "Snowflake", "dbt"],
  },
];

export const skillStack = {
  core: [
    "Snowflake",
    "dbt",
    "Apache Airflow",
    "Azure Data Factory",
    "Python",
    "SQL",
    "Streamlit",
  ],
  secondary: ["Databricks", "ADLS", "Delta Lake", "PostgreSQL"],
  additional: ["Power BI", "Sigma", "Git", "Jenkins", "Bash", "SQL Server"],
} as const;
