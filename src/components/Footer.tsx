export default function Footer() {
    return (
      <footer className="border-t border-zinc-900 bg-zinc-950 py-12 text-center text-xs text-zinc-600 mt-auto">
        <div className="max-w-5xl mx-auto px-6 space-y-2">
          <p>&copy; {new Date().getFullYear()} Continent Codex. All rights reserved.</p>
          <p className="text-zinc-700 font-mono">
            Compiled statically via Next.js &amp; MDX • Authorized by the Great Library of Oxenfurt.
          </p>
        </div>
      </footer>
    );
  }