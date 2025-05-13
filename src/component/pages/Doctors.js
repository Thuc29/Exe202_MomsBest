import { useState } from "react";
import Header from "../layouts/Header";
import DoctorCard from "../layouts/DoctorCard";
import Pagination from "../layouts/Pagination";
import Footer from "../layouts/Footer";

// Sample data - in a real app, this would come from an API or database
const allDoctors = [
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
  {
    id: "5",
    name: "Bác sĩ Thu Thảo",
    specialty: "Sản phụ khoa",
    image:
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600",
  },
  {
    id: "6",
    name: "Bác sĩ Văn Hưng",
    specialty: "Nhi khoa",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600",
  },
  {
    id: "7",
    name: "Bác sĩ Minh Hương",
    specialty: "Sản phụ khoa",
    image:
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600",
  },
  {
    id: "8",
    name: "Bác sĩ Phương Linh",
    specialty: "Dinh dưỡng",
    image:
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=600",
  },
];

// Available specialties for filtering
const specialties = ["Tất cả", "Sản phụ khoa", "Nhi khoa", "Dinh dưỡng"];

const ITEMS_PER_PAGE = 8;

const Doctors = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("Tất cả");

  // Filter doctors based on search term and specialty
  const filteredDoctors = allDoctors.filter(
    (doctor) =>
      (doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedSpecialty === "Tất cả" || doctor.specialty === selectedSpecialty)
  );

  const totalPages = Math.ceil(filteredDoctors.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedDoctors = filteredDoctors.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero section */}
        <section className="bg-baby-blue-100 py-16">
          <div className="container px-4 md:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-3xl font-bold mb-4">Đội ngũ bác sĩ</h1>
              <p className="text-gray-700 mb-8">
                Gặp gỡ đội ngũ bác sĩ giàu kinh nghiệm và tận tâm của chúng tôi.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="relative max-w-md w-full">
                  <input
                    type="text"
                    placeholder="Tìm kiếm bác sĩ..."
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="w-full py-3 px-4 rounded-full border border-blue-200 focus:ring-2 focus:ring-blue-300 focus:border-blue-300 outline-none"
                  />
                </div>
                <div className="relative">
                  <select
                    value={selectedSpecialty}
                    onChange={(e) => {
                      setSelectedSpecialty(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="w-full py-3 px-4 rounded-full border border-blue-200 focus:ring-2 focus:ring-blue-300 focus:border-blue-300 outline-none appearance-none pr-10"
                  >
                    {specialties.map((specialty) => (
                      <option key={specialty} value={specialty}>
                        {specialty}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Doctors list */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            {paginatedDoctors.length > 0 ? (
              <>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                  {paginatedDoctors.map((doctor) => (
                    <DoctorCard
                      key={doctor.id}
                      id={doctor.id}
                      name={doctor.name}
                      specialty={doctor.specialty}
                      image={doctor.image}
                    />
                  ))}
                </div>
                {totalPages > 1 && (
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 mb-4">
                  Không tìm thấy bác sĩ nào phù hợp với tìm kiếm của bạn.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedSpecialty("Tất cả");
                  }}
                  className="text-pink-600 underline"
                >
                  Xóa bộ lọc
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Doctors;
