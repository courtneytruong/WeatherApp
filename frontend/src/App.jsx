import "./App.css";
import "./index.css";
import BodyContainer from "./Components/BodyContainer";
import TopNavBar from "./Components/TopNavBar";

function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-blue-100 flex flex-col">
      <TopNavBar />

      <div className="theme-sunny flex-1 min-w-0">
        <BodyContainer />
      </div>
    </div>
  );
}

export default App;
