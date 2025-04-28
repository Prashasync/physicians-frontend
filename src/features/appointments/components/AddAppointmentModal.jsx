import React, { useState } from 'react';
import './AddAppointmentModal.scss';

const AddAppointmentModal = ({ isOpen, onClose, onAddAppointment }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    date: '',
    time: '',
    treatment: '',
    score: '',
    lastCheck: '',
    meds: false
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const [hours, minutes] = formData.time.split(':');
    const start = new Date(formData.date);
    start.setHours(hours);
    start.setMinutes(minutes);

    const end = new Date(start);
    end.setMinutes(start.getMinutes() + 60);

    const newAppointment = {
      id: Date.now(),
      name: formData.name,
      title: `${formData.name} - ${formData.treatment}`, // Used for calendar display
      age: formData.age,
      gender: formData.gender,
      joined: formData.date,
      lastCheck: formData.lastCheck,
      score: formData.score,
      treatment: formData.treatment,
      meds: formData.meds ? 'Yes' : 'No',
      start,
      end
    };

    onAddAppointment(newAppointment);

    setFormData({
      name: '',
      age: '',
      gender: '',
      date: '',
      time: '',
      treatment: '',
      score: '',
      lastCheck: '',
      meds: false
    });

    onClose();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h3>Schedule New Appointment</h3>
        <form onSubmit={handleSubmit}>
          <label>Patient Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />

          <label>Gender</label>
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
            <option value="Other">Other</option>
          </select>

          <label>Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />

          <label>Time</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />

          <label>Last Check</label>
          <input
            type="date"
            name="lastCheck"
            value={formData.lastCheck}
            onChange={handleChange}
          />

          <label>Treatment</label>
          <input
            type="text"
            name="treatment"
            value={formData.treatment}
            onChange={handleChange}
            required
          />

          <label>Health Score (%)</label>
          <input
            type="text"
            name="score"
            value={formData.score}
            onChange={handleChange}
          />

          <label>
            <input
              type="checkbox"
              name="meds"
              checked={formData.meds}
              onChange={(e) => setFormData(prev => ({ ...prev, meds: e.target.checked }))}
            />
            Under Medication
          </label>

          <div className="modal-actions">
            <button type="submit">Save</button>
            <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAppointmentModal;
