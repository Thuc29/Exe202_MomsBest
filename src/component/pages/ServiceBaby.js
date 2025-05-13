import { useState } from "react";
import ServiceCard from "../layouts/ServiceCard";
import Pagination from "../layouts/Pagination";

const babyServices = [
  {
    id: "1",
    title: "Khám nhi định kỳ",
    description:
      "Theo dõi sự phát triển toàn diện của bé, phát hiện và phòng ngừa sớm các bệnh lý.",
    image:
      "https://images.unsplash.com/photo-1581578017420-e48aa1c0e0c2?auto=format&fit=crop&w=600",
    link: "/services/child-checkup",
    color: "blue",
    price: "300.000đ",
  },
  {
    id: "2",
    title: "Tư vấn nuôi con",
    description:
      "Hướng dẫn chăm sóc, ăn dặm, giấc ngủ và phát triển cảm xúc cho bé.",
    image:
      "https://images.unsplash.com/photo-1600873950238-b8e8e6a80f94?auto=format&fit=crop&w=600",
    link: "/services/parenting",
    color: "pink",
    price: "200.000đ",
  },
  {
    id: "3",
    title: "Dinh dưỡng cho bé",
    description:
      "Tư vấn thực đơn dinh dưỡng theo độ tuổi giúp bé phát triển khỏe mạnh.",
    image:
      "https://images.unsplash.com/photo-1604503468508-0c7d79ba09c3?auto=format&fit=crop&w=600",
    link: "/services/baby-nutrition",
    color: "blue",
    price: "250.000đ",
  },
  {
    id: "4",
    title: "Lịch tiêm chủng cho bé",
    description:
      "Theo dõi và tư vấn lịch tiêm chủng đầy đủ để bảo vệ sức khỏe bé.",
    image:
      "https://images.unsplash.com/photo-1583912268183-d155ddf62106?auto=format&fit=crop&w=600",
    link: "/services/baby-vaccination",
    color: "pink",
    price: "Miễn phí tư vấn",
  },
  {
    id: "5",
    title: "Khám da liễu cho bé",
    description:
      "Chẩn đoán và điều trị các bệnh ngoài da như chàm sữa, rôm sảy, mẩn ngứa...",
    image:
      "https://images.unsplash.com/photo-1611162617213-fd6a4d7edb82?auto=format&fit=crop&w=600",
    link: "/services/baby-dermatology",
    color: "blue",
    price: "320.000đ",
  },
  {
    id: "6",
    title: "Siêu âm tim – bụng cho bé",
    description:
      "Siêu âm phát hiện sớm các bất thường tim mạch và hệ tiêu hóa.",
    image:
      "https://images.unsplash.com/photo-1585829365295-6749a1ef2159?auto=format&fit=crop&w=600",
    link: "/services/baby-ultrasound",
    color: "pink",
    price: "500.000đ",
  },
  {
    id: "7",
    title: "Hướng dẫn tắm bé",
    description:
      "Hướng dẫn bố mẹ cách tắm bé an toàn, nhẹ nhàng và hợp vệ sinh.",
    image:
      "https://images.unsplash.com/photo-1584467735871-8e401b1a69e7?auto=format&fit=crop&w=600",
    link: "/services/baby-bath-guide",
    color: "blue",
    price: "150.000đ",
  },
  {
    id: "8",
    title: "Theo dõi vận động",
    description:
      "Đánh giá sự phát triển thể chất và vận động của bé theo từng giai đoạn.",
    image:
      "https://images.unsplash.com/photo-1584466959900-d8f1e1f8ef80?auto=format&fit=crop&w=600",
    link: "/services/motor-tracking",
    color: "pink",
    price: "270.000đ",
  },
  {
    id: "9",
    title: "Tư vấn chăm sóc trẻ sơ sinh",
    description:
      "Hướng dẫn cách cho bú, ngủ, chăm sóc da và phòng bệnh cho trẻ sơ sinh.",
    image:
      "https://images.unsplash.com/photo-1503455637927-730bce8583c0?auto=format&fit=crop&w=600",
    link: "/services/newborn-care",
    color: "blue",
    price: "220.000đ",
  },
  {
    id: "10",
    title: "Tâm lý trẻ nhỏ",
    description:
      "Hỗ trợ tư vấn các vấn đề tâm lý, hành vi của trẻ dưới 5 tuổi.",
    image:
      "https://images.unsplash.com/photo-1595433562696-8ef2d2134f3c?auto=format&fit=crop&w=600",
    link: "/services/child-psychology",
    color: "pink",
    price: "400.000đ",
  },
];

const ITEMS_PER_PAGE = 8;

const ServiceBaby = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter services based on search term
  const filteredServices = babyServices.filter(
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
        <section className="bg-gradient-to-r from-pink-200 to-blue-100 pt-36 pb-14 shadow-md">
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

export default ServiceBaby;
