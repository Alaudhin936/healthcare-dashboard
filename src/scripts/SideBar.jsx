import { X } from "lucide-react";
import React, { useState } from "react";

export const SideBar = ({ Appointments }) => {
  const [currentTimings, setCurrentTimings] = useState(Appointments[0]);
  const [selectedIndex, setselectedIndex] = useState(0);
  const [subInd, setSubInd] = useState(0);
  const [balanceTimings, setbalanceTimings] = useState(
    Appointments.filter((app, index) => index != 0)
  );

  const updateCurrentDay = (ind) => {
    setCurrentTimings(Appointments[ind]);
    setSubInd(0);
    setselectedIndex(ind);
    setbalanceTimings(
      Appointments.filter((app) => app.id > Appointments[ind].id)
    );
  };
  return (
    <div className="sidebar-container">
      <div className="appointments-wrapper">
        {Appointments.map((appointment, indx) => (
          <div
            key={indx}
            className={`appointment-card ${
              indx === selectedIndex ? "active" : ""
            }`}
            onClick={() => updateCurrentDay(indx)}
          >
            <h4 className="appointment-day">{appointment.day}</h4>
            <p className="appointment-date">Date: {appointment.date}</p>
            <ul className="appointment-timings">
              {Object.entries(appointment.timings).map(
                ([time, task], subIdx) => (
                  <li key={time} className={`timing-item ${subInd == subIdx ? 'active':''}`} onClick={()=>setSubInd(subIdx)}>
                    {time}
                  </li>
                )
              )}
            </ul>
          </div>
        ))}
      </div>

      <div className="other-days-section">
        <h3>{currentTimings.day}</h3>
        {Object.entries(currentTimings.timings).map(([time, task],subIdx) => (
          <div key={time} onClick={() => setSubInd(subIdx)} >
            <div className={`timing-item ${subInd == subIdx ? 'active':''}`}>
              {Number(time) > 9 ? time : `0${time}`} -
              {Number(time) > 9 ? Number(time) + 1 : `0${time}`}{" "}
              {task.treatment}
            </div>
            <div>{task.doctor}</div>
          </div>
        ))}
      </div>

      <div>
        <div className="other-days-section">
          <h3>Upcoming Days</h3>
          {balanceTimings.length > 0
            ? balanceTimings.map((day, idx) => (
                <div key={idx} className="upcoming-day-block">
                  <h4>
                    {day.day} - {day.date}
                  </h4>
                  <ul>
                    {Object.entries(day.timings).map(([time, task]) => (
                      <li key={time}>
                        {Number(time) > 9 ? time : `0${time}`}:00 -
                        {Number(time) + 1 > 9
                          ? Number(time) + 1
                          : `0${Number(time) + 1}`}
                        :00 → {task.treatment}
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            : "No Upcoming Appointments Found"}
        </div>
      </div>
    </div>
  );
};
