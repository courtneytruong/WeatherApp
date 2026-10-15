import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar() {
  const [query, setQuery] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const cleaned = query.split(",")[0].trim();
    if (!cleaned) {
      return;
    }
    const res = await fetch(`/api/search?name=${encodeURIComponent(cleaned)}`);
    if (!res.ok) {
      return;
    }

    const results = await res.json();
    console.log(results);
  }

  return (
    <form onSubmit={handleSubmit} className="relative flex items-center w-full">
      <FaSearch className="absolute left-3 text-neutral-400 text-neutral-400 ml-2" />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a city..."
        className="w-full bg-neutral-900 text-white placeholder:text-neutral-400 border border-slate-600 focus:outline-none focus:ring-1 focus:ring-white p-2 pl-11 rounded-xl"
      />
    </form>
  );
}

export default SearchBar;
