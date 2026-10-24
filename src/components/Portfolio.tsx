import Image from "next/image";

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
}

const PROJECTS: ProjectItem[] = [
  {
    id: "globeflow",
    title: "GlobeFlow Treasury Platform",
    category: "Fintech & Multi-Rail Banking",
    description:
      "An enterprise-grade liquidity management and multi-rail cross-border payment platform for tier-1 financial institutions, handling high-frequency automated FX settlements with sub-second finality.",
    image: "/projects/project-1.jpg",
  },
  {
    id: "aurahealth",
    title: "AuraHealth Diagnostic Suite",
    category: "HealthTech & Clinical AI",
    description:
      "A HIPAA-compliant clinical surveillance platform combining continuous medical telemetry streaming with custom convolutional neural networks for real-time patient risk prediction.",
    image: "/projects/project-2.jpg",
  },
  {
    id: "kubeinsight",
    title: "KubeInsight Observability Platform",
    category: "Cloud Architecture & DevOps",
    description:
      "An enterprise cloud infrastructure console providing real-time distributed tracing, pod health analytics, and sub-millisecond network latency telemetry across hybrid multi-region clusters.",
    image: "/projects/project-3.jpg",
  },
  {
    id: "aerostream",
    title: "AeroStream X1 Spatial CAD",
    category: "VisionOS & Spatial Computing",
    description:
      "A spatial computing workspace built natively for Apple Vision Pro, enabling aerospace engineers to collaboratively inspect, stress-test, and simulate drone aerodynamics in real-time 3D.",
    image: "/projects/project-4.jpg",
  },
  {
    id: "logisticsops",
    title: "LogisticsOps IoT Telematics",
    category: "Industrial IoT & Fleet Management",
    description:
      "A mission-critical IoT telemetry and dispatch control platform connecting maritime cargo ships, long-haul freight trucks, and automated warehouse AGV robots in one unified operating system.",
    image: "/projects/project-5.jpg",
  },
  {
    id: "aetherium",
    title: "Aetherium Enterprise AI Engine",
    category: "Generative AI & LLMs",
    description:
      "An enterprise retrieval-augmented generation (RAG) platform that indexes millions of unstructured technical documents into an interactive multi-hop knowledge graph with verifiable citations.",
    image: "/projects/project-6.jpg",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative w-full bg-white text-zinc-950 px-4 sm:px-6 lg:px-8 overflow-hidden font-sans">
      {/* Framed Container matching site aesthetic */}
      <div className="relative max-w-7xl mx-auto border-l border-r border-b border-zinc-200">
        
        {/* Section Header */}
        <div className="relative z-10 px-6 sm:px-12 lg:px-20 pt-24 sm:pt-10 md:pt-16 pb-8 sm:pb-12 border-b border-zinc-200">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-950 mt-3 leading-[1.15]">
              Engineered for Scale, <br className="hidden sm:inline" />
              Built for Impact
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
              A selection of mission-critical platforms, high-velocity financial architectures, and modern software systems engineered for ambitious enterprises.
            </p>
          </div>
        </div>

        {/* Connected Edge-to-Edge Grid with Dividing Borders Between Projects */}
        <div className="relative w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-200">
            {PROJECTS.map((project) => (
              <div
                key={project.id}
                className="group relative p-6 sm:p-9 lg:p-12 bg-white hover:bg-zinc-50/60 transition-all duration-300 flex flex-col"
              >
                {/* 1. Project Image */}
                <div className="relative w-full aspect-[16/10] border border-zinc-200 bg-zinc-100 overflow-hidden transition-all duration-300 group-hover:border-zinc-400 group-hover:shadow-md">
                  <Image
                    src={project.image}
                    alt={`${project.title} - ${project.category} case study by Deplysoft`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  />
                </div>

                {/* 2. Heading (H3) */}
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 mt-6 group-hover:text-[#3A46CA] transition-colors leading-snug">
                  {project.title}
                </h3>

                {/* 3. Paragraph */}
                <p className="mt-2.5 text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
