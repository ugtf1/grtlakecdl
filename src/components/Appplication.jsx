import React, { useState } from "react";
import jsPDF from "jspdf";
import "./Dashboard.css";

const ApplicationDashboard = () => {
  const [applications, setApplications] = useState([
    {
      id: 1,
      name: "Jane Doe",
      preferredClass: "B",
      emergencyContact: "+2348012345678",
      details:
        "Jane is applying for advanced Truck Driving. She has prior experience in basic truck operation.",
      approved: false
    },
    {
      id: 2,
      name: "John Smith",
      preferredClass: "A",
      emergencyContact: "+2348098765432",
      details:
        "John is interested in basic truck driving. He has a strong background in Truck Driving.",
      approved: false
    },
    {
      id: 3,
      name: "Karl Smith",
      preferredClass: "A",
      emergencyContact: "+2348098765432",
      details:
        "Karl is interested in basic truck driving. He has a strong background in Truck Driving.",
      approved: false
    },
    {
      id: 4,
      name: "Gabriel Smith",
      preferredClass: "A",
      emergencyContact: "+2348098765432",
      details:
        "Gabriel is interested in basic truck driving. He has a strong background in Truck Driving.",
      approved: false
    },
    {
      id: 5,
      name: "Mark Smith",
      preferredClass: "A",
      emergencyContact: "+2348098765432",
      details:
        "Mark is interested in basic truck driving. He has a strong background in Truck Driving.",
      approved: false
    },
    {
      id: 6,
      name: "Drake Smith",
      preferredClass: "A",
      emergencyContact: "+2348098765432",
      details:
        "Drake is interested in basic truck driving. He has a strong background in Truck Driving.",
      approved: false
    }
  ]);

  const [selectedApp, setSelectedApp] = useState(null);

  const handleApprove = (id) => {
    setApplications(
      applications.map((app) =>
        app.id === id ? { ...app, approved: true } : app
      )
    );
    alert("Application approved!");
    setSelectedApp(null);
  };

  const handleDownloadPDF = (applicant) => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Applicant Information", 20, 20);

    doc.setFontSize(12);
    doc.text(`Name: ${applicant.name}`, 20, 40);
    doc.text(`Preferred Class: ${applicant.preferredClass}`, 20, 50);
    doc.text(`Emergency Contact: ${applicant.emergencyContact}`, 20, 60);
    doc.text(`Status: ${applicant.approved ? "Approved" : "Pending"}`, 20, 70);

    doc.text("Details:", 20, 90);
    doc.text(applicant.details, 20, 100, { maxWidth: 170 });

    doc.save(`${applicant.name}-application.pdf`);
  };

  return (
    <div className="dashboard">
      <section className="card">
        <h2>Submitted Applications</h2>
        <div className="table-wrapper">
          <table className="styled-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Preferred Class</th>
                <th>Emergency Contact</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr key={app.id}>
                  <td>{app.name}</td>
                  <td>{app.preferredClass}</td>
                  <td>{app.emergencyContact}</td>
                  <td>{app.approved ? "Approved" : "Pending"}</td>
                  <td>
                    <button
                      className="contact-btn"
                      onClick={() => setSelectedApp(app)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
              {applications.length === 0 && (
                <tr>
                  <td colSpan="5" style={{ textAlign: "center" }}>
                    No applications submitted
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* Modal for applicant details */}
      {selectedApp && (
        <div className="modal-overlay" onClick={() => setSelectedApp(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>Applicant Details</h3>
            <p>
              <strong>Name:</strong> {selectedApp.name}
            </p>
            <p>
              <strong>Preferred Class:</strong> {selectedApp.preferredClass}
            </p>
            <p>
              <strong>Emergency Contact:</strong> {selectedApp.emergencyContact}
            </p>
            <p>
              <strong>Details:</strong> {selectedApp.details}
            </p>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                marginTop: "1rem",
                flexWrap: "wrap"
              }}
            >
              <button
                className="contact-btn"
                onClick={() => handleApprove(selectedApp.id)}
              >
                Approve Application
              </button>
              <button
                className="contact-btn"
                onClick={() => handleDownloadPDF(selectedApp)}
              >
                Download PDF
              </button>
              <button
                className="contact-btn close-btn"
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

export default ApplicationDashboard;
