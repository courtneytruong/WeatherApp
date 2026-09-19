import { FaSearch } from "react-icons/fa";

function SearchBar() {
  return (
    <div className="relative flex items-center w-full">
      <FaSearch className="absolute left-3 text-slate-400 text-slate-400 ml-2" />
      <input
        type="text"
        placeholder="Search for a city..."
        className="w-full bg-slate-900 text-white placeholder:text-slate-400 border border-slate-600 focus:outline-none focus:ring-1 focus:ring-white p-2 pl-11 rounded-xl"
      />
    </div>
  );
}

export default SearchBar;
