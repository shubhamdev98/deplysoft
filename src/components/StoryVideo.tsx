export default function StoryVideo() {
  return (
    <section className="relative w-full bg-white px-0 sm:px-6 lg:px-8 overflow-hidden font-sans">
      {/* Framed Container: Edge-to-edge on mobile, bordered frame on tablet/desktop */}
      <div className="relative max-w-7xl mx-auto border-b border-zinc-200 sm:border-l sm:border-r">
        <div className="relative z-10 px-5 sm:px-12 lg:px-20 py-10 sm:py-16 md:py-24">
          {/* Heading & Subtitle */}
          <div className="max-w-5xl mx-auto mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-950 leading-tight">
              Our Purpose
            </h2>
            <p className="mt-2.5 sm:mt-3 text-sm sm:text-base md:text-lg text-zinc-600 leading-relaxed font-normal max-w-3xl">
              Architecting scalable software, modern interfaces, and resilient cloud systems designed to accelerate ambitious enterprises.
            </p>
          </div>
          {/* Video Container Frame */}
          <div className="relative max-w-5xl mx-auto border border-zinc-200 bg-zinc-950 overflow-hidden">
            {/* The Video Element */}
            <div className="relative aspect-video w-full">
              <video
                src="/story_video/story_video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover pointer-events-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
