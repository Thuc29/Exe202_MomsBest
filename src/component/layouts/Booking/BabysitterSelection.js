import React from "react";
import { ArrowBack, Check, Star } from "@mui/icons-material";

function BabysitterSelection({
  babysitters,
  selectedDate,
  selectedTime,
  selectedBabysitter,
  handleBabysitterSelect,
  setStep,
}) {
  // Filter babysitters based on availability for selected date and time
  const availableBabysitters =
    selectedDate && selectedTime
      ? babysitters.filter(
          (babysitter) =>
            babysitter.availability[selectedDate] &&
            babysitter.availability[selectedDate].includes(selectedTime)
        )
      : babysitters;

  return (
    <div className="bg-white p-4 border rounded-lg">
      <div className="flex-col items-center mb-4">
        <button
          className="flex items-center text-sm mr-4 text-gray-700 bg-gray-100 shadow-md px-2 py-1 rounded-full hover:text-gray-900"
          onClick={() => setStep(2)}
        >
          <ArrowBack fontSize="small" />
          <span className="ml-1">Quay lại</span>
        </button>
        <div className="items-center text-start py-3">
          <div className="text-sm text-gray-500">Bước 3 / 3</div>
          <h1 className="text-2xl font-bold">Chọn bảo mẫu</h1>
        </div>
      </div>

      {selectedDate && selectedTime ? (
        <>
          <p className="mb-4 bg-blue-50 p-3 text-blue-800 font-semibold rounded-lg">
            {availableBabysitters.length > 0
              ? `Có ${availableBabysitters.length} bảo mẫu khả dụng vào ${selectedDate} lúc ${selectedTime}`
              : `Không có bảo mẫu khả dụng vào ${selectedDate} lúc ${selectedTime}. Vui lòng chọn thời gian khác.`}
          </p>

          {availableBabysitters.map((babysitter) => (
            <div
              key={babysitter.id}
              className={`border rounded-lg py-2 px-6 mb-4 cursor-pointer ${
                selectedBabysitter?.id === babysitter.id
                  ? "border-indigo-900 bg-indigo-50"
                  : ""
              }`}
              onClick={() => handleBabysitterSelect(babysitter)}
            >
              <div className="flex items-start gap-x-16">
                <div className="flex items-center justify-center">
                  <img
                    src={babysitter.image}
                    alt={babysitter.name}
                    className="w-[95px] h-[95px] rounded-full"
                  />
                  {selectedBabysitter?.id === babysitter.id && (
                    <div className="absolute text-white w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center -mt-[80px] -mr-16">
                      <Check fontSize="small" />
                    </div>
                  )}
                </div>
                <div className="flex-1 text-start">
                  <div className="font-bold text-lg">{babysitter.name}</div>
                  <div className="flex items-center text-md mb-1">
                    <Star className="text-yellow-400 mr-1" fontSize="small" />
                    <span>{babysitter.rating}/5.0</span>
                  </div>
                  <div className="text-sm text-gray-600 mb-1">
                    Kinh nghiệm: {babysitter.experience}
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Chuyên môn:</span>{" "}
                    {babysitter.specialties.join(", ")}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <p className="text-gray-600">
          Vui lòng chọn ngày và giờ trước để xem bảo mẫu khả dụng.
        </p>
      )}
    </div>
  );
}

export default BabysitterSelection;
