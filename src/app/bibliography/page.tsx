export default function Bibliography() {
  const books = [
    { title: "Sword of Destiny", year: 1992, category: "Short Story Collection" },
    { title: "The Last Wish", year: 1993, category: "Short Story Collection" },
    { title: "Something Ends, Something Begins", year: 1993, category: "Supplementary" },
    { title: "Blood of Elves", year: 1994, category: "Saga" },
    { title: "Time of Contempt", year: 1995, category: "Saga" },
    { title: "Baptism of Fire", year: 1996, category: "Saga" },
    { title: "The Tower of the Swallow", year: 1997, category: "Saga" },
    { title: "The Road with No Return", year: 1997, category: "Supplementary" },
    { title: "The Lady of the Lake", year: 1999, category: "Saga" },
    { title: "Season of Storms", year: 2013, category: "Prequel" },
    { title: "Crossroads of Ravens", year: 2026, category: "New Release" },
  ];

  return (
    <article className="max-w-3xl mx-auto p-8 text-zinc-300">
      <h1 className="text-4xl font-bold mb-8 text-zinc-100">The Sapkowski Canon</h1>
      <ul className="space-y-6">
        {books.map((book) => (
          <li key={book.title} className="border-b border-zinc-800 pb-4">
            <div className="flex justify-between items-baseline">
              <span className="font-semibold text-zinc-100">{book.title}</span>
              <span className="text-zinc-500 text-sm">{book.year}</span>
            </div>
            <div className="text-xs uppercase tracking-widest text-amber-500/80 mt-1">
              {book.category}
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
}