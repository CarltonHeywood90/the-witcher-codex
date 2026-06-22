// src/app/page.tsx
import Link from 'next/link';
import CharacterCard from '@/components/CharacterCard';

// We only need a tiny subset here to highlight on the front door
const FEATURED_CODEX_ENTRIES = [
  {
    name: "Geralt of Rivia",
    title: "The Gwynbleidd",
    description: "A mutated monster hunter bound by destiny, navigating a world where humanity often proves more monstrous than the beasts.",
    slug: "geralt-of-rivia",
    faction: "Witchers / Neutral"
  },
  {
    name: "Yennefer of Vengerberg",
    title: "The Sorceress",
    description: "A master of the arcane arts whose immense political influence and fierce independence mask a painful past.",
    slug: "yennefer-of-vengerberg",
    faction: "Brotherhood of Sorcerers"
  },
  {
    name: "Cirilla Fiona Elen Riannon",
    title: "Child of the Elder Blood",
    description: "A princess of Cintra hunted across nations for the world-shattering power sleeping within her lineage.",
    slug: "ciri",
    faction: "Cintra / Dynamic"
  }
];

export default function HomePage() {
  return (
    <div className="bg-zinc-950 text-zinc-100 font-sans">
      
      {/* 1. HERO SECTION */}
      <header className="relative border-b border-zinc-900 bg-gradient-to-b from-zinc-900 to-zinc-950 py-24 px-6 md:px-12 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-xs uppercase tracking-widest text-amber-500 font-semibold">
            The Continent Compendium
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight text-zinc-50">
            Sword &amp; Sorcery
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed">
            An archival catalog documenting the histories, alignments, and fates of those who shape Andrzej Sapkowski's dark fantasy world.
          </p>
          <div className="pt-4">
            <Link 
              href="/blog" 
              className="inline-block bg-zinc-100 text-zinc-950 font-medium px-6 py-3 rounded hover:bg-zinc-200 transition-colors"
            >
              Explore the Full Archive
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-24">

        {/* 2. THE REALM SECTION */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-wider text-zinc-500 font-bold">The Universe</span>
            <h2 className="text-3xl font-serif font-semibold text-zinc-100">Sapkowski's Lore</h2>
            <p className="text-zinc-400 leading-relaxed">
              Born from the mind of Polish author Andrzej Sapkowski, **The Continent** is a bleak, morally gray landscape born from the Conjunction of the Spheres—a cataclysmic event that trapped humans, elves, dwarves, and monsters in a single dimension.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Unlike traditional high fantasy, it is a realm defined by complex political intrigue, deep-seated racial tensions, and a distinct lack of pure heroism. Decisions here rarely sit between good and evil, but rather between the greater and lesser malice.
            </p>
          </div>
          <div className="bg-zinc-900/60 border border-zinc-800 h-64 rounded-lg flex items-center justify-center p-6 text-center text-zinc-500 italic font-serif tracking-wide">
            "Lesser, greater, middling, it's all the same... If I’m to choose between one evil and another, I’d rather not choose at all."
          </div>
        </section>

        {/* 3. FEATURED CATALOG SECTION */}
        <section className="space-y-8">
          <div className="border-b border-zinc-900 pb-4 flex justify-between items-end">
            <div>
              <span className="text-xs uppercase tracking-wider text-zinc-500 font-bold">The Codex</span>
              <h2 className="text-3xl font-serif font-semibold text-zinc-100">Prominent Figures</h2>
            </div>
            <Link href="/blog" className="text-sm text-amber-500 hover:underline flex items-center gap-1">
              View all chronicles &rarr;
            </Link>
          </div>

          {/* Rendering our modular clean CharacterCards cleanly! */}
          <div className="grid md:grid-cols-3 gap-6">
            {FEATURED_CODEX_ENTRIES.map((char) => (
              <CharacterCard 
                key={char.slug}
                name={char.name}
                title={char.title}
                faction={char.faction}
                description={char.description}
                slug={char.slug}
              />
            ))}
          </div>
        </section>

        {/* 4. GEOPOLITICS OVERVIEW */}
        <section className="bg-zinc-900/40 border border-zinc-900 rounded-xl p-8 md:p-12 space-y-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-wider text-zinc-500 font-bold">Geopolitics</span>
            <h2 className="text-3xl font-serif font-semibold text-zinc-100 mt-1">A Divided Land</h2>
            <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
              To understand the people of The Continent, one must understand the forces they serve under or flee from.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
            <div className="p-4 bg-zinc-900/60 border border-zinc-800/50 rounded">
              <h4 className="font-semibold text-zinc-200">The Northern Kingdoms</h4>
              <p className="text-xs text-zinc-400 mt-1">Temeria, Redania, Aedirn, and Kaedwen. Fractious, feudal nations constantly warring amongst themselves.</p>
            </div>
            <div className="p-4 bg-zinc-900/60 border border-zinc-800/50 rounded">
              <h4 className="font-semibold text-zinc-200">The Nilfgaardian Empire</h4>
              <p className="text-xs text-zinc-400 mt-1">The massive, disciplined southern superpower ruled with an iron fist by Emhyr var Emreis.</p>
            </div>
            <div className="p-4 bg-zinc-900/60 border border-zinc-800/50 rounded">
              <h4 className="font-semibold text-zinc-200">The Elder Races</h4>
              <p className="text-xs text-zinc-400 mt-1">Elves and Dwarves fighting systemic human oppression, often joining partisan guerrilla groups like the Scoia'tael.</p>
            </div>
            <div className="p-4 bg-zinc-900/60 border border-zinc-800/50 rounded">
              <h4 className="font-semibold text-zinc-200">The Neutral Order</h4>
              <p className="text-xs text-zinc-400 mt-1">Witchers, druids, and rogue mages who attempt to navigate the margins of power without picking sides.</p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}