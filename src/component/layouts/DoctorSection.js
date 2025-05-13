import { useState } from "react";
import DoctorCard from "./DoctorCard";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

// Sample data - in a real app, this would come from an API or database
const doctors = [
  {
    id: "1",
    name: "Bác sĩ Ngọc Anh",
    specialty: "Sản phụ khoa",
    image:
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=600",
  },
  {
    id: "2",
    name: "Bác sĩ Minh Tâm",
    specialty: "Nhi khoa",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600",
  },
  {
    id: "3",
    name: "Bác sĩ Thanh Hà",
    specialty: "Dinh dưỡng",
    image:
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600",
  },
  {
    id: "4",
    name: "Bác sĩ Quang Dũng",
    specialty: "Nhi khoa",
    image:
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=600",
  },
];

const DoctorSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const doctorsPerPage = 4; // Số bác sĩ trên mỗi trang
  const totalPages = Math.ceil(doctors.length / doctorsPerPage);

  // Tính toán danh sách bác sĩ hiển thị trên trang hiện tại
  const indexOfLastDoctor = currentPage * doctorsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
  const currentDoctors = doctors.slice(indexOfFirstDoctor, indexOfLastDoctor);

  // Xử lý nút Prev
  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // Xử lý nút Next
  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  // Xử lý khi nhấn vào số trang
  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  // Tạo danh sách các số trang hiển thị
  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5; // Số trang tối đa hiển thị trước khi thêm "..."

    if (totalPages <= maxPagesToShow) {
      // Nếu tổng số trang ít hơn hoặc bằng maxPagesToShow, hiển thị tất cả
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => handlePageClick(i)}
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
              currentPage === i
                ? "bg-purple-500 text-white"
                : "bg-blue-200 text-gray-700 hover:bg-blue-300"
            }`}
          >
            {i}
          </button>
        );
      }
    } else {
      // Nếu có nhiều trang, hiển thị 1, 2, 3, ..., cuối
      let startPage = Math.max(1, currentPage - 2);
      let endPage = Math.min(totalPages, currentPage + 2);

      if (currentPage <= 3) {
        endPage = 5;
      } else if (currentPage >= totalPages - 2) {
        startPage = totalPages - 4;
      }

      // Thêm các số trang
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => handlePageClick(i)}
            className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-medium ${
              currentPage === i
                ? "bg-purple-500 text-white"
                : "bg-blue-200 text-gray-700 hover:bg-blue-300"
            }`}
          >
            {i}
          </button>
        );
      }

      // Thêm "..." nếu cần
      if (startPage > 1) {
        pageNumbers.unshift(
          <span
            key="start-ellipsis"
            className="w-7 h-7 flex items-center justify-center text-gray-700"
          >
            ...
          </span>
        );
      }
      if (endPage < totalPages) {
        pageNumbers.push(
          <span
            key="end-ellipsis"
            className="w-7 h-7 flex items-center justify-center text-gray-700"
          >
            ...
          </span>
        );
      }
    }

    return pageNumbers;
  };

  return (
    <section className="py-5 bg-gradient-to-r from-pink-200 to-blue-100 font-space-grotesk">
      <div className="container px-4 bg-white md:px-6 shadow-lg rounded-lg py-5">
        <div className="text-center mb-7">
          <h2 className="text-center md:text-2xl sm:text-xl mb-7 font-bold bg-blue-400 inline-block px-6 py-2 rounded-lg ">
            Đội ngũ bảo mẫu
          </h2>
          <p className="text-gray-600 max-w-2xl sm:text-sm md:text-[15px] mx-auto">
            Đội ngũ bác sĩ giàu kinh nghiệm và tận tâm của chúng tôi luôn sẵn
            sàng mang đến dịch vụ chăm sóc tốt nhất cho bạn và bé.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 ">
          {currentDoctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              id={doctor.id}
              name={doctor.name}
              specialty={doctor.specialty}
              image={doctor.image}
            />
          ))}
        </div>

        <div className="text-center mt-10">
          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mb-6">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className={`w-7 h-7 rounded-full flex items-center justify-center bg-blue-200 text-gray-700 hover:bg-blue-300 ${
                currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              &lt;&lt;
            </button>

            {renderPageNumbers()}

            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`w-7 h-7 rounded-full flex items-center justify-center bg-blue-200 text-gray-700 hover:bg-blue-300 ${
                currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              &gt;&gt;
            </button>
          </div>

          <Button
            variant="outlined"
            className="!border-blue-500 !rounded-3xl !font-space-grotesk hover:!bg-blue-600 !text-blue-600 hover:!text-white"
          >
            <Link to="/doctors">Xem tất cả bác sĩ</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DoctorSection;
