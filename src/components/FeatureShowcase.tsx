import { motion } from "framer-motion";

export function FeatureShowcase() {
  return (
    <section className="py-32 px-4 md:px-12 bg-zinc-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 bg-amd-red/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        {/* Left side: Image/Graphic */}
        <div className="relative order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full aspect-[4/5] glass-panel p-2 flex items-center justify-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent z-10 opacity-60" />
            <img 
              src="https://www.amd.com/content/dam/amd/en/images/products/processors/ryzen/2505503-ryzen-7-7700x.jpg" 
              alt="Ryzen Processor Architecture" 
              className="w-full h-full object-cover mix-blend-screen scale-150 origin-bottom grayscale opacity-50"
            />
            
            <div className="absolute bottom-10 left-10 z-20">
              <div className="font-mono text-zinc-500 text-xs uppercase mb-2">Platform</div>
              <div className="text-3xl font-outfit text-white tracking-tight">PCIe® 5.0 Ready</div>
            </div>
          </motion.div>
        </div>

        {/* Right side: Content */}
        <div className="order-1 md:order-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.1 }}
            className="flex flex-col gap-8"
          >
            <motion.h2 className="text-5xl md:text-6xl font-outfit text-white tracking-tighter leading-tight">
              A New Era of <br />
              <span className="text-amd-red">Performance.</span>
            </motion.h2>

            <motion.div className="h-[1px] w-12 bg-zinc-800" />

            <motion.p className="text-zinc-400 text-lg leading-relaxed max-w-[45ch]">
              Unlock true competitive advantages with AMD EXPO™ Technology and Precision Boost Overdrive. Overclocking made accessible, giving you the edge when milliseconds matter.
            </motion.p>

            <motion.div className="grid grid-cols-2 gap-8 pt-8 border-t border-zinc-900/50">
              <div>
                <div className="font-mono text-zinc-500 text-sm mb-1 uppercase">DDR5 Support</div>
                <div className="text-white font-medium">Up to 5200 MT/s</div>
              </div>
              <div>
                <div className="font-mono text-zinc-500 text-sm mb-1 uppercase">Graphics</div>
                <div className="text-white font-medium">Radeon™ Built-in</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
