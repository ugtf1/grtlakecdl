import React, { Suspense } from "react";
import "./Pipeline.css";

// Lazy load icons
const UserPlusIcon = React.lazy(() =>
  import("react-icons/fa").then(mod => ({ default: mod.FaUserPlus }))
);
const EnvelopeIcon = React.lazy(() =>
  import("react-icons/fa").then(mod => ({ default: mod.FaEnvelope }))
);
const FileIcon = React.lazy(() =>
  import("react-icons/fa").then(mod => ({ default: mod.FaFileAlt }))
);
const CheckCircleIcon = React.lazy(() =>
  import("react-icons/fa").then(mod => ({ default: mod.FaCheckCircle }))
);
const HourglassIcon = React.lazy(() =>
  import("react-icons/fa").then(mod => ({ default: mod.FaHourglassHalf }))
);

const Pipeline = ({ selectedStage, setSelectedStage, stats, scrollToSection }) => {
  const stages = [
    { name: "Leads", value: stats.leads || 0, indicator: "Live", color: "#a80a54", icon: <UserPlusIcon /> },
    { name: "Messages", value: stats.messages || 0, indicator: "Live", color: "#ff9800", icon: <EnvelopeIcon /> },
    { name: "Applied", value: stats.applied || 0, indicator: "Live", color: "#2196f3", icon: <FileIcon /> },
    { name: "Approved", value: stats.approved || 0, indicator: "Live", color: "#4caf50", icon: <CheckCircleIcon /> },
    { name: "Pending", value: stats.pending || 0, indicator: "Live", color: "#4b534c", icon: <HourglassIcon /> }
  ];

  return (
    <div className="pipeline-header">
      <Suspense fallback={<span />}>
        {stages.map(stage => (
          <div
            key={stage.name}
            className={`pipeline-card ${selectedStage === stage.name ? "active" : ""}`}
            style={{ borderTop: `6px solid ${stage.color}` }}
            onClick={() => {
              setSelectedStage(stage.name);
              if (["Applied", "Approved", "Pending"].includes(stage.name)) {
                scrollToSection("Applications");
              } else {
                scrollToSection(stage.name);
              }
            }}
          >
            <div className="pipeline-top">
              <div className="pipeline-icon" style={{ color: stage.color }}>
                {stage.icon}
              </div>
              <div className="pipeline-info">
                <h3>{stage.name}</h3>
                <div className="pipeline-indicator">{stage.indicator}</div>
              </div>
            </div>
            <div className="pipeline-value">{stage.value}</div>
          </div>
        ))}
      </Suspense>
    </div>
  );
};

export default Pipeline;
