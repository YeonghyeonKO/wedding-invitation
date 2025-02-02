/* eslint-disable no-alert, no-new, react/jsx-one-expression-per-line,react/no-array-index-key */
import React, { useState, useEffect, useRef } from 'react';

import useScrollFadeIn from '../../hooks/useScrollFadeIn';
import heartIcon from '../../assets/icons/heart-darkgreen.png';
import clockIcon from '../../assets/icons/clock.png';

function Calendar() {
  const calendarRef = useRef(null);
  const [calendarArray, setCalendarArray] = useState([]);

  useScrollFadeIn(calendarRef);

  const makeCalendarGrid = () => {
    const temp = [['', '', '', '', '', '']];
    for (let i = 1; i < 32; i += 1) {
      const a = Math.floor(i / 7);
      const b = i % 7;
      const index = b < 2 ? a : a + 1;

      if (temp[index]) {
        temp[index].push(i);
      } else {
        temp.push([i]);
      }
    }
    return temp;
  };

  useEffect(() => {
    setCalendarArray(makeCalendarGrid());
  }, []);

  return (
    <div className="calendar" ref={calendarRef}>
      <div className="month">
        <span className="month-subtext">March</span>
        <span className="month-text">3월</span>
      </div>
      <div className="calendar-wrapper">
        <div className="dayname">
          <div>일</div>
          <div>월</div>
          <div>화</div>
          <div>수</div>
          <div>목</div>
          <div>금</div>
          <div>토</div>
        </div>
        <div className="grid">
          {calendarArray.map((week) => (
            <div className="week" key={week}>
              {week.map((day, index) => (
                <div key={`day_${index}`} className="day">
                  <span className={day === 23 ? 'wedding' : ''}>{day}</span>
                  {day === 23 && <img src={heartIcon} alt="" />}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="date-text">
        <img src={clockIcon} alt="" />
        <span>25년 3월 23일 일요일 오전 11시</span>
      </div>
      {/* <div className="date-text">지타워 컨벤션</div> */}
    </div>
  );
}

export default Calendar;
