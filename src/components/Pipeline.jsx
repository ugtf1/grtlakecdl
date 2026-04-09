import React from "react";
import "./Pipeline.css";
import { FaUserPlus, FaEnvelope, FaFileAlt, FaCheckCircle, FaHourglassHalf } from "react-icons/fa";

const Pipeline = ({ selectedStage, setSelectedStage, stats, scrollToSection }) => {
  const stages = [
    { name: "Leads", value: stats.leads || 0, indicator: "Live", color: "#a80a54", icon: <FaUserPlus /> },
    { name: "Messages", value: stats.messages || 0, indicator: "Live", color: "#ff9800", icon: <FaEnvelope /> },
    { name: "Applied", value: stats.applied || 0, indicator: "Live", color: "#2196f3", icon: <FaFileAlt /> },
    { name: "Approved", value: stats.approved || 0, indicator: "Live", color: "#4caf50", icon: <FaCheckCircle /> },
    { name: "Pending", value: stats.pending || 0, indicator: "Live", color: "#4b534c", icon: <FaHourglassHalf /> }
  ];

  return (
    <div className="pipeline-header">
      {stages.map(stage => (
        <div
          key={stage.name}
          className={`pipeline-card ${selectedStage === stage.name ? "active" : ""}`}
          style={{ borderTop: `4px solid ${stage.color}` }}
          onClick={() => {
            setSelectedStage(stage.name);
            // Scroll to Applications table if Applied, Approved, or Pending
            if (["Applied", "Approved", "Pending"].includes(stage.name)) {
              scrollToSection("Applications");
            } else {
              scrollToSection(stage.name);
            }
          }}
        >
          <div className="pipeline-icon">{stage.icon}</div>
          <h3>{stage.name}</h3>
          <div className="pipeline-value">{stage.value}</div>
          <div className="pipeline-indicator">{stage.indicator}</div>
        </div>
      ))}
    </div>
  );
};

export default Pipeline;
