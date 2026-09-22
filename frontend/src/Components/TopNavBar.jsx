import { FiChevronsRight, FiChevronsLeft } from "react-icons/fi";
import SearchBar from "./SearchBar";

function TopNavBar({ isSidebarOpen, setIsSidebarOpen }) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center bg-neutral-900 text-white p-4">
      <h1 className="text-xl font-bold">Weather App</h1>
      <div className="flex items-center ml-auto">
        <SearchBar />
        {/* sidebar toggle button */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className={`duration-300 ease-in-out text-2xl text-white text-shadow-lg/50 p-3
                  ${isSidebarOpen ? "" : "bg-neutral-900/80 rounded-xl"}`}
        >
          {isSidebarOpen ? <FiChevronsRight /> : <FiChevronsLeft />}
        </button>
      </div>
    </div>
  );
}

export default TopNavBar;
