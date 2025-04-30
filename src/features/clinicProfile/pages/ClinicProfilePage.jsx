import React, { useState } from 'react';
import '../styles/ClinicProfilePage.scss';

const ClinicProfilePage = () => {
  const [clinicName, setClinicName] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);

  const handleNameChange = (e) => {
    setClinicName(e.target.value);
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

  const isFormValid = clinicName.trim() !== '' && selectedFile;

  return (
    <div className="clinic-profile-fullview">
      <div className="header-section">
        <h2>Clinic Details & Profile Setup</h2>
        <p>Personalize your profile by adding clinic details and a professional photo or logo.</p>
      </div>

      <div className="form-section">
        <div className="form-group">
          <label htmlFor="clinicName">Clinic Name</label>
          <input
            type="text"
            id="clinicName"
            placeholder="Enter clinic name"
            value={clinicName}
            onChange={handleNameChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="upload">Upload Your Photo or Clinic Logo</label>
          <div className="upload-box" onClick={() => document.getElementById('fileInput').click()}>
            {previewURL ? (
              <img src={previewURL} alt="preview" />
            ) : (
              <span>Click to upload image</span>
            )}
            <input
              type="file"
              id="fileInput"
              accept="image/png, image/jpeg, image/svg+xml"
              onChange={handleImageUpload}
              hidden
            />
          </div>
        </div>

        <div className="button-group">
          <button className="back">Back</button>
          <button className="continue" disabled={!isFormValid}>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default ClinicProfilePage;
