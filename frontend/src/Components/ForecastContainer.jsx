// Components/ForecastContainer.jsx
function ForecastContainer({
  title,
  items,
  renderItem,
  className = "",
  scroll = false,
}) {
  return (
    <div
      className={`flex flex-col justify-start bg-linear-to-b from-neutral-900 to-neutral-100/20 rounded-xl text-white text-shadow-lg/50 p-4 w-full ${className}`}
    >
      <div className="flex justify-start text-lg font-semibold mb-4 border-b border-gray-400 pb-2">
        <h2>{title}</h2>
      </div>
      <div
        className={`flex items-center gap-10 ${
          scroll
            ? "flex-nowrap overflow-x-auto justify-center pb-2"
            : "flex-wrap justify-center "
        }`}
      >
        {items.map((item, index) => (
          <div key={index} className={scroll ? "flex-shrink-0" : ""}>
            {renderItem(item)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ForecastContainer;
