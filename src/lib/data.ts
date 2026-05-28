export const profile = {
  name: "Utkarsh Anand",
  title: "Data Engineer",
  tagline:
    "I am a data engineer who leverages AI to ship faster and make systems 10x more efficient — building reliable pipelines that scale without breaking.",
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
    "Data Engineer who architects production-grade platforms on Snowflake, Azure, and dbt — then builds AI agents that automate the grunt work most teams ignore. I've cut warehouse costs by optimizing compute strategy, shipped incremental pipelines processing millions of rows daily, and designed dimensional models that analysts actually trust. Recently, I've been combining agentic AI with data engineering to solve problems like autonomous documentation, governance automation, and intelligent pipeline monitoring. I care about systems that are correct, fast, and cheap to run — in that order.",
  bullets: [
    "Production ELT at scale — incremental loads, SCD Type 2, warehouse cost control",
    "AI-augmented data ops — agentic workflows, autonomous documentation, LLM pipelines",
    "End-to-end ownership — ingestion, modeling, orchestration, CI/CD, BI delivery",
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
      "Production ingestion layer handling file drops, CDC streams, and API extracts — landing raw data into cloud storage with retry logic, schema validation, and secret management.",
    tech: ["Azure Blob / ADLS", "Azure Data Factory", "Key Vault", "REST APIs", "CDC"],
  },
  {
    id: "snowflake",
    label: "Snowflake",
    short: "Warehouse",
    description:
      "Central analytics warehouse with cost-optimized multi-cluster compute, micro-partition clustering for sub-second queries, and role-based access control across environments.",
    tech: ["Snowflake", "Clustering", "Multi-cluster warehouses", "RBAC", "Query profiling"],
  },
  {
    id: "dbt",
    label: "dbt",
    short: "Transform",
    description:
      "Version-controlled transformation layer with incremental processing, SCD Type 2 snapshots, and Kimball-style dimensional models — all tested with 200+ data quality assertions.",
    tech: ["dbt Core / Cloud", "SCD Type 2", "Dimensional modeling", "Custom macros", "dbt tests"],
  },
  {
    id: "airflow",
    label: "Airflow",
    short: "Orchestrate",
    description:
      "DAG-based orchestration managing cross-system dependencies, backfill operations, SLA monitoring, and alerting — with dynamic task generation for multi-tenant pipelines using Airflow and Control M.",
    tech: ["Apache Airflow", "Control M", "Dynamic DAGs", "SLA monitoring", "Backfill", "Alerting"],
  },
  {
    id: "bi",
    label: "BI",
    short: "Consume",
    description:
      "Semantic layer and consumption endpoints serving governed, analytics-ready datasets to dashboards and self-serve exploration tools with certified KPI definitions.",
    tech: ["Power BI", "Sigma", "Semantic layer", "KPI governance", "Data contracts"],
  },
];

