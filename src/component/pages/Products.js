import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Star, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import StarButton from "../ui/StarButton";

const products = [
  // Featured Products
  {
    id: 1,
    name: "Prenatal Vitamins",
    price: 29.99,
    originalPrice: 34.99,
    category: "mother",
    brand: "MamaCare",
    image: "./assets/banner1.jpg",
    description: "Essential vitamins for expectant mothers",
    section: "featured",
  },
  {
    id: 2,
    name: "Baby Monitor",
    price: 129.99,
    category: "baby",
    brand: "BabySafe",
    image: "./assets/banner1.jpg",
    description: "High-definition video and audio monitoring",
    section: "featured",
  },
  // Best Sellers
  {
    id: 3,
    name: "Maternity Support Belt",
    price: 49.99,
    category: "mother",
    brand: "MamaCare",
    image: "./assets/banner1.jpg",
    description: "Provides comfort and support during pregnancy",
    section: "best-seller",
  },
  {
    id: 4,
    name: "Soft Baby Blanket",
    price: 19.99,
    category: "baby",
    brand: "BabySoft",
    image: "./assets/banner1.jpg",
    description: "Super soft hypoallergenic blanket for babies",
    section: "best-seller",
  },
  // New Arrivals
  {
    id: 5,
    name: "Stretch Mark Cream",
    price: 24.99,
    category: "mother",
    brand: "MamaCare",
    image: "./assets/banner1.jpg",
    description: "Helps reduce the appearance of stretch marks",
    section: "new",
  },
  {
    id: 6,
    name: "Baby Carrier",
    price: 79.99,
    category: "baby",
    brand: "BabySafe",
    image: "./assets/banner1.jpg",
    description: "Ergonomic design for baby's comfort",
    section: "new",
  },
];

const services = [
  {
    id: 1,
    title: "Khám thai định kỳ",
    description: "Theo dõi sự phát triển của thai nhi và sức khỏe của mẹ.",
    price: "400.000đ",
    image: "./assets/banner1.jpg",
    link: "/booking",
  },
  {
    id: 2,
    title: "Tư vấn dinh dưỡng",
    description: "Tư vấn dinh dưỡng cho mẹ trong thời kỳ mang thai.",
    price: "250.000đ",
    image: "./assets/banner1.jpg",
    link: "/booking",
  },
];

