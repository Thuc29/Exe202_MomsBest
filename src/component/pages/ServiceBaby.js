import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

const ServicePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [priceFilter, setPriceFilter] = useState("all");

  const filteredServices = babyServices.filter((service) => {
    const searchMatch =
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const priceMatch =
      priceFilter === "all" ||
      (priceFilter === "under500k" &&
        parseInt(service.price.replace(/[^\d]/g, "")) < 500000) ||
      (priceFilter === "500k-1m" &&
        parseInt(service.price.replace(/[^\d]/g, "")) >= 500000 &&
        parseInt(service.price.replace(/[^\d]/g, "")) <= 1000000) ||
      (priceFilter === "over1m" &&
        parseInt(service.price.replace(/[^\d]/g, "")) > 1000000);
    return searchMatch && priceMatch;
  });

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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="min-h-screen text-black bg-cover bg-center bg-[url('https://images.pexels.com/photos/29863729/pexels-photo-29863729/free-photo-of-ch-p-nh-giang-sinh-cho-tr-em.jpeg?auto=compress&cs=tinysrgb&w=600')] flex flex-col font-space-grotesk">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className=" pt-36 pb-14 shadow-md">
          <div className="container bg-[url('https://images.pexels.com/photos/29863729/pexels-photo-29863729/free-photo-of-ch-p-nh-giang-sinh-cho-tr-em.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover bg-center bg-no-repeat p-4 rounded-2xl md:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4 w-fit mx-auto px-4 shadow-2xl bg-slate-100/70 rounded-lg text-pink-500 drop-shadow">
                Dịch vụ cho mẹ chúng tôi
              </h1>
              <p className="text-gray-500 shadow-lg w-fit mx-auto px-4 bg-slate-100/70 rounded-lg mb-8">
                Khám phá các dịch vụ chăm sóc sức khỏe toàn diện cho mẹ
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
                  className="w-full py-3 px-4 rounded-full bg-white/70 text-black border border-pink-200 focus:ring-2 focus:ring-pink-300 focus:border-pink-300 outline-none"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-10">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left Column: Filters */}
              <aside className="lg:w-1/4">
                <div className="bg-white/70 p-4 rounded-2xl shadow-lg">
                  <h2 className="text-xl font-bold text-pink-600 mb-6">
                    Bộ Lọc Dịch Vụ
                  </h2>

                  {/* Price Filter */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">
                      Mức Phí
                    </h3>
                    <div className="space-y-2">
                      {["all", "under500k", "500k-1m", "over1m"].map(
                        (filter) => (
                          <label key={filter} className="flex items-center">
                            <input
                              type="radio"
                              name="priceFilter"
                              value={filter}
                              checked={priceFilter === filter}
                              onChange={(e) => setPriceFilter(e.target.value)}
                              className="mr-2"
                            />
                            <span className="capitalize">
                              {filter === "all"
                                ? "Tất Cả"
                                : filter === "under500k"
                                ? "Dưới 500K"
                                : filter === "500k-1m"
                                ? "500K - 1 Triệu"
                                : "Trên 1 Triệu"}
                            </span>
                          </label>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </aside>

              {/* Right Column: Services List */}
              <div className="lg:w-3/4">
                <div className="mb-2">
                  <h2 className="text-md text-start  w-fit font-bold px-4 shadow-2xl bg-slate-100/70 rounded-lg text-pink-500 drop-shadow">
                    Tổng số dịch vụ: {filteredServices.length}
                  </h2>
                </div>
                <div className="space-y-6">
                  <AnimatePresence>
                    {paginatedServices.map((service) => (
                      <motion.div
                        key={service.id}
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 0.3 }}
                        className="flex flex-col sm:flex-row bg-white rounded-2xl shadow-xl hover:shadow-md hover:shadow-pink-500 transition-shadow overflow-hidden"
                      >
                        <div className="sm:w-1/3">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-48 sm:h-full object-cover"
                          />
                        </div>
                        <div className="sm:w-2/3 text-start p-5 flex flex-col justify-between">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">
                              {service.title}
                            </h3>
                            <p className="text-gray-600 text-sm mb-2">
                              {service.description}
                            </p>
                            <p className="text-xl font-bold text-pink-600">
                              {service.price}
                            </p>
                          </div>
                          <div className="mt-4">
                            <a
                              href={service.link}
                              className="inline-flex items-center gap-2 border border-blue-500 text-blue-500 py-1 px-3 rounded-lg hover:bg-blue-500 hover:text-white transition"
                            >
                              🔍 Xem chi tiết
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ServicePage;
