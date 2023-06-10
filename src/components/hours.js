import React from 'react';
import '../css/hours.css';

const WorkingHours = () => {
  const days = [
    { day: 'Monday', hours: '9am - 6pm' },
    { day: 'Tuesday', hours: '9am - 6pm' },
    { day: 'Wednesday', hours: '9am - 6pm' },
    { day: 'Thursday', hours: '9am - 6pm' },
    { day: 'Friday', hours: '9am - 6pm' },
    { day: 'Saturday', hours: '9am - 6pm' },
    { day: 'Sunday', hours: '11am - 5pm' },
  ];

  return (
    <div className="working-hours-container">
      <div className="working-hours-title">Working Hours</div>
      <div className="working-hours-list">
        {days.map((day) => (
          <div key={day.day} className="working-hours-item">
            <div className="day">{day.day}</div>
            <div className="hours">{day.hours}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkingHours;
