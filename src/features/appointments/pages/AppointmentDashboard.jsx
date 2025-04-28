import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Layout from '../../../shared/components/Layout';
import PatientStatsCards from '../../patients/components/PatientStatsCards';
import PatientSearchBar from '../../patients/components/PatientSearchBar';
import PatientTable from '../components/PatientTable';
import AddAppointmentModal from '../components/AddAppointmentModal';
import EditAppointmentModal from '../components/EditAppointmentModal';
import { toast } from 'react-toastify';
import '../styles/AppointmentDashboard.scss';

const AppointmentDashboard = () => {
  const [viewMode, setViewMode] = useState('list');
  const [showModal, setShowModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [editingAppointment, setEditingAppointment] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [treatmentFilter, setTreatmentFilter] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [showFullCalendar, setShowFullCalendar] = useState(false);

  const [appointments, setAppointments] = useState([
    {
      id: 1,
      name: 'John Doe',
      treatment: 'Anxiety Therapy',
      date: new Date(2025, 1, 15, 10, 0),
      status: 'Confirmed',
      notes: 'Initial consultation'
    },
    {
      id: 2,
      name: 'Jane Smith',
      treatment: 'Depression Counseling',
      date: new Date(2025, 1, 18, 14, 30),
      status: 'Scheduled',
      notes: 'Follow-up session'
    }
  ]);

  const handleAddAppointment = (appointment) => {
    const newAppointment = {
      ...appointment,
      id: Date.now(),
      title: `${appointment.name} - ${appointment.treatment}`,
      date: new Date(appointment.date),
      status: appointment.status || 'Scheduled'
    };
    
    setAppointments(prev => [...prev, newAppointment]);
    setShowModal(false);
    toast.success('Appointment added successfully!');
  };

  const handleEditClick = (appointment) => {
    setEditingAppointment(appointment);
    setEditModal(true);
  };

  const handleUpdateAppointment = (updatedAppt) => {
    setAppointments(prev =>
      prev.map(appt => (appt.id === updatedAppt.id ? updatedAppt : appt))
    );
    setEditModal(false);
    toast.info('Appointment updated.');
  };

  const handleDeleteAppointment = (id) => {
    setAppointments(prev => prev.filter(appt => appt.id !== id));
    toast.error('Appointment deleted.');
  };

  const handleSearchClick = () => {
    const match = appointments.find(appt =>
      appt.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (match) {
      toast.success(`Found patient: ${match.name} (${match.treatment})`);
    } else {
      toast.warn('No matching patient found.');
    }
  };

  const filteredAppointments = appointments
    .filter(appt => {
      const matchesSearch = 
        appt.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        appt.treatment?.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesTreatment = 
        treatmentFilter === '' || appt.treatment === treatmentFilter;
      
      const apptDate = appt.date instanceof Date ? appt.date : new Date(appt.date);
      const matchesMonth = 
        viewMode !== 'list' || (
          apptDate.getMonth() === currentMonth.getMonth() &&
          apptDate.getFullYear() === currentMonth.getFullYear()
        );
      
      const matchesDate = 
        !selectedDate || 
        (apptDate.toDateString() === new Date(selectedDate).toDateString());
      
      return matchesSearch && matchesTreatment && matchesMonth && matchesDate;
    });

  // Function to check if a date has appointments
  const hasAppointments = (date) => {
    return appointments.some(appt => {
      const apptDate = appt.date instanceof Date ? appt.date : new Date(appt.date);
      return apptDate.toDateString() === date.toDateString();
    });
  };

  return (
    <Layout>
      {/* Full Calendar Modal */}
      {showFullCalendar && (
        <div className="full-calendar-modal active">
          <div className="modal-header">
            <h2>Appointment Calendar</h2>
            <button 
              className="close-btn"
              onClick={() => setShowFullCalendar(false)}
            >
              &times;
            </button>
          </div>
          <div className="calendar-container">
            <Calendar
              onClickDay={(date) => {
                setSelectedDate(date);
                setShowFullCalendar(false);
                setViewMode('list');
              }}
              value={selectedDate}
              view="month"
              tileContent={({ date, view }) => 
                view === 'month' && hasAppointments(date) ? (
                  <div className="appointment-dot"></div>
                ) : null
              }
            />
          </div>
        </div>
      )}

      <div className="appointment-dashboard-wrapper">
        {/* Main Content */}
        <div className="main-content">
          {/* Header */}
          <div className="appointments-header">
            <h2>Appointment Management Dashboard</h2>
            <div className="view-toggle">
              <button
                className={viewMode === 'list' ? 'active' : ''}
                onClick={() => setViewMode('list')}
              >
                📋 List View
              </button>
              <button
                className={viewMode === 'calendar' ? 'active' : ''}
                onClick={() => setViewMode('calendar')}
              >
                🗓️ Calendar View
              </button>
            </div>
          </div>

          {/* Modals */}
          <AddAppointmentModal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            onAddAppointment={handleAddAppointment}
          />
          <EditAppointmentModal
            isOpen={editModal}
            onClose={() => setEditModal(false)}
            appointment={editingAppointment}
            onUpdate={handleUpdateAppointment}
          />

          {/* Stats Cards */}
          <PatientStatsCards appointments={appointments} />

          {/* Search Bar */}
          <PatientSearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onSearch={handleSearchClick}
          />

          {/* Filter Dropdown */}
          <div className="filter-dropdown">
            <select
              value={treatmentFilter}
              onChange={(e) => setTreatmentFilter(e.target.value)}
            >
              <option value="">All Treatments</option>
              <option value="Anxiety Therapy">Anxiety Therapy</option>
              <option value="Depression Counseling">Depression Counseling</option>
              <option value="Sleep Disorder Care">Sleep Disorder Care</option>
            </select>
          </div>

          {/* Clear Filter by Date */}
          {selectedDate && (
            <button className="clear-filter" onClick={() => setSelectedDate(null)}>
              Clear Date Filter (Showing {new Date(selectedDate).toDateString()})
            </button>
          )}

          {/* Month Navigation (List View Only) */}
          {viewMode === 'list' && (
            <div className="list-month-nav">
              <button onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))}>
                ←
              </button>
              <span>
                {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
              </span>
              <button onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))}>
                →
              </button>
            </div>
          )}

          {/* Appointment List or Calendar */}
          {viewMode === 'list' ? (
            <PatientTable
              appointments={filteredAppointments}
              onEdit={handleEditClick}
              onDelete={handleDeleteAppointment}
            />
          ) : (
            <div className="full-calendar-view">
              <Calendar
                onClickDay={setSelectedDate}
                value={selectedDate}
                tileContent={({ date, view }) => 
                  view === 'month' && hasAppointments(date) ? (
                    <div className="appointment-dot"></div>
                  ) : null
                }
              />
            </div>
          )}

          {/* Add Button */}
          <button className="add-appointment-btn" onClick={() => setShowModal(true)}>
            + Add Appointment
          </button>
        </div>

        {/* Mini Calendar on Right Side */}
        <div 
          className="right-sidebar-calendar"
          onClick={() => setShowFullCalendar(true)}
        >
          <h4>{new Date().toLocaleString('default', { month: 'long', year: 'numeric' })}</h4>
          <Calendar
            onClickDay={setSelectedDate}
            value={selectedDate}
            tileContent={({ date, view }) => 
              view === 'month' && hasAppointments(date) ? (
                <div className="appointment-dot"></div>
              ) : null
            }
          />
        </div>
      </div>
    </Layout>
  );
};

export default AppointmentDashboard;