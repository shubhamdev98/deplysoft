export default function StoryVideo() {
  return (
    <section className="relative w-full bg-white px-4 sm:px-6 lg:px-8 overflow-hidden font-sans">
      {/* Framed Container with Left & Right Vertical Borders matching Hero & Philosophy */}
      <div className="relative max-w-7xl mx-auto border-l border-r border-b border-zinc-200">
        <div className="relative z-10 px-6 sm:px-12 lg:px-20 pt-16 pb-16 md:pt-24 md:pb-24">
          {/* Heading & Subtitle below the video */}
          <div className="max-w-5xl mx-auto mb-8 sm:mt-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-950 leading-tight">
              Our Purpose
            </h2>
            <p className="mt-3 text-sm sm:text-base md:text-lg text-zinc-600 leading-relaxed font-normal max-w-3xl">
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
