export default function Bibliography() {
    const books = [
      { title: "Season of Storms", year: 2013, category: "Prequel" },
      { title: "The Last Wish", year: 1993, category: "Short Story Collection" },
      { title: "Sword of Destiny", year: 1992, category: "Short Story Collection" },
      { title: "Blood of Elves", year: 1994, category: "Saga" },
      { title: "Time of Contempt", year: 1995, category: "Saga" },
      { title: "Baptism of Fire", year: 1996, category: "Saga" },
      { title: "The Tower of the Swallow", year: 1997, category: "Saga" },
      { title: "The Lady of the Lake", year: 1999, category: "Saga" },
      { title: "The Road with No Return", year: 1997, category: "Supplementary" },
      { title: "Something Ends, Something Begins", year: 1993, category: "Supplementary" },
    ];
  
    return (
      <article className="max-w-3xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-6">The Sapkowski Canon</h1>
        <ul className="space-y-4">
          {books.map((book) => (
            <li key={book.title} className="border-b pb-2">
              <span className="font-semibold">{book.title}</span> 
              <span className="text-gray-500 ml-2">({book.year})</span>
              <div className="text-sm italic text-blue-600">{book.category}</div>
            </li>
          ))}
        </ul>
      </article>
    );
  }