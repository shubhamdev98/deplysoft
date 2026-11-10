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
    id: "ecommerce-platform",
    title: "Next-Gen Enterprise E-Commerce Engine",
    category: "E-Commerce & Headless Commerce",
    description:
      "A scalable, multi-tenant digital commerce storefront architected for ultra-low latency catalog search, high-concurrency checkout pipelines, and seamless payment gateway integrations.",
    image: "/projects/E-commerce_website_i_want_to_add_in_postfoio_website._w-0.jpg",
  },
  {
    id: "culinary-hospitality",
    title: "Aura Dining & Hospitality Platform",
    category: "Hospitality & Interactive Web",
    description:
      "An immersive digital dining and reservation platform featuring dynamic real-time table management, curated interactive menus, and seamless POS backend synchronization.",
    image: "/projects/restorent_restaurant_website_i_want_to_add_in_postfoio_w-0.jpg",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative w-full bg-white text-zinc-950 px-0 sm:px-6 lg:px-8 overflow-hidden font-sans">
      {/* Framed Container: Edge-to-edge on mobile, bordered frame on tablet/desktop */}
      <div className="relative max-w-7xl mx-auto bg-white border-b border-zinc-200 sm:border-l sm:border-r">
        
        {/* Section Header */}
        <div className="relative z-10 px-5 sm:px-12 lg:px-20 py-10 sm:py-16 md:py-20 border-b border-zinc-200">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-950 leading-[1.15]">
              Engineered for Scale, <br className="hidden sm:inline" />
              Built for Impact
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-zinc-600 leading-relaxed font-normal">
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
                className="group relative p-5 sm:p-9 lg:p-12 bg-white transition-all duration-300 flex flex-col"
              >
                {/* 1. Project Image */}
                <div className="relative w-full aspect-[16/10] border border-zinc-200 bg-zinc-100 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} - ${project.category} case study by Deplysoft`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>

                {/* 2. Heading (H3) */}
                <h3 className="text-lg sm:text-2xl font-bold text-zinc-950 mt-5 sm:mt-6 leading-snug">
                  {project.title}
                </h3>

                {/* 3. Paragraph */}
                <p className="mt-2 text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
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
