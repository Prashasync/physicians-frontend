import React, { useState } from 'react';
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

const AppointmentCalendar = ({ events, onDateSelect  }) => {
  return (
    <div className="calendar-wrapper">
      <Calendar
      onSelectSlot={(slotInfo) => {
        onDateSelect && onDateSelect(slotInfo.start);
      }}
      
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        defaultView={Views.MONTH}
        views={['month', 'week', 'day']}
        style={{ height: 500 }}
        popup
      />
    </div>
  );
};
export default AppointmentCalendar;
