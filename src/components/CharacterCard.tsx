// src/components/CharacterCard.tsx
import Link from 'next/link';

interface CharacterCardProps {
  name: string;
  title: string;
  faction: string;
  description: string;
  slug: string;
}

export default function CharacterCard({ name, title, faction, description, slug }: CharacterCardProps) {
  return (
    <article className="bg-zinc-900 border border-zinc-800/80 p-6 rounded-lg hover:border-zinc-700 hover:bg-zinc-900/80 transition-all flex flex-col justify-between group">
      <div className="space-y-3">
        <span className="text-xs text-amber-500/80 font-mono tracking-tight uppercase">
          {faction}
        </span>
        <h3 className="text-xl font-semibold text-zinc-200 group-hover:text-zinc-50 font-serif">
          {name}
        </h3>
        <p className="text-xs italic text-zinc-400">{title}</p>
        <p className="text-sm text-zinc-400 leading-relaxed pt-2">
          {description}
        </p>
      </div>
      <div className="pt-6">
        <Link 
          href={`/blog/${slug}`} 
          className="text-sm text-zinc-300 group-hover:text-amber-400 inline-flex items-center gap-1 font-medium"
        >
          Read Codex Entry <span className="transform group-hover:translate-x-1 transition-transform">&rarr;</span>
        </Link>
      </div>
    </article>
  );
}