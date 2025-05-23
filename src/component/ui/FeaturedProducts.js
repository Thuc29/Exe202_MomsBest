import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { featuredProducts } from "../data/featuredData";

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  return (
    <span className="flex items-center">
      {Array(fullStars)
        .fill()
        .map((_, i) => (
          <svg
            key={i}
            className="w-4 h-4 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
          </svg>
        ))}
      {halfStar && (
        <svg
          className="w-4 h-4 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <defs>
            <linearGradient id="half">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="white" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"
            fill="url(#half)"
          />
        </svg>
      )}
      {Array(emptyStars)
        .fill()
        .map((_, i) => (
          <svg
            key={i}
            className="w-4 h-4 text-gray-300"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
          </svg>
        ))}
    </span>
  );
};

const FeaturedProducts = () => {
  // No need for manual auto-scrolling with Swiper's built-in autoplay
  const swiperRef = useRef(null);

  // You can still use useEffect if you need to control Swiper instance
  // or handle specific events, but for basic autoplay, it's often not needed.
  useEffect(() => {
    // Example: If you needed to log current slide or change settings dynamically
    if (swiperRef.current && swiperRef.current.swiper) {
      // console.log('Swiper instance:', swiperRef.current.swiper);
    }
  }, []);

  return (
    <section className="bg-white bg-opacity-80 rounded-xl shadow p-6 my-8">
      <h2 className="text-xl font-bold text-pink-600 mb-4">
        Sản phẩm nổi bật / Ưu đãi đặc biệt
      </h2>
      <div className="swiper-container">
        {" "}
        {/* Container for Swiper */}
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            bulletClass: "bg-pink-500",
            bulletActiveClass: "bg-pink-600",
          }}
          navigation={false}
          loop={true}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          {featuredProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="min-w-[220px] h-[250px] bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col items-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-24 h-24 object-cover rounded mb-2"
                />
                <h3 className="text-base truncate font-semibold text-gray-800 text-center mb-1 px-2 line-clamp-2">
                  {product.name}
                </h3>
                <div className="text-pink-600 font-bold mb-1">
                  {product.price.toLocaleString()}₫
                </div>
                <StarRating rating={product.rating} />
                <Link
                  to={`/shop/${product.id}`}
                  className="mt-2 mb-4 px-3 py-1 bg-pink-100 text-pink-600 rounded hover:bg-pink-200 text-sm font-medium"
                >
                  Xem chi tiết
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex justify-center mt-4">
        <Link
          to="/products"
          className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 font-medium text-sm"
        >
          Xem Gian hàng
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProducts;
