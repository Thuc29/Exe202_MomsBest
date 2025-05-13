import { Link } from "react-router-dom";

const services = [
  {
    id: "1",
    title: "Dịch vụ chăm sóc cho bé",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    image:
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600",
    link: "/services/baby-care",
  },
  {
    id: "2",
    title: "Dịch vụ chăm sóc cho mẹ bầu",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600",
    link: "/services/mom-care",
  },
];

const ServiceSection = () => {
  return (
    <section className="py-5 bg-gradient-to-r from-pink-200 to-blue-100 font-space-grotesk">
      <div className="container mx-auto px-4 md:px-8 shadow-lg bg-white py-5 rounded-lg mt-2">
        <h2 className="text-center md:text-2xl sm:text-xl mb-7 font-bold bg-cyan-400 inline-block px-6 py-2 rounded-lg ">
          Dịch Vụ Chăm Sóc
        </h2>

        <div className="space-y-12">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col md:flex-row items-center gap-6 ${
                index % 2 === 0 ? "" : "md:flex-row-reverse"
              }`}
            >
              {/* Hình ảnh */}
              <div className="w-full md:w-1/2">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>

              {/* Nội dung */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
                <Link
                  to={"/services?tab=mothers"}
                  className="mt-4 inline-block text-blue-500 font-medium hover:underline"
                >
                  Xem chi tiết →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