const Product = () => {
  const [cart, setCart] = useState([]);
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: "",
    maxPrice: "",
    brand: "all",
    search: "",
  });

  const brands = ["all", "MamaCare", "BabySafe", "BabySoft"];

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      filters.category === "all" || product.category === filters.category;
    const brandMatch =
      filters.brand === "all" || product.brand === filters.brand;
    const searchMatch =
      filters.search === "" ||
      product.name.toLowerCase().includes(filters.search.toLowerCase()) ||
      product.description.toLowerCase().includes(filters.search.toLowerCase());
    const price = product.price;
    const min = parseFloat(filters.minPrice);
    const max = parseFloat(filters.maxPrice);
    const priceMatch =
      (filters.minPrice === "" || isNaN(min) || price >= min) &&
      (filters.maxPrice === "" || isNaN(max) || price <= max);
    return categoryMatch && brandMatch && searchMatch && priceMatch;
  });

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const groupedProducts = {
    featured: filteredProducts.filter((p) => p.section === "featured"),
    "best-seller": filteredProducts.filter((p) => p.section === "best-seller"),
    new: filteredProducts.filter((p) => p.section === "new"),
  };

  return (
    <div className="min-h-screen pt-16 bg-cover bg-center bg-[url('https://images.pexels.com/photos/3270224/pexels-photo-3270224.jpeg?auto=compress&cs=tinysrgb&w=600')] flex flex-col font-space-grotesk">
      <main className="container mx-auto px-4 py-8">
        {/* Promotional Banner */}
        <section className="mb-8">
          <div className="relative bg-gradient-to-r from-pink-100 to-blue-100 rounded-2xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/2721581/pexels-photo-2721581.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Promotion"
              className="w-full h-48 object-cover opacity-50"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-pink-600">
                  Giảm 30% Lần Khám Đầu Tiên!
                </h2>
                <p className="text-gray-600 mt-2">
                  Đặt lịch ngay hôm nay để nhận ưu đãi đặc biệt.
                </p>

                <StarButton
                  className="font-space-grotesk rounded-full mt-4 bg-gradient-to-r from-rose-400 to-fuchsia-500 text-white shadow-lg shadow-rose-400/30 transition-all duration-300 hover:opacity-90 active:scale-95 font-bold text-base px-6 py-2"
                  color="cyan"
                  speed="5s"
                >
                  <Link to={"/booking"}>Đặt lịch ngay </Link>
                </StarButton>
              </div>
            </div>
          </div>
        </section>

        <div className="flex flex-col  lg:flex-row gap-8">
          {/* Left Sidebar: Filters */}
          <aside className="lg:w-1/4 rounded-2xl shadow-lg">
            <div className="bg-white/70 p-4 rounded-2xl shadow-lg">
              {" "}
              <h2 className="text-xl font-bold text-pink-600 mb-3">
                Bộ Lọc Sản Phẩm
              </h2>
              {/* Search */}
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Tìm kiếm sản phẩm..."
                  className="w-full p-3 border bg-white/80 border-pink-200 rounded-full focus:ring-2 focus:ring-pink-300 outline-none"
                  value={filters.search}
                  onChange={(e) =>
                    setFilters({ ...filters, search: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="bg-white/70 p-4 my-3  rounded-2xl shadow-lg">
              <div className="mb-3">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  Loại Sản Phẩm
                </h3>
                <div className="space-y-2">
                  {["all", "mother", "baby", "combo"].map((cat) => (
                    <label key={cat} className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        value={cat}
                        checked={filters.category === cat}
                        onChange={() =>
                          setFilters({ ...filters, category: cat })
                        }
                        className="mr-2"
                      />
                      <span className="capitalize text-gray-700">
                        {cat === "all"
                          ? "Tất Cả"
                          : cat === "mother"
                          ? "Cho Mẹ"
                          : cat === "baby"
                          ? "Cho Bé"
                          : "Combo"}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
            {/* Price Filter */}
            <div className="bg-white/70 p-4 my-3 rounded-2xl shadow-lg">
              <div className="mb-3">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  Mức Giá
                </h3>
                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="Tối thiểu"
                    className="w-1/2 p-2 border bg-white/80 border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-300 outline-none"
                    value={filters.minPrice}
                    onChange={(e) =>
                      setFilters({ ...filters, minPrice: e.target.value })
                    }
                  />
                  <input
                    type="number"
                    placeholder="Tối đa"
                    className="w-1/2 p-2 border bg-white/80 border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-300 outline-none"
                    value={filters.maxPrice}
                    onChange={(e) =>
                      setFilters({ ...filters, maxPrice: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>

            {/* Brand Filter */}
            <div className="bg-white/70 p-6 rounded-2xl shadow-lg">
              <div className="mb-3">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  Thương Hiệu
                </h3>
                <select
                  className="w-full p-3 border bg-white/80 text-gray-700 border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-300 outline-none"
                  value={filters.brand}
                  onChange={(e) =>
                    setFilters({ ...filters, brand: e.target.value })
                  }
                >
                  {brands.map((brand) => (
                    <option key={brand} value={brand}>
                      {brand === "all" ? "Tất Cả" : brand}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </aside>

          {/* Right Content: Products and Services */}
          <div className="lg:w-3/4  rounded-2xl shadow-lg p-4">
            {/* Featured Products */}
            {groupedProducts.featured.length > 0 && (
              <section className="mb-8">
                <h2 className="text-2xl font-bold bg-white/70 w-fit mx-auto px-4 shadow-lg rounded-lg text-pink-600 mb-3">
                  🌟 Sản Phẩm Nổi Bật
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-white/70 rounded-xl p-4 lg:grid-cols-4 gap-6">
                  <AnimatePresence>
                    {groupedProducts.featured.map((product) => (
                      <motion.div
                        key={product.id}
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="relative bg-white/80 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                      >
                        <div className="absolute top-0 left-0 bg-yellow-400 text-white text-xs font-bold px-3 py-1 rounded-br-lg">
                          Nổi Bật
                        </div>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-48 object-cover rounded-t-2xl"
                        />
                        <div className="p-5">
                          <h3 className="text-lg font-medium text-gray-800">
                            {product.name}
                          </h3>
                          <p className="text-gray-600 text-xs mb-4">
                            {product.description}
                          </p>
                          <div className=" justify-between items-center">
                            <div>
                              <span className="text-xl font-bold text-pink-600">
                                ${product.price.toFixed(2)}
                              </span>
                              {product.originalPrice && (
                                <span className="text-sm text-gray-500 line-through ml-2">
                                  ${product.originalPrice.toFixed(2)}
                                </span>
                              )}
                            </div>
                            <button
                              onClick={() => addToCart(product)}
                              className="flex items-center mx-auto gap-2 bg-pink-100 text-pink-600  p-1 px-4 rounded-full hover:bg-pink-200 transition"
                            >
                              <ShoppingCart size={16} />
                              Thêm vào giỏ
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </section>
            )}

            {/* Best Sellers */}
            {groupedProducts["best-seller"].length > 0 && (
              <section className="mb-8">
                <h2 className="text-2xl font-bold bg-white/70 w-fit mx-auto px-4 shadow-lg rounded-lg text-pink-600 mb-3">
                  🔥 Sản Phẩm Bán Chạy
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-white/70 rounded-xl p-4 lg:grid-cols-4 gap-6">
                  <AnimatePresence>
                    {groupedProducts["best-seller"].map((product) => (
                      <motion.div
                        key={product.id}
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                      >
                        <div className="absolute top-0 left-0 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-br-lg">
                          Best Seller
                        </div>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-48 object-cover rounded-t-2xl"
                        />
                        <div className="p-5">
                          <h3 className="text-lg font-semibold text-gray-800">
                            {product.name}
                          </h3>
                          <p className="text-gray-600 text-xs mb-4">
                            {product.description}
                          </p>
                          <div className=" justify-between items-center">
                            <div>
                              <span className="text-xl font-bold text-pink-600">
                                ${product.price.toFixed(2)}
                              </span>
                              {product.originalPrice && (
                                <span className="text-sm text-gray-500 line-through ml-2">
                                  ${product.originalPrice.toFixed(2)}
                                </span>
                              )}
                            </div>
                            <button
                              onClick={() => addToCart(product)}
                              className="flex items-center gap-2 bg-pink-100 text-pink-600 px-4 py-2 rounded-full hover:bg-pink-200 transition"
                            >
                              <ShoppingCart size={16} />
                              Thêm vào giỏ
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </section>
            )}
            {/* Promotional Banner */}
            <section className="my-8">
              <div className="bg-blue-100 rounded-2xl p-6 text-center">
                <h3 className="text-xl font-bold text-blue-600">
                  Tư Vấn Miễn Phí Cho Mẹ Bầu
                </h3>
                <p className="text-gray-600 mt-2">
                  Nhận tư vấn chuyên sâu từ các chuyên gia của chúng tôi.
                </p>
                <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition">
                  Đăng Ký Ngay
                </button>
              </div>
            </section>
            {/* New Arrivals */}
            {groupedProducts.new.length > 0 && (
              <section className="mb-8">
                <h2 className="text-2xl font-bold bg-white/70 w-fit mx-auto px-4 shadow-lg rounded-lg text-pink-600 mb-3">
                  🆕 Sản Phẩm Mới Ra Mắt
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-white/70 rounded-xl p-4 lg:grid-cols-4 gap-6">
                  <AnimatePresence>
                    {groupedProducts.new.map((product) => (
                      <motion.div
                        key={product.id}
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                      >
                        <div className="absolute top-0 left-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-br-lg">
                          New
                        </div>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-48 object-cover rounded-t-2xl"
                        />
                        <div className="p-5">
                          <h3 className="text-lg font-semibold text-gray-800">
                            {product.name}
                          </h3>
                          <p className="text-gray-600 text-sm mb-4">
                            {product.description}
                          </p>
                          <div className=" justify-between items-center">
                            <div>
                              <span className="text-xl font-bold text-pink-600">
                                ${product.price.toFixed(2)}
                              </span>
                              {product.originalPrice && (
                                <span className="text-sm text-gray-500 line-through ml-2">
                                  ${product.originalPrice.toFixed(2)}
                                </span>
                              )}
                            </div>
                            <button
                              onClick={() => addToCart(product)}
                              className="flex items-center mx-auto gap-2 bg-pink-100 text-pink-600  p-1 px-4 rounded-full hover:bg-pink-200 transition"
                            >
                              <ShoppingCart size={16} />
                              Thêm vào giỏ
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </section>
            )}

            {/* Suggested Services */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold bg-white/70 w-fit mx-auto px-4 shadow-lg rounded-lg text-pink-600 mb-3">
                💡 Gói Khám Sức Khỏe
              </h2>
              <div className="grid grid-cols-1 bg-white/70 rounded-xl p-4 sm:grid-cols-2 gap-6">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover rounded-t-2xl"
                    />
                    <div className="p-5">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {service.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-blue-600">
                          {service.price}
                        </span>
                        <Link
                          to={service.link}
                          className="flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full hover:bg-blue-200 transition"
                        >
                          <Calendar size={16} />
                          Đặt Lịch
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Product;
