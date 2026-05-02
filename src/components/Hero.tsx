import { motion, useScroll } from "framer-motion";
import { useRef, useEffect } from "react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Garante que o vídeo está pausado (alguns browsers autoplay muted videos)
    const ensurePaused = () => video.pause();
    video.addEventListener("loadedmetadata", ensurePaused);
    video.pause();

    let rafId: number;

    const unsubscribe = scrollYProgress.on("change", (latest) => {
      // Só faz seek se o vídeo tiver dados suficientes (readyState >= 2)
      if (video.readyState < 2 || Number.isNaN(video.duration)) return;

      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        video.currentTime = latest * video.duration;
      });
    });

    return () => {
      unsubscribe();
      cancelAnimationFrame(rafId);
      video.removeEventListener("loadedmetadata", ensurePaused);
    };
  }, [scrollYProgress]);

  return (
    <section ref={containerRef} className="relative w-full h-[350vh] bg-zinc-950">
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* Vídeo posicionado na metade direita da tela */}
        <div className="absolute inset-y-0 right-0 w-[65%] pointer-events-none">
          <video
            ref={videoRef}
            src={`${import.meta.env.BASE_URL}hero-video-kf.mp4`}
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          />
          {/* Borda difusa na esquerda do vídeo para fundir com o fundo */}
          <div className="absolute inset-y-0 left-0 w-[55%] bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent" />
        </div>

        {/* Gradiente de rodapé para transição com a próxima seção */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none" />

        {/* Fundo sólido na esquerda onde fica o texto */}
        <div className="absolute inset-y-0 left-0 w-[40%] bg-zinc-950 pointer-events-none" />

        {/* Conteúdo de texto */}
        <div className="relative z-10 h-full flex items-center px-4 md:px-12">
          <div className="max-w-7xl mx-auto w-full pt-20 md:pt-0">
            <div className="max-w-lg">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="text-amd-red font-mono text-sm tracking-widest uppercase mb-4 block">
                  Zen 4 Architecture
                </span>
                <h1 className="text-6xl md:text-8xl tracking-tighter leading-none font-outfit text-white mb-6">
                  DOMINANT <br />
                  <span className="text-zinc-300">GAMING</span>
                </h1>
                <p className="text-base md:text-lg text-zinc-400 leading-relaxed max-w-[40ch] mb-10">
                  The AMD Ryzen™ 7 7700X is a dominant desktop processor dedicated to gaming that comes with 8 CPU cores, 16 threads and a maximum boost clock speed of up to 5.4 GHz.
                </p>

                <motion.button
                  whileHover={{ scale: 1.03, backgroundColor: "var(--color-amd-red)", color: "white" }}
                  whileTap={{ scale: 0.97 }}
                  className="px-8 py-4 bg-white text-zinc-950 font-semibold rounded-full transition-colors shadow-2xl"
                >
                  Discover Performance
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
