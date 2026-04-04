import { useState } from "react";
import "./ApplicationForm.css";

export default function ApplicationForm() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="application-form">
      {/* Progress Bar */}
<div className="progress-bar">
  {[
    { num: 1, title: "Personal Details" },
    { num: 2, title: "Driving History" },
    { num: 3, title: "Employment History" },
    { num: 4, title: "Certification" }
  ].map((stepItem, index, arr) => (
    <div className="progress-step-wrapper" key={stepItem.num}>
      <div
        className={`progress-step ${step >= stepItem.num ? "active" : ""}`}
      >
        {stepItem.num}
      </div>
      <div className="progress-title">{stepItem.title}</div>
      {index < arr.length - 1 && <div className="progress-divider"></div>}
    </div>
  ))}
</div>

      {/* Form Content */}
      <div>
        {/* Stage 1 */}
        {step === 1 && (
          <div>
            <h2 className="form-section-title">Basic Information</h2>
            <div className="form-content">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input type="date" placeholder="Date of Birth" />
              <input type="text" placeholder="Marital Status" />
              <input type="email" placeholder="Email" />
              <input type="tel" placeholder="Phone Number" />
              <select>
                <option value="">Select Citizenship</option>
                <option value="Nigeria">Nigeria</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Canada">Canada</option>
              </select>
              <input type="text" placeholder="Address" />
              <input type="text" placeholder="City" />
              <input type="text" placeholder="ZIP/Postal Code" />
            </div>

            <h2 className="form-section-title">Emergency Information</h2>
            <div className="form-content">
              <input type="text" placeholder="Full Name" />
              <input type="text" placeholder="Relationship" />
              <input type="tel" placeholder="Day Phone" />
              <input type="tel" placeholder="Evening Phone" />
              <input type="email" placeholder="Email Address" />
              <input type="text" placeholder="Address 1" />
              <input type="text" placeholder="Address 2" />
              <input type="text" placeholder="City" />
              <input type="text" placeholder="State" />
              <input type="text" placeholder="Postal Code" />
            </div>
          </div>
        )}

        {/* Stage 2 */}
        {step === 2 && (
          <div>
            <h2 className="form-section-title">Driving History</h2>

            <label>Do you have commercial driving experience?</label>
            <div className="form-row form-tarea">
              <label><input type="checkbox" /> Yes</label>
              <label><input type="checkbox" /> No</label>
            </div>

            <label>If "Yes", how many years?</label>
            <input type="text" placeholder="Years of experience" />

            <div className="form-row">
              <label><input type="checkbox" /> Class A</label>
              <label><input type="checkbox" /> Class B</label>
            </div>

            <h3 className="form-subtitle">Additional Driver’s Licenses Held</h3>
            <div className="form-content">
              <input type="text" placeholder="State" />
              <input type="text" placeholder="License No" />
              <input type="text" placeholder="Type" />
              <input type="date" placeholder="Expires" />
            </div>
            <div className="form-content">
              <input type="text" placeholder="State" />
              <input type="text" placeholder="License No" />
              <input type="text" placeholder="Type" />
              <input type="date" placeholder="Expires" />
            </div>

            <h3 className="form-subtitle">
              Accident record for past 3 years or more. If none, write "none"
            </h3>
            <div className="form-content">
              <input type="date" placeholder="Date" />
              <input type="text" placeholder="Nature of Accident" />
              <input type="text" placeholder="Fatalities" />
              <input type="text" placeholder="Injuries" />
            </div>
            <div className="form-content">
              <input type="date" placeholder="Date" />
              <input type="text" placeholder="Nature of Accident" />
              <input type="text" placeholder="Fatalities" />
              <input type="text" placeholder="Injuries" />
            </div>

            <h3 className="form-subtitle">
              Traffic convictions and forfeitures for past 3 years (other than parking violations). If none, write "none"
            </h3>
            <div className="form-content">
              <input type="date" placeholder="Date" />
              <input type="text" placeholder="Location" />
              <input type="text" placeholder="Violation or Conviction" />
            </div>
            <div className="form-content">
              <input type="date" placeholder="Date" />
              <input type="text" placeholder="Location" />
              <input type="text" placeholder="Violation or Conviction" />
            </div>

<h3 className="form-subtitle">Compliance Questions</h3>
            {[
              "Have you had any accidents in the last 3 years?",
              "Has your permit or license been suspended within the last 3 years?",
              "Have you had any moving violations, traffic convictions or forfeitures in the last 3 years?",
              "Have you ever been denied a license, permit or privilege to operate a motor vehicle?",
              "Has any license, permit or privilege ever been suspended or revoked?",
              "Have you ever been stopped/arrested/convicted for driving under the influence of drugs or alcohol or have a current charge pending?",
              "Have you ever been arrested/convicted for possession, sale or use of a narcotic drug, amphetamine or other derivative thereof or have a current charge pending?",
              "Have you ever been convicted of a crime or have a current charge pending?",
              "Have you ever been convicted of an offense involving the use of drugs or alcohol?",
              "Have you ever tested positive on any drug test, tested at a breath alcohol concentration level of 0.02% or greater, or refused to take a required test?",
              "Have you ever committed any other violations of DOT drug and alcohol testing regulations?"
            ].map((q) => (
              <div className="form-row">
                <label>{q}</label>
                <div className="checkbox-group">
                  <label><input type="checkbox" /> YES</label>
                  <label><input type="checkbox" /> NO</label>
                </div>
              </div>
            ))}

            <textarea placeholder="If YES to any, provide details here"></textarea>
          </div>
        )}

        {/* Stage 3 */}
        {step === 3 && (
          <div>
            <h2 className="form-section-title">Employment History</h2>

            <h3 className="form-subtitle">Employer 1</h3>
            <div className="form-content">
              <input type="text" placeholder="Company Name" />
              <input type="text" placeholder="Street Address" />
              <input type="text" placeholder="City" />
              <input type="text" placeholder="State/Province" />
              <input type="text" placeholder="Postal Code" />
            </div>
            <div className="form-row">
              <label>Dates From:</label>
              <input type="date" />
              <label>To:</label>
              <input type="date" />
            </div>
            <div className="form-content">
              <input type="text" placeholder="Contact Name" />
              <input type="text" placeholder="Contact Phone/Email" />
            </div>
            <textarea placeholder="Job Title/Responsibilities"></textarea>

            <h3 className="form-subtitle">Employer 2</h3>
            <div className="form-content">
              <input type="text" placeholder="Company Name" />
              <input type="text" placeholder="Street Address" />
              <input type="text" placeholder="City" />
              <input type="text" placeholder="State/Province" />
              <input type="text" placeholder="Postal Code" />
            </div>
            <div className="form-row">
              <label>Dates From:</label>
              <input type="date" />
              <label>To:</label>
              <input type="date" />
            </div>
            <div className="form-content">
              <input type="text" placeholder="Contact Name" />
              <input type="text" placeholder="Contact Phone/Email" />
            </div>
            <textarea placeholder="Job Title/Responsibilities"></textarea>

            <h3 className="form-subtitle">Driver Release</h3>
            <p>
              In connection with my application for employment (including contract for service) with you, I understand that an investigative consumer report is being requested from third party agencies such as HireRight Solutions, Inc. Tulsa, Oklahoma, that will include information as to my character, personal credit history, work habits, noted performance(s), and documented experience as well as reasons for termination of past employment from previous employers. Furthermore, I understand that you will be requesting and obtaining information concerning my personal credit, driving record, criminal history and/or information from various federal, state, and other agencies which maintain records concerning traffic offenses, accidents, criminal background including federal and state checks regarding alcohol offenses, misdemeanors and felonies, prior drug and alcohol screening, application falsifications, termination reasoning, as well as information from HireRight concerning (1) previous driving record requests made by others from such company or state agencies; (2) state provided driving records; (3) claims involving me in the files of insurance companies.
            </p>
            
            <h3 className="form-subtitle">I AUTHORIZE, WITHOUT RESERVATION, ANY PARTY OR AGENCY CONTACTED BY HIRERIGHT TO FURNISH THE ABOVE-MENTIONED INFORMATION.</h3>
            <p>
              I have the right to make a written request within a reasonable period of time to receive additional detailed information about the nature and scope of this investigation. I hereby, consent to your obtaining the above information from third party agencies, such as HireRight Solutions, Inc., etc., and agree that such information which HireRight has or obtains, and my employment history with you if I am hired, willbe supplied by HireRight to other companies that subscribe to HireRight's services. With that being said I fully acknowledge and authorize Michigan Truck Driving School to forward my personal information, credit check if required, employment information, background information including motor vehicle and criminal to whomever need be to obtain and secure for me Employment Agreement and/or Contract, Student Funding, ie. Loan, Employment, and/or forward to be used by Third Party Collectors. I acknowledge that my signed and dated qualification job application gives authorization to complete the stated above and this signature will stand in place and honor any e-signatures required. This authorization granting submission using my personal initials does not expire. Therefore, this application and signed signatures authorize the release of any personal information pertaining to employment and grants permission to the unnamed employer to release dates of hire, termination, employment status to Michigan Truck Driving School. This release authorization does not expire.
            </p>
            <h3 className="form-subtitle">DRIVING RECORD & BACKGROUND WAIVER:</h3>
            <p>
              If your motor vehicle report(s) and/or criminal background report(s) indicates certain violations and/or crimes, there is the potential thatyour ability to secure a job in the trucking industry may be restricted. By accepting this waiver, you acknowledge this potential restriction in securing a job after training and do not hold Michigan Truck Driving School liable. You will only receive the career guidance services offered by the school. I release Michigan Truck Driving School from all clalms o lease Michigan Truck Driving School from all claims of refund based on my ability to secure a job in the transportation industry utilizing my CDL as a result of my previous employment, motor vehicle report and/or background.
            </p>
            
            <div className="form-row">
              <label>
                <input type="checkbox" /> I hereby certify that I accept the conditions of this waiver.
              </label>
            </div>
          </div>
        )}

        {/* Stage 4 */}
        {step === 4 && (
          <div>
            <h2 className="form-section-title">Certification</h2>

            <h3 className="form-subtitle">Great Lakes CDL Academy Student Certification</h3>
            <p>
              I understand and acknowledge the admission requirements for the Michigan Truck Driving School’s program. Specifically, I understand that while disqualified from admission if I have any previous felony conviction, have had any DWI, DUI, OWI or similar conviction in the last five years, and/or have had three or more moving violations or preventable accidents in the last two years.
            </p>
            <div className="form-row">
              <label>
                <input type="checkbox" /> I hereby certify that I accept the conditions of this waiver, MTDS will not be held responsible.
              </label>
            </div>

            <h3 className="form-subtitle">Equal Employment Opportunity</h3>
            <p>
              All persons are entitled to equal employment opportunities. We do not discriminate against our employees, applicants, or job seekers because of their race, color, national origin or ancestry, religion, sex, sexual orientation, marital status, handicap or disability, veteran, genetic information, gender identity or other protected status.
            </p>
            <div className="form-row">
              <label>
                <input type="checkbox" /> I have read and acknowledge the Equal Employment Opportunity statement.
              </label>
            </div>

            <h3 className="form-subtitle">Applicant Questionnaire</h3>
            <textarea placeholder="How soon do you want to start your new career?" />
            <div className="form-row tarea">
              <label><input type="checkbox" /> Family Support: Yes</label>
              <label><input type="checkbox" /> No</label>
            </div>
            <textarea placeholder="Why are you interested in becoming a Professional Driver?" />
            <div className="form-row">
              <label><input type="checkbox" /> Employment within 2 weeks: Yes</label>
              <label><input type="checkbox" /> No</label>
            </div>
            <textarea placeholder="If no, please explain why not" />

            <h3 className="form-subtitle">Student Acknowledgement & Signature</h3>
            <p>
              I understand that if accepted, I hereby authorize Michigan Truck Driving School to forward this information and any reports to prospective employers and/or student funding financial lenders to secure employment and/or student funding for enrollment.
            </p>
            <div className="form-row">
              <label>
                <input type="checkbox" /> I hereby certify that I accept the conditions of this waiver, MTDS will not be held responsible.
              </label>
            </div>
            
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="form-navigation">
        {step > 1 && (
          <button className="nav-btn prev" onClick={prevStep}>
            Back
          </button>
        )}
        {step < 4 ? (
          <button className="nav-btn next" onClick={nextStep}>
            Next
          </button>
        ) : (
          <button className="nav-btn submit">Submit</button>
        )}
      </div>
    </div>
  );
}
