import { useState, useRef, useEffect } from "react";

import { Button } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { CardTravelSharp } from "@mui/icons-material";

export default function Product() {
  const [activeTab, setActiveTab] = useState("all");
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const cartRef = useRef(null);

  // New state for filters
  const [searchQuery, setSearchQuery] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const products = [
    {
      id: 1,
      name: "Prenatal Vitamins",
      price: 29.99,
      category: "mother",
      image: "./assets/baby1.jpg", // Không dùng ảnh cố định nữa
      description: "Essential vitamins for expectant mothers",
    },
    {
      id: 2,
      name: "Maternity Support Belt",
      price: 49.99,
      category: "mother",
      image: "./assets/baby1.jpg",
      description: "Provides comfort and support during pregnancy",
    },
    {
      id: 3,
      name: "Pregnancy Pillow",
      price: 59.99,
      category: "mother",
      image: "./assets/baby1.jpg",
      description: "Full body support for comfortable sleep",
    },
    {
      id: 4,
      name: "Stretch Mark Cream",
      price: 24.99,
      category: "mother",
      image: "./assets/baby1.jpg",
      description: "Helps reduce the appearance of stretch marks",
    },
    {
      id: 5,
      name: "Baby Bottle Set",
      price: 34.99,
      category: "baby",
      image: "./assets/baby1.jpg",
      description: "BPA-free bottles for feeding your baby",
    },
    {
      id: 6,
      name: "Baby Monitor",
      price: 129.99,
      category: "baby",
      image: "./assets/baby1.jpg",
      description: "High-definition video and audio monitoring",
    },
    {
      id: 7,
      name: "Soft Baby Blanket",
      price: 19.99,
      category: "baby",
      image: "./assets/baby1.jpg",
      description: "Super soft hypoallergenic blanket for babies",
    },
    {
      id: 8,
      name: "Baby Carrier",
      price: 79.99,
      category: "baby",
      image: "./assets/baby1.jpg",
      description: "Ergonomic design for baby's comfort and parent's ease",
    },
  ];

  // Logic lọc sản phẩm (đã bao gồm category, search, price) - giữ nguyên
  const filteredProducts = products.filter((product) => {
    const categoryMatch = activeTab === "all" || product.category === activeTab;
    const searchMatch =
      searchQuery.toLowerCase() === "" ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());

    const price = product.price;
    const min = parseFloat(minPrice);
    const max = parseFloat(maxPrice);

    const priceMatch =
      (minPrice === "" || isNaN(min) || price >= min) &&
      (maxPrice === "" || isNaN(max) || price <= max);

    return categoryMatch && searchMatch && priceMatch;
  });

  // Chức năng thêm/xóa giỏ hàng - giữ nguyên
  const addToCart = (product) => {
    setCart([...cart, product]);
    setShowCart(true);
  };

  const removeFromCart = (indexToRemove) => {
    setCart(cart.filter((_, index) => index !== indexToRemove));
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  // Logic đóng giỏ hàng khi click ra ngoài - giữ nguyên
  useEffect(() => {
    function handleClickOutside(event) {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setShowCart(false);
      }
    }
    if (showCart) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [cartRef, showCart]);

  // Variants animation cho thẻ sản phẩm - giữ nguyên
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  };
  return (
    <div className="min-h-screen flex flex-col font-space-grotesk">
      <main className="flex-grow">
        {/* Hero section */}
        <section className="bg-gradient-to-r from-pink-200 to-blue-100 pb-12 pt-36 shadow-md">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl font-extrabold mb-4 text-pink-700 drop-shadow">
                Mom & Baby Products
              </h1>
              <p className="text-gray-700 mb-8">
                Quality products for both mother and baby, designed with care
                and comfort in mind.
              </p>
            </div>
          </div>
        </section>

        {/* Products section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            {/* Cart button */}
            <div className="flex items-center justify-between mb-5 gap-4 relative">
              <div className="flex items-center justify-center ">
                <div className="inline-flex bg-white border border-pink-100 rounded-xl shadow-lg overflow-hidden">
                  <button
                    className={`px-4 py-2 font-semibold transition ${
                      activeTab === "all"
                        ? "bg-pink-500 text-white"
                        : "text-pink-700 hover:bg-pink-100"
                    }`}
                    onClick={() => setActiveTab("all")}
                  >
                    All
                  </button>
                  <button
                    className={`px-6 py-2 font-semibold transition ${
                      activeTab === "mother"
                        ? "bg-pink-500 text-white"
                        : "text-pink-700 hover:bg-pink-100"
                    }`}
                    onClick={() => setActiveTab("mother")}
                  >
                    For Mothers
                  </button>
                  <button
                    className={`px-6 py-2 font-semibold transition ${
                      activeTab === "baby"
                        ? "bg-pink-500 text-white"
                        : "text-pink-700 hover:bg-pink-100"
                    }`}
                    onClick={() => setActiveTab("baby")}
                  >
                    For Babies
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex flex-row  gap-4 items-center">
                  <input
                    id="search"
                    type="text"
                    placeholder="Search..."
                    className="w-full md:w-1/3 shadow-xl bg-white text-gray-600 rounded-xl border border-pink-100 px-4 py-2 focus:ring-2 focus:ring-pink-400 outline-none"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <div className="w-full md:w-2/3 hidden md:flex rounded-lg  gap-2 items-center">
                    <input
                      id="minPrice"
                      type="number"
                      placeholder="Min"
                      className="rounded-xl bg-white shadow-xl sm:w-[100px] text-gray-600 border border-pink-300 px-3 py-2 w-1/2 focus:ring-2 focus:ring-pink-400 outline-none"
                      value={minPrice}
                      onChange={(e) => setMinPrice(e.target.value)}
                      min="0"
                      step="0.01"
                    />
                    <span className="text-gray-700">-</span>
                    <input
                      id="maxPrice"
                      type="number"
                      placeholder="Max"
                      className="rounded-xl bg-white shadow-xl sm:w-[100px] text-gray-600 border border-pink-300 px-3 py-2 w-1/2 focus:ring-2 focus:ring-pink-400 outline-none"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(e.target.value)}
                      min="0"
                      step="0.1"
                    />
                  </div>
                </div>{" "}
                <div className="justify-end relative">
                  <button
                    className="relative bg-white border border-pink-300 rounded-full px-2 py-1 shadow-lg hover:bg-pink-50 transition"
                    onClick={() => setShowCart(!showCart)}
                  >
                    <CardTravelSharp className="text-black" />
                    {cart.length > 0 && (
                      <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs font-bold rounded-full px-2 py-0.5 shadow">
                        {cart.length}
                      </span>
                    )}
                  </button>
                  {/* Cart dropdown */}
                  <AnimatePresence>
                    {showCart && (
                      <motion.div
                        ref={cartRef}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 top-14 w-80 bg-white shadow-xl rounded-xl border border-gray-200 z-50"
                      >
                        <div className="p-5">
                          <h3 className="text-xl font-bold mb-3 text-pink-700">
                            Your Cart
                          </h3>
                          {cart.length === 0 ? (
                            <p className="text-gray-500">Your cart is empty</p>
                          ) : (
                            <>
                              <div className="max-h-60 overflow-y-auto">
                                {cart.map((item, index) => (
                                  <div
                                    key={index}
                                    className="flex justify-between items-center mb-3 pb-3 border-b last:border-b-0"
                                  >
                                    <div>
                                      <p className="font-medium">{item.name}</p>
                                      <p className="text-sm text-gray-600">
                                        ${item.price.toFixed(2)}
                                      </p>
                                    </div>
                                    <button
                                      className="text-xs px-3 py-1 rounded bg-pink-100 text-pink-700 border border-pink-300 hover:bg-pink-200"
                                      onClick={() => removeFromCart(index)}
                                    >
                                      Remove
                                    </button>
                                  </div>
                                ))}
                              </div>
                              <div className="mt-4 pt-3 border-t border-gray-200">
                                <div className="flex justify-between font-semibold">
                                  <span>Total:</span>
                                  <span>${totalPrice}</span>
                                </div>
                                <button className="w-full mt-3 bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 rounded transition">
                                  Checkout
                                </button>
                              </div>
                            </>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Product Grid with Animation */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <AnimatePresence mode="wait">
                {filteredProducts.map((product) => {
                  const isMother = product.category === "mother";
                  const borderColor = isMother
                    ? "border-blue-400"
                    : "border-pink-400";
                  const buttonColor = isMother
                    ? "!border-blue-500 !text-blue-600 hover:!bg-blue-600 hover:!text-white"
                    : "!border-pink-500 !text-pink-600 hover:!bg-pink-600 hover:!text-white";
                  const badgeColor = isMother
                    ? "bg-pink-200 text-pink-700"
                    : "bg-blue-200 text-blue-700";
                  return (
                    <motion.div
                      key={product.id}
                      variants={cardVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      transition={{ duration: 0.3 }}
                      layout
                      className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow h-full flex flex-col border ${borderColor}`}
                    >
                      <div className="aspect-w-1 aspect-h-1 w-full rounded-t-2xl overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="object-cover h-48 w-full bg-gray-100"
                        />
                      </div>
                      <div className="flex flex-col text-gray-700 flex-grow p-5">
                        <div className="mb-2">
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${badgeColor}`}
                          >
                            {isMother ? "Mother" : "Baby"}
                          </span>
                        </div>
                        <h3 className="font-bold text-lg mb-1">
                          {product.name}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 flex-grow">
                          {product.description}
                        </p>
                        <div className="flex justify-between items-center mt-auto">
                          <span className="text-xl font-bold text-pink-600">
                            ${product.price.toFixed(2)}
                          </span>
                          <Button
                            variant="outlined"
                            className={`!rounded-3xl !font-space-grotesk ${buttonColor}`}
                            onClick={() => addToCart(product)}
                          >
                            Add to Cart
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
                {filteredProducts.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="col-span-full text-center text-gray-600"
                  >
                    No products match your criteria.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Testimonials section */}
        <section className="py-16 bg-pink-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-extrabold text-center mb-10 text-pink-700">
              What Our Customers Say
            </h2>
            <div className="overflow-x-auto">
              <div
                className="flex gap-8 pb-2"
                style={{ scrollbarWidth: "thin" }}
              >
                {/* Card 1 */}
                <div className="min-w-[320px] max-w-xs bg-white rounded-2xl shadow-lg p-8 flex-shrink-0">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl">★★★★★</div>
                  </div>
                  <p className="mb-4 text-gray-700">
                    "The pregnancy pillow completely changed my sleep quality
                    during my third trimester. Highly recommend!"
                  </p>
                  <p className="font-medium text-pink-700">- Sarah T.</p>
                </div>
                {/* Card 2 */}
                <div className="min-w-[320px] max-w-xs bg-white rounded-2xl shadow-lg p-8 flex-shrink-0">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl">★★★★★</div>
                  </div>
                  <p className="mb-4 text-gray-700">
                    "The baby monitor has excellent video quality and the app is
                    so intuitive. Peace of mind for new parents!"
                  </p>
                  <p className="font-medium text-pink-700">- Michael L.</p>
                </div>
                {/* Card 3 */}
                <div className="min-w-[320px] max-w-xs bg-white rounded-2xl shadow-lg p-8 flex-shrink-0">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl">★★★★★</div>
                  </div>
                  <p className="mb-4 text-gray-700">
                    "The maternity support belt saved me from back pain. I wish
                    I had found it sooner in my pregnancy!"
                  </p>
                  <p className="font-medium text-pink-700">- Emily K.</p>
                </div>
                {/* Add more cards here if needed */}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
