import { Button } from "@mui/material";
import { Link } from "react-router-dom";
const FeatureProduct = () => {
  return (
    <section className="py-5 bg-gradient-to-r from-pink-200 to-blue-100 font-space-grotesk">
      <div className="container mx-auto px-4 md:px-8 shadow-lg bg-white py-5 rounded-lg mt-2">
        <h2 className="text-center md:text-2xl sm:text-xl mb-7 font-bold bg-pink-400 inline-block px-6 py-2 rounded-lg ">
          Featured Products
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="bg-white rounded-xl shadow-md  overflow-hidden transform transition-transform hover:scale-105"
            >
              <div className="h-48 bg-gray-100 flex items-center justify-center">
                <div className="w-32 h-32 bg-pink-100 rounded-full flex items-center justify-center text-pink-500">
                  Product {item}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-gray-800">
                  Baby Product {item}
                </h3>
                <p className="text-pink-500 font-bold mt-2">$29.99</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center  mt-10">
          <Button
            variant="outlined"
            className="!border-pink-500 !rounded-3xl !font-space-grotesk hover:!bg-pink-600 !text-pink-600 hover:!text-white"
          >
            <Link to={"/product"}>View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeatureProduct;
