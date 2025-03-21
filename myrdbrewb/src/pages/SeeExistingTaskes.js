import React, { useState } from "react";
import "./SeeExistingTaskes.css";

function SeeExistingTaskes() {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (button) => {
    setActiveButton(activeButton === button ? null : button);
  };

  return (
    <div className="SeeExistingTaskesMainDiv">
      <div className="SeeExistingTaskesMainDivInsideDiv">
        <p className="PagesName">
          <span className="PagesNameText">დავალებების გვერდი</span>
        </p>

        <div className="SeeExistingTaskesMainDivFilter">
          <button
            className={`filtrationButton filtrationButtonForDepartmant ${activeButton === "department" ? "active" : ""}`}
            onClick={() => handleButtonClick("department")}
          >
            დეპარტამენტი
          </button>

          <button
            className={`filtrationButton filtrationButtonForPriority ${activeButton === "priority" ? "active" : ""}`}
            onClick={() => handleButtonClick("priority")}
          >
            პრიორიტეტი
          </button>

          <button
            className={`filtrationButton filtrationButtonForEmployee ${activeButton === "employee" ? "active" : ""}`}
            onClick={() => handleButtonClick("employee")}
          >
            თანამშრომელი
          </button>
        </div>
      </div>
    </div>
  );
}

export default SeeExistingTaskes;
