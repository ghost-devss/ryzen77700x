import { motion } from "framer-motion";
import { Cpu, Lightning, Thermometer, Database } from "@phosphor-icons/react";

const specs = [
  { label: "Cores/Threads", value: "8 / 16", icon: Cpu },
  { label: "Max Boost", value: "5.4 GHz", icon: Lightning },
  { label: "L3 Cache", value: "32 MB", icon: Database },
  { label: "Default TDP", value: "105W", icon: Thermometer },
];

export function BentoSpecs() {
  return (
    <section className="py-32 px-4 md:px-12 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl tracking-tighter text-white font-outfit">
            Engineered for <br /> Uncompromised Speed.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Large Card */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="md:col-span-2 glass-panel p-10 flex flex-col justify-between min-h-[300px]"
          >
            <div className="flex justify-between items-start">
              <span className="text-zinc-500 font-mono uppercase text-sm">Architecture</span>
              <div className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center bg-zinc-950/50">
                <Cpu size={20} className="text-amd-red" weight="duotone" />
              </div>
            </div>
            <div>
              <h3 className="text-4xl font-outfit text-white mb-2">Zen 4 Core</h3>
              <p className="text-zinc-400 max-w-md">
                Built on TSMC 5nm FinFET process technology, delivering exceptional performance-per-watt for the most demanding games.
              </p>
            </div>
          </motion.div>

          {/* Small Card */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="glass-panel p-10 flex flex-col justify-between min-h-[300px]"
          >
            <span className="text-zinc-500 font-mono uppercase text-sm">Socket</span>
            <div>
              <h3 className="text-6xl font-outfit text-white mb-2 tracking-tighter">AM5</h3>
              <p className="text-zinc-400">Next-gen platform readiness with DDR5 and PCIe® 5.0 support.</p>
            </div>
          </motion.div>

          {/* Metric Cards */}
          {specs.map((spec, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="glass-panel p-8 flex flex-col justify-between min-h-[200px]"
            >
              <div className="flex justify-between items-center mb-8">
                <span className="text-zinc-500 font-mono uppercase text-xs">{spec.label}</span>
                <spec.icon size={20} className="text-zinc-600" />
              </div>
              <div className="text-4xl font-outfit text-white tracking-tighter">
                {spec.value}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
