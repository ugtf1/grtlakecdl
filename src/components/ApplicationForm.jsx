import { useState } from "react";
import "./ApplicationForm.css";
import { apiUrl } from "../lib/api";

const STEP_TITLES = {
  1: "Personal Details",
  2: "Driving History",
  3: "Employment History",
  4: "Certification",
};

const FIELD_LABELS = {
  first_name: "First Name",
  last_name: "Last Name",
  email: "Email",
  phone_number: "Phone Number",
  citizenship: "Citizenship",
  address: "Address",
  city: "City",
  postal_code: "ZIP/Postal Code",
  emergency_name: "Emergency Contact Name",
  emergency_relationship: "Emergency Relationship",
  years_experience: "Years of Experience",
  employer1_name: "Employer 1 Name",
  waiver_acceptance: "Waiver Acceptance",
};

const FIELD_STEPS = {
  first_name: 1,
  last_name: 1,
  email: 1,
  phone_number: 1,
  citizenship: 1,
  address: 1,
  city: 1,
  postal_code: 1,
  emergency_name: 1,
  emergency_relationship: 1,
  years_experience: 2,
  employer1_name: 3,
  waiver_acceptance: 4,
};

const OPTIONAL_DATE_FIELDS = [
  "date_of_birth",
  "license_expiry_1",
  "license_expiry_2",
  "accident_date_1",
  "accident_date_2",
  "conviction_date_1",
  "conviction_date_2",
  "employer1_from",
  "employer1_to",
  "employer2_from",
  "employer2_to",
];

