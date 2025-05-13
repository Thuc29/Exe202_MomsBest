import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const ServiceCard = ({
  title,
  description,
  image,
  link,
  price,
  color = "pink",
}) => {
  const bgColor = color === "pink" ? "bg-pink-50" : "bg-blue-50";
  const borderColor = color === "pink" ? "border-pink-200" : "border-blue-200";
  const priceColor = color === "pink" ? "text-pink-600" : "text-blue-600";
  const btnHover =
    color === "pink"
      ? "hover:!bg-pink-500 hover:!text-white"
      : "hover:!bg-blue-500 hover:!text-white";

  return (
    <div
      className={`service-card rounded-2xl border ${borderColor} ${bgColor} overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105`}
    >
      <div className="aspect-[2/1] w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover rounded-t-2xl"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 text-gray-700">{title}</h3>
        <p className="text-base text-gray-600 mb-4">{description}</p>
        {price && (
          <p className={`font-bold mb-3 ${priceColor}`}>Giá: {price}</p>
        )}
        <Button
          asChild
          variant="outlined"
          className={`!w-full !border-gray-400 !font-space-grotesk !rounded-full !py-2 !text-base font-semibold transition-colors duration-200 ${btnHover}`}
        >
          <Link to="/services/details">Xem chi tiết</Link>
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
