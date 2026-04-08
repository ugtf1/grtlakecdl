import React, { useState, useEffect } from "react";
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
import Pipeline from "./Pipeline"; 

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

const Dashboard = () => {
  const [applications, setApplications] = useState([]);
  const [messages, setMessages] = useState([]);
  const [selectedStage, setSelectedStage] = useState("Leads");
  const [selectedApp, setSelectedApp] = useState(null);

  const stages = [
    { name: "Leads", color: "#723e09" },
    { name: "Contacted", color: "#ff9800" },
    { name: "Applied", color: "#2196f3" },
    { name: "Approved", color: "#4caf50" },
    { name: "Pending", color: "#4b534c" }
  ];

  // Fetch data from Django backend
  useEffect(() => {
    async function fetchData() {
      const appRes = await fetch("http://127.0.0.1:8000/api/application/");
      const appData = await appRes.json();
      setApplications(appData);

      const msgRes = await fetch("http://127.0.0.1:8000/api/contact/");
      const msgData = await msgRes.json();
      setMessages(msgData);
    }
    fetchData();
  }, []);

  // Approve application
  const approveApplication = async (id) => {
    await fetch(`http://127.0.0.1:8000/api/application/${id}/approve/`, {
      method: "POST"
    });

    // Refresh list
    const appRes = await fetch("http://127.0.0.1:8000/api/application/");
    setApplications(await appRes.json());
  };

  // Generate PDF
  const generatePDF = (id) => {
    window.open(`http://127.0.0.1:8000/api/application/${id}/generate_pdf/`, "_blank");
  };

  // Stage counts for pie chart
  const stageCounts = stages.map(stage =>
    applications.filter(a => a.application_status === stage.name).length
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

  const lineData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Visit Conversion Rate",
        data: [2620, 4812, 3513, 312, 815],
        borderColor: "#2196f3",
        backgroundColor: "rgba(33, 150, 243, 0.2)",
        fill: true,
        tension: 0.3,
        pointBackgroundColor: "#2196f3",
        pointBorderColor: "#fff",
        pointRadius: 5,
      }
    ]
  };

  return (
    <div className="dashboard">
      <Pipeline
        selectedStage={selectedStage}
        setSelectedStage={setSelectedStage}
        stages={stages}
        visitors={applications}
      />

      <div className="charts">
        <section className="card">
          <h2>Applications Distribution</h2>
          <Pie data={pieData} />
        </section>

        <section className="card">
          <h2>Visit Conversion Rate</h2>
          <Line data={lineData} />
        </section>
      </div>

      {/* Applications Table */}
      <section className="card">
        <h2>Applications ({selectedStage})</h2>
        <div className="table-wrapper">
          <table className="styled-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Date Submitted</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {applications.map(app => (
                <tr key={app.id}>
                  <td>{app.first_name} {app.last_name}</td>
                  <td>{app.email}</td>
                  <td>{app.application_status}</td>
                  <td>{new Date(app.submitted_at).toLocaleDateString()}</td>
                  <td>
                    <button onClick={() => setSelectedApp(app)}>View</button>
                    {app.application_status === "Pending" && (
                      <button onClick={() => approveApplication(app.id)}>Approve</button>
                    )}
                    <button onClick={() => generatePDF(app.id)}>PDF</button>
                  </td>
                </tr>
              ))}
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
                <th>Message</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {messages.map(m => (
                <tr key={m.id}>
                  <td>{m.first_name} {m.last_name}</td>
                  <td>{m.email}</td>
                  <td>{m.message}</td>
                  <td>{new Date(m.submitted_at).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Modal for selected application */}
      {selectedApp && (
        <div className="modal">
          <div className="modal-content">
            <h3>Application Details</h3>

            {/* Basic Info */}
            <p><strong>Name:</strong> {selectedApp.first_name} {selectedApp.last_name}</p>
            <p><strong>Email:</strong> {selectedApp.email}</p>
            <p><strong>Phone:</strong> {selectedApp.phone_number}</p>
            <p><strong>Status:</strong> {selectedApp.application_status}</p>
            <p><strong>Date of Birth:</strong> {selectedApp.date_of_birth}</p>
            <p><strong>Marital Status:</strong> {selectedApp.marital_status}</p>
            <p><strong>Citizenship:</strong> {selectedApp.citizenship}</p>
            <p><strong>Address:</strong> {selectedApp.address}, {selectedApp.city}, {selectedApp.postal_code}</p>

            {/* Emergency Contact */}
            <h4>Emergency Contact</h4>
            <p><strong>Name:</strong> {selectedApp.emergency_name}</p>
            <p><strong>Relationship:</strong> {selectedApp.emergency_relationship}</p>
            <p><strong>Phone:</strong> {selectedApp.emergency_day_phone} / {selectedApp.emergency_evening_phone}</p>
            <p><strong>Email:</strong> {selectedApp.emergency_email}</p>

            

            {/* Actions */}
            <div className="modal-actions">
              {selectedApp.application_status === "Pending" && (
                <button onClick={() => approveApplication(selectedApp.id)}>Approve</button>
              )}
              <button onClick={() => generatePDF(selectedApp.id)}>Generate PDF</button>
              <button onClick={() => setSelectedApp(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
