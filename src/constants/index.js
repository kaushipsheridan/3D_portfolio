import { meta, shopify, RexLogo, TownOfOakville } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    python,
    java,
    sql,
    postgresql,
    mysql,
    pytorch,
    tensorflow,
    scikitlearn,
    langchain,
    gemini,
    claude,
    rag,
    computervision,
    springboot,
    fastapi,
    flask,
    restapi,
    aws,
    gcp,
    docker,
    cicd,
    mlflow,
    junit,
    kubernetes,
    threejs,
    angular,
    flutter
} from "../assets/icons";


export const skillCategories = [
    {
        title: "Languages & Databases",
        skills: [
            { imageUrl: python, name: "Python" },
            { imageUrl: java, name: "Java" },
            { imageUrl: javascript, name: "JavaScript" },
            { imageUrl: sql, name: "SQL" },
            { imageUrl: postgresql, name: "PostgreSQL" },
            { imageUrl: mysql, name: "MySQL" },
            { imageUrl: mongodb, name: "MongoDB" },
        ],
    },
    {
        title: "ML/AI & Backend",
        skills: [
            { imageUrl: pytorch, name: "PyTorch" },
            { imageUrl: tensorflow, name: "TensorFlow" },
            { imageUrl: scikitlearn, name: "scikit-learn" },
            { imageUrl: langchain, name: "LangChain" },
            { imageUrl: gemini, name: "Gemini" },
            { imageUrl: claude, name: "Claude" },
            { imageUrl: rag, name: "RAG" },
            { imageUrl: computervision, name: "Computer Vision" },
            { imageUrl: springboot, name: "Spring Boot" },
            { imageUrl: fastapi, name: "FastAPI" },
            { imageUrl: flask, name: "Flask" },
            { imageUrl: restapi, name: "RESTful APIs" },
        ],
    },
    {
        title: "Cloud, DevOps & Testing",
        skills: [
            { imageUrl: aws, name: "AWS" },
            // Replace meta.png with gcp.svg.
            { imageUrl: gcp, name: "GCP" },
            // Replace git.svg with docker.svg.
            { imageUrl: docker, name: "Docker" },
            { imageUrl: cicd, name: "CI/CD" },
            // Replace pricewise.svg with mlflow.svg.
            { imageUrl: mlflow, name: "MLflow" },
            { imageUrl: junit, name: "JUnit" },
            { imageUrl: kubernetes, name: "Kubernetes" },
        ],
    },
    {
        title: "Frontend",
        skills: [
            { imageUrl: react, name: "React" },
            { imageUrl: threejs, name: "Three.js" },
            { imageUrl: nextjs, name: "Next.js" },
            { imageUrl: angular, name: "Angular" },
            { imageUrl: flutter, name: "Flutter" },
        ],
    },
];

export const experiences = [
    {
        title: "Software Engineer Intern - Machine Learning and Backend",
        company_name: "Rex Power Magnetics",
        icon: RexLogo, 
        iconBg: "#accbe1",
        date: "Sept 2024 - Dec 2025",
        points: [
            "Built production REST APIs with Spring Boot for transaction processing, reducing system downtime by 35% and code duplication by 45% through modular, reusable microservices",
            "Owned the SDLC from development through production deployment and support, running Docker-based CI/CD pipelines(GitHub Actions) that cut deployment time by 40%.",
            "Designed JUnit test suites for comprehensive coverage, cutting production incidents by 50% from a baseline of 8 monthly defects, as part of a 2-engineer team under senior technical guidance.",
            "Engineered a computer-vision pipeline in PyTorch and TensorRT to detect metal-sheet patterns and calculate dimensions in real time, cutting processing latency from 250ms to 150ms (40%)",
        ],
    },
    {
        title: "Data Science and Full Stack Intern",
        company_name: "Town of Oakville",
        icon: TownOfOakville, 
        iconBg: "#fbc3bc",
        date: "Jan 2024 - Aug 2024",
        points: [
            "Developed RESTful APIs for account management across 80+ distributed systems citywide, supporting real-time data synchronization for over 10,000 vehicle records processed daily.",
            "Built responsive web interfaces with HTML5, CSS3, and JavaScript, improving user experience for ~2,500 daily end users.",
            "Collaborated with cross-functional teams to deliver technical documentation supporting the integration lifecycle across city systems.",
            "Engineered a license-plate OCR and recognition pipeline as part of a 3-engineer detection team, raising accuracy from a 93% baseline to 97% by resolving edge-case failures that corrupted downstream output data.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/kaushipsheridan',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/priyanshu-kaushik/',
    }
];

export const projects = [
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'HealthCare RAG Assistant',
        description: 'Built a healthcare RAG assistant using LangChain, Gemini, and ChromaDB that delivers source-grounded answers from clinical documents through semantic search and retrieval-augmented generation.',
        link: 'https://github.com/kaushipsheridan/Healthcare-RAG.git',
    },
    
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'First Aid',
        description: 'Built a Flutter, FastAPI, and AI-driven healthcare platform that assesses symptom severity and recommends nearby clinics, urgent care centres, and virtual consultations.',
        link: 'https://github.com/kaushipsheridan/CheckUpPlus_Capstone.git',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: '3D - Personal Portfolio Website',
        description: 'Designed and deployed my personal portfolio website using React, Three.js, and React Three Fiber, delivering an immersive 3D experience with interactive animations and modern web performance.',
        link: 'https://github.com/kaushipsheridan/3D-Portfolio.git',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Banking - API and Web Application',
        description: 'A production-grade REST API simulating core banking operations, built with Java and Spring Boot. Fully deployed on GCP Cloud Run with CI/CD automation.',
        link: 'https://github.com/kaushipsheridan/banking-api.git',
    }
];