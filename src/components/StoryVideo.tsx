export default function StoryVideo() {
  return (
    <section className="relative w-full bg-white px-0 sm:px-6 lg:px-8 overflow-hidden font-sans">
      {/* Framed Container: Edge-to-edge on mobile, bordered frame on tablet/desktop */}
      <div className="relative max-w-7xl mx-auto border-b border-zinc-200 sm:border-l sm:border-r">
        {/* Section Header */}
        <div className="relative z-10 px-5 sm:px-12 lg:px-20 py-10 sm:py-16 md:py-20 border-b border-zinc-200">
          <div className="flex flex-col max-w-3xl">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-950 leading-[1.15]">
              Our Purpose
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-zinc-600 leading-relaxed font-normal">
              Architecting scalable software, modern interfaces, and resilient cloud systems designed to accelerate ambitious enterprises.
            </p>
          </div>
        </div>

        {/* Edge-to-Edge Video Touching Left, Right, and Bottom Borders */}
        <div className="relative w-full aspect-video bg-zinc-950 overflow-hidden">
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
    </section>
  );
}
