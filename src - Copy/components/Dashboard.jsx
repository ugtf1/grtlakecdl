import React, { useState } from "react";
import { Pie, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale
} from "chart.js";
import "./Dashboard.css";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale
);

const INITIAL_VISITORS = [
  { id: 1, name: "Jane Dominuc", origin: "Google", email: "jane@example.com", phone: "+2348012345678", stages: ["Leads", "Applied", "Approved"], date: "Nov 2 2025" },
  { id: 2, name: "John Tray", origin: "Social Media", email: "john@example.com", phone: "+2348098765432", stages: ["Leads"], date: "Nov 3 2025" },
  { id: 3, name: "Mary Johnson", origin: "Referral", email: "mary@example.com", phone: "+2348023456789", stages: ["Leads", "Pending"], date: "Nov 4 2025" },
  { id: 4, name: "David Musa", origin: "Direct", email: "david@example.com", phone: "+2348056789123", stages: ["Leads", "Applied", "Contacted", "Approved"], date: "Nov 5 2025" },
  { id: 5, name: "John Smith", origin: "Social Media", email: "john@example.com", phone: "+2348098765432", stages: ["Leads", "Contacted"], date: "Nov 6 2025" },
  { id: 6, name: "Mary Haze", origin: "Referral", email: "mary@example.com", phone: "+2348023456789", stages: ["Leads", "Applied"], date: "Nov 7 2025" },
  { id: 7, name: "David Karl", origin: "Direct", email: "david@example.com", phone: "+2348056789123", stages: ["Leads", "Applied", "Approved"], date: "Nov 8 2025" },
  { id: 8, name: "Jane Drake", origin: "Google", email: "jane@example.com", phone: "+2348012345678", stages: ["Leads", "Contacted"], date: "Nov 9 2025" },
  { id: 9, name: "John Park", origin: "Social Media", email: "john@example.com", phone: "+2348098765432", stages: ["Leads", "Applied"], date: "Nov 10 2025" },
  { id: 10, name: "Mary Kelly", origin: "Referral", email: "mary@example.com", phone: "+2348023456789", stages: ["Leads", "Applied", "Approved"], date: "Nov 11 2025" }
];

const INITIAL_MESSAGES = [
  { id: 1, name: "Jane Dominuc", email: "jane@example.com", subject: "Enrollment Inquiry", message: "I’d like more details about Class B enrollment.", date: "Nov 12 2025" },
  { id: 2, name: "John Tray", email: "john@example.com", subject: "Payment Options", message: "Do you offer installment payments?", date: "Nov 13 2025" },
  { id: 3, name: "Mary Johnson", email: "mary@example.com", subject: "Schedule", message: "What’s the next available training schedule?", date: "Nov 14 2025" }
];

const Dashboard = () => {
  const [visitors] = useState(INITIAL_VISITORS);
  const [messages] = useState(INITIAL_MESSAGES);
  const [selectedStage, setSelectedStage] = useState("Leads");

  const stages = [
    { name: "Leads", color: "#f57c00" },
    { name: "Contacted", color: "#ff9800" },
    { name: "Applied", color: "#2196f3" },
    { name: "Approved", color: "#4caf50" },
    { name: "Pending", color: "#4b534c" }
  ];

  const filteredVisitors = visitors.filter(
    v => Array.isArray(v.stages) && v.stages.includes(selectedStage)
  );

  // Stage counts for pie chart
  const stageCounts = stages.map(stage =>
    visitors.filter(v => v.stages.includes(stage.name)).length
  );

  const pieData = {
    labels: stages.map(s => s.name),
    datasets: [
      {
        data: stageCounts,
        backgroundColor: stages.map(s => s.color),
        borderWidth: 2
      }
    ]
  };

  // Line chart: visitors per date
  const dates = [...new Set(visitors.map(v => v.date))].sort();
  const lineData = {
    labels: dates,
    datasets: stages.map(stage => ({
      label: stage.name,
      data: dates.map(
        d => visitors.filter(v => v.date === d && v.stages.includes(stage.name)).length
      ),
      borderColor: stage.color,
      backgroundColor: stage.color,
      fill: false,
      tension: 0.3
    }))
  };

  return (
    <div className="dashboard">
      <div className="pipeline-header">
        {stages.map(stage => {
          const count = visitors.filter(v => v.stages.includes(stage.name)).length;
          return (
            <div
              key={stage.name}
              className={`pipeline-stage ${stage.name.toLowerCase()} ${selectedStage === stage.name ? "active" : ""}`}
              onClick={() => setSelectedStage(stage.name)}
            >
              {stage.name} ({count})
            </div>
          );
        })}
      </div>

      {/* Visitor details */}
      <section className="card">
        <h2>{selectedStage}</h2>
        <div className="table-wrapper">
          <table className="styled-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Origin</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Lead Category</th>
                <th>Date of Last Interaction</th>
              </tr>
            </thead>
            <tbody>
              {filteredVisitors.map(v => (
                <tr key={`${v.id}-${v.name}`}>
                  <td>{v.name}</td>
                  <td>{v.origin}</td>
                  <td>{v.email}</td>
                  <td>{v.phone}</td>
                  <td>{v.stages.join(", ")}</td>
                  <td>{v.date}</td>
                </tr>
              ))}
              {filteredVisitors.length === 0 && (
                <tr>
                  <td colSpan="6" style={{ textAlign: "center" }}>No visitors in this stage</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* Contact Messages */}
      <section className="card">
        <h2>Contact Messages</h2>
        <div className="table-wrapper">
          <table className="styled-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Subject</th>
                <th>Message</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {messages.map(m => (
                <tr key={m.id}>
                  <td>{m.name}</td>
                  <td>{m.email}</td>
                  <td>{m.subject}</td>
                  <td>{m.message}</td>
                  <td>{m.date}</td>
                </tr>
              ))}
              {messages.length === 0 && (
                <tr>
                  <td colSpan="5" style={{ textAlign: "center" }}>No messages received</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* Charts */}
      <div className="charts">
        <section className="card">
          <h2>Leads Distribution (Pie)</h2>
          <Pie data={pieData} />
        </section>

        <section className="card">
          <h2>Leads Trend Over Time (Line)</h2>
          <Line data={lineData} />
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