export default function ApplicationForm() {
  const initialFormData = {
    // Stage 1
    first_name: "", last_name: "", date_of_birth: "", marital_status: "",
    email: "", phone_number: "", citizenship: "", address: "", city: "", postal_code: "",
    emergency_name: "", emergency_relationship: "", emergency_day_phone: "",
    emergency_evening_phone: "", emergency_email: "", emergency_address1: "",
    emergency_address2: "", emergency_city: "", emergency_state: "", emergency_postal_code: "",
    // Stage 2
    commercial_experience: false, years_experience: "", class_a: false, class_b: false,
    license_state_1: "", license_no_1: "", license_type_1: "", license_expiry_1: "",
    license_state_2: "", license_no_2: "", license_type_2: "", license_expiry_2: "",
    accident_date_1: "", accident_nature_1: "", accident_fatalities_1: "", accident_injuries_1: "",
    accident_date_2: "", accident_nature_2: "", accident_fatalities_2: "", accident_injuries_2: "",
    conviction_date_1: "", conviction_location_1: "", conviction_violation_1: "",
    conviction_date_2: "", conviction_location_2: "", conviction_violation_2: "",
    compliance_answers: {}, compliance_details: "",
    // Stage 3
    employer1_name: "", employer1_address: "", employer1_city: "", employer1_state: "",
    employer1_postal_code: "", employer1_from: "", employer1_to: "", employer1_contact_name: "",
    employer1_contact_info: "", employer1_responsibilities: "",
    employer2_name: "", employer2_address: "", employer2_city: "", employer2_state: "",
    employer2_postal_code: "", employer2_from: "", employer2_to: "", employer2_contact_name: "",
    employer2_contact_info: "", employer2_responsibilities: "",
    driver_release_acceptance: false,
    // Stage 4
    waiver_acceptance: false, eeo_acknowledgement: false,
    career_start_question: "", family_support: false,
    driver_interest_question: "", employment_within_2_weeks: false,
    employment_delay_reason: "", student_acknowledgement: false,
  };

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const prevStep = () => { if (step > 1) setStep(step - 1); };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const focusField = (fieldName) => {
    window.requestAnimationFrame(() => {
      const field = document.querySelector(`[name="${fieldName}"]`);
      if (field) {
        field.scrollIntoView({ behavior: "smooth", block: "center" });
        field.focus();
      }
    });
  };

  const buildSubmissionPayload = () => {
    const payload = { ...formData };

    // The backend treats these dates as optional, but DRF rejects empty strings.
    OPTIONAL_DATE_FIELDS.forEach((fieldName) => {
      if (payload[fieldName] === "") {
        payload[fieldName] = null;
      }
    });

    return payload;
  };

  const validateForm = () => {
    const errs = {};
    // Required fields (Stage 1)
    if (!formData.first_name.trim()) errs.first_name = "First name is required";
    if (!formData.last_name.trim()) errs.last_name = "Last name is required";
    if (!formData.email.trim()) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = "Invalid email format";
    if (!formData.phone_number.trim()) errs.phone_number = "Phone number is required";
    if (!formData.citizenship.trim()) errs.citizenship = "Citizenship is required";
    if (!formData.address.trim()) errs.address = "Address is required";
    if (!formData.city.trim()) errs.city = "City is required";
    if (!formData.postal_code.trim()) errs.postal_code = "Postal code is required";
    if (!formData.emergency_name.trim()) errs.emergency_name = "Emergency contact name is required";
    if (!formData.emergency_relationship.trim()) errs.emergency_relationship = "Relationship is required";
    // Stage 2 checks (optional, e.g. if commercial_experience is true then require years_experience)
  if (formData.commercial_experience && !formData.years_experience.trim()) {
    errs.years_experience = "Years of experience required if commercial experience is checked";
  }
  // Stage 3 checks (optional, e.g. require employer1_name if provided dates)
  if (formData.employer1_from && !formData.employer1_name.trim()) {
    errs.employer1_name = "Employer name required if employment dates are provided";
  }
  // Stage 4 checks (optional, e.g. require waiver_acceptance)
  if (!formData.waiver_acceptance) {
    errs.waiver_acceptance = "You must accept the waiver";
  }
  return errs;
};

  const showValidationErrors = (validationErrors) => {
    setErrors(validationErrors);

    const firstErrorField = Object.keys(validationErrors)[0];
    const targetStep = FIELD_STEPS[firstErrorField] || step;
    const fieldLabel = FIELD_LABELS[firstErrorField] || "the highlighted field";
    const stepTitle = STEP_TITLES[targetStep] || "this section";

    setMessage(`Please fix ${fieldLabel} in ${stepTitle} before continuing.`);
    if (targetStep !== step) {
      setStep(targetStep);
    }
    focusField(firstErrorField);
  };

  const validateCurrentStep = () => {
    const validationErrors = validateForm();
    return Object.fromEntries(
      Object.entries(validationErrors).filter(([fieldName]) => FIELD_STEPS[fieldName] === step),
    );
  };

  const nextStep = () => {
    const stepErrors = validateCurrentStep();
    if (Object.keys(stepErrors).length > 0) {
      showValidationErrors(stepErrors);
      return;
    }

    setMessage("");
    setErrors((currentErrors) =>
      Object.fromEntries(
        Object.entries(currentErrors).filter(([fieldName]) => FIELD_STEPS[fieldName] !== step),
      ),
    );

    if (step < 4) {
      setStep(step + 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      showValidationErrors(validationErrors);
      return;
    }
    try {
      const payload = buildSubmissionPayload();
      const res = await fetch(apiUrl("/application/"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setMessage("Application submitted successfully!");
        setFormData(initialFormData);
        setStep(1);
        setErrors({});
      } else {
        const errorData = await res.json();
        console.error(errorData);
        const firstError = Object.values(errorData)[0];
        const details = Array.isArray(firstError)
          ? firstError[0]
          : "Please review the form and try again.";
        setMessage(`Failed to submit application. ${details}`);
      }
    } catch (error) {
      console.error(error);
      setMessage("Error submitting application.");
    }
  };

  return (
  <div className="application-form">
    {message && (
      <div
        className={`form-message ${
          message.toLowerCase().includes("success") ? "success" : "error"
        }`}
      >
        {message}
      </div>
    )}

      {/* Progress Bar */}
      <div className="progress-bar">
        {[
          { num: 1, title: "Personal Details" },
          { num: 2, title: "Driving History" },
          { num: 3, title: "Employment History" },
          { num: 4, title: "Certification" }
        ].map((stepItem, index, arr) => (
          <div className="progress-step-wrapper" key={stepItem.num}>
            <div className={`progress-step ${step >= stepItem.num ? "active" : ""}`}>
              {stepItem.num}
            </div>
            <div className="progress-title">{stepItem.title}</div>
            {index < arr.length - 1 && <div className="progress-divider"></div>}
          </div>
        ))}
      </div>

      {/* Stage 1 */}
{step === 1 && (
  <div>
    <h2 className="form-section-title">Basic Information</h2>
    <div className="form-content">
      <input
        type="text"
        name="first_name"
        placeholder="First Name"
        value={formData.first_name}
        onChange={handleChange}
        className={errors.first_name ? "field-error" : ""}
      />
      {errors.first_name && <span className="error">{errors.first_name}</span>}

      <input
        type="text"
        name="last_name"
        placeholder="Last Name"
        value={formData.last_name}
        onChange={handleChange}
        className={errors.last_name ? "field-error" : ""}
      />
      {errors.last_name && <span className="error">{errors.last_name}</span>}

      <input
        type="date"
        name="date_of_birth"
        value={formData.date_of_birth}
        onChange={handleChange}
      />

      <input
        type="text"
        name="marital_status"
        placeholder="Marital Status"
        value={formData.marital_status}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className={errors.email ? "field-error" : ""}
      />
      {errors.email && <span className="error">{errors.email}</span>}

      <input
        type="tel"
        name="phone_number"
        placeholder="Phone Number"
        value={formData.phone_number}
        onChange={handleChange}
        className={errors.phone_number ? "field-error" : ""}
      />
      {errors.phone_number && <span className="error">{errors.phone_number}</span>}

      <select
        name="citizenship"
        value={formData.citizenship}
        onChange={handleChange}
        className={errors.citizenship ? "field-error" : ""}
      >
        <option value="">Select Citizenship</option>
        <option value="Nigeria">Nigeria</option>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
        <option value="Canada">Canada</option>
      </select>
      {errors.citizenship && <span className="error">{errors.citizenship}</span>}

      <input
        type="text"
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
        className={errors.address ? "field-error" : ""}
      />
      {errors.address && <span className="error">{errors.address}</span>}

      <input
        type="text"
        name="city"
        placeholder="City"
        value={formData.city}
        onChange={handleChange}
        className={errors.city ? "field-error" : ""}
      />
      {errors.city && <span className="error">{errors.city}</span>}

      <input
        type="text"
        name="postal_code"
        placeholder="ZIP/Postal Code"
        value={formData.postal_code}
        onChange={handleChange}
        className={errors.postal_code ? "field-error" : ""}
      />
      {errors.postal_code && <span className="error">{errors.postal_code}</span>}
    </div>

    <h2 className="form-section-title">Emergency Information</h2>
    <div className="form-content">
      <input
        type="text"
        name="emergency_name"
        placeholder="Full Name"
        value={formData.emergency_name}
        onChange={handleChange}
        className={errors.emergency_name ? "field-error" : ""}
      />
      {errors.emergency_name && <span className="error">{errors.emergency_name}</span>}

      <input
        type="text"
        name="emergency_relationship"
        placeholder="Relationship"
        value={formData.emergency_relationship}
        onChange={handleChange}
        className={errors.emergency_relationship ? "field-error" : ""}
      />
      {errors.emergency_relationship && <span className="error">{errors.emergency_relationship}</span>}

      <input
        type="tel"
        name="emergency_day_phone"
        placeholder="Day Phone"
        value={formData.emergency_day_phone}
        onChange={handleChange}
      />

      <input
        type="tel"
        name="emergency_evening_phone"
        placeholder="Evening Phone"
        value={formData.emergency_evening_phone}
        onChange={handleChange}
      />

      <input
        type="email"
        name="emergency_email"
        placeholder="Email Address"
        value={formData.emergency_email}
        onChange={handleChange}
      />

      <input
        type="text"
        name="emergency_address1"
        placeholder="Address 1"
        value={formData.emergency_address1}
        onChange={handleChange}
      />

      <input
        type="text"
        name="emergency_address2"
        placeholder="Address 2"
        value={formData.emergency_address2}
        onChange={handleChange}
      />

      <input
        type="text"
        name="emergency_city"
        placeholder="City"
        value={formData.emergency_city}
        onChange={handleChange}
      />

      <input
        type="text"
        name="emergency_state"
        placeholder="State"
        value={formData.emergency_state}
        onChange={handleChange}
      />

      <input
        type="text"
        name="emergency_postal_code"
        placeholder="Postal Code"
        value={formData.emergency_postal_code}
        onChange={handleChange}
      />
    </div>
  </div>
)}

{/* Stage 2 */}
{step === 2 && (
  <div>
    <h2 className="form-section-title">Driving History</h2>

    <div className="form-row">
      <label>
        <input
          type="checkbox"
          name="commercial_experience"
          checked={formData.commercial_experience}
          onChange={handleChange}
        /> Commercial Driving Experience
      </label>
    </div>

    <input
      type="text"
      name="years_experience"
      placeholder="Years of Experience"
      value={formData.years_experience}
      onChange={handleChange}
      className={errors.years_experience ? "field-error" : ""}
    />

    <div className="form-row">
      <label>
        <input
          type="checkbox"
          name="class_a"
          checked={formData.class_a}
          onChange={handleChange}
        /> Class A
      </label>
      <label>
        <input
          type="checkbox"
          name="class_b"
          checked={formData.class_b}
          onChange={handleChange}
        /> Class B
      </label>
    </div>

    <h3 className="form-subtitle">Additional Driver’s Licenses Held</h3>
    <div className="form-content">
      <input type="text" name="license_state_1" placeholder="State" value={formData.license_state_1} onChange={handleChange} />
      <input type="text" name="license_no_1" placeholder="License No" value={formData.license_no_1} onChange={handleChange} />
      <input type="text" name="license_type_1" placeholder="Type" value={formData.license_type_1} onChange={handleChange} />
      <input type="date" name="license_expiry_1" value={formData.license_expiry_1} onChange={handleChange} />
    </div>
    <div className="form-content">
      <input type="text" name="license_state_2" placeholder="State" value={formData.license_state_2} onChange={handleChange} />
      <input type="text" name="license_no_2" placeholder="License No" value={formData.license_no_2} onChange={handleChange} />
      <input type="text" name="license_type_2" placeholder="Type" value={formData.license_type_2} onChange={handleChange} />
      <input type="date" name="license_expiry_2" value={formData.license_expiry_2} onChange={handleChange} />
    </div>

    <h3 className="form-subtitle">Accident record for past 3 years or more</h3>
    <div className="form-content">
      <input type="date" name="accident_date_1" value={formData.accident_date_1} onChange={handleChange} />
      <input type="text" name="accident_nature_1" placeholder="Nature of Accident" value={formData.accident_nature_1} onChange={handleChange} />
      <input type="text" name="accident_fatalities_1" placeholder="Fatalities" value={formData.accident_fatalities_1} onChange={handleChange} />
      <input type="text" name="accident_injuries_1" placeholder="Injuries" value={formData.accident_injuries_1} onChange={handleChange} />
    </div>
    <div className="form-content">
      <input type="date" name="accident_date_2" value={formData.accident_date_2} onChange={handleChange} />
      <input type="text" name="accident_nature_2" placeholder="Nature of Accident" value={formData.accident_nature_2} onChange={handleChange} />
      <input type="text" name="accident_fatalities_2" placeholder="Fatalities" value={formData.accident_fatalities_2} onChange={handleChange} />
      <input type="text" name="accident_injuries_2" placeholder="Injuries" value={formData.accident_injuries_2} onChange={handleChange} />
    </div>

    <h3 className="form-subtitle">Traffic convictions and forfeitures (past 3 years)</h3>
    <div className="form-content">
      <input type="date" name="conviction_date_1" value={formData.conviction_date_1} onChange={handleChange} />
      <input type="text" name="conviction_location_1" placeholder="Location" value={formData.conviction_location_1} onChange={handleChange} />
      <input type="text" name="conviction_violation_1" placeholder="Violation or Conviction" value={formData.conviction_violation_1} onChange={handleChange} />
    </div>
    <div className="form-content">
      <input type="date" name="conviction_date_2" value={formData.conviction_date_2} onChange={handleChange} />
      <input type="text" name="conviction_location_2" placeholder="Location" value={formData.conviction_location_2} onChange={handleChange} />
      <input type="text" name="conviction_violation_2" placeholder="Violation or Conviction" value={formData.conviction_violation_2} onChange={handleChange} />
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
    ].map((q, idx) => (
      <div className="form-row" key={idx}>
        <label>{q}</label>
        <div className="checkbox-group">
          <label>
            <input
              type="radio"
              name={`compliance_answers_${idx}`}
              value="yes"
              checked={formData.compliance_answers[`q${idx}`] === "yes"}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  compliance_answers: {
                    ...formData.compliance_answers,
                    [`q${idx}`]: e.target.value
                  }
                })
              }
            /> YES
          </label>
          <label>
            <input
              type="radio"
              name={`compliance_answers_${idx}`}
              value="no"
              checked={formData.compliance_answers[`q${idx}`] === "no"}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  compliance_answers: {
                    ...formData.compliance_answers,
                    [`q${idx}`]: e.target.value
                  }
                })
              }
            /> NO
          </label>
        </div>
      </div>
    ))}

    <textarea
      name="compliance_details"
      placeholder="If YES to any, provide details here"
      value={formData.compliance_details}
      onChange={handleChange}
    />
  </div>
)}

