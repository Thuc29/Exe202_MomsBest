import React from "react";

function Calendar({ calendarDays, selectedDate, handleDateSelect }) {
  // Vietnamese month names
  const monthNamesVi = [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
  ];

  // Get current month (assuming we're working with July as in the calendar data)
  const currentMonth = monthNamesVi[6];
  // Vietnamese day names mapping
  const dayNamesVi = {
    Sun: "CN",
    Mon: "T2",
    Tue: "T3",
    Wed: "T4",
    Thu: "T5",
    Fri: "T6",
    Sat: "T7",
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl mb-4 font-semibold">{currentMonth}</h2>
      <div className="grid grid-cols-5 gap-2 mb-6">
        {calendarDays.map((day, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center h-16 rounded-2xl cursor-pointer transition-colors
              ${
                selectedDate === `${day.day} ${day.date}`
                  ? "bg-yellow-400 text-indigo-900 font-bold"
                  : "bg-white border hover:border-indigo-900"
              }`}
            onClick={() => handleDateSelect(day)}
          >
            <div className="text-sm">{dayNamesVi[day.day]}</div>
            <div
              className={
                selectedDate === `${day.day} ${day.date}`
                  ? "font-bold text-lg"
                  : ""
              }
            >
              {day.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
