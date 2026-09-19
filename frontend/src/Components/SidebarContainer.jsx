import { useState } from "react";
import { FiChevronsRight, FiChevronsLeft } from "react-icons/fi";

function SidebarContainer() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className={`fixed top-20 left-4 z-50 transition-transform duration-300 ease-in-out text-lg text-white text-shadow-lg/50 p-4
          ${isSidebarOpen ? "translate-x-60" : "bg-linear-to-b from-slate-900/80 to-slate-100/20 translate-x-0"}`}
      >
        {isSidebarOpen ? <FiChevronsLeft /> : <FiChevronsRight />}
      </button>
      <div
        className={`fixed left-0 top-16 bottom-0 h-full w-80 bg-linear-to-b from-slate-900/80 to-slate-100/20 p-4 
      transform transition-transform duration-300 ease-in-out
      ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <h2 className="text-lg text-white text-shadow-lg/50 mb-2">
          Saved Locations
        </h2>
        <ul className="text-white text-shadow-lg/50">location</ul>
      </div>
    </>
  );
}

export default SidebarContainer;
