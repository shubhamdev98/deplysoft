"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight, ChevronDown, ArrowUpRight } from "lucide-react";
import GsapButton from "@/components/ui/GsapButton";
import logoImg from "../../public/logo.png";

interface MegaDetailItem {
  name: string;
  desc: string;
  href: string;
}

interface MegaCategory {
  id: string;
  title: string;
  items: MegaDetailItem[];
}

interface MegaMenuData {
  taglineTitle: string;
  taglineDesc: string;
  badge: string;
  exploreTitle: string;
  exploreLinks: { label: string; href: string }[];
  categoriesTitle: string;
  categories: MegaCategory[];
}

// Full Mega Menu Data for Services, AI/ML, and Hire Developers
const MEGA_MENUS: Record<string, MegaMenuData> = {
  "Hire Developers": {
    taglineTitle: "Making IT Extraordinary",
    taglineDesc:
      "At Deplysoft, we mix knowledge and experience to work as a value added product engineering team to design and build your disruptive digital products in an absolutely efficient way.",
    badge: "#BuildYourNextWithUs",
    exploreTitle: "READY TO EXPLORE?",
    exploreLinks: [
      { label: "About Us", href: "#about" },
      { label: "Solutions", href: "#solutions" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Careers", href: "#careers" },
      { label: "Blog", href: "#blog" },
      { label: "Become A Partner", href: "#partner" },
    ],
    categoriesTitle: "HIRE DEVELOPERS",
    categories: [
      {
        id: "mobile-app",
        title: "Mobile App Development",
        items: [
          {
            name: "Hire Swift Developers",
            desc: "Powerful programming language for high performance native iOS App Development",
            href: "#hire-swift",
          },
          {
            name: "Hire Kotlin Developers",
            desc: "A New paradigm shift for native Android Application Development",
            href: "#hire-kotlin",
          },
          {
            name: "Hire Objective C Developers",
            desc: "Old but still a primary programming language for iOS App development",
            href: "#hire-objc",
          },
          {
            name: "Hire Java Developers",
            desc: "Official language for Android App development supported by Android studio",
            href: "#hire-android-java",
          },
          {
            name: "Hire React Native Developers",
            desc: "An emerging framework considered to be a future of cross platform app development",
            href: "#hire-react-native",
          },
          {
            name: "Hire Flutter Developers",
            desc: "Google's UI toolkit to craft quality apps cross mobile, web & desktop",
            href: "#hire-flutter",
          },
          {
            name: "Hire Ionic Developers",
            desc: "Framework to build fast and beautiful hybrid apps in less time",
            href: "#hire-ionic",
          },
          {
            name: "Hire Xamarin Developers",
            desc: "Microsoft's open source mobile app development platform with .NET & C#",
            href: "#hire-xamarin",
          },
        ],
      },
      {
        id: "backend",
        title: "Backend Development",
        items: [
          {
            name: "Hire Node.js Developers",
            desc: "Event-driven, asynchronous architectures designed for high-concurrency real-time systems",
            href: "#hire-node",
          },
          {
            name: "Hire Python Developers",
            desc: "High-level backend logic, scalable microservices, and mathematical data pipelines",
            href: "#hire-python",
          },
          {
            name: "Hire Golang Developers",
            desc: "Blazing fast concurrent systems, cloud-native services, and low memory footprints",
            href: "#hire-golang",
          },
          {
            name: "Hire Java / Spring Developers",
            desc: "Battle-tested enterprise applications, secure financial protocols, and scalable services",
            href: "#hire-java-backend",
          },
          {
            name: "Hire .NET / C# Developers",
            desc: "Enterprise solutions leveraging Microsoft Azure and modern .NET Core ecosystems",
            href: "#hire-dotnet",
          },
          {
            name: "Hire PHP / Laravel Developers",
            desc: "Clean MVC architectures, rapid API development, and robust web applications",
            href: "#hire-laravel",
          },
          {
            name: "Hire Ruby on Rails Developers",
            desc: "Convention-over-configuration rapid prototyping and maintainable SaaS platforms",
            href: "#hire-rails",
          },
          {
            name: "Hire Rust Developers",
            desc: "Zero-cost abstractions, bulletproof memory safety, and mission-critical performance",
            href: "#hire-rust",
          },
        ],
      },
      {
        id: "frontend",
        title: "Frontend Development",
        items: [
          {
            name: "Hire React.js Developers",
            desc: "Dynamic, component-driven single page applications with modern state management",
            href: "#hire-react",
          },
          {
            name: "Hire Next.js Developers",
            desc: "Server-side rendered, edge-optimized, and SEO-first high velocity web platforms",
            href: "#hire-nextjs",
          },
          {
            name: "Hire Vue.js Developers",
            desc: "Progressive, lightweight frontends with intuitive reactive state handling",
            href: "#hire-vue",
          },
          {
            name: "Hire Angular Developers",
            desc: "Structured enterprise client-side architectures with TypeScript and RxJS",
            href: "#hire-angular",
          },
          {
            name: "Hire TypeScript Developers",
            desc: "Type-safe engineering preventing runtime bugs across complex modern web apps",
            href: "#hire-typescript",
          },
          {
            name: "Hire UI/UX Frontend Engineers",
            desc: "Pixel-perfect translations from Figma with interactive Tailwind CSS and GSAP animations",
            href: "#hire-uiux-eng",
          },
        ],
      },
      {
        id: "cms-ecommerce",
        title: "CMS & E-Commerce",
        items: [
          {
            name: "Hire Shopify Developers",
            desc: "Bespoke storefronts, custom Liquid themes, and headless Hydrogen implementations",
            href: "#hire-shopify",
          },
          {
            name: "Hire WordPress Developers",
            desc: "Custom Gutenberg blocks, enterprise security hardening, and headless architectures",
            href: "#hire-wordpress",
          },
          {
            name: "Hire WooCommerce Developers",
            desc: "Scalable e-commerce platforms with custom checkout flows and ERP sync",
            href: "#hire-woocommerce",
          },
          {
            name: "Hire Magento Developers",
            desc: "Enterprise B2B/B2C multi-currency storefronts with massive product catalog management",
            href: "#hire-magento",
          },
          {
            name: "Hire Webflow Developers",
            desc: "High-converting visual websites built fast with clean semantic code export",
            href: "#hire-webflow",
          },
          {
            name: "Hire Strapi / Headless Developers",
            desc: "Decoupled omnichannel content delivery across web, mobile, and IoT devices",
            href: "#hire-strapi",
          },
        ],
      },
      {
        id: "database",
        title: "Database",
        items: [
          {
            name: "Hire PostgreSQL Developers",
            desc: "Advanced relational schemas, complex indexing, partitioning, and high concurrency",
            href: "#hire-postgres",
          },
          {
            name: "Hire MongoDB Developers",
            desc: "Scalable document databases, sharding clusters, and schema-less data structures",
            href: "#hire-mongo",
          },
          {
            name: "Hire Redis Specialists",
            desc: "Ultra-low latency in-memory data structures, caching tiers, and pub/sub queues",
            href: "#hire-redis",
          },
          {
            name: "Hire MySQL Developers",
            desc: "Reliable ACID-compliant relational databases with replication and clustering",
            href: "#hire-mysql",
          },
          {
            name: "Hire DynamoDB Developers",
            desc: "Serverless NoSQL database architecture with predictable single-digit millisecond latency",
            href: "#hire-dynamo",
          },
          {
            name: "Hire Supabase Developers",
            desc: "Realtime database subscriptions, Row Level Security, and edge functions integration",
            href: "#hire-supabase",
          },
        ],
      },
      {
        id: "cloud",
        title: "Cloud",
        items: [
          {
            name: "Hire AWS DevOps Engineers",
            desc: "Scalable architectures on ECS, EKS, Lambda, S3, and CloudFormation infrastructure",
            href: "#hire-aws",
          },
          {
            name: "Hire Azure Cloud Engineers",
            desc: "Enterprise cloud hybrid setups, Azure DevOps pipelines, and Active Directory integration",
            href: "#hire-azure",
          },
          {
            name: "Hire Google Cloud (GCP) Engineers",
            desc: "GKE Kubernetes clusters, BigQuery analytics, and Vertex AI infrastructure",
            href: "#hire-gcp",
          },
          {
            name: "Hire Kubernetes Architects",
            desc: "Container orchestration, automated auto-scaling, Helm packaging, and service meshes",
            href: "#hire-k8s",
          },
          {
            name: "Hire Terraform Engineers",
            desc: "Infrastructure-as-Code (IaC) enabling reproducible, multi-cloud automated provisioning",
            href: "#hire-terraform",
          },
          {
            name: "Hire CI/CD Pipeline Engineers",
            desc: "Automated GitHub Actions and GitLab CI workflows with zero-downtime blue/green deployment",
            href: "#hire-cicd",
          },
        ],
      },
    ],
  },
  Services: {
    taglineTitle: "Engineering Excellence",
    taglineDesc:
      "We design, build, and scale world-class software platforms, cloud infrastructure, and modern applications tailored for enterprise growth.",
    badge: "#ScaleWithDeplysoft",
    exploreTitle: "READY TO EXPLORE?",
    exploreLinks: [
      { label: "Our Work", href: "#portfolio" },
      { label: "Engineering Standards", href: "#standards" },
      { label: "Tech Stack", href: "#tech-stack" },
      { label: "Client Testimonials", href: "#testimonials" },
      { label: "Security & Compliance", href: "#security" },
      { label: "Schedule Consultation", href: "#contact" },
    ],
    categoriesTitle: "OUR SERVICES",
    categories: [
      {
        id: "web-app",
        title: "Web App Development",
        items: [
          {
            name: "Enterprise Web Applications",
            desc: "Robust, mission-critical systems engineered for high traffic, reliability, and security",
            href: "#services-enterprise-web",
          },
          {
            name: "SaaS Product Engineering",
            desc: "Multi-tenant architectures, subscription billing, and real-time collaborative workspaces",
            href: "#services-saas",
          },
          {
            name: "Progressive Web Apps (PWAs)",
            desc: "App-like experiences with offline capability, push notifications, and fast loading",
            href: "#services-pwa",
          },
          {
            name: "Custom API & Microservices",
            desc: "RESTful and GraphQL service layers built for high throughput and modularity",
            href: "#services-api",
          },
          {
            name: "Legacy Modernization",
            desc: "Migrate monolithic legacy codebases to agile, cloud-native micro-frontends and services",
            href: "#services-modernization",
          },
          {
            name: "Performance Optimization",
            desc: "Core Web Vitals auditing, asset delivery optimization, and database tuning",
            href: "#services-perf",
          },
        ],
      },
      {
        id: "mobile-dev",
        title: "Mobile App Development",
        items: [
          {
            name: "Native iOS Applications",
            desc: "Swift and SwiftUI apps built for optimal Apple ecosystem hardware performance",
            href: "#services-ios",
          },
          {
            name: "Native Android Applications",
            desc: "Modern Kotlin apps following Google Material Design guidelines and architecture",
            href: "#services-android",
          },
          {
            name: "Cross-Platform React Native",
            desc: "Single codebase apps with near-native 60fps performance and faster time-to-market",
            href: "#services-rn",
          },
          {
            name: "Flutter Application Development",
            desc: "Expressive UI design and native compilation across mobile, tablet, and desktop",
            href: "#services-flutter",
          },
          {
            name: "Mobile App Security & Auditing",
            desc: "End-to-end encryption, biometrics, secure storage, and OWASP compliance testing",
            href: "#services-mobile-sec",
          },
          {
            name: "App Store Launch & ASO",
            desc: "Guidance on submission, review compliance, and App Store Optimization strategies",
            href: "#services-aso",
          },
        ],
      },
      {
        id: "cloud-devops",
        title: "Cloud & DevOps Architecture",
        items: [
          {
            name: "Cloud Migration Services",
            desc: "Seamless transition of on-premises workloads into AWS, Azure, or Google Cloud",
            href: "#services-cloud-mig",
          },
          {
            name: "Kubernetes & Containerization",
            desc: "Dockerized environments managed with production-grade Kubernetes clusters",
            href: "#services-k8s",
          },
          {
            name: "Automated CI/CD Pipelines",
            desc: "Zero-friction continuous integration and deployment with automated testing stages",
            href: "#services-cicd",
          },
          {
            name: "Cloud Cost Optimization (FinOps)",
            desc: "Audit cloud spending and reduce monthly infrastructure bills by up to 40%",
            href: "#services-finops",
          },
          {
            name: "24/7 Monitoring & Observability",
            desc: "Real-time metrics, Datadog alerts, automated failover, and incident response setups",
            href: "#services-monitoring",
          },
          {
            name: "Security & SOC 2 Compliance",
            desc: "Automated vulnerability scanning, IAM hardening, and audit-ready cloud compliance",
            href: "#services-compliance",
          },
        ],
      },
      {
        id: "custom-software",
        title: "Custom Software Engineering",
        items: [
          {
            name: "Bespoke ERP & CRM Systems",
            desc: "Tailored business process automation platforms replacing generic off-the-shelf software",
            href: "#services-erp",
          },
          {
            name: "FinTech & Payment Platforms",
            desc: "PCI-compliant transaction gateways, multi-currency processing, and ledger engines",
            href: "#services-fintech",
          },
          {
            name: "Healthcare & HIPAA Software",
            desc: "Secure patient portals, telemedicine systems, and EHR/EMR data integration",
            href: "#services-health",
          },
          {
            name: "Supply Chain & Logistics",
            desc: "Real-time fleet tracking, inventory algorithms, and warehouse management tools",
            href: "#services-logistics",
          },
        ],
      },
    ],
  },
  "AI/ML": {
    taglineTitle: "Next-Gen Intelligence",
    taglineDesc:
      "Transform your operational capabilities with production-grade AI models, autonomous agents, and custom machine learning pipelines.",
    badge: "#AIFirstArchitecture",
    exploreTitle: "READY TO EXPLORE?",
    exploreLinks: [
      { label: "AI Capabilities", href: "#ai-capabilities" },
      { label: "LLM Benchmarks", href: "#benchmarks" },
      { label: "Security & Privacy", href: "#ai-security" },
      { label: "Custom Models", href: "#custom-models" },
      { label: "Research Lab", href: "#research" },
      { label: "Schedule AI Audit", href: "#contact" },
    ],
    categoriesTitle: "AI & ML CAPABILITIES",
    categories: [
      {
        id: "gen-ai",
        title: "Generative AI & LLMs",
        items: [
          {
            name: "Custom LLM Fine-Tuning",
            desc: "Domain-specific model adaptation with LoRA, proprietary knowledge, and benchmark validation",
            href: "#ai-fine-tuning",
          },
          {
            name: "RAG & Knowledge Retrieval",
            desc: "Vector databases, semantic chunking, and hallucination-free document QA systems",
            href: "#ai-rag",
          },
          {
            name: "Autonomous Agent Systems",
            desc: "Multi-agent orchestration executing complex multi-step workflows with tool calling",
            href: "#ai-agents",
          },
          {
            name: "Enterprise AI Guardrails",
            desc: "PII masking, content moderation, adversarial prompt defense, and policy enforcement",
            href: "#ai-guardrails",
          },
          {
            name: "Voice & Conversational AI",
            desc: "Low-latency real-time voice agents with natural speech synthesis and intent detection",
            href: "#ai-voice",
          },
          {
            name: "Multimodal Vision-Language",
            desc: "Unified processing of documents, schematics, and video feeds with vision-augmented LLMs",
            href: "#ai-multimodal",
          },
        ],
      },
      {
        id: "ml-engineering",
        title: "Machine Learning Engineering",
        items: [
          {
            name: "Predictive Analytics Engines",
            desc: "Time-series forecasting, customer churn prediction, and dynamic pricing models",
            href: "#ai-predictive",
          },
          {
            name: "Recommendation Systems",
            desc: "Collaborative filtering, hybrid graph recommenders, and personalization at scale",
            href: "#ai-recs",
          },
          {
            name: "Fraud & Anomaly Detection",
            desc: "Unsupervised learning flags suspicious behavior in real-time streaming data",
            href: "#ai-fraud",
          },
          {
            name: "End-to-End MLOps Pipelines",
            desc: "Automated model training, versioning, drift detection, and canary deployment",
            href: "#ai-mlops",
          },
        ],
      },
      {
        id: "computer-vision",
        title: "Computer Vision & NLP",
        items: [
          {
            name: "Object Detection & Tracking",
            desc: "YOLO and custom CNN models for manufacturing inspection, retail, and security",
            href: "#ai-cv-detect",
          },
          {
            name: "Document AI & OCR",
            desc: "Automated invoice parsing, unstructured document extraction, and table understanding",
            href: "#ai-ocr",
          },
          {
            name: "Semantic Search & Embeddings",
            desc: "Dense retrieval architectures outperforming traditional keyword search",
            href: "#ai-semantic",
          },
          {
            name: "Sentiment & Market Intelligence",
            desc: "Real-time analysis of user feedback, social feeds, and market sentiment",
            href: "#ai-sentiment",
          },
        ],
      },
    ],
  },
};

interface SimpleNavItem {
  label: string;
  href: string;
}

const REGULAR_NAV_ITEMS: SimpleNavItem[] = [
  { label: "Solutions", href: "#solutions" },
  { label: "Blog", href: "#blog" },
  { label: "About Us", href: "#about" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);
  const [mobileExpandedDropdown, setMobileExpandedDropdown] = useState<string | null>(null);
  const [mobileExpandedCategory, setMobileExpandedCategory] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleDropdownHover = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (activeDropdown !== label) {
      setActiveDropdown(label);
      setActiveCategoryIndex(0);
    }
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const handleMegaMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const currentMegaData = activeDropdown ? MEGA_MENUS[activeDropdown] : null;
  const currentCategory =
    currentMegaData && currentMegaData.categories[activeCategoryIndex]
      ? currentMegaData.categories[activeCategoryIndex]
      : null;

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          {/* Left: Logo */}
          <div className="flex items-center justify-start flex-1 min-w-0">
            <Link href="/" className="group inline-flex items-center">
              <Image
                src={logoImg}
                alt="Deplysoft"
                priority
                unoptimized
                className="h-5 sm:h-7 w-auto object-contain navbar-brand-logo"
              />
            </Link>
          </div>

          {/* Center: Navigation Links */}
          <nav className="hidden md:flex items-center justify-center gap-1 lg:gap-3 shrink-0">
            {/* Mega Menu Triggers */}
            {(["Services", "AI/ML", "Hire Developers"] as const).map((label) => {
              const isOpen = activeDropdown === label;

              return (
                <div
                  key={label}
                  className="relative"
                  onMouseEnter={() => handleDropdownHover(label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setActiveDropdown(isOpen ? null : label)
                    }
                    className={`inline-flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors duration-150 cursor-pointer ${
                      isOpen
                        ? "text-indigo-600 font-semibold"
                        : "text-zinc-800 hover:text-indigo-600"
                    }`}
                  >
                    <span>{label}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-indigo-600" : "text-zinc-500"
                      }`}
                    />
                  </button>
                </div>
              );
            })}

            {/* Regular Links */}
            {REGULAR_NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-zinc-800 hover:text-indigo-600 transition-colors duration-150"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right: CTA & Mobile Toggle */}
          <div className="flex items-center justify-end flex-1 min-w-0">
            <div className="hidden md:flex items-center">
              <GsapButton
                href="#contact"
                variant="primary"
                className="min-w-[140px] h-10 px-5"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4" />
              </GsapButton>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex md:hidden items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 text-zinc-700 hover:text-zinc-950 focus:outline-none border border-zinc-200"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Width Desktop Mega Menu Dropdown */}
      {activeDropdown && currentMegaData && currentCategory && (
        <div
          className="hidden md:block absolute top-full left-0 w-full bg-white border-t border-b border-zinc-200 shadow-lg shadow-black/5 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
          onMouseEnter={handleMegaMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="w-full flex min-h-[420px]">
            {/* Column 1: Categories with ↗ tabs */}
            <div className="w-80 shrink-0 p-8 border-r border-zinc-100 bg-zinc-50/50 flex flex-col">
              <h4 className="text-xs font-bold text-zinc-950 tracking-wider uppercase mb-4 shrink-0">
                {currentMegaData.categoriesTitle}
              </h4>
              <div className="space-y-1">
                {currentMegaData.categories.map((cat, idx) => {
                  const isSelected = activeCategoryIndex === idx;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onMouseEnter={() => setActiveCategoryIndex(idx)}
                      className={`group w-full flex items-center justify-between px-4 py-3 text-xs font-medium transition-all duration-150 cursor-pointer shadow-none ${
                        isSelected
                          ? "bg-[#3A46CA] text-white font-semibold"
                          : "text-zinc-700 hover:bg-[#3A46CA] hover:text-white"
                      }`}
                    >
                      <span>{cat.title}</span>
                      <ArrowUpRight
                        className={`w-3.5 h-3.5 transition-transform duration-150 ${
                          isSelected ? "text-white" : "text-zinc-400 group-hover:text-white"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Column 2: Right Detailed 2-Column Grid */}
            <div className="flex-1 p-8 bg-white flex flex-col">
              <h4 className="text-xs font-bold text-zinc-950 tracking-wider uppercase mb-5 shrink-0">
                {currentCategory.title}
              </h4>
              <div className="grid grid-cols-2 gap-x-10 gap-y-6">
                {currentCategory.items.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setActiveDropdown(null)}
                    className="group block"
                  >
                    <div className="text-xs font-semibold text-zinc-900 group-hover:text-indigo-600 transition-colors">
                      {item.name}
                    </div>
                    <p className="text-[11px] text-zinc-500 mt-0.5 leading-relaxed line-clamp-2">
                      {item.desc}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-b border-zinc-200 max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="px-4 pt-3 pb-6 space-y-1">
            {(["Services", "AI/ML", "Hire Developers"] as const).map((label) => {
              const mega = MEGA_MENUS[label];
              const isExpanded = mobileExpandedDropdown === label;

              return (
                <div key={label} className="border-b border-zinc-100 py-1">
                  <button
                    type="button"
                    onClick={() =>
                      setMobileExpandedDropdown(isExpanded ? null : label)
                    }
                    className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-zinc-800"
                  >
                    <span className={isExpanded ? "text-indigo-600 font-semibold" : "text-zinc-800"}>
                      {label}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-zinc-500 transition-transform duration-200 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isExpanded && mega && (
                    <div className="pl-4 pr-2 pb-2 space-y-2">
                      {mega.categories.map((cat) => {
                        const isCatOpen = mobileExpandedCategory === cat.id;
                        return (
                          <div key={cat.id} className="border-l-2 border-indigo-100 pl-2">
                            <button
                              type="button"
                              onClick={() =>
                                setMobileExpandedCategory(isCatOpen ? null : cat.id)
                              }
                              className="w-full flex items-center justify-between py-1 text-xs font-semibold text-zinc-800"
                            >
                              <span>{cat.title}</span>
                              <ChevronDown
                                className={`w-3.5 h-3.5 text-zinc-400 transition-transform duration-150 ${
                                  isCatOpen ? "rotate-180" : ""
                                }`}
                              />
                            </button>
                            {isCatOpen && (
                              <div className="space-y-1.5 pt-1 pb-2">
                                {cat.items.map((sub) => (
                                  <Link
                                    key={sub.name}
                                    href={sub.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block text-xs text-zinc-600 hover:text-indigo-600 py-0.5"
                                  >
                                    {sub.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}

            {REGULAR_NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 text-base font-medium text-zinc-800 hover:text-indigo-600 transition-colors"
              >
                {item.label}
              </Link>
            ))}

            <div className="pt-4 mt-2 border-t border-zinc-100">
              <GsapButton
                href="#contact"
                variant="primary"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4" />
              </GsapButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
