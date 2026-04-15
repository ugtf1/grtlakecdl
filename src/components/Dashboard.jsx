import React, { useState, useEffect, useRef } from "react";
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
  LinearScale,
  Filler
} from "chart.js";
import "./Dashboard.css";
import Pipeline from "./Pipeline"; 
import { apiUrl } from "../lib/api";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Filler
);

const Dashboard = () => {
  const [applications, setApplications] = useState([]);
  const [messages, setMessages] = useState([]);
  const [, setLeads] = useState([]);
  const [stats, setStats] = useState({});
  const [selectedStage, setSelectedStage] = useState("Leads");
  const [selectedApp, setSelectedApp] = useState(null);

  // Refs for scrolling
  const leadsRef = useRef(null);
  const applicationsRef = useRef(null);
  const messagesRef = useRef(null);

  useEffect(() => {
    async function fetchData() {
      const appRes = await fetch(apiUrl("/application/"));
      setApplications(await appRes.json());

      const msgRes = await fetch(apiUrl("/contact/"));
      setMessages(await msgRes.json());

      const leadRes = await fetch(apiUrl("/leads/"));
      setLeads(await leadRes.json());

      // NEW: fetch summary stats
      const summaryRes = await fetch(apiUrl("/dashboard/summary/"));
      setStats(await summaryRes.json());
    }
    fetchData();
  }, []);

  const approveApplication = async (id) => {
    await fetch(apiUrl(`/application/${id}/approve/`), {
      method: "POST"
    });
    const appRes = await fetch(apiUrl("/application/"));
    setApplications(await appRes.json());
  };

  const generatePDF = (id) => {
    window.open(apiUrl(`/application/${id}/generate_pdf/`), "_blank");
  };

  // Scroll handler
  const scrollToSection = (section) => {
    if (section === "Leads" && leadsRef.current) {
      leadsRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "Applications" && applicationsRef.current) {
      applicationsRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "Messages" && messagesRef.current) {
      messagesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Automatically scroll when stage changes
  useEffect(() => {
    scrollToSection(selectedStage);
  }, [selectedStage]);

  // Pie chart data
  const pieData = {
    labels: ["Applied","Approved","Pending"],
    datasets: [
      {
        data: [
          stats.applied || 0,
          stats.approved || 0,
          stats.pending || 0
        ],
        backgroundColor: ["#2196f3","#4caf50","#4b534c"],
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
        stats={stats}
        scrollToSection={scrollToSection}
      />

      <div className="charts">
        {/* Applications Distribution card */}
        <section
          className="card"
          onClick={() => scrollToSection("Applications")}
        >
          <h2>Applications Distribution</h2>
          <Pie
            data={pieData}
            options={{
              onClick: () => scrollToSection("Applications"),
            }}
          />
        </section>

        {/* Visit Conversion Rate card */}
        <section className="card" onClick={() => scrollToSection("Leads")}>
          <h2>Visit Conversion Rate</h2>
          <Line data={lineData} />
        </section>
      </div>

      
      {/* <section className="card" ref={leadsRef}>
        <h2>Leads</h2>
        <div className="table-wrapper">
          <table className="styled-table">
            <thead>
              <tr>
                <th>IP Address</th>
                <th>Location</th>
                <th>Origin</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {leads.map(lead => (
                <tr key={lead.id}>
                  <td>{lead.ip_address}</td>
                  <td>{lead.location}</td>
                  <td>{lead.origin}</td>
                  <td>{new Date(lead.visited_at).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section> */}

      {/* Applications Table */}
      <section className="card" ref={applicationsRef}>
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
                    <button className="app-btn view" onClick={() => setSelectedApp(app)}>View</button>
                    {app.application_status === "Pending" && (
                      <button className="app-btn approve" onClick={() => approveApplication(app.id)}>Approve</button>
                    )}
                    <button className="app-btn pdf" onClick={() => generatePDF(app.id)}>PDF</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Contact Messages */}
      <section className="card" ref={messagesRef}>
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

            <p><strong>Name:</strong> {selectedApp.first_name} {selectedApp.last_name}</p>
            <p><strong>Email:</strong> {selectedApp.email}</p>
            <p><strong>Phone:</strong> {selectedApp.phone_number}</p>
            <p><strong>Status:</strong> {selectedApp.application_status}</p>
            <p><strong>Date of Birth:</strong> {selectedApp.date_of_birth}</p>
            <p><strong>Marital Status:</strong> {selectedApp.marital_status}</p>
            <p><strong>Citizenship:</strong> {selectedApp.citizenship}</p>
            <p><strong>Address:</strong> {selectedApp.address}, {selectedApp.city}, {selectedApp.postal_code}</p>

            <h4>Emergency Contact</h4>
            <p><strong>Name:</strong> {selectedApp.emergency_name}</p>
            <p><strong>Relationship:</strong> {selectedApp.emergency_relationship}</p>
            <p><strong>Phone:</strong> {selectedApp.emergency_day_phone} / {selectedApp.emergency_night_phone}</p>
            <p><strong>Email:</strong> {selectedApp.emergency_email}</p>
                        <p><strong>Address:</strong> {selectedApp.emergency_address1} {selectedApp.emergency_address2}, {selectedApp.emergency_city}, {selectedApp.emergency_state}, {selectedApp.emergency_postal_code}</p>

            {/* Actions */}
            <div className="modal-actions">
              {selectedApp.application_status === "Pending" && (
                <button
                  className="app-btn approve"
                  onClick={() => approveApplication(selectedApp.id)}
                >
                  Approve
                </button>
              )}
              <button
                className="app-btn pdf"
                onClick={() => generatePDF(selectedApp.id)}
              >
                Generate PDF
              </button>
              <button
                className="app-btn close"
                onClick={() => setSelectedApp(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;