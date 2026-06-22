'use client'; // Required for interactivity
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-zinc-900 bg-zinc-950/70 backdrop-blur-md sticky top-0 z-50 px-4 md:px-12 py-4">
      <div className="max-w-5xl mx-auto flex text-white justify-between items-center">
        <Link href="/" className="font-serif text-lg font-bold text-zinc-100">⚔️ Continent Codex</Link>

        {/* Hamburger Button (Visible only on mobile) */}
        <button className="md:hidden text-zinc-400" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✕' : '☰'}
        </button>

        {/* Desktop Links */}
        <div className={`md:flex items-center gap-6 ${isOpen ? 'flex absolute top-16 left-0 w-full bg-zinc-950 flex-col p-6 border-b border-zinc-800' : 'hidden md:flex'}`}>
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/biography" onClick={() => setIsOpen(false)}>Bio</Link>
          <Link href="/bibliography" onClick={() => setIsOpen(false)}>Bibliography</Link>
          <Link href="/blog" className="text-amber-500 font-bold">Codex</Link>
        </div>
      </div>
    </nav>
  );
}