import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const featuredProducts = [
  {
    id: 1,
    name: "Prenatal Vitamins",
    price: 29.99,
    originalPrice: 34.99,
    category: "mother",
    brand: "MamaCare",
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600",
    description: "Essential vitamins for expectant mothers",
    section: "featured",
  },
  {
    id: 2,
    name: "Baby Monitor",
    price: 129.99,
    category: "baby",
    brand: "BabySafe",
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600",
    description: "High-definition video and audio monitoring",
    section: "featured",
  },
  {
    id: 3,
    name: "Maternity Support Belt",
    price: 49.99,
    category: "mother",
    brand: "MamaCare",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600",
    description: "Provides comfort and support during pregnancy",
    section: "best-seller",
  },
  {
    id: 4,
    name: "Soft Baby Blanket",
    price: 19.99,
    category: "baby",
    brand: "BabySoft",
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600",
    description: "Super soft hypoallergenic blanket for babies",
    section: "best-seller",
  },
  {
    id: 5,
    name: "Stretch Mark Cream",
    price: 24.99,
    category: "mother",
    brand: "MamaCare",
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600",
    description: "Helps reduce the appearance of stretch marks",
    section: "new",
  },
];

const FeatureProduct = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-5 font-space-grotesk">
      <div className="container mx-auto px-4 md:px-8 shadow-lg bg-white/70 py-5 rounded-lg mt-2">
        <h2 className="text-center md:text-2xl sm:text-xl mb-7 font-bold bg-pink-400 inline-block px-6 py-2 rounded-lg">
          Sản Phẩm Nổi Bật
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {featuredProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-md overflow-hidden transform transition-transform hover:scale-105"
            >
              <div className="h-48">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-gray-800">{product.name}</h3>
                <p className="text-gray-600 text-sm mt-1">
                  {product.description}
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-pink-500 font-bold">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-gray-500 text-sm line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button
            variant="outlined"
            className="!border-pink-500 !rounded-3xl !font-space-grotesk hover:!bg-pink-600 !text-pink-600 hover:!text-white"
          >
            <Link to="/products">Xem Tất Cả Sản Phẩm</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeatureProduct;
