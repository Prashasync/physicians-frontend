import React, { useState, useEffect } from 'react';
import './AddAppointmentModal.scss'; // reusing same styles

const EditAppointmentModal = ({ isOpen, onClose, appointment, onUpdate }) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (appointment) setFormData(appointment);
  }, [appointment]);

  if (!isOpen || !formData) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const [hours, minutes] = formData.time?.split(':') || ['10', '00'];
    const start = new Date(formData.date);
    start.setHours(hours);
    start.setMinutes(minutes);

    const end = new Date(start);
    end.setMinutes(start.getMinutes() + 60);

    onUpdate({
      ...formData,
      start,
      end,
      title: `${formData.name} - ${formData.treatment}`,
    });

    onClose();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h3>Edit Appointment</h3>
        <form onSubmit={handleSubmit}>
          <label>Patient Name</label>
          <input name="name" value={formData.name || ''} onChange={handleChange} required />

          <label>Age</label>
          <input name="age" value={formData.age || ''} onChange={handleChange} required />

          <label>Gender</label>
          <select name="gender" value={formData.gender || ''} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="F">Female</option>
            <option value="M">Male</option>
            <option value="Other">Other</option>
          </select>

          <label>Date</label>
          <input type="date" name="date" value={formData.date || ''} onChange={handleChange} required />

          <label>Time</label>
          <input type="time" name="time" value={formData.time || ''} onChange={handleChange} required />

          <label>Last Check</label>
          <input type="date" name="lastCheck" value={formData.lastCheck || ''} onChange={handleChange} />

          <label>Treatment</label>
          <input name="treatment" value={formData.treatment || ''} onChange={handleChange} required />

          <label>Health Score (%)</label>
          <input name="score" value={formData.score || ''} onChange={handleChange} />

          <label>
            <input type="checkbox" name="meds" checked={formData.meds === 'Yes'} onChange={handleChange} />
            Under Medication
          </label>

          <div className="modal-actions">
            <button type="submit">Save Changes</button>
            <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditAppointmentModal;
