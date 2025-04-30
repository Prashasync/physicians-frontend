// src/features/appointments/pages/AppointmentDashboard.jsx

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Layout from '../../../shared/components/Layout';
import PatientStatsCards from '../../patients/components/PatientStatsCards';
import PatientSearchBar from '../../patients/components/PatientSearchBar';
import PatientTable from '../components/PatientTable';
import AddAppointmentModal from '../components/AddAppointmentModal';
import EditAppointmentModal from '../components/EditAppointmentModal';
import AppointmentCalendar from '../components/AppointmentCalendar';
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
  const [calendarView, setCalendarView] = useState('month');

  const [appointments, setAppointments] = useState([
    {
      id: 1,
      name: 'John Doe',
      treatment: 'Anxiety Therapy',
      title: 'John Doe - Anxiety Therapy',
      start: new Date(2025, 3, 23, 10, 0),
      end: new Date(2025, 3, 23, 11, 0),
      age: 34,
      gender: 'F',
      joined: '2025-04-23',
      lastCheck: '2025-04-21',
      score: '70%',
      meds: 'Yes'
    },
    {
      id: 2,
      name: 'Sneha Kusuma',
      treatment: 'Anxiety Therapy',
      title: 'Sneha Kusuma - Anxiety Therapy',
      start: new Date(2025, 3, 24, 12, 0),
      end: new Date(2025, 3, 24, 13, 0),
      age: 30,
      gender: 'F',
      joined: '2025-04-24',
      lastCheck: '2025-04-22',
      score: '80%',
      meds: 'Yes'
    },
    {
      id: 3,
      name: 'Mary Jones',
      treatment: 'Sleep Disorder Care',
      title: 'Mary Jones - Sleep Disorder Care',
      start: new Date(2025, 3, 25, 9, 0),
      end: new Date(2025, 3, 25, 10, 0),
      age: 29,
      gender: 'F',
      joined: '2025-04-25',
      lastCheck: '2025-04-23',
      score: '90%',
      meds: 'No'
    }
  ]);

  const handleAddAppointment = (appointment) => {
    const newAppointment = {
      ...appointment,
      id: Date.now(),
      title: `${appointment.name} - ${appointment.treatment}`,
      start: new Date(appointment.start),
      end: new Date(appointment.end)
    };

    toast.loading('Saving appointment...');
    setTimeout(() => {
      setAppointments(prev => [...prev, newAppointment]);
      setShowModal(false);
      toast.dismiss();
      toast.success('Appointment added successfully!');
    }, 1000);

    setSelectedDate(null);
    setSearchQuery('');
    setTreatmentFilter('');
    setViewMode('calendar');
  };

  const handleEditClick = (appointment) => {
    setEditingAppointment(appointment);
    setEditModal(true);
  };

  const handleUpdateAppointment = (updatedAppt) => {
    toast.loading('Saving changes...');
    setTimeout(() => {
      setAppointments(prev =>
        prev.map(appt => (appt.id === updatedAppt.id ? updatedAppt : appt))
      );
      setEditModal(false);
      toast.dismiss();
      toast.success('Appointment updated successfully!');
    }, 1000);
  };

  const handleDeleteAppointment = (id) => {
    toast.loading('Deleting appointment...');
    setTimeout(() => {
      setAppointments(prev => prev.filter(appt => appt.id !== id));
      toast.dismiss();
      toast.success('Appointment deleted successfully!');
    }, 1000);
  };

  const filteredAppointments = appointments
    .filter(appt =>
      appt.title?.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter(appt =>
      treatmentFilter === '' || appt.treatment === treatmentFilter
    )
    .filter(appt => {
      if (!selectedDate) return true;
      const apptDate = new Date(appt.start).toDateString();
      return apptDate === new Date(selectedDate).toDateString();
    })
    .filter(appt => {
      if (viewMode !== 'list') return true;
      const apptDate = new Date(appt.start);
      return (
        apptDate.getMonth() === currentMonth.getMonth() &&
        apptDate.getFullYear() === currentMonth.getFullYear()
      );
    });

  const filteredEvents = selectedDate
    ? appointments.filter(appt => {
        const apptDate = new Date(appt.start).toDateString();
        const selected = new Date(selectedDate).toDateString();
        return apptDate === selected;
      })
    : appointments;

  return (
    <Layout>
      <div className="appointment-dashboard-wrapper">

        <div className="appointment-dashboard-content">
          <h2>Appointment Management Dashboard</h2>

          {/* View Toggle */}
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

          {/* Stats Section */}
          <PatientStatsCards />

          {/* Filters */}
          <PatientSearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />

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

          {selectedDate && (
            <button className="clear-filter" onClick={() => setSelectedDate(null)}>
              Clear Date Filter (Showing {new Date(selectedDate).toDateString()})
            </button>
          )}

          {/* List View or Calendar View */}
          {viewMode === 'list' ? (
            <>
              <div className="list-month-nav">
                <button
                  onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))}
                >
                  ←
                </button>
                <span>
                  {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
                </span>
                <button
                  onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))}
                >
                  →
                </button>
              </div>

              <PatientTable
                appointments={filteredAppointments}
                onEdit={handleEditClick}
                onDelete={handleDeleteAppointment}
              />
            </>
          ) : (
            <>
              <div className="full-calendar-controls">
                <button
                  onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))}
                >
                  ←
                </button>
                <span>
                  {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
                </span>
                <button
                  onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))}
                >
                  →
                </button>
              </div>

              <AppointmentCalendar
                events={filteredEvents}
                onDateSelect={setSelectedDate}
                currentMonth={currentMonth}
                calendarView={calendarView}
                setCalendarView={setCalendarView}
                onNavigateMonth={setCurrentMonth}
              />
            </>
          )}

          {/* Floating Button */}
          <button
            className="add-appointment-btn"
            onClick={() => setShowModal(true)}
          >
            + Add Appointment
          </button>
        </div>

        <div className="right-sidebar-calendar">
          <h4>{new Date().toLocaleString('default', { month: 'long', year: 'numeric' })}</h4>
          <Calendar
            onClickDay={(date) => {
              setSelectedDate(date);
              setCurrentMonth(date);
            }}
            value={selectedDate}
            tileContent={({ date, view }) =>
              view === 'month' && appointments.some(appt =>
                new Date(appt.start).toDateString() === date.toDateString()
              ) ? (
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
