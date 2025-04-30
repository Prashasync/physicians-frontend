import React from 'react';
import { Calendar, Views, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import './AppointmentCalendar.scss';

const locales = {
  'en-US': require('date-fns/locale/en-US'),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const AppointmentCalendar = ({ events = [], onDateSelect, currentMonth, calendarView, setCalendarView, onNavigateMonth }) => {
  const handleNavigate = (date) => {
    if (onNavigateMonth) {
      onNavigateMonth(date);
    }
    if (onDateSelect) {
      onDateSelect(date);  // ✅ Also select the navigated date
    }
  };

  const handleSelectSlot = (slotInfo) => {
    if (onDateSelect) {
      onDateSelect(slotInfo.start);
    }
  };

  return (
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      date={currentMonth}
      view={calendarView}
      onView={(view) => setCalendarView(view)}
      onNavigate={handleNavigate}
      selectable
      onSelectSlot={handleSelectSlot}
      style={{ height: 600 }}
      messages={{
        empty: "No appointments found"  //  inside calendar view
      }}
    />
  );
};

export default AppointmentCalendar;
