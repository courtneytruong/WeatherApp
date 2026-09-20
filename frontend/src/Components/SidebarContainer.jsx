function SidebarContainer({ isSidebarOpen }) {
  return (
    <>
      <div
        className={`fixed right-0 top-16 bottom-0 h-full w-80 bg-linear-to-b from-neutral-900 to-neutral-100/20 p-6
      transform transition-transform duration-300 ease-in-out
      ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}`}
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
