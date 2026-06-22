// src/app/blog/page.tsx
import CharacterCard from '@/components/CharacterCard';

interface Character {
  name: string;
  title: string;
  faction: string;
  description: string;
  slug: string;
}

interface CategoryGroup {
  categoryTitle: string;
  categorySummary: string;
  members: Character[];
}

const CATEGORIZED_CODEX: CategoryGroup[] = [
  {
    categoryTitle: "Geralt's Intrepid Hanza",
    categorySummary: "The fiercely loyal fellowship that bonded together, defying empires and armies to help Geralt rescue Ciri.",
    members: [
      { name: "Geralt of Rivia", title: "The White Wolf", faction: "School of the Wolf", description: "A mutated monster hunter bound by destiny.", slug: "geralt-of-rivia" },
      { name: "Jaskier (Dandelion)", title: "Master of the Seven Liberal Arts", faction: "The Academy of Oxenfurt", description: "The Continent's premier minstrel and Geralt's fiercely loyal, albeit theatrical, brother-in-arms.", slug: "jaskier" },
      { name: "Emiel Regis", title: "Higher Vampire", faction: "Dillingen Barber-Surgeon", description: "An intellectual, centuries-old vampire fighting his own blood addiction.", slug: "regis" },
      { name: "Cahir aep Ceallach", title: "The Nilfgaardian Knight", faction: "Disgraced Imperial Officer", description: "The knight plagued by nightmares of Cintra, fighting to redeem his soul.", slug: "cahir" },
      { name: "Milva (Maria Barring)", title: "The Archer of Brokilon", faction: "Dryad Ally", description: "An elite human archer raised among the dryads, possessing unmatched survival instincts.", slug: "milva" },
      { name: "Angoulême", title: "The Stray", faction: "Former Nightingale Gang", description: "A cynical, sharp-tongued young bandit adopted into the Witcher's proxy family.", slug: "angouleme" }
    ]
  },
  {
    categoryTitle: "Witchers of the Keep",
    categorySummary: "The dying remnants of the mutated brotherhoods, forged through agony to shield humanity from the dark.",
    members: [
      { name: "Vesemir", title: "The Grandmaster", faction: "School of the Wolf", description: "The oldest surviving witcher and paternal anchor of Kaer Morhen.", slug: "vesemir" },
      { name: "Lambert", title: "The Cynic", faction: "School of the Wolf", description: "A young, deeply bitter witcher who views his mutations as a life-altering curse.", slug: "lambert" },
      { name: "Eskel", title: "The Stoic", faction: "School of the Wolf", description: "A reliable, severely scarred monster hunter known for his calm, analytical demeanor.", slug: "eskel" },
      { name: "Coën", title: "The Southern Wolf", faction: "School of the Griffin", description: "A witcher from Poviss who spent a critical winter training Ciri in swordplay.", slug: "coen" }
    ]
  },
  {
    categoryTitle: "Noteworthy Dwarves & Allies",
    categorySummary: "The stubborn, fiercely honorable non-humans who navigate human prejudice with a war axe and tankard of ale.",
    members: [
      { name: "Zoltan Chivay", title: "The Veteran", faction: "Mahakaman Volunteer", description: "Geralt's fiercely loyal companion, defined by a golden heart and a brutal combat style.", slug: "zoltan-chivay" },
      { name: "Yarpen Zigrin", title: "The Mercenary", faction: "King Henselt's Vanguard", description: "A pragmatic dwarf commander trying to bridge the gap between elder races and human expansion.", slug: "yarpen-zigrin" }
    ]
  },
  {
    categoryTitle: "Kings, Queens, & Emperors",
    categorySummary: "The grand architects of political distress, treating the lives of citizens like throwaway pieces on a chessboard.",
    members: [
        // Place these inside the members: [] array for Kings, Queens, & Emperors
        { name: "Emhyr var Emreis", title: "The White Flame Dancing on the Graves of his Foes", faction: "Nilfgaardian Empire", description: "The ruthless, brilliant emperor driving his expansionist war machine relentlessly northward.", slug: "emhyr" },
        { name: "Vizimir II the Just", title: "King of Redania", faction: "Northern Kingdoms", description: "A stubborn, powerful monarch whose rule relies heavily on his spymaster Dijkstra and the sorceress Philippa.", slug: "vizimir" },
        { name: "Henselt", title: "King of Kaedwen", faction: "Northern Kingdoms", description: "A belligerent, fiercely expansionist king who values raw military might and harbors a deep hatred for non-humans.", slug: "henselt" },
        { name: "Demavend III", title: "King of Aedirn", faction: "Northern Kingdoms", description: "A short-tempered, easily stressed ruler whose lands border the frontlines of the Nilfgaardian invasion.", slug: "demavend" },
        { name: "Foltest", title: "King of Temeria", faction: "Northern Kingdoms", description: "A charismatic yet deeply flawed monarch holding the frontline against southern invasion.", slug: "foltest" },
        { name: "Esterad Thyssen", title: "King of Kovir and Poviss", faction: "Kovir & Poviss", description: "An incredibly wealthy, sharp-witted neutral king who secretly funds the Northern war effort through back-alley banking channels.", slug: "esterad-thyssen" },
        { name: "Calanthe", title: "The Lioness of Cintra", faction: "Cintra", description: "Ciri's legendary grandmother; a fierce, prideful warrior queen who chose death over surrender to Nilfgaard.", slug: "calanthe" },
        { name: "Meve", title: "Queen of Lyria and Rivia", faction: "Northern Kingdoms", description: "A fiercely independent warrior queen who runs a brutal guerrilla resistance campaign against imperial occupying forces.", slug: "meve" },
        { name: "Crach an Craite", title: "The Sea Boar / Jarl of Ard Skellig", faction: "Skellige Isles", description: "The fierce Jarl of Ard Skellig, bound by ancient blood oaths to protect the legacy and survivors of Cintra.", slug: "crach-an-craite" }
    ]
  },
  {
    categoryTitle: "The Lodge of Sorceresses",
    categorySummary: "A secret cabal of female mages who split from the male-dominated Brotherhood to control politics via the shadows.",
    members: [
      { name: "Yennefer of Vengerberg", title: "The Obsidian Star", faction: "Independent / Cintra", description: "Master of the arcane arts whose independence masks a fiercely protective maternal heart.", slug: "yennefer-of-vengerberg" },
      { name: "Philippa Eilhart", title: "Founder of the Lodge", faction: "Redanian Court", description: "A ruthless, polymorphing schemer obsessed with establishing absolute magical supremacy.", slug: "philippa" },
      { name: "Triss Merigold", title: "The Fourteenth of Sodden", faction: "Temerian Adviser", description: "A talented alchemist and healer whose warmth conflicts with her political entanglements.", slug: "triss-merigold" },
      { name: "Fringilla Vigo", title: "The Nilfgaardian Sorceress", faction: "The Lodge / Empire", description: "A highly analytical imperial mage who uses her arts—and charms—to detain the White Wolf in Toussaint.", slug: "fringilla-vigo" },
      { name: "Keira Metz", title: "The Exiled Advisor", faction: "The Lodge / Temeria", description: "A luxury-loving sorceress fleeing witch hunts, navigating the swampy margins of Velen.", slug: "keira-metz" },
      { name: "Margarita Laux-Antille", title: "Rectress of Aretuza", faction: "The Lodge / Academy", description: "Tissaia's successor, dedicated entirely to protecting her students rather than court politics.", slug: "margarita" },
      { name: "Sheala de Tancarville", title: "The Lonely Hermit", faction: "The Lodge / Kovir", description: "A reclusive, deeply academic sorceress who treats geopolitics like a cold, clinical science experiment.", slug: "sheala" },
      { name: "Sabrina Glevissig", title: "The Kaedwenian Fury", faction: "The Lodge / Kaedwen", description: "A volatile, dominant mage who rules King Henselt's court with an iron will and explosive battlefield spells.", slug: "sabrina" },
      { name: "Assire var Anahid", title: "The Southern Occultist", faction: "The Lodge / Nilfgaard", description: "A high-ranking imperial mage who bravely risks execution to integrate the highly secretive Nilfgaardian occult into the Lodge.", slug: "assire" },
      { name: "Ida Emean aep Sivney", title: "The Free Elf Aen Saevherne", faction: "The Lodge / Blue Mountains", description: "An ancient elven Knowing One acting as an elusive conduit between mortal magic and the elder dimensions.", slug: "ida-emean" }
    ]
  },
  {
    categoryTitle: "The Imperial Coroner & Bounty Hunters",
    categorySummary: "The cold, tracking specialists hired by factions to tie up loose ends, hunt down anomalies, and eliminate threats.",
    members: [
        // Place these inside the members: [] array for The Imperial Coroner & Bounty Hunters
        { name: "Stefan Skellen", title: "Imperial Coroner (Tawny Owl)", faction: "Nilfgaardian Secret Service", description: "A high-ranking imperial investigator secretly plotting to overthrow the monarchy in favor of a democracy.", slug: "stefan-skellen" },
        { name: "Leo Bonhart", title: "The Witcher Killer", faction: "Independent Bounty Hunter", description: "A sadistic, terrifyingly elite swordsman who hunts down the Rats and collects witcher medallions as combat trophies.", slug: "leo-bonhart" },
        { name: "Boreas Mun", title: "The Tracker", faction: "Skellen's Commando", description: "An expert woodsman and wilderness tracker who can read any trail, forced into hunting Ciri across the steppes.", slug: "boreas-mun" },
        { name: "Professor", title: "Ralf Blunden", faction: "Independent Mercenary", description: "A highly educated, articulate hitman and tracker known for his clinical, cold-blooded approach to contracts.", slug: "the-professor" },
        { name: "Houvenaghel", title: "Master of the Arena", faction: "Cidaris / Merchant", description: "A cruel, wealthy merchant cousin of Leo Bonhart who operates the brutal gladiatorial arena in Claremont where captives are forced to fight.", slug: "houvenaghel" }
    ]
  },
  {
    categoryTitle: "The Rats (Mice of the Korath Desert)",
    categorySummary: "A cynical, traumatized gang of young outlaws roving the borderlands of Geso, bound together by loss and violence.",
    members: [
      { name: "Falka (Ciri)", title: "The Apprentice Thief", faction: "The Rats", description: "A traumatized, displaced Princess of Cintra who adopts a ruthless criminal identity alongside the gang.", slug: "ciri" },
      { name: "Giselher", title: "Leader of the Rats", faction: "The Rats", description: "A former deserter who leads the gang with a strict code of mutual survival and reckless indulgence.", slug: "giselher" },
      { name: "Mistle", title: "The Outcast", faction: "The Rats", description: "A noble-born girl turned bitter highwayman, who forms an intense, possessive bond with Ciri.", slug: "mistle" },
      { name: "Asse", title: "The Avenger", faction: "The Rats", description: "A vengeful youth who joined the gang after witnessing the horrific massacre of his entire family by Nilfgaard.", slug: "asse" },
      { name: "Iskra", title: "Spark", faction: "The Rats", description: "A proud, fierce elven exile and Giselher's lover, who weaponizes her fluid agility and sharp tongue to survive.", slug: "iskra" },
      { name: "Reef", title: "The Abandoned Soldier", faction: "The Rats", description: "A former Nilfgaardian conscript who cast off his imperial loyalty after being left for dead by his unit and rescued by the gang.", slug: "reef" },
      { name: "Kayleigh", title: "The Cutthroat", faction: "The Rats", description: "A volatile, hot-headed fighter whose desperate childhood left him fiercely aggressive and untrusting.", slug: "kayleigh" }
    ]
  },
  {
    categoryTitle: "The True Arch-Villains",
    categorySummary: "The brilliant, sadistic mastermind operators who push the limits of cruelty and magic to harvest power.",
    members: [
      { name: "Vilgefortz of Roggeveen", title: "The Renegade Mage", faction: "Brotherhood / Rogue", description: "A terrifyingly powerful, psychopathic sorcerer obsessed with capturing Ciri to extract her genetic lineage.", slug: "vilgefortz" },
      { name: "Rience", title: "The Fire Mage", faction: "Vilgefortz's Enforcer", description: "A sadistic operative specializing in tracking and interrogation via brutal fire sorcery.", slug: "rience" },
      { name: "Schirrú", title: "The Half-Elf Assassin", faction: "Vilgefortz's Agent", description: "A cold-blooded mercenary and spy hired to execute Geralt and manipulate local regional conflicts.", slug: "schirru" }
    ]
  },
  {
    categoryTitle: "Isolated Scholars & Hermits",
    categorySummary: "The reclusive intellectuals who abandoned civilization's wars to study philosophy, history, and medicine in exile.",
    members: [
      { name: "Vysogota of Corvo", title: "The Exiled Philosopher", faction: "Academy of Oxenfurt / Exile", description: "A brilliant old scholar who took in a mutilated, dying Ciri and nursed her back to health in the swamps.", slug: "vysogota-of-corvo" }
    ]
  },
  {
    categoryTitle: "The Scoia'tael & Elven Resistance",
    categorySummary: "Non-human guerrilla freedom fighters who allied with Nilfgaard to launch brutal partisan attacks against human kingdoms.",
    members: [
      { name: "Francesca Findabair", title: "Queen of Dol Blathanna", faction: "The Lodge / Elven Royalty", description: "The most beautiful woman in the world, who traded her moral compass to secure a sovereign elven state.", slug: "francesca-findabair" },
      { name: "Isengrim Faoiltiarna", title: "The Iron Wolf", faction: "Scoia'tael Commander", description: "A legendary, heavily scarred elven commando known for his brutal, uncompromising tactics against humans.", slug: "isengrim" },
      { name: "Toruviel", title: "The Proud Rebel", faction: "Dol Blathanna Commando", description: "A fierce elven warrior whose burning hatred for humanity slowly cracks through shared encounters with Geralt.", slug: "toruviel" }
    ]
  },
  {
    categoryTitle: "Redanian Intelligence & Spymasters",
    categorySummary: "The shadow brokers, informational thieves, and hidden architects driving the strategies of the Northern monarchs.",
    members: [
      { name: "Sigismund Dijkstra", title: "Head of Secret Service", faction: "Redanian Court", description: "A towering, brilliant spymaster who knows every dirty secret from the gutters to the palaces.", slug: "sigismund-dijkstra" }
    ]
  },
  {
    categoryTitle: "The Wild Hunt (Dearg Ruadhri)",
    categorySummary: "An elite elven cavalry faction from an alternate dimension traveling between worlds to harvest slaves.",
    members: [
      { name: "Eredin Bréacc Glas", title: "King of the Wild Hunt", faction: "Aen Elle Elves", description: "A ruthless, spectral elven general hunting Ciri across space and time to claim her ancient bloodline.", slug: "eredin" },
      { name: "Avallac'h", title: "The Fox", faction: "Aen Elle Knowing One", description: "An enigmatic elven sage whose guidance hides a deeply calculating, ancient agenda regarding the Elder Blood.", slug: "avallach" }
    ]
  },

  {
    categoryTitle: "The Real Heroes",
    categorySummary: "These are the goodest and bravest of all the characters.",
    members: [
      { name: "Ihuarraquax", title: "The Little Horse", faction: "Creatures", description: "A sentient unicorn of the Aen Seidhe who formed a profound telepathic bond with Ciri and served as a guardian of her destiny.", slug: "ihuarraquax" },
{ name: "Kelpie", title: "The Black Mare", faction: "Independent Allies", description: "A fierce, untamed black mare that became Ciri's only constant companion and symbol of freedom on the road.", slug: "kelpie" },
{ name: "Roach", title: "The Constant Companion", faction: "Independent Allies", description: "The recurring name Geralt gives his mounts, serving as a stoic, practical anchor throughout his long life on the Path.", slug: "roach" }
    ]
  }
];

export default function BlogDirectoryPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 md:py-24 space-y-20">
      
      {/* GLOBAL DIRECTORY HEADER */}
      <header className="space-y-4 border-b border-zinc-900 pb-8">
        <span className="text-xs uppercase tracking-widest text-amber-500 font-mono font-semibold">
          Master Index
        </span>
        <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-black">
          The Great Library Archives
        </h1>
        <p className="text-zinc-400 max-w-2xl leading-relaxed text-sm">
          Select an entity file below to parse records of historical alliances, field observations, and geopolitical movements recorded across The Continent.
        </p>
      </header>

      {/* RENDER CATEGORY ZONES */}
      {CATEGORIZED_CODEX.map((group) => (
        <section key={group.categoryTitle} className="space-y-6">
          <div className="border-b border-zinc-900/60 pb-2">
            <h2 className="text-xl md:text-2xl font-serif font-bold text-zinc-500">
              {group.categoryTitle}
            </h2>
            <p className="text-xs text-zinc-500 mt-1 max-w-3xl">
              {group.categorySummary}
            </p>
          </div>

          {/* INNER GRID */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {group.members.map((char) => (
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
      ))}

    </main>
  );
}