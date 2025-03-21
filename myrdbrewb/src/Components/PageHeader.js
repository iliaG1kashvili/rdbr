import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PageHeader.css";

function PageHeader() {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="PageHeaderMainDiv">
      <div className="HeaderInsideDivForButtons">
        {/* Navigate to SeeExistingTaskes */}
        <button className="HeaderLogo" onClick={() => navigate("/")}><p className="HeaderLogo">Momentum</p></button>

        <div className="HeaderINsideDivForCreatingNewStafOrTask">
            {/* Open popup in center */}
            <button className="CreateWorkerButtonInHeader" onClick={() => setShowPopup(true)}>თანამშრომლის შექმნა</button>

            {/* Navigate to CreateTask */}
            <button className="CreateNewTaskButtonInHeader" onClick={() => navigate("/create-task")}> + შექმენი ახალი დავალება</button>
        </div>
      </div>
      {/* Popup Window */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>Create Worker</h2>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PageHeader;
