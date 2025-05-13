import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const DoctorCard = ({ id, name, specialty, image }) => {
  return (
    <div className="doctor-card  bg-white border border-blue-200 rounded-3xl overflow-hidden shadow-sm">
      <div className="aspect-square w-full overflow-hidden">
        <img
          src={image}
          alt={`Dr. ${name}`}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-sm text-gray-600 mb-3">{specialty}</p>
        <Button
          variant="outlined"
          className=" !rounded-xl !font-space-grotesk hover:!bg-blue-600  !text-blue-600 !border-blue-600 hover:!text-white"
        >
          <Link to={`/doctors/${id}`}>Xem hồ sơ</Link>
        </Button>
      </div>
    </div>
  );
};

export default DoctorCard;
