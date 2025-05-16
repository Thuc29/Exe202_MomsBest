import React from "react";

function BookingSummary({
  salon,
  selectedServices,
  selectedBabysitter,
  selectedDate,
  selectedTime,
  handleContinue,
  step,
  totalPrice,
  isRescheduling,
}) {
  return (
    <div className="bg-white/80 p-4 border rounded-lg shadow-md sticky top-4">
      <h2 className="text-2xl font-bold mb-4">
        {isRescheduling ? "Tóm tắt đổi lịch" : "Tóm tắt đặt lịch"}
      </h2>

      <div className="mb-6">
        <div className="flex text-start items-center mb-4">
          <img
            src={salon.image}
            alt={salon.name}
            className="w-14 h-14 rounded-full mr-2"
          />
          <div>
            <div className="font-bold">{salon.name}</div>
            <div className="text-sm">{salon.location}</div>
          </div>
        </div>

        <div className="border-t border-b border-blue-300 py-4 my-4">
          <div className="font-bold text-xl mb-2">Dịch vụ đã chọn</div>

          {selectedServices.map((service) => (
            <div key={service.id} className="flex justify-between mb-2">
              <div>
                <div className="font-bold">{service.name}</div>
                <div className="text-sm flex text-red-500 opacity-80 pl-2">
                  <p className="text-gray-700 pr-1">{" Thời gian: "} </p>(
                  {service.duration})
                </div>
              </div>
              <div> {service.price.toLocaleString()} VND</div>
            </div>
          ))}

          {selectedDate && selectedTime && (
            <div className="text-sm text-gray-700 mt-3 pt-2 border-t  w-fit mx-auto border-blue-300">
              Lịch hẹn: {selectedDate} lúc {selectedTime}
            </div>
          )}
        </div>

        {selectedBabysitter && (
          <div className="border-b pb-4 mb-4">
            <div className="font-extrabold text-xl mb-2">Bảo mẫu đã chọn</div>
            <div className="flex items-center">
              <img
                src={selectedBabysitter.image}
                alt={selectedBabysitter.name}
                className="w-12 h-12 rounded-full mr-5"
              />
              <div>
                <div className="font-medium">{selectedBabysitter.name}</div>
                <div className="text-sm text-gray-500">
                  Kinh nghiệm: {selectedBabysitter.experience}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-between py-2">
          <div>Phí dịch vụ</div>
          <div> 0 %</div>
        </div>

        <div className="flex justify-between py-2 font-bold">
          <div>Tổng tiền</div>
          <div>{totalPrice.toLocaleString()} VND </div>
        </div>
      </div>

      {step < 3 && (
        <button
          className="border border-blue-600 hover:bg-pink-600 hover:border-pink-600 hover:text-white transition-all duration-300 text-blue-500 px-6 py-3 rounded-full w-full font-semibold"
          onClick={handleContinue}
        >
          Tiếp tục
        </button>
      )}

      <div className="mt-4  text-gray-500">
        <p className="mb-2 text-red-500 font-bold">Chính sách hủy</p>
        <p className="text-gray-500 text-xs">
          Hủy miễn phí bất kỳ lúc nào trước lịch hẹn, nếu không bạn sẽ bị tính
          phí 100% giá dịch vụ cho việc không đến đúng hẹn.
        </p>
      </div>
    </div>
  );
}

export default BookingSummary;
