import React from "react";
import { AccessTime, ArrowForwardIos } from "@mui/icons-material";

function TimeSlots({ timeSlots, handleTimeSelect }) {
  return (
    <div>
      <h2 className="text-lg mb-4 font-semibold flex items-center">
        <AccessTime fontSize="small" className="mr-2" />
        Thời gian khả dụng
      </h2>
      <div className="grid grid-cols-2 gap-2">
        {timeSlots.map((time, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-3 border border-gray-500 rounded-lg cursor-pointer hover:border-indigo-900 hover:bg-blue-400 hover:text-white transition-colors"
            onClick={() => handleTimeSelect(time)}
          >
            <div className="font-medium">{time}</div>
            <ArrowForwardIos fontSize="small" className="text-gray-400  " />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TimeSlots;
