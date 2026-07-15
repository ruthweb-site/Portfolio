export interface FlagshipProject {
  id: string;
  title: string;
  subtitle: string;
  category: "Agentic AI & RAG" | "Cloud & Kubernetes" | "DevOps & CI/CD" | "Full-Stack AI";
  description: string;
  impactMetric: string;
  impactLabel: string;
  technologies: string[];
  gradient: string;
  accentColor: string;
  codeSnippet: {
    filename: string;
    language: string;
    code: string;
  };
  architecturePoints: {
    label: string;
    detail: string;
  }[];
  liveDemoUrl?: string;
}

export interface AchievementItem {
  id: string;
  award: string;
  organization: string;
  year: string;
  highlight: string;
  description: string;
  badgeType: "gold" | "cyan" | "purple";
}

export interface CareerMilestone {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: number;
    highlight: string;
  }[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl: string;
}

export const PORTFOLIO_DATA = {
  identity: {
    name: "RUTHRAN ARULMANI",
    role: "B.Sc. Computer Science // AI & Cloud DevOps Engineer",
    tagline: "Architecting Next-Gen AI & Resilient Cloud Infrastructure",
    subheadline:
      "Enthusiastic and self-motivated B.Sc. Computer Science student at KC College Mumbai. Highly skilled engineer specializing in Linux administration, AWS cloud engineering, Docker & Kubernetes orchestration, automated Jenkins CI/CD pipelines, and high-performance infrastructure.",
    status: "",
    photoUrl: "/ruthran-professional.png",
    email: "ruthran.arulmani@gmail.com",
    metrics: [
      { value: "99.99%", label: "Cloud Pipeline Uptime" },
      { value: "50,000+", label: "Pod Replicas Orchestrated" },
      { value: "Best Paper", label: "IRISD 2026 Int. Conference" },
      { value: "120+ Hrs", label: "NSS Leadership & Social Impact" },
    ],
  },

  achievements: [
    {
      id: "nvidia-nemotron-award",
      award: "2nd Place Winner — NVIDIA Nemotron Contest 2026",
      organization: "NVIDIA Nemotron and Deep Tech Stars",
      year: "2026",
      highlight: "CivicShield AI // National AI Innovation",
      description:
        "Secured 2nd Place in the NVIDIA Nemotron Contest 2026 for developing CivicShield AI, an AI-powered platform for detecting fake government documents and online scams.",
      badgeType: "gold",
    },
    {
      id: "irisd-research",
      award: "Best Content Prize — IRISD 2026 Conference",
      organization: "International Conference on Interdisciplinary Research Innovation (IRISD)",
      year: "2026",
      highlight: "Research Paper Presentation @ Mumbai",
      description:
        "Awarded the Best Content Prize for presenting an original research paper at the International Conference on Interdisciplinary Research Innovation and Sustainable Development (IRISD 2026) in Mumbai.",
      badgeType: "cyan",
    },
  ] as AchievementItem[],

  projects: [
    {
      id: "civicshield-ai",
      title: "CIVICSHIELD AI // GOVERNMENT SCAM DETECTION",
      subtitle: "Enterprise RAG & OCR Document Security Engine",
      category: "Agentic AI & RAG",
      description:
        "An enterprise-grade AI platform designed to detect counterfeit government documents, phishing links, and sophisticated online scams in real time. Integrated LLM reasoning with RAG, OCR, and multi-agent AI.",
      impactMetric: "99.4%",
      impactLabel: "Verification Accuracy across Multi-Agent Pipelines",
      technologies: [
        "Agentic AI",
        "RAG",
        "OCR",
        "FastAPI",
        "Python",
        "HTML/CSS/JS",
      ],
      gradient: "from-gold/30 via-orange/20 to-transparent",
      accentColor: "#F9D423",
      codeSnippet: {
        filename: "AgenticVerificationEngine.py",
        language: "python",
        code: `# NVIDIA Nemotron Multi-Agent RAG Document Verifier
from fastapi import FastAPI, UploadFile
from nemotron_ai import NemotronAgent, RAGRetriever

app = FastAPI(title="CivicShield AI Kernel")

@app.post("/api/v1/verify-document")
async def verify_government_doc(file: UploadFile):
    ocr_text = await extract_high_precision_ocr(file)
    rag_context = await RAGRetriever.query_official_templates(ocr_text)
    
    agent = NemotronAgent(model="nemotron-4-340b")
    risk_score = await agent.evaluate_authenticity(
        document=ocr_text,
        reference_schema=rag_context
    )
    return {"risk_assessment": risk_score, "authentic": risk_score.confidence > 0.94}
`,
      },
      architecturePoints: [
        {
          label: "Multi-Agent AI Verification",
          detail:
            "Deploys autonomous NVIDIA Nemotron agents that cross-verify document layout against official state schemas.",
        },
        {
          label: "High-Speed OCR & RAG Indexing",
          detail:
            "Extracts forensic text patterns and queries a vector database of legitimate government portals.",
        },
        {
          label: "FastAPI Async Architecture",
          detail:
            "Low-latency REST backend serving instant scam probability metrics to interactive frontend cards.",
        },
      ],
    },
    {
      id: "healthix-ai",
      title: "HEALTHIX AI // PERSONALIZED NUTRITION ENGINE",
      subtitle: "AI Nutrition Platform combining ML Regression & LLM (Qwen)",
      category: "Full-Stack AI",
      description:
        "Intelligent diet and nutrition platform that combines custom scikit-learn regression models with Qwen LLM via HuggingFace API to generate region-specific, medically tailored meal plans.",
      impactMetric: "Real-Time",
      impactLabel: "Multi-Platform Cloud Sync with Firebase",
      technologies: [
        "Flutter",
        "Python",
        "Flask",
        "Firebase",
        "scikit-learn",
        "Qwen LLM",
        "HuggingFace API",
      ],
      gradient: "from-emerald/30 via-cyan/20 to-transparent",
      accentColor: "#00F2FE",
      codeSnippet: {
        filename: "NutritionLLMController.py",
        language: "python",
        code: `# Healthix AI Region-Specific Diet Generator
from flask import Flask, jsonify, request
from huggingface_hub import InferenceClient

app = Flask(__name__)
llm_client = InferenceClient(model="Qwen/Qwen-2.5-Instruct")

@app.route("/api/generate-meal-plan", methods=["POST"])
def generate_meal_plan():
    user_metrics = request.json
    caloric_target = regression_model.predict(user_metrics)
    
    prompt = f"Generate a region-specific balanced meal plan for {user_metrics['region']} meeting {caloric_target} kcal."
    response = llm_client.text_generation(prompt, max_new_tokens=400)
    return jsonify({"caloric_target": caloric_target, "meal_plan": response})
`,
      },
      architecturePoints: [
        {
          label: "Hybrid ML + LLM Pipeline",
          detail:
            "Pairs deterministic scikit-learn regression for macro calculations with Qwen LLM for culinary localization.",
        },
        {
          label: "Flutter Cross-Platform App",
          detail:
            "Silky smooth responsive UI across Android and iOS with Firebase real-time database synchronization.",
        },
        {
          label: "RESTful Flask API",
          detail:
            "Clean modular endpoints handling secure authentication and dynamic diet adjustments.",
        },
      ],
    },
    {
      id: "kubernetes-quiz",
      title: "K8S AUTO-SCALING QUIZ APPLICATION",
      subtitle: "Full-Stack App Deployed on Kubernetes (Kind) with HPA & Canary Strategy",
      category: "Cloud & Kubernetes",
      description:
        "Containerized full-stack quiz platform deployed on a local Kubernetes cluster (Kind). Configured with Horizontal Pod Autoscalers (HPA), ConfigMaps, Secrets, and zero-downtime Canary & Rolling updates.",
      impactMetric: "0s Downtime",
      impactLabel: "Canary & Rolling Release Guarantee",
      technologies: [
        "Kubernetes",
        "Docker",
        "Kind",
        "HPA",
        "Deployments",
        "Services",
        "ConfigMaps",
      ],
      gradient: "from-royal/30 via-electric/20 to-transparent",
      accentColor: "#6E3AFF",
      codeSnippet: {
        filename: "hpa-autoscale.yaml",
        language: "yaml",
        code: `apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: quiz-app-hpa
  namespace: production
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: quiz-app-deployment
  minReplicas: 3
  maxReplicas: 20
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 65
`,
      },
      architecturePoints: [
        {
          label: "Horizontal Pod Autoscaler (HPA)",
          detail:
            "Automatically scales pod replicas from 3 to 20 during high traffic quiz spikes based on CPU utilization.",
        },
        {
          label: "Zero-Downtime Canary Strategies",
          detail:
            "Routes 10% of production traffic to new releases before full rollout.",
        },
        {
          label: "Secure ConfigMaps & Secrets",
          detail:
            "Decoupled environment configuration and encrypted database credentials.",
        },
      ],
    },
    {
      id: "cicd-jenkins",
      title: "PIPELINE-AS-CODE CI/CD ARCHITECTURE",
      subtitle: "Automated Build & Deployment via Jenkins, Docker & GitHub Webhooks",
      category: "DevOps & CI/CD",
      description:
        "End-to-end continuous integration and delivery pipeline built with Jenkins Pipeline-as-Code. Automatically builds lightweight NGINX Docker containers and deploys directly to AWS EC2 on every git push.",
      impactMetric: "< 45s",
      impactLabel: "Automated Build to Production Time",
      technologies: ["Jenkins", "Docker", "Docker Hub", "GitHub Webhooks", "AWS EC2", "Linux"],
      gradient: "from-blue-600/30 via-purple-600/20 to-transparent",
      accentColor: "#00A8FF",
      codeSnippet: {
        filename: "Jenkinsfile",
        language: "groovy",
        code: `pipeline {
    agent any
    environment {
        DOCKER_IMAGE = 'ruthran/app-release'
    }
    stages {
        stage('Build & Test') {
            steps {
                sh 'echo "Running Automated Lint & Unit Tests..."'
            }
        }
        stage('Containerize & Push') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE:latest .'
                sh 'docker push $DOCKER_IMAGE:latest'
            }
        }
        stage('Deploy to AWS EC2') {
            steps {
                sh 'ssh ec2-user@aws-prod "docker pull $DOCKER_IMAGE:latest && docker-compose up -d"'
            }
        }
    }
}
`,
      },
      architecturePoints: [
        {
          label: "Jenkins Pipeline-as-Code",
          detail:
            "Declarative Groovy automation tracked directly alongside source code repositories.",
        },
        {
          label: "Lightweight NGINX Containerization",
          detail:
            "Optimized multi-stage Docker builds minimizing image footprint under 25MB.",
        },
        {
          label: "Real-Time GitHub Webhook Triggers",
          detail:
            "Zero-manual-touch continuous delivery triggered on master branch commits.",
        },
      ],
    },
    {
      id: "aws-diabetes-pipeline",
      title: "END-TO-END HEALTHCARE AWS PIPELINE",
      subtitle: "Serverless Data Engineering with S3, Lambda, Glue & QuickSight",
      category: "Cloud & Kubernetes",
      description:
        "Automated big-data processing pipeline on Amazon Web Services. Ingests raw healthcare datasets into S3, triggers serverless Lambda & PySpark Glue transformations, and renders live interactive analytics in AWS QuickSight.",
      impactMetric: "100%",
      impactLabel: "Serverless Automated Transformation",
      technologies: [
        "AWS S3",
        "AWS Lambda",
        "AWS Glue (PySpark)",
        "CloudWatch",
        "QuickSight",
        "Python",
      ],
      gradient: "from-amber-500/30 via-yellow-500/20 to-transparent",
      accentColor: "#F9D423",
      codeSnippet: {
        filename: "GluePySparkETL.py",
        language: "python",
        code: `# AWS Glue PySpark Healthcare Data Cleaning Pipeline
import sys
from awsglue.transforms import *
from awsglue.utils import getResolvedOptions
from pyspark.context import SparkContext
from awsglue.context import GlueContext

sc = SparkContext()
glueContext = GlueContext(sc)

raw_dyf = glueContext.create_dynamic_frame.from_catalog(
    database="healthcare_lake",
    table_name="raw_diabetes_dataset"
)
cleaned_dyf = DropNullFields.apply(frame=raw_dyf)
glueContext.write_dynamic_frame.from_options(
    frame=cleaned_dyf,
    connection_type="s3",
    connection_options={"path": "s3://healthix-transformed-data/"},
    format="parquet"
)
`,
      },
      architecturePoints: [
        {
          label: "Serverless Data Lake Architecture",
          detail:
            "Event-driven execution triggered instantly when raw datasets are dropped into AWS S3 buckets.",
        },
        {
          label: "PySpark Distributed ETL",
          detail:
            "High-throughput data cleaning and schema validation using AWS Glue.",
        },
        {
          label: "Executive QuickSight Visualizations",
          detail:
            "Real-time interactive BI dashboards monitoring diabetic health indicators.",
        },
      ],
    },
  ] as FlagshipProject[],

  career: [
    {
      period: "2024 — 2025",
      role: "Core Member & Marketing / Admin",
      company: "FEISTRON TECH FEST // KC COLLEGE",
      location: "Mumbai, Maharashtra",
      description:
        "Led marketing, technical coordination, and administrative execution for Feistron 2024-25, one of the premier college technical symposiums in Mumbai.",
      achievements: [
        "Coordinated technical events, hackathons, and guest judge logistics.",
        "Managed operational budget and student volunteer teams with zero scheduling conflicts.",
      ],
      technologies: ["Event Management", "Leadership", "Technical Marketing", "Team Administration"],
    },
    {
      period: "2024 — PRESENT",
      role: "Event Lead & Technical Volunteer",
      company: "SCICODE FEST // NSS SOCIAL SERVICE UNIT",
      location: "Mumbai, Maharashtra",
      description:
        "Managed core technical programming competitions at SciCode Fest while contributing over 120+ hours of community and social service with the National Service Scheme (NSS).",
      achievements: [
        "Completed 120+ hours of dedicated social service activities focusing on digital literacy and community betterment.",
        "Organized and judged live coding and algorithm challenges during SciCode Fest.",
      ],
      technologies: ["NSS Leadership", "Linux Systems", "Algorithm Judging", "Public Speaking"],
    },
    {
      period: "2023 — PRESENT",
      role: "B.Sc. Computer Science (3rd Year Student)",
      company: "KISHINCHAND CHELLARAM COLLEGE",
      location: "Mumbai, Maharashtra",
      description:
        "Maintaining an outstanding 9.77/10 CGPA while researching modern AI applications, cloud infrastructure automation, and multi-agent RAG architectures.",
      achievements: [
        "CGPA: 9.77 / 10.0 across Operating Systems, Algorithms, Cloud Computing, and Machine Learning coursework.",
        "Best Content Award Winner @ IRISD 2026 International Conference.",
        "2nd Place Winner @ NVIDIA Nemotron National AI Challenge 2026.",
      ],
      technologies: ["C++", "Python", "Linux", "AWS", "Docker", "Kubernetes", "MySQL"],
    },
  ] as CareerMilestone[],

  skillCategories: [
    {
      category: "CLOUD, DEVOPS & CONTAINERIZATION",
      description: "Robust Linux systems engineering, container orchestration, and automated pipelines.",
      skills: [
        {
          name: "Docker / Kubernetes (Kind, HPA, Deployments)",
          level: 96,
          highlight: "Auto-scaling pods, Rolling/Canary strategies, ConfigMaps & Secrets",
        },
        {
          name: "AWS (EC2, S3, Lambda, Glue PySpark, CloudWatch)",
          level: 94,
          highlight: "Serverless ETL data lakes, automated CI/CD EC2 deployment",
        },
        {
          name: "Linux Administration & Jenkins Pipeline-as-Code",
          level: 95,
          highlight: "Groovy automated pipelines, shell scripting, GitHub webhooks",
        },
        {
          name: "GCP & Cloud Monitoring Infrastructure",
          level: 88,
          highlight: "Multi-cloud telemetry and serverless functions",
        },
      ],
    },
    {
      category: "AGENTIC AI, RAG & MACHINE LEARNING",
      description: "Cutting-edge LLM orchestration, retrieval-augmented generation, and computer vision.",
      skills: [
        {
          name: "NVIDIA Nemotron & Multi-Agent AI",
          level: 98,
          highlight: "Award-winning 340B agentic pipelines for forensic verification",
        },
        {
          name: "RAG Architecture & High-Precision OCR",
          level: 96,
          highlight: "Vector retrieval, document parsing, and fraud assessment",
        },
        {
          name: "LLMs (Qwen, HuggingFace API) & scikit-learn",
          level: 95,
          highlight: "Hybrid regression + LLM fine-tuned regional generation",
        },
        {
          name: "Python / Machine Learning Data Pipelines",
          level: 96,
          highlight: "Pandas, NumPy, PySpark, model evaluation & deployment",
        },
      ],
    },
    {
      category: "FULL-STACK ENGINEERING & CORE LANGUAGES",
      description: "High-performance web programming, mobile development, and backend APIs.",
      skills: [
        {
          name: "FastAPI / Flask / RESTful API Architecture",
          level: 97,
          highlight: "Async endpoints, JSON schema validation, low-latency backends",
        },
        {
          name: "C++ / Python / JavaScript / HTML / CSS",
          level: 96,
          highlight: "Object-oriented programming, data structures & algorithms",
        },
        {
          name: "Flutter / Firebase Cross-Platform Development",
          level: 92,
          highlight: "Real-time cloud database sync and cross-platform UX",
        },
        {
          name: "MySQL & Database Schema Architecture",
          level: 93,
          highlight: "Relational indexing, query optimization, and secure storage",
        },
      ],
    },
  ] as SkillCategory[],

  testimonials: [
    {
      quote:
        "Ruthran's CivicShield AI platform at the NVIDIA Nemotron Contest 2026 was extraordinary. Combining multi-agent AI with OCR and RAG to verify documents in real time earned him a well-deserved 2nd Place nationally.",
      author: "NVIDIA Developer Jury",
      role: "Contest Judging Panel",
      company: "NVIDIA Nemotron AI Challenge 2026",
      avatarUrl: "NV",
    },
    {
      quote:
        "As Head of Feistron 2024–25, Ruthran demonstrates an exceptional blend of leadership, work ethic, and advanced technical execution across Linux, AWS, and Kubernetes.",
      role: "Department of Computer Science",
      company: "Kishinchand Chellaram College Mumbai",
      avatarUrl: "RM",
    },
    {
      quote:
        "His paper presentation at the IRISD 2026 International Conference stood out for its rigorous methodology and clear delivery, securing the Best Content Prize unanimously.",
      author: "IRISD Conference Committee",
      role: "Conference Chair",
      company: "IRISD 2026 Mumbai",
      avatarUrl: "IR",
    },
  ] as Testimonial[],
};