export type ExperienceId = "tiger" | "zenarate" | "freelance";

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
    location: "Bengaluru, India",
    period: "Feb 2025 — Present",
    role: "Senior Software Engineer",
    impact:
      "Architecting and operating enterprise-scale Snowflake + dbt platforms processing millions of records daily, while introducing AI-augmented data ops to eliminate manual documentation and monitoring overhead.",
    tech: ["Azure Blob", "Snowflake", "dbt", "Airflow", "Python", "n8n", "Agentic AI"],
    responsibilities: [
      "Own the full ingestion-to-mart architecture — designed staging, intermediate, and reporting layers serving 15+ downstream dashboards with zero data incidents.",
      "Engineered incremental pipelines and SCD Type 2 snapshots that reduced daily processing time by 60% while maintaining historical correctness across 50M+ row tables.",
      "Cut Snowflake compute costs by 35% through query profiling, strategic clustering keys, and right-sizing warehouse auto-suspend policies.",
      "Built 200+ dbt tests and source freshness checks that catch data quality issues before they reach analysts — achieving 99.7% pipeline reliability.",
      "Introduced agentic AI tooling (n8n + Gemini) to auto-generate dbt documentation, reducing documentation debt from 60% to under 10% across the project.",
      "Collaborate directly with analytics leads to design Kimball-style dimensional models and enforce stable KPI definitions used in executive reporting.",
    ],
  },
  {
    id: "zenarate",
    title: "Associate Software Engineer",
    company: "Zenarate",
    location: "Gurgaon, India",
    period: "Jan 2024 — Feb 2025",
    role: "Associate Software Engineer",
    impact:
      "Built the validation and reconciliation infrastructure that became the team's standard for deployment confidence — cutting production data incidents by 40% and debugging time from hours to minutes.",
    tech: ["SQL", "Python", "Snowflake", "dbt", "Jenkins", "Selenium", "Streamlit"],
    responsibilities: [
      "Designed Python-based data reconciliation framework that automated cross-system consistency checks across 3 environments, replacing 8 hours/week of manual QA.",
      "Built SQL validation pipelines that ran pre-deployment checks on Snowflake transformations — catching 95% of data drift issues before production release.",
      "Owned Snowflake/dbt transformation layer: optimized slow-running models, implemented incremental loads, and triaged production incidents with root-cause analysis.",
      "Created Streamlit-based internal dashboards for real-time pipeline monitoring, giving the team visibility into job status, data freshness, and reconciliation results.",
      "Established CI/CD practices with Jenkins for automated dbt model testing on every PR, reducing deployment failures by 50%.",
    ],
  },
  {
    id: "freelance",
    title: "Data Engineer",
    company: "Freelance",
    location: "Remote",
    period: "Jan 2022 — Dec 2023",
    role: "Data Engineer",
    impact:
      "Delivered end-to-end data platforms for 4 clients — from raw ingestion to BI-ready models — while prototyping AI-powered data tools that became the foundation for my agentic engineering work.",
    tech: ["Snowflake", "dbt", "SQL", "Python", "Airflow", "n8n", "LangGraph", "Lovable"],
    responsibilities: [
      "Architected Snowflake data warehouses from scratch for multiple clients, designing bronze/silver/gold medallion layers with reusable dbt macros and modular project structure.",
      "Built incremental + SCD Type 2 transformation patterns that clients reused across 20+ models, eliminating full-refresh bottlenecks and cutting compute costs by 40%.",
      "Designed and deployed Airflow DAGs for multi-source ingestion pipelines, handling file drops, API extracts, and database CDC with retry logic and SLA alerting.",
      "Prototyped AI-augmented data workflows using LangGraph for multi-step reasoning chains and n8n for event-driven automation — early experiments that evolved into the Agentic dbt Librarian.",
      "Built client-facing data apps and dashboards using Lovable and Streamlit, translating complex pipeline outputs into interactive tools that non-technical stakeholders could self-serve.",
      "Modeled facts and dimensions following Kimball methodology, partnering with business stakeholders to define conformed dimensions used across finance, operations, and marketing analytics.",
    ],
  },
];

export const experienceDagOrder: ExperienceId[] = ["freelance", "zenarate", "tiger"];

export type ProjectId = "agentic_dbt_librarian" | "medallion" | "azure_databricks" | "azure_snowflake";

export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectRow = {
  id: ProjectId;
  name: string;
  tech: string[];
  description: string;
  architecture: string[];
  tools: string[];
  links?: ProjectLink[];
};

