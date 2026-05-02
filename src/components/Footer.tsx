export function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-zinc-950 py-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-4">
          <span className="text-xl font-outfit text-white font-bold tracking-tighter">AMD Ryzen™</span>
        </div>
        
        <div className="flex gap-8 text-sm text-zinc-500">
          <a href="#" className="hover:text-white transition-colors">Specifications</a>
          <a href="#" className="hover:text-white transition-colors">Drivers & Support</a>
          <a href="#" className="hover:text-white transition-colors">Where to Buy</a>
        </div>
        
        <div className="text-xs text-zinc-700 font-mono">
          © {new Date().getFullYear()} Advanced Micro Devices, Inc.
        </div>
      </div>
    </footer>
  );
}
