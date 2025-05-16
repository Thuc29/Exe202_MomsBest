import React from "react";

import { categories } from "../../data/bookingData";
import { Check } from "@mui/icons-material";

function ServiceSelection({
  momServices,
  babyServices,
  selectedServices,
  handleServiceSelect,
  activeCategory,
  setActiveCategory,
  isRescheduling,
}) {
  // Determine which service list to display based on active category
  const services = activeCategory === "mom" ? momServices : babyServices;

  // Helper function to check if a service is selected
  const isServiceSelected = (serviceId) => {
    return selectedServices.some((service) => service.id === serviceId);
  };

  return (
    <div className="bg-white p-4 border rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <div>
          <div className="text-sm text-start text-gray-500">
            {isRescheduling ? "Đổi lịch - Bước 1 / 3" : "Bước 1 / 3"}
          </div>
          <h1 className="text-2xl font-bold">
            {isRescheduling ? "Chọn lại dịch vụ" : "Chọn dịch vụ"}
          </h1>
          {isRescheduling && (
            <div className="text-sm text-blue-600 mt-1">
              Bạn có thể chọn nhiều dịch vụ cùng lúc
            </div>
          )}
        </div>
        <button className="text-2xl">&times;</button>
      </div>

      {/* Service Categories */}
      <div className="mb-6 border-b">
        <div className="flex overflow-x-auto">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className={`px-4 py-2 whitespace-nowrap cursor-pointer ${
                (index === 0 && activeCategory === "mom") ||
                (index === 1 && activeCategory === "baby")
                  ? "  bg-pink-600 transition-all border border-pink-700 duration-300 text-white font-bold rounded-t-xl"
                  : "text-gray-700 border rounded-t-xl font-bold"
              } mr-2`}
              onClick={() => setActiveCategory(index === 0 ? "mom" : "baby")}
            >
              {category.name}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">
          {activeCategory === "mom"
            ? "Dịch vụ dành cho mẹ"
            : "Dịch vụ dành cho bé"}
        </h2>

        {selectedServices.length > 0 && (
          <div className="text-sm text-indigo-600 font-medium">
            Đã chọn {selectedServices.length} dịch vụ
          </div>
        )}
      </div>

      {/* Info about multiple selection */}
      <div className="bg-pink-50 text-pink-700 p-3 rounded-md mb-4">
        <p>
          Bạn có thể chọn nhiều dịch vụ cùng lúc bằng cách nhấp vào từng dịch
          vụ.
        </p>
      </div>

      {/* Service List */}
      {services.map((service) => (
        <div key={service.id} className="border-b border-pink-700 py-4">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => handleServiceSelect(service)}
          >
            <div className="flex items-center">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center mr-4 ${
                  isServiceSelected(service.id)
                    ? "bg-yellow-400 text-white "
                    : "border"
                }`}
              >
                {isServiceSelected(service.id) && <Check size={16} />}
              </div>
              <div className="text-start">
                <div className="flex flex-row items-center">
                  <div className="font-bold">
                    {service.name} {" - "}
                  </div>
                  <div className="text-sm flex text-red-500 opacity-80 pl-2">
                    <p className="text-gray-700 pr-1">{" Thời gian: "} </p>(
                    {service.duration})
                  </div>
                </div>
                <div className="text-sm text-gray-500">
                  {service.description}
                </div>
              </div>
            </div>
            <div className="font-bold">
              {service.price.toLocaleString()} VND
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ServiceSelection;
