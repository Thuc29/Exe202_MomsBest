import { useState } from "react";
import ServiceCard from "../layouts/ServiceCard";
import Pagination from "../layouts/Pagination";

// Sample data - in a real app, this would come from an API or database
const allServices = [
  {
    id: "1",
    title: "Khám thai định kỳ",
    description:
      "Theo dõi sự phát triển của thai nhi và sức khỏe của mẹ trong suốt thai kỳ.",
    image:
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600",
    link: "/services/pregnancy",
    color: "pink",
    price: "400.000đ",
  },
  {
    id: "2",
    title: "Chăm sóc trẻ sơ sinh",
    description:
      "Dịch vụ chăm sóc và tư vấn toàn diện cho trẻ sơ sinh và trẻ nhỏ.",
    image:
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=600",
    link: "/services/newborn",
    color: "blue",
    price: "300.000đ",
  },
  {
    id: "3",
    title: "Tư vấn dinh dưỡng",
    description:
      "Tư vấn về dinh dưỡng cho mẹ trong thời kỳ mang thai và cho con bú.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600",
    link: "/services/nutrition",
    color: "pink",
    price: "250.000đ",
  },
  {
    id: "4",
    title: "Tiêm chủng vắc-xin",
    description:
      "Dịch vụ tiêm chủng đầy đủ và an toàn cho trẻ theo lịch tiêm chủng quốc gia.",
    image:
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=600",
    link: "/services/vaccination",
    color: "blue",
    price: "Miễn phí tư vấn",
  },
  {
    id: "5",
    title: "Khám phụ khoa",
    description:
      "Dịch vụ khám phụ khoa toàn diện giúp phát hiện sớm các bệnh lý.",
    image:
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600",
    link: "/services/gynecology",
    color: "pink",
    price: "450.000đ",
  },
  {
    id: "6",
    title: "Siêu âm 4D",
    description:
      "Công nghệ siêu âm 4D hiện đại giúp theo dõi sự phát triển của thai nhi.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600",
    link: "/services/ultrasound",
    color: "blue",
    price: "600.000đ",
  },
  {
    id: "7",
    title: "Tắm bé sơ sinh",
    description:
      "Hướng dẫn và dịch vụ tắm bé sơ sinh đảm bảo an toàn và vệ sinh.",
    image:
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=600",
    link: "/services/baby-bath",
    color: "pink",
    price: "150.000đ",
  },
  {
    id: "8",
    title: "Theo dõi sau sinh",
    description:
      "Dịch vụ chăm sóc sau sinh giúp mẹ hồi phục nhanh chóng và khỏe mạnh.",
    image:
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600",
    link: "/services/postpartum",
    color: "blue",
    price: "350.000đ",
  },
];

const ITEMS_PER_PAGE = 8;

const ServiceMother = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter services based on search term
  const filteredServices = allServices.filter(
    (service) =>
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredServices.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedServices = filteredServices.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col font-space-grotesk">
      <main className="flex-grow">
        {/* Hero section */}
        <section className="bg-gradient-to-r from-pink-200 to-blue-100 pb-14 pt-36 shadow-md">
          <div className="container px-4 md:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl font-extrabold mb-4 text-pink-700 drop-shadow">
                Dịch vụ của chúng tôi
              </h1>
              <p className="text-gray-700 mb-8">
                Khám phá các dịch vụ chăm sóc sức khỏe toàn diện cho mẹ và bé.
              </p>
              <div className="relative max-w-md mx-auto">
                <input
                  type="text"
                  placeholder="Tìm kiếm dịch vụ..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full py-3 px-4 rounded-full bg-white text-black border border-pink-200 focus:ring-2 focus:ring-pink-300 focus:border-pink-300 outline-none"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services list */}
        <section className="py-10 bg-white">
          <div className="container px-4 md:px-6">
            {paginatedServices.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {paginatedServices.map((service) => (
                    <ServiceCard
                      key={service.id}
                      title={service.title}
                      description={service.description}
                      image={service.image}
                      link={service.link}
                      color={service.color}
                      price={service.price}
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
                  Không tìm thấy dịch vụ nào phù hợp với tìm kiếm của bạn.
                </p>
                <button
                  onClick={() => setSearchTerm("")}
                  className="text-pink-600 underline"
                >
                  Xóa tìm kiếm
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ServiceMother;
