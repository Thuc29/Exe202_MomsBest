import { useState } from "react";
import DoctorCard from "./DoctorCard";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const doctors = [
  {
    id: "1",
    name: "Bác sĩ Ngọc Anh",
    experience: "5 năm",
    specialties: ["Sản phụ khoa"],
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=600",
  },
  {
    id: "2",
    name: "Trần Thị Mai",
    experience: "3 năm",
    specialties: ["Yoga bầu", "Chăm sóc trẻ mẫu giáo"],
    rating: 4.7,
    image: "./assets/mother1.jpg",
  },
  {
    id: "3",
    name: "Bác sĩ Thanh Hà",
    experience: "7 năm",
    specialties: ["Dinh dưỡng"],
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600",
  },
  {
    id: "4",
    name: "Bác sĩ Quang Dũng",
    experience: "4 năm",
    specialties: ["Nhi khoa"],
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=600",
  },
];

const DoctorSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const doctorsPerPage = 4;
  const totalPages = Math.ceil(doctors.length / doctorsPerPage);

  const indexOfLastDoctor = currentPage * doctorsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
  const currentDoctors = doctors.slice(indexOfFirstDoctor, indexOfLastDoctor);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
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
      let startPage = Math.max(1, currentPage - 2);
      let endPage = Math.min(totalPages, currentPage + 2);

      if (currentPage <= 3) {
        endPage = 5;
      } else if (currentPage >= totalPages - 2) {
        startPage = totalPages - 4;
      }

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
    <section className="py-5 font-space-grotesk">
      <div className="container px-4 bg-white/70 md:px-6 shadow-lg rounded-lg py-5">
        <div className="text-center mb-7">
          <h2 className="text-center md:text-2xl sm:text-xl mb-7 font-bold bg-blue-400 inline-block px-6 py-2 rounded-lg">
            Đội Ngũ Bác Sĩ
          </h2>
          <p className="text-gray-600 max-w-2xl sm:text-sm md:text-[15px] mx-auto">
            Đội ngũ bác sĩ giàu kinh nghiệm và tận tâm của chúng tôi luôn sẵn
            sàng mang đến dịch vụ chăm sóc tốt nhất cho bạn và bé.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {currentDoctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              id={doctor.id}
              name={doctor.name}
              experience={doctor.experience}
              specialties={doctor.specialties}
              rating={doctor.rating}
              image={doctor.image}
            />
          ))}
        </div>

        <div className="text-center mt-10">
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
            <Link to="/doctors">Xem Tất Cả Bác Sĩ</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DoctorSection;
