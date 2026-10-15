import { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar({ onSelectLocation }) {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [status, setStatus] = useState("idle");
  const formRef = useRef(null);

  useEffect(() => {
    const controller = new AbortController();
    async function search() {
      const cleaned = query.split(",")[0].trim();
      if (cleaned.length < 3) {
        closeDropdown();
        return;
      }
      try {
        setStatus("loading");
        const res = await fetch(
          `/api/search?name=${encodeURIComponent(cleaned)}`,
          { signal: controller.signal },
        );
        if (!res.ok) {
          setStatus("error");
          return;
        }
        const results = await res.json();
        setSearchResults(results);
        setStatus("done");
      } catch (err) {
        if (err.name === "AbortError") {
          return;
        }
        setStatus("error");
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
        closeDropdown();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function closeDropdown() {
    setSearchResults([]);
    setStatus("idle");
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleKeyDown(e) {
    if (e.key === "Escape") {
      closeDropdown();
      setQuery("");
    }
  }

  function handleSelect(result) {
    onSelectLocation(result);
    closeDropdown();
    setQuery("");
  }

  let dropdownContent;

  if (status === "error") {
    dropdownContent = (
      <li className="p-2 text-neutral-400">
        {"Couldn't search right now. Try again."}
      </li>
    );
  } else if (status === "done" && searchResults.length === 0) {
    dropdownContent = (
      <li className="p-2 text-neutral-400">{`No matches for ${query}`}</li>
    );
  } else if (status === "loading" && searchResults.length === 0) {
    dropdownContent = <li className="p-2 text-neutral-400">Searching…</li>;
  } else {
    dropdownContent = searchResults.map((result) => (
      <li key={`${result.lat},${result.lon}`}>
        <button
          type="button"
          onClick={() => handleSelect(result)}
          className="w-full text-left p-2 hover:bg-neutral-700"
        >
          {result.state ? `${result.name}, ${result.state}` : result.name}
        </button>
      </li>
    ));
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
      {status !== "idle" && (
        <ul className="absolute top-full left-0 right-0 mt-1 bg-neutral-900 border border-slate-600 rounded-xl overflow-hidden">
          {dropdownContent}
        </ul>
      )}
    </form>
  );
}

export default SearchBar;
