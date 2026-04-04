import React from "react";
import "./Pipeline.css";
import { FaUserPlus, FaPhoneAlt, FaFileAlt, FaCheckCircle, FaHourglassHalf } from "react-icons/fa";

const stages = [
  { name: "Leads", value: 10, indicator: "0.43% ↑", color: "#a80a54", icon: <FaUserPlus /> },
  { name: "Contacted", value: 3, indicator: "0.43% ↑", color: "#ff9800", icon: <FaPhoneAlt /> },
  { name: "Applied", value: 6, indicator: "0.43% ↑", color: "#2196f3", icon: <FaFileAlt /> },
  { name: "Approved", value: 4, indicator: "0.43% ↑", color: "#4caf50", icon: <FaCheckCircle /> },
  { name: "Pending", value: 1, indicator: "0.43% ↑", color: "#4b534c", icon: <FaHourglassHalf /> }
];

const Pipeline = ({ selectedStage, setSelectedStage }) => {
  return (
    <div className="pipeline-header">
      {stages.map(stage => (
        <div
          key={stage.name}
          className={`pipeline-card ${selectedStage === stage.name ? "active" : ""}`}
          style={{ borderTop: `4px solid ${stage.color}` }}
          onClick={() => setSelectedStage(stage.name)}
        >
          <div className="pipeline-icon">{stage.icon}</div>
          <h3>{stage.name}</h3>
          {/* <p>This month</p> */}
          <div className="pipeline-value">{stage.value}</div>
          <div className="pipeline-indicator">{stage.indicator}</div>
        </div>
      ))}
    </div>
  );
};

export default Pipeline;
