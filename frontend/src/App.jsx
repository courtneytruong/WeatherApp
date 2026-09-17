import "./App.css";
import "./index.css";
import BodyContainer from "./Components/BodyContainer";
import TopNavBar from "./Components/TopNavBar";
import SidebarContainer from "./Components/SidebarContainer";

function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-blue-100 flex flex-col">
      <TopNavBar />
      <div className="flex flex-col md:flex-row flex-1">
        <SidebarContainer />
        <div className="theme-sunny flex-1 min-w-0">
          <BodyContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
