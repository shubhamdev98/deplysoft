import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Deplysoft | Enterprise Digital Product Studio",
    short_name: "Deplysoft",
    description:
      "Enterprise software development, distributed cloud systems, and generative AI solutions studio.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#18181b",
    icons: [
      {
        src: "/logo.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
