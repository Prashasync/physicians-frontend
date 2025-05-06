import React, { useState } from 'react';
import '../styles/ClinicProfilePage.scss';

const ClinicProfilePage = () => {
  const [step, setStep] = useState(1);
  const [clinicName, setClinicName] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);
  const [role, setRole] = useState('');
  const [focusAreas, setFocusAreas] = useState([]);
  const [patientFeatures, setPatientFeatures] = useState([]);

  const focusOptions = [
    { id: 'assessment', label: 'Mental Health Assessments', description: 'Comprehensive psychological evaluations' },
    { id: 'therapy', label: 'Therapy & Counseling', description: 'Individual and group therapy sessions' },
    { id: 'medication', label: 'Medication Management', description: 'Prescription and monitoring of medications' },
    { id: 'crisis', label: 'Crisis Intervention', description: 'Emergency mental health services' }
  ];

  const patientManagementOptions = [
    { id: 'records', label: 'Patient Records & Reports', description: 'View and manage patient health records' },
    { id: 'scheduling', label: 'Appointment Scheduling', description: 'Book and manage appointments' },
    { id: 'telemedicine', label: 'Telemedicine Consultations', description: 'Virtual healthcare services' },
    { id: 'messaging', label: 'Secure Messaging', description: 'Encrypted communication with patients' }
  ];

  const handleCheckboxChange = (setter, currentValues, value) => {
    if (currentValues.includes(value)) {
      setter(currentValues.filter(item => item !== value));
    } else {
      setter([...currentValues, value]);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && ['image/png', 'image/jpeg', 'image/svg+xml'].includes(file.type)) {
      setSelectedFile(file);
      setPreviewURL(URL.createObjectURL(file));
    } else {
      alert('Please upload a valid image (PNG, JPEG, SVG)');
    }
  };

  const handleContinue = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="clinic-profile-container">
      <div className="clinic-profile-card">
        <div className="header-section">
          <h2>Clinic Profile Setup</h2>
          <p>Complete your clinic profile in 4 simple steps</p>
          <div className="progress-divider"></div>
        </div>

        <div className="step-indicator">
          {[1, 2, 3, 4].map((stepNumber) => (
            <div
              key={stepNumber}
              className={`step-dot ${step === stepNumber ? 'active' : ''}`}
              onClick={() => setStep(stepNumber)}
            />
          ))}
        </div>

        <div className="form-content">
          {/* Step 1 - Basic Info */}
          {step === 1 && (
            <div className="form-step active">
              <div className="form-group">
                <label>Clinic Name</label>
                <input
                  type="text"
                  value={clinicName}
                  onChange={(e) => setClinicName(e.target.value)}
                  placeholder="Enter your clinic name"
                />
              </div>

              <div className="form-group">
                <label>Clinic Logo</label>
                <div className="upload-area" onClick={() => document.getElementById('logo-upload').click()}>
                  {previewURL ? (
                    <img src={previewURL} alt="Clinic logo preview" />
                  ) : (
                    <>
                      <span className="upload-icon">+</span>
                      <span>Click to upload logo</span>
                    </>
                  )}
                  <input
                    type="file"
                    id="logo-upload"
                    accept="image/*"
                    onChange={handleImageUpload}
                    hidden
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2 - Professional Role */}
          {step === 2 && (
            <div className="form-step active">
              <h3>Your Professional Role</h3>
              <div className="role-options">
                {['Psychiatrist', 'Psychologist', 'Therapist', 'Counselor', 'Other'].map((roleOption) => (
                  <div
                    key={roleOption}
                    className={`role-card ${role === roleOption ? 'selected' : ''}`}
                    onClick={() => setRole(roleOption)}
                  >
                    {roleOption}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 3 - Key Focus Areas */}
          {step === 3 && (
            <div className="form-step active">
              <h3>Your Key Focus Areas</h3>
              <p>Select all that apply to your practice</p>
              <div className="checkbox-grid">
                {focusOptions.map((option) => (
                  <div key={option.id} className="checkbox-card">
                    <input
                      type="checkbox"
                      id={`focus-${option.id}`}
                      checked={focusAreas.includes(option.id)}
                      onChange={() => handleCheckboxChange(setFocusAreas, focusAreas, option.id)}
                    />
                    <label htmlFor={`focus-${option.id}`}>
                      <span className="checkbox-label">{option.label}</span>
                      <span className="checkbox-description">{option.description}</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 4 - Patient Management */}
          {step === 4 && (
            <div className="form-step active">
              <h3>Patient Management</h3>
              <p>Select features you use for patient management</p>
              <div className="checkbox-grid">
                {patientManagementOptions.map((option) => (
                  <div key={option.id} className="checkbox-card">
                    <input
                      type="checkbox"
                      id={`patient-${option.id}`}
                      checked={patientFeatures.includes(option.id)}
                      onChange={() => handleCheckboxChange(setPatientFeatures, patientFeatures, option.id)}
                    />
                    <label htmlFor={`patient-${option.id}`}>
                      <span className="checkbox-label">{option.label}</span>
                      <span className="checkbox-description">{option.description}</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="navigation-buttons">
          {step > 1 && (
            <button className="nav-button back" onClick={handleBack}>
              Back
            </button>
          )}
          {step < 4 ? (
            <button className="nav-button continue" onClick={handleContinue}>
              Continue
            </button>
          ) : (
            <button className="nav-button submit">
              Complete Setup
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClinicProfilePage;