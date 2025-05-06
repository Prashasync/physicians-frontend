import React from "react";
import "../../../shared/components/completeProfile.css"

const CompleteProfile = () => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`Field Changed: ${name}, Value: ${value}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  };
  return (
    <div className="complete-register-wrapper">
      <form className="complete-register-form" onSubmit={handleSubmit}>
        <h2>Register Profile Information</h2>
        <div className="complete-register-form-input">
          <label htmlFor="title">Title:</label>
          <select id="title" name="title" onChange={handleChange}>
            <option value="">Select</option>
            <option value="Dr.">Dr.</option>
            <option value="Mr.">Mr.</option>
            <option value="Ms.">Ms.</option>
            <option value="Mrs.">Mrs.</option>
            <option value="Prof.">Prof.</option>
          </select>
        </div>
        <div className="complete-register-form-input">
          <label htmlFor="first_name">First Name:</label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            required
            onChange={handleChange}
          />
        </div>
        <div className="complete-register-form-input">
          <label htmlFor="middle_name">Middle Name:</label>
          <input
            type="text"
            id="middle_name"
            name="middle_name"
            onChange={handleChange}
          />
        </div>
        <div className="complete-register-form-input">
          <label htmlFor="last_name">Last Name:</label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            required
            onChange={handleChange}
          />
        </div>
        <div className="complete-register-form-input">
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            name="dob"
            required
            onChange={handleChange}
          />
        </div>
        <div className="complete-register-form-input">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            required
            onChange={handleChange}
          />
        </div>
        <div className="complete-register-form-input">
          <label htmlFor="gender">Gender:</label>
          <select id="gender" name="gender" required onChange={handleChange}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="complete-register-form-input">
          <label htmlFor="language">Language:</label>
          <input
            type="text"
            id="language"
            name="language"
            onChange={handleChange}
          />
        </div>
        <div className="complete-register-form-input">
          <label htmlFor="religion">Religion:</label>
          <input
            type="text"
            id="religion"
            name="religion"
            onChange={handleChange}
          />
        </div>
        <div className="complete-register-form-input">
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            name="address"
            required
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="complete-register-form-input">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            onChange={handleChange}
          />
        </div>
        <div className="complete-register-form-input">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            onChange={handleChange}
          />
        </div>
        <div className="complete-register-form-input">
          <label htmlFor="interests">Interests:</label>
          <textarea
            id="interests"
            name="interests"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="complete-register-form-input">
          <label htmlFor="specialization">Specialization:</label>
          <input
            type="text"
            id="specialization"
            name="specialization"
            onChange={handleChange}
          />
        </div>
        <div className="complete-register-form-input">
          <label htmlFor="consultation_fee">Consultation Fee:</label>
          <input
            type="number"
            id="consultation_fee"
            name="consultation_fee"
            required
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CompleteProfile;