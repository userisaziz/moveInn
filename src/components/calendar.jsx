import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const CalendarComponent = () => {
  const fetchAndParseICS = async (url) => {
    try {
      const response = await fetch(url);
      const icsContent = await response.text();

      // Instead of importing the 'ics' library, we use the utility functions directly
      const { error, value } = await window.ics.parseICS(icsContent);
      if (error) {
        console.error("Error parsing ICS file:", error);
        return [];
      }

      return value;
    } catch (error) {
      console.error("Error fetching or parsing ICS file:", error);
      return [];
    }
  };

  const localizer = momentLocalizer(moment);

  const [events, setEvents] = useState([]);

  // Replace 'your_ics_file_url.ics' with the actual URL of your ICS file
  const icsFileUrl =
    "https://www.vrbo.com/icalendar/df2e9f38eda44a51b54886abfb0d1b66.ics";

  useEffect(() => {
    fetchAndParseICS(icsFileUrl).then((parsedEvents) => {
      setEvents(parsedEvents);
    });
  }, []);

  return (
    <div>
      <h1>Calendar</h1>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        views={["month", "week", "day"]}
        style={{ height: 500 }}
      />
    </div>
  );
};

export default CalendarComponent;
