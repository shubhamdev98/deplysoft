import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://deplysoft.com";

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Deplysoft | Enterprise Digital Product & Software Engineering Studio",
    template: "%s | Deplysoft",
  },
  description:
    "Deplysoft is a premier digital product engineering and enterprise software development studio. We build, deploy, and scale high-performance web applications, distributed cloud infrastructure, and autonomous AI systems for ambitious enterprises.",
  applicationName: "Deplysoft",
  keywords: [
    "enterprise software development",
    "digital product engineering",
    "custom software development company",
    "cloud infrastructure & DevOps",
    "generative AI & LLM development",
    "distributed systems engineering",
    "full-stack web application development",
    "VisionOS & spatial computing apps",
    "IoT telemetry solutions",
    "legacy system modernization",
    "hire software developers",
    "microservices architecture",
    "Deplysoft",
    "Deplysoft Technologies",
  ],
  authors: [{ name: "Deplysoft Technologies Inc.", url: siteUrl }],
  creator: "Deplysoft Technologies Inc.",
  publisher: "Deplysoft Technologies Inc.",
  category: "technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Deplysoft | Enterprise Digital Product & Software Engineering Studio",
    description:
      "We engineer high-performance web applications, modern software systems, and scalable cloud infrastructure designed to accelerate ambitious enterprises.",
    url: siteUrl,
    siteName: "Deplysoft",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Deplysoft - Enterprise Digital Product & Software Engineering Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deplysoft | Enterprise Digital Product & Software Engineering Studio",
    description:
      "We engineer high-performance web applications, modern software systems, and scalable cloud infrastructure designed to accelerate ambitious enterprises.",
    images: ["/logo.png"],
    creator: "@deplysoft",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/logo.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/logo.png", sizes: "180x180", type: "image/png" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://deplysoft.com/#organization",
      name: "Deplysoft Technologies Inc.",
      url: "https://deplysoft.com",
      logo: "https://deplysoft.com/logo.png",
      description:
        "Enterprise software development, digital product engineering, distributed cloud systems, and generative AI solutions studio.",
      email: "info@deplysoft.com",
      sameAs: [
        "https://github.com/shubhamdev98/deplysoft",
        "https://twitter.com/deplysoft",
        "https://linkedin.com/company/deplysoft",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "info@deplysoft.com",
        availableLanguage: ["English"],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://deplysoft.com/#website",
      url: "https://deplysoft.com",
      name: "Deplysoft",
      description: "Build, Deploy & Scale High-Performance Digital Experiences",
      publisher: {
        "@id": "https://deplysoft.com/#organization",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://deplysoft.com/#service",
      name: "Deplysoft Engineering Services",
      url: "https://deplysoft.com",
      priceRange: "$$$$",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Enterprise Engineering Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Generative AI & LLMs",
              description:
                "Enterprise model fine-tuning, autonomous agent orchestration, and high-accuracy retrieval-augmented generation.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Cloud & Distributed Systems",
              description:
                "Multi-region cloud infrastructure, Kubernetes orchestration, and event-driven microservices.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Full-Stack Product Engineering",
              description:
                "High-velocity modern web platforms and cross-platform native apps engineered for millions of concurrent users.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "VisionOS App Development",
              description:
                "Spatial computing experiences, immersive 3D workflows, and natural gesture-driven interfaces built for Apple Vision Pro.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "IoT Solutions & Fleet Telematics",
              description:
                "Ultra-low latency telemetry ingestion, industrial edge hardware gateways, and mission-critical firmware communication.",
            },
          },
        ],
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
