import { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar({ onSelectLocation }) {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const formRef = useRef(null);

  useEffect(() => {
    const controller = new AbortController();
    async function search() {
      const cleaned = query.split(",")[0].trim();
      if (cleaned.length < 3) {
        setSearchResults([]);
        return;
      }
      try {
        const res = await fetch(
          `/api/search?name=${encodeURIComponent(cleaned)}`,
          { signal: controller.signal },
        );
        if (!res.ok) {
          return;
        }
        const results = await res.json();
        setSearchResults(results);
      } catch (err) {
        if (err.name === "AbortError") {
          return;
        }
        console.error(err);
      }
    }
    const timer = setTimeout(search, 300);
    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [query]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (!formRef.current.contains(e.target)) {
        setSearchResults([]);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleKeyDown(e) {
    if (e.key === "Escape") {
      setSearchResults([]);
      setQuery("");
    }
  }

  function handleSelect(result) {
    onSelectLocation(result);
    setSearchResults([]);
    setQuery("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      ref={formRef}
      className="relative flex items-center w-full"
    >
      <FaSearch className="absolute left-3 text-neutral-400 text-neutral-400 ml-2" />
      <input
        type="text"
        value={query}
        onKeyDown={handleKeyDown}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by city or zip code"
        className="w-full bg-neutral-900 text-white placeholder:text-neutral-400 border border-slate-600 focus:outline-none focus:ring-1 focus:ring-white p-2 pl-11 rounded-xl"
      />
      {searchResults.length > 0 && (
        <ul className="absolute top-full left-0 right-0 mt-1 bg-neutral-900 border border-slate-600 rounded-xl overflow-hidden">
          {searchResults.map((result) => (
            <li key={`${result.lat},${result.lon}`}>
              <button
                type="button"
                onClick={() => handleSelect(result)}
                className="w-full text-left p-2 hover:bg-neutral-700"
              >
                {result.state ? `${result.name}, ${result.state}` : result.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}

export default SearchBar;
