import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="border-b border-zinc-900 bg-zinc-950/70 backdrop-blur-md sticky top-0 z-50 px-6 md:px-12 py-4">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <Link 
          href="/" 
          className="font-serif text-lg font-bold tracking-tight text-zinc-100 hover:text-amber-500 transition-colors flex items-center gap-2"
        >
          <span>⚔️</span> Continent Codex
        </Link>
        
        <div className="flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="text-zinc-400 hover:text-zinc-100 transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-zinc-400 hover:text-zinc-100 transition-colors">
            About
          </Link>
          <Link href="/biography" className="text-zinc-400 hover:text-zinc-100 transition-colors">
            Bio
          </Link>
          <Link href="/bibliography" className="text-zinc-400 hover:text-zinc-100 transition-colors">
            Bibliography
          </Link>
          <Link 
            href="/blog" 
            className="text-xs uppercase tracking-wider bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded text-amber-500 hover:bg-zinc-800 transition-all"
          >
            Codex
          </Link>
        </div>
      </div>
    </nav>
  );
}