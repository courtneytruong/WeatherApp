import "./App.css";
import "./index.css";
import BodyContainer from "./Components/BodyContainer";
import TopNavBar from "./Components/TopNavBar";
import { useState } from "react";
import changeBackground from "./Utilities/changeBackground";
import placeholderData from "./Utilities/placeholderData";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const backgroundClass = changeBackground(placeholderData.current.condition);
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-blue-100 flex flex-col">
      <TopNavBar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <div className={`${backgroundClass} flex-1 min-w-0`}>
        <BodyContainer isSidebarOpen={isSidebarOpen} />
      </div>
    </div>
  );
}

export default App;
