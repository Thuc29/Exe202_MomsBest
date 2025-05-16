import { Star } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const DoctorCard = ({ id, name, experience, specialties, rating, image }) => {
  return (
    <div className="doctor-card bg-white border border-blue-200 rounded-3xl overflow-hidden shadow-sm">
      <div className="aspect-square w-full overflow-hidden">
        <img
          src={image}
          alt={`Dr. ${name}`}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4 text-gray-600 text-center">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-sm  mb-2">{specialties.join(", ")}</p>
        <p className="text-sm  mb-2">Kinh nghiệm: {experience}</p>
        <div className="flex justify-center items-center gap-1 mb-3">
          <Star className="w-4 h-4 text-yellow-400" />
          <span className="text-sm ">{rating.toFixed(1)}</span>
        </div>
        <Button
          variant="outlined"
          className="!rounded-xl !font-space-grotesk hover:!bg-blue-600 !text-blue-600 !border-blue-600 hover:!text-white"
        >
          <Link to={`/doctors/${id}`}>Xem hồ sơ</Link>
        </Button>
      </div>
    </div>
  );
};

export default DoctorCard;
