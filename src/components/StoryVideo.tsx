export default function StoryVideo() {
  return (
    <section className="relative w-full bg-white overflow-hidden font-sans">
      {/* Framed Container with Left & Right Vertical Borders matching Hero & Philosophy */}
      <div className="relative max-w-7xl mx-auto border-l border-r border-zinc-200">
        <div className="relative z-10 px-6 sm:px-12 lg:px-20 pt-16 pb-20 md:pt-24 md:pb-28">
          {/* Video Container Frame */}
          <div className="relative max-w-5xl mx-auto border border-zinc-200 bg-zinc-950 overflow-hidden shadow-2xl shadow-indigo-950/10">
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

              {/* Bottom-Left Overlay: Heading and Subtitle */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent flex flex-col justify-end p-6 sm:p-10 lg:p-12 pointer-events-none">
                <div className="max-w-2xl">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                    Engineering Digital Excellence
                  </h3>
                  <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-zinc-300 leading-relaxed font-normal">
                    Architecting scalable software, modern interfaces, and resilient cloud systems designed to accelerate ambitious enterprises.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
