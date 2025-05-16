import React from "react";
import Calendar from "./Calendar";
import TimeSlots from "./TimeSlots";
import { ArrowBack } from "@mui/icons-material";

function TimeSelection({
  calendarDays,
  timeSlots,
  selectedDate,
  handleDateSelect,
  handleTimeSelect,
  setStep,
}) {
  return (
    <div className="bg-white/80 p-4 border rounded-lg">
      <div className="flex-col items-center mb-4">
        <button
          className="flex items-center text-sm mr-4 text-gray-700 bg-gray-100 shadow-md px-2 py-1 rounded-full hover:text-gray-900"
          onClick={() => setStep(1)}
        >
          <ArrowBack fontSize="small" />
          <span className="ml-1">Quay lại</span>
        </button>
        <div className="items-center text-start py-3">
          <div className="text-sm text-gray-500">Bước 2 / 3</div>
          <h1 className="text-2xl font-bold">Chọn thời gian</h1>
        </div>
      </div>

      <Calendar
        calendarDays={calendarDays}
        selectedDate={selectedDate}
        handleDateSelect={handleDateSelect}
      />

      {selectedDate ? (
        timeSlots.length > 0 ? (
          <div className="max-h-96 overflow-y-auto pr-2 mt-4">
            <TimeSlots
              timeSlots={timeSlots}
              handleTimeSelect={handleTimeSelect}
            />
          </div>
        ) : (
          <div className="mt-4 text-center p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-yellow-700">
              Không có bảo mẫu khả dụng cho ngày {selectedDate}. Vui lòng chọn
              ngày khác.
            </p>
          </div>
        )
      ) : (
        <div className="mt-4 text-center p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-blue-700">
            Vui lòng chọn một ngày để xem các khung giờ khả dụng.
          </p>
        </div>
      )}
    </div>
  );
}

export default TimeSelection;