{/* Stage 3 */}
{step === 3 && (
  <div>
    <h2 className="form-section-title">Employment History</h2>

    <h3 className="form-subtitle">Employer 1</h3>
    <div className="form-content">
      <input
        type="text"
        name="employer1_name"
        placeholder="Company Name"
        value={formData.employer1_name}
        onChange={handleChange}
        className={errors.employer1_name ? "field-error" : ""}
      />
      <input
        type="text"
        name="employer1_address"
        placeholder="Street Address"
        value={formData.employer1_address}
        onChange={handleChange}
      />
      <input
        type="text"
        name="employer1_city"
        placeholder="City"
        value={formData.employer1_city}
        onChange={handleChange}
      />
      <input
        type="text"
        name="employer1_state"
        placeholder="State/Province"
        value={formData.employer1_state}
        onChange={handleChange}
      />
      <input
        type="text"
        name="employer1_postal_code"
        placeholder="Postal Code"
        value={formData.employer1_postal_code}
        onChange={handleChange}
      />
    </div>
    <div className="form-row">
      <label>Dates From:</label>
      <input
        type="date"
        name="employer1_from"
        value={formData.employer1_from}
        onChange={handleChange}
      />
      <label>To:</label>
      <input
        type="date"
        name="employer1_to"
        value={formData.employer1_to}
        onChange={handleChange}
      />
    </div>
    <div className="form-content">
      <input
        type="text"
        name="employer1_contact_name"
        placeholder="Contact Name"
        value={formData.employer1_contact_name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="employer1_contact_info"
        placeholder="Contact Phone/Email"
        value={formData.employer1_contact_info}
        onChange={handleChange}
      />
    </div>
    <textarea
      name="employer1_responsibilities"
      placeholder="Job Title/Responsibilities"
      value={formData.employer1_responsibilities}
      onChange={handleChange}
    ></textarea>

    <h3 className="form-subtitle">Employer 2</h3>
    <div className="form-content">
      <input
        type="text"
        name="employer2_name"
        placeholder="Company Name"
        value={formData.employer2_name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="employer2_address"
        placeholder="Street Address"
        value={formData.employer2_address}
        onChange={handleChange}
      />
      <input
        type="text"
        name="employer2_city"
        placeholder="City"
        value={formData.employer2_city}
        onChange={handleChange}
      />
      <input
        type="text"
        name="employer2_state"
        placeholder="State/Province"
        value={formData.employer2_state}
        onChange={handleChange}
      />
      <input
        type="text"
        name="employer2_postal_code"
        placeholder="Postal Code"
        value={formData.employer2_postal_code}
        onChange={handleChange}
      />
    </div>
    <div className="form-row">
      <label>Dates From:</label>
      <input
        type="date"
        name="employer2_from"
        value={formData.employer2_from}
        onChange={handleChange}
      />
      <label>To:</label>
      <input
        type="date"
        name="employer2_to"
        value={formData.employer2_to}
        onChange={handleChange}
      />
    </div>
    <div className="form-content">
      <input
        type="text"
        name="employer2_contact_name"
        placeholder="Contact Name"
        value={formData.employer2_contact_name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="employer2_contact_info"
        placeholder="Contact Phone/Email"
        value={formData.employer2_contact_info}
        onChange={handleChange}
      />
    </div>
    <textarea
      name="employer2_responsibilities"
      placeholder="Job Title/Responsibilities"
      value={formData.employer2_responsibilities}
      onChange={handleChange}
    ></textarea>

    <div className="form-row">
      <label>
        <input
          type="checkbox"
          name="driver_release_acceptance"
          checked={formData.driver_release_acceptance}
          onChange={handleChange}
        /> I hereby certify that I accept the conditions of the driver release waiver.
      </label>
    </div>
  </div>
)}


{/* Stage 4 */}
{step === 4 && (
  <div>
    <h2 className="form-section-title">Certification</h2>

    <h3 className="form-subtitle">Great Lakes CDL Academy Student Certification</h3>
    <div className="form-row">
      <label className={errors.waiver_acceptance ? "checkbox-error" : ""}>
        <input
          type="checkbox"
          name="waiver_acceptance"
          checked={formData.waiver_acceptance}
          onChange={handleChange}
        /> I hereby certify that I accept the conditions of this waiver.
      </label>
    </div>

    <h3 className="form-subtitle">Equal Employment Opportunity</h3>
    <div className="form-row">
      <label>
        <input
          type="checkbox"
          name="eeo_acknowledgement"
          checked={formData.eeo_acknowledgement}
          onChange={handleChange}
        /> I have read and acknowledge the Equal Employment Opportunity statement.
      </label>
    </div>

    <h3 className="form-subtitle">Applicant Questionnaire</h3>
    <textarea
      name="career_start_question"
      placeholder="How soon do you want to start your new career?"
      value={formData.career_start_question}
      onChange={handleChange}
    />
    <div className="form-row">
      <label>
        <input
          type="checkbox"
          name="family_support"
          checked={formData.family_support}
          onChange={handleChange}
        /> Family Support
      </label>
    </div>
    <textarea
      name="driver_interest_question"
      placeholder="Why are you interested in becoming a Professional Driver?"
      value={formData.driver_interest_question}
      onChange={handleChange}
    />
    <div className="form-row">
      <label>
        <input
          type="checkbox"
          name="employment_within_2_weeks"
          checked={formData.employment_within_2_weeks}
          onChange={handleChange}
        /> Employment within 2 weeks
      </label>
    </div>
    <textarea
      name="employment_delay_reason"
      placeholder="If no, please explain why not"
      value={formData.employment_delay_reason}
      onChange={handleChange}
    />

    <h3 className="form-subtitle">Student Acknowledgement & Signature</h3>
    <div className="form-row">
      <label>
        <input
          type="checkbox"
          name="student_acknowledgement"
          checked={formData.student_acknowledgement}
          onChange={handleChange}
        /> By initialing this application, I certify that all information provided is true, complete, and accurate. I understand that providing false or misleading information may impact my eligibility for enrollment at Great Lakes CDL Academy
      </label>
    </div>
  </div>
)}

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
          <button className="nav-btn submit" onClick={handleSubmit}>
            Submit
          </button>
        )}
      </div>
    </div>
  );
}