export const projects: ProjectRow[] = [
  {
    id: "agentic_dbt_librarian",
    name: "Agentic dbt Librarian",
    tech: ["n8n", "Gemini AI", "GitHub API", "Python", "dbt", "YAML"],
    description:
      "An autonomous AI agent that eliminates documentation debt in dbt projects. On every git push, it detects undocumented models, fetches SQL + lineage context, generates business-context schema.yml via Gemini AI using Impact Prompting, and opens a Pull Request for human review — all within 30 seconds. Includes a CI-integrated Gap Finder that risk-scores documentation debt and auto-opens GitHub Issues for critical coverage gaps.",
    architecture: [
      "GitHub webhook triggers n8n agentic workflow on every push containing .sql model files.",
      "Parallel fetch of raw SQL and compiled manifest.json for upstream/downstream lineage context.",
      "Gemini AI generates schema.yml using Impact Prompting — every description answers: what is it, why does it exist, what breaks if it's wrong.",
      "Output YAML is parsed, validated, committed to a new branch, and a PR is opened automatically with a structured review template.",
      "CI pipeline runs Gap Finder (Python scanner) on every push, generating risk-scored DOCS_AUDIT.md and opening Issues for critical undocumented models.",
      "Zero-dependency governance dashboard visualizes coverage metrics, risk distribution, and documentation trends in real-time.",
    ],
    tools: ["n8n", "Gemini AI", "GitHub Actions", "Python", "dbt", "YAML"],
    links: [
      { label: "Live Demo", href: "https://utxarshh.github.io/agentic-dbt-librarian/demo.html" },
      { label: "GitHub", href: "https://github.com/utxarshh/agentic-dbt-librarian" },
    ],
  },
  {
    id: "medallion",
    name: "Medallion Architecture Data Platform",
    tech: ["Snowflake", "dbt Cloud", "Airflow", "SQL", "Python"],
    description:
      "Production-grade data platform built on the medallion pattern (bronze → silver → gold) serving 15+ downstream dashboards. Processes 10M+ rows daily with incremental loads, enforces data quality through 200+ automated tests, and delivers Kimball-style dimensional models that analysts trust for executive reporting.",
    architecture: [
      "Bronze layer captures raw source data with full-fidelity schema preservation — handling late-arriving records and schema drift gracefully.",
      "Silver layer applies business rules, deduplication, and type casting to produce conformed, audit-ready entities with SCD Type 2 history tracking.",
      "Gold marts expose Kimball-style facts and dimensions optimized for BI tools — with pre-aggregated summary tables for sub-second dashboard rendering.",
      "Airflow orchestrates the full DAG with dynamic task generation, cross-layer dependency tracking, SLA monitoring, and Slack alerting on failures.",
      "dbt Cloud runs CI on every PR with automated testing, documentation generation, and environment-aware deployments across dev/staging/prod.",
    ],
    tools: ["Snowflake", "dbt Cloud", "Airflow", "SQL", "Python"],
  },
  {
    id: "azure_databricks",
    name: "Azure Data Pipeline with Databricks & Delta Lake",
    tech: ["Azure Data Factory", "ADLS", "Databricks", "PySpark", "Delta Lake"],
    description:
      "Enterprise-scale Azure data pipeline processing multi-TB datasets through a lakehouse architecture. ADF handles 50+ source ingestions, Databricks runs distributed PySpark transformations, and Delta Lake provides ACID guarantees with time-travel for auditability — all secured with Key Vault integration and RBAC.",
    architecture: [
      "Azure Data Factory orchestrates 50+ parameterized pipelines with source-specific ingestion patterns, watermark-based incremental loads, and automatic retry handling.",
      "ADLS Gen2 serves as the durable storage layer with hierarchical namespace, lifecycle policies, and zone-based access control (raw/curated/consumption).",
      "Databricks clusters run PySpark jobs for heavy transformations — deduplication, enrichment joins, and feature engineering — with auto-scaling for cost efficiency.",
      "Delta Lake provides ACID transactions, schema enforcement, and time-travel queries — enabling point-in-time rollbacks and audit compliance.",
      "Key Vault manages all credentials and connection strings centrally, with managed identity integration eliminating plaintext secrets from pipelines.",
    ],
    tools: ["Azure Data Factory", "ADLS Gen2", "Databricks", "PySpark", "Delta Lake", "Key Vault"],
  },
  {
    id: "azure_snowflake",
    name: "Cross-Platform ELT (Azure → Snowflake)",
    tech: ["Azure Blob", "Python", "Airflow", "Snowflake", "dbt"],
    description:
      "Cross-cloud ELT platform that bridges Azure data sources into Snowflake for unified analytics. Custom Python extractors pull from Azure Blob, REST APIs, and database CDC — Airflow orchestrates the flow, and dbt models the data into dimensional marts consumed by 8 analytics teams across the organization.",
    architecture: [
      "Custom Python extractors handle Azure Blob file drops, REST API pagination, and database CDC with idempotent load patterns — ensuring exactly-once delivery semantics.",
      "Airflow DAGs manage cross-cloud dependencies with sensor-based triggering, configurable backfill windows, and automatic retry with exponential backoff.",
      "Snowflake external stages and COPY INTO commands handle high-throughput bulk loading with file-level deduplication and load metadata tracking.",
      "dbt models implement incremental dimensional marts with merge-based upserts, conformed dimensions, and business-logic encapsulation in reusable macros.",
      "End-to-end data contracts enforce schema compatibility between Azure producers and Snowflake consumers — breaking changes are caught in CI before deployment.",
    ],
    tools: ["Azure Blob", "Python", "Airflow", "Snowflake", "dbt", "Data Contracts"],
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
  ai: [
    "AI Agents",
    "antigravity",
    "codex",
    "cursor",
    "LLM Integration",
    "LangGraph",
    "Lovable",
    "multi agent systems",
    "n8n",
    "Prompt Engineeering",
    "RAG",
    "Snowflake Cortex AI",
    "tocken optimisation",
    "Vector Database",
  ],
  secondary: ["Databricks", "ADLS", "Delta Lake", "PostgreSQL", "PySpark"],
  additional: ["Power BI", "Sigma", "Git", "Jenkins", "Bash", "Docker", "Azure DevOps"],
} as const;
