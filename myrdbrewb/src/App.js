import { Routes, Route } from "react-router-dom";
import "./App.css";
import CreateTask from "./pages/CreateTask";
import SeeExistingTaskes from "./pages/SeeExistingTaskes";
import TaskInsidePage from "./pages/TaskInsidePage";
import PageHeader from "./Components/PageHeader";

function App() {
  return (
    <div className="App">
      {/* PageHeader always visible at the top */}
      <PageHeader />

      {/* Main content below the header */}
      <div className="main-content">
        <Routes>
          <Route path="/create-task" element={<CreateTask />} />
          <Route path="/" element={<SeeExistingTaskes />} />
          <Route path="/task/:id" element={<TaskInsidePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
