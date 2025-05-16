import React, { useState, useEffect } from "react";

import ServiceSelection from "../layouts/Booking/ServiceSelection";
import TimeSelection from "../layouts/Booking/TimeSelection";
import BabysitterSelection from "../layouts/Booking/BabysitterSelection";
import BookingSummary from "../layouts/Booking/BookingSummurary";
import BookingConfirmation from "../layouts/Booking/BookingConfirmation";
import AlertDialog from "../AlertDialog";
import {
  momServices,
  babyServices,
  calendarDays,
  timeSlots,
  salon,
  babysitters,
} from "../data/bookingData";

function Booking() {
  const [step, setStep] = useState(1);
  const [activeCategory, setActiveCategory] = useState("mom");
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedBabysitter, setSelectedBabysitter] = useState(null);
  const [bookingComplete, setBookingComplete] = useState(false);
  const [bookingRef] = useState("65742695");
  const [availableTimeSlots, setAvailableTimeSlots] = useState(timeSlots);
  const [isRescheduling, setIsRescheduling] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertTitle, setAlertTitle] = useState("");
  const [alertType, setAlertType] = useState("info"); // info, success, warning, error

  // Calculate total price from selected services
  const totalPrice = selectedServices.reduce(
    (sum, service) => sum + service.price,
    0
  );

  // Handle service selection - now supports multiple selections
  const handleServiceSelect = (service) => {
    setSelectedServices((prevServices) => {
      // Check if service is already selected
      const serviceIndex = prevServices.findIndex((s) => s.id === service.id);

      if (serviceIndex >= 0) {
        // Remove service if already selected
        return prevServices.filter((s) => s.id !== service.id);
      } else {
        // Add service if not selected
        return [...prevServices, service];
      }
    });
  };

  // Handle date selection
  const handleDateSelect = (day) => {
    const dateString = `${day.day} ${day.date}`;
    setSelectedDate(dateString);
    setSelectedTime(null);
    setSelectedBabysitter(null);

    // Update available time slots based on babysitters available for the selected date
    updateAvailableTimeSlots(dateString);
  };

  // Update available time slots based on babysitter availability
  const updateAvailableTimeSlots = (dateString) => {
    // Collect all time slots that at least one babysitter is available
    const availableTimes = new Set();

    babysitters.forEach((babysitter) => {
      if (babysitter.availability[dateString]) {
        babysitter.availability[dateString].forEach((time) => {
          availableTimes.add(time);
        });
      }
    });

    // Filter the original time slots based on availability
    const filteredTimeSlots = timeSlots.filter((time) =>
      availableTimes.has(time)
    );
    setAvailableTimeSlots(filteredTimeSlots);
  };

  // Handle time selection
  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setSelectedBabysitter(null);

    if (step === 2) {
      setStep(3); // Move to babysitter selection
    }
  };

  // Handle babysitter selection
  const handleBabysitterSelect = (babysitter) => {
    setSelectedBabysitter(babysitter);

    // Show confirmation alert
    showAlert(
      "Xác nhận đặt lịch",
      `Bạn đã chọn ${selectedServices.length} dịch vụ với bảo mẫu ${babysitter.name} vào ${selectedDate} lúc ${selectedTime}. Xác nhận đặt lịch?`,
      "info",
      () => completeBooking()
    );
  };

  // Complete booking after confirmation
  const completeBooking = () => {
    setBookingComplete(true);
    showAlert(
      "Đặt lịch thành công",
      `Mã đặt lịch của bạn là: #${bookingRef}`,
      "success"
    );
  };

  // Reset booking
  const resetBooking = () => {
    showAlert(
      "Xác nhận hủy lịch",
      "Bạn có chắc chắn muốn hủy lịch này không?",
      "warning",
      () => {
        setStep(1);
        setActiveCategory("mom");
        setSelectedServices([]);
        setSelectedTime(null);
        setSelectedDate(null);
        setSelectedBabysitter(null);
        setBookingComplete(false);
        setIsRescheduling(false);

        showAlert(
          "Đã hủy lịch",
          "Lịch hẹn của bạn đã được hủy thành công.",
          "success"
        );
      }
    );
  };

  // Handle rescheduling
  const startRescheduling = () => {
    setIsRescheduling(true);
    setBookingComplete(false);
    setStep(2); // Go directly to date/time selection

    showAlert(
      "Đổi lịch hẹn",
      "Vui lòng chọn ngày và giờ mới cho lịch hẹn của bạn.",
      "info"
    );
  };

  // Show alert dialog
  const showAlert = (title, message, type, onConfirm = null) => {
    setAlertTitle(title);
    setAlertMessage(message);
    setAlertType(type);
    setAlertOpen(true);

    // Store confirm callback if provided
    if (onConfirm) {
      window.confirmCallback = onConfirm;
    } else {
      window.confirmCallback = null;
    }
  };

  // Handle alert confirmation
  const handleAlertConfirm = () => {
    setAlertOpen(false);
    // Execute callback if exists
    if (window.confirmCallback) {
      window.confirmCallback();
      window.confirmCallback = null;
    }
  };

  // Handle alert dismiss
  const handleAlertDismiss = () => {
    setAlertOpen(false);
  };

  // Handle continue button click
  const handleContinue = () => {
    if (selectedServices.length === 0) {
      showAlert(
        "Chưa chọn dịch vụ",
        "Vui lòng chọn ít nhất một dịch vụ để tiếp tục.",
        "warning"
      );
      return;
    }

    if (step < 3) {
      setStep(step + 1);
    }
  };

  // Render the booking confirmation screen
  if (bookingComplete) {
    return (
      <>
        <BookingConfirmation
          selectedServices={selectedServices}
          selectedTime={selectedTime}
          selectedDate={selectedDate}
          selectedBabysitter={selectedBabysitter}
          salon={salon}
          bookingRef={bookingRef}
          resetBooking={resetBooking}
          startRescheduling={startRescheduling}
          totalPrice={totalPrice}
        />
        <AlertDialog
          open={alertOpen}
          title={alertTitle}
          message={alertMessage}
          type={alertType}
          onConfirm={handleAlertConfirm}
          onDismiss={handleAlertDismiss}
        />
      </>
    );
  }

  return (
    <div className="min-h-screen py-20 text-black bg-cover bg-center bg-[url('https://images.pexels.com/photos/3270224/pexels-photo-3270224.jpeg?auto=compress&cs=tinysrgb&w=600')] flex flex-col font-space-grotesk">
      <div className="flex flex-col container mx-auto md:flex-row mt-6 gap-6">
        {/* Left Side - Steps Content */}
        <div className="w-full md:w-2/3">
          {/* Step 1: Select Services */}
          {step === 1 && (
            <ServiceSelection
              momServices={momServices}
              babyServices={babyServices}
              selectedServices={selectedServices}
              handleServiceSelect={handleServiceSelect}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              isRescheduling={isRescheduling}
            />
          )}

          {/* Step 2: Select Time */}
          {step === 2 && (
            <TimeSelection
              calendarDays={calendarDays}
              timeSlots={availableTimeSlots}
              selectedDate={selectedDate}
              handleDateSelect={handleDateSelect}
              handleTimeSelect={handleTimeSelect}
              setStep={setStep}
              isRescheduling={isRescheduling}
            />
          )}

          {/* Step 3: Select Babysitter */}
          {step === 3 && (
            <BabysitterSelection
              babysitters={babysitters}
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              selectedBabysitter={selectedBabysitter}
              handleBabysitterSelect={handleBabysitterSelect}
              setStep={setStep}
              isRescheduling={isRescheduling}
            />
          )}
        </div>

        {/* Right Side - Summary Panel */}
        <div className="w-full md:w-1/3">
          {selectedServices.length > 0 && (
            <BookingSummary
              salon={salon}
              selectedServices={selectedServices}
              selectedBabysitter={selectedBabysitter}
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              handleContinue={handleContinue}
              step={step}
              totalPrice={totalPrice}
              isRescheduling={isRescheduling}
            />
          )}
        </div>
      </div>

      {/* Alert Dialog */}
      <AlertDialog
        open={alertOpen}
        title={alertTitle}
        message={alertMessage}
        type={alertType}
        onConfirm={handleAlertConfirm}
        onDismiss={handleAlertDismiss}
      />
    </div>
  );
}

export default Booking;
