import React from "react";
import { Check, Close, Place, Event } from "@mui/icons-material";

function BookingConfirmation({
  selectedServices,
  selectedTime,
  selectedDate,
  selectedBabysitter,
  salon,
  bookingRef,
  resetBooking,
  startRescheduling,
  totalPrice,
}) {
  return (
    <div className="min-h-screen py-20 text-black bg-cover bg-center bg-[url('https://images.pexels.com/photos/3270224/pexels-photo-3270224.jpeg?auto=compress&cs=tinysrgb&w=600')] flex flex-col font-space-grotesk">
      <div className="flex flex-col container mx-auto md:flex-row mt-6 gap-6">
        {/* Left Side - Appointment Info */}
        <div className="w-full md:w-1/3 bg-white/90 p-4 border rounded-lg pr-0 md:pr-4 mb-6 md:mb-0">
          <h1 className="text-2xl font-bold mb-6">Lịch hẹn sắp tới</h1>

          <div className="border border-pink-300 rounded-lg p-4 mb-8">
            <div className="flex">
              <img
                src={salon.image}
                alt={salon.name}
                className="w-[70px] h-[70px] rounded-full mr-3"
              />
              <div className="text-start">
                <div className="text-sm  text-red-500">
                  {`${selectedDate} lúc ${selectedTime}`}
                </div>
                <div className="font-bold">{salon.name}</div>
                <div className="text-sm  text-gray-500">
                  {selectedServices.length > 1
                    ? `${selectedServices.length} dịch vụ đã chọn`
                    : selectedServices[0].name}
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6">Lịch hẹn đã qua</h2>
          <div className="text-gray-500 italic">
            Bạn chưa có lịch hẹn nào trước đây.
          </div>
        </div>

        {/* Right Side - Detailed Appointment */}
        <div className="w-full md:w-2/3 pl-0  md:pl-4">
          <div className="border rounded-lg bg-white/90 p-6">
            <h2 className="text-3xl text-red-600 font-extrabold mb-4">
              {selectedDate} lúc {selectedTime}
            </h2>

            <div className="bg-green-200 font-semibold text-green-700 rounded-full px-2 py-1 inline-flex items-center mb-6">
              <Check className="mr-1" size={16} />
              <span>Đã xác nhận</span>
            </div>

            <div className="flex justify-center text-start items-center mb-6">
              <img
                src={salon.image}
                alt={salon.name}
                className="w-16 h-16 rounded-full mr-3"
              />
              <div>
                <div className="font-bold">{salon.name}</div>
                <div>{salon.location}</div>
                <div className="text-sm text-gray-500">
                  Mã đặt lịch: #{bookingRef}
                </div>
              </div>
            </div>
            <h3 className="font-bold text-2xl text-pink-700 mb-1">
              Bảo mẫu của bạn
            </h3>
            {selectedBabysitter && (
              <div className="mb-6 border p-2 rounded-lg">
                <div className="flex text-start items-center">
                  <img
                    src={selectedBabysitter.image}
                    alt={selectedBabysitter.name}
                    className="w-12 h-12 rounded-full mr-3"
                  />
                  <div>
                    <div className="font-bold">{selectedBabysitter.name}</div>
                    <div className="text-sm">
                      Kinh nghiệm: {selectedBabysitter.experience}
                    </div>
                    <div className="text-sm text-gray-600">
                      Chuyên môn: {selectedBabysitter.specialties.join(", ")}
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-between mb-6">
              <button className="flex items-center text-md px-4 py-2 bg-white hover:bg-cyan-300 transition-all duration-300 border rounded-full">
                <Place className="mr-1" size={14} />
                Chỉ đường
              </button>
              <button
                className="flex items-center text-md px-4 py-2 bg-white hover:bg-blue-400 hover:text-white transition-all duration-300 border rounded-full"
                onClick={startRescheduling}
              >
                <Event className="mr-1" size={14} />
                Đổi lịch
              </button>
              <button
                className="flex items-center text-md px-4 py-2 bg-white hover:bg-red-400 hover:text-white transition-all duration-300 border rounded-full"
                onClick={resetBooking}
              >
                <Close className="mr-1" size={14} />
                Hủy
              </button>
            </div>

            <div className="border-t pt-4">
              {/* Display all selected services */}
              {selectedServices.map((service) => (
                <div key={service.id} className="flex justify-between py-2">
                  <div className="flex flex-row items-center">
                    <div className="font-bold">
                      {service.name} {" - "}
                    </div>
                    <div className="text-sm flex text-red-500 opacity-80 pl-2">
                      <p className="text-gray-700 pr-1">{" Thời gian: "} </p>(
                      {service.duration})
                    </div>
                  </div>
                  <div className="font-bold">
                    {service.price.toLocaleString()} VND
                  </div>
                </div>
              ))}

              <div className="flex justify-between py-2">
                <div>Thuế</div>
                <div> 0 VND</div>
              </div>

              <div className="flex justify-between py-2 font-bold border-t">
                <div>Tổng cộng</div>
                <div>{totalPrice.toLocaleString()} VND </div>
              </div>
            </div>

            <div className="mt-6">
              <p className="mb-2 text-md text-lg text-red-500 font-bold">
                Chính sách hủy
              </p>
              <p className="mb-1 text-gray-500">
                Hủy miễn phí bất kỳ lúc nào trước lịch hẹn, nếu không bạn sẽ bị
                tính phí
              </p>
              <p className="font-bold">
                100% giá dịch vụ cho việc không đến đúng hẹn.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingConfirmation;
