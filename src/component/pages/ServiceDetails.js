import React from "react";
import { useState } from "react";

const ServiceDetails = () => {
  const [activeTab, setActiveTab] = useState("details");

  const service = {
    name: "CHĂM SÓC MẸ BẦU AN THAI",
    description:
      "Liệu trình chăm sóc toàn diện cho mẹ bầu trong giai đoạn an thai.",
    intro:
      "MomCare24h là đơn vị cung cấp dịch vụ chăm sóc mẹ bầu hàng đầu tại Việt Nam với đội ngũ bác sĩ và hộ sinh tận tâm, chu đáo. Dịch vụ chăm sóc mẹ bầu của chúng tôi được thiết kế để đảm bảo sức khỏe và tinh thần thoải mái cho mẹ trong suốt quá trình mang thai, giúp mẹ bầu trải qua thai kỳ an toàn, khỏe mạnh. Với đội ngũ y bác sĩ chuyên nghiệp, các mẹ bầu sẽ được chăm sóc theo liệu trình khoa học nhằm mang lại sự an tâm cho bạn.",
    doctors: [
      {
        name: "ThS. BS. Đỗ Thanh Hùng",
        title: "Bác sĩ Chuyên khoa Sản phụ khoa",
        experience: "15 năm kinh nghiệm tại Bệnh viện Phụ sản Trung ương",
      },
      {
        name: "ThS. Trần Thị Quỳnh",
        title: "Chủ tịch hội",
        experience: "Giám đốc chuyên môn",
      },
      {
        name: "BS. CKI. Nguyễn Đình Luân",
        title: "Phó khoa Sản",
        experience: "Bệnh viện đa khoa tỉnh",
      },
    ],
    benefits: [
      "Massage thư giãn giúp lưu thông khí huyết, nâng cao sức đề kháng và giúp thai phát triển khỏe mạnh",
      "Massage đặc biệt giúp thư giãn cơ bắp, giảm đau lưng, cải thiện hệ tuần hoàn và giúp mẹ bầu ngủ ngon hơn. Đặc biệt các bài tập, kỹ thuật massage còn giúp cải thiện tâm trạng, giảm lo âu và căng thẳng",
      "Massage với dầu dừa với dinh dưỡng phong phú từ Vitamin E giúp làm mềm da, ngăn ngừa rạn da cho mẹ bầu theo từng giai đoạn và hỗ hướng thai nhi xoay đầu đúng tư thế",
      "Giúp thai nhi phát triển toàn diện, thông minh và khỏe mạnh",
      "Cung cấp các loại dinh dưỡng cần thiết cho mẹ bầu và thai nhi",
      "Giúp thai nhi và mẹ bầu luôn khỏe mạnh",
    ],
    details: [
      "Gói bao gồm 10 buổi chăm sóc tại nhà",
      "Thăm khám và tư vấn với bác sĩ chuyên khoa",
      "Massage thư giãn và dinh dưỡng cá nhân hóa",
      "Tư vấn chế độ ăn uống phù hợp với từng giai đoạn thai kỳ",
    ],
    schedule: [
      {
        session: "Buổi 1",
        activities: [
          "Khám và tư vấn toàn diện về tình trạng sức khỏe của mẹ bầu",
          "Xây dựng kế hoạch chăm sóc cá nhân hóa cho từng giai đoạn thai kỳ",
          "Massage thư giãn đầu, vai, gáy giúp mẹ bầu thư giãn và tăng cường tuần hoàn máu lên não",
        ],
      },
      {
        session: "Buổi 2-5",
        activities: [
          "Thực hiện các liệu pháp massage đặc biệt cho mẹ bầu",
          "Tư vấn dinh dưỡng và chế độ ăn uống phù hợp",
          "Hướng dẫn các bài tập nhẹ nhàng phù hợp với từng giai đoạn",
        ],
      },
    ],
    packages: [
      { name: "Gói tiêu chuẩn", sessions: 10, price: "5,000,000đ" },
      { name: "Gói nâng cao", sessions: 15, price: "7,500,000đ" },
      { name: "Gói cao cấp", sessions: 20, price: "10,000,000đ" },
      { name: "Gói platinum", sessions: 30, price: "15,000,000đ" },
    ],
  };

  const [showModal, setShowModal] = useState(false);
  const [showConsultModal, setShowConsultModal] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-space-grotesk">
      <main className="flex-grow">
        <section className="bg-[url('https://images.pexels.com/photos/3875130/pexels-photo-3875130.jpeg?auto=compress&cs=tinysrgb&w=600')] pt-36 pb-14 shadow-md">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4 w-fit mx-auto p-3 shadow-2xl bg-slate-100/70 rounded-lg  text-pink-500 drop-shadow">
              {service.name}
            </h1>
            <p className="text-gray-700 shadow-lg w-fit mx-auto p-4 max-w-[70%] bg-slate-100/70 rounded-lg  mb-8">
              {service.intro}
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div className=" py-10  bg-white">
          <section className="container px-4 md:px-6">
            {/* Solution Section as Cards */}
            <div className=" my-5 px-4 md:px-6">
              <h2 className="text-2xl font-extrabold mb-4 text-blue-700 drop-shadow text-center">
                GIẢI PHÁP CHĂM SÓC CỦA MOMCARE24H
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                    <span className="text-blue-600 text-2xl font-bold">1</span>
                  </div>
                  <p className="font-semibold mb-2 text-center">
                    Chăm sóc cá nhân hóa
                  </p>
                  <p className="text-sm text-gray-600 text-center">
                    Liệu trình được thiết kế riêng biệt phù hợp với tình trạng
                    của từng mẹ bầu, đảm bảo hiệu quả tối ưu
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                    <span className="text-blue-600 text-2xl font-bold">2</span>
                  </div>
                  <p className="font-semibold mb-2 text-center">
                    Đội ngũ chuyên môn cao
                  </p>
                  <p className="text-sm text-gray-600 text-center">
                    Được thực hiện bởi các bác sĩ, hộ sinh và chuyên viên đã qua
                    đào tạo chuyên sâu
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                    <span className="text-blue-600 text-2xl font-bold">3</span>
                  </div>
                  <p className="font-semibold mb-2 text-center">
                    Sản phẩm an toàn
                  </p>
                  <p className="text-sm text-gray-600 text-center">
                    Sử dụng các sản phẩm thiên nhiên, an toàn cho mẹ bầu và thai
                    nhi
                  </p>
                </div>
              </div>
            </div>

            <hr className="my-10 border-t-2 mx-auto w-[50%]  border-blue-200" />
            <div className=" my-10 px-4 md:px-6">
              <h2 className="text-2xl font-extrabold mb-4 text-pink-700 drop-shadow text-center">
                ĐỘI NGŨ BÁC SĨ & CHUYÊN GIA
              </h2>
              <div className="flex flex-col md:flex-row gap-6 justify-center">
                {service.doctors.map((doctor, idx) => (
                  <div
                    key={idx}
                    className="flex-1 bg-white p-6 rounded-lg shadow-lg flex flex-col items-center"
                  >
                    <div className="w-24 h-24 bg-gray-200 rounded-full mb-3"></div>
                    <h3 className="text-xl font-extrabold mb-2 text-pink-700 drop-shadow text-center">
                      {doctor.name}
                    </h3>
                    <p className="text-sm text-gray-700 text-center">
                      {doctor.title}
                    </p>
                    <p className="text-xs text-gray-600 mt-1 text-center">
                      {doctor.experience}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <hr className="my-10 border-t-2 mx-auto w-[50%]  border-pink-200" />
            {/* Benefits div */}
            <div className=" my-10 px-4 md:px-6">
              <h2 className="text-2xl font-extrabold mb-4 text-blue-700 drop-shadow text-center">
                LỢI ÍCH CỦA GÓI DỊCH VỤ
              </h2>
              <ul className="space-y-2 text-gray-700">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-start">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <hr className="my-10 border-t-2 mx-auto w-[50%]  border-blue-200" />
            {/* Packages div */}
            <div className=" my-10 px-4 md:px-6">
              <div className="overflow-x-auto">
                <table className="min-w-full text-center text-gray-700 bg-white border border-blue-700">
                  <thead>
                    <tr className="text-white bg-blue-700">
                      <th className="py-2 px-4 border">Gói dịch vụ</th>
                      <th className="py-2 px-4 border">Số buổi</th>
                      <th className="py-2 px-4 border">Giá thành</th>
                      <th className="py-2 px-4 border">Thời gian liệu trình</th>
                    </tr>
                  </thead>
                  <tbody>
                    {service.packages.map((pkg, idx) => (
                      <tr key={idx}>
                        <td className="py-2 px-4 border">{pkg.name}</td>
                        <td className="py-2 px-4 border">{pkg.sessions}</td>
                        <td className="py-2 px-4 border">{pkg.price}</td>
                        <td className="py-2 px-4 border">2 tháng</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <hr className="my-10 border-t-2 mx-auto w-[50%]  border-pink-200" />
            {/* Example: 5 Treatment Plans in Grid */}
            <div className="my-10 px-4 md:px-6">
              <h2 className="text-2xl uppercase font-extrabold mb-4 text-pink-700 drop-shadow text-center">
                Chi tiết liệu trình
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5].map((num) => (
                  <div
                    key={num}
                    className="bg-white border border-pink-200 rounded-lg shadow-lg p-6 flex flex-col"
                  >
                    <h3 className="text-xl font-bold text-pink-700 mb-2 text-center">
                      Liệu trình {num}
                    </h3>
                    <table className="min-w-full text-sm text-gray-700 mb-4">
                      <thead>
                        <tr className="bg-pink-100">
                          <th className="py-1 px-2 border">Buổi</th>
                          <th className="py-1 px-2 border">Hoạt động</th>
                        </tr>
                      </thead>
                      <tbody>
                        {(service.schedule || []).map((session, idx) => (
                          <tr key={idx}>
                            <td className="py-1 px-2 border">
                              {session.session}
                            </td>
                            <td className="py-1 px-2 border">
                              <ul className="list-disc list-inside">
                                {session.activities.map((activity, i) => (
                                  <li key={i}>{activity}</li>
                                ))}
                              </ul>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="text-center mt-auto">
                      <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold">
                        Giá: {service.packages[num - 1]?.price || "Liên hệ"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA div */}
            <div className="text-center py-6">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-md shadow-md mr-4"
                onClick={() => setShowModal(true)}
              >
                ĐẶT LỊCH HẸN
              </button>
              <button
                className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-md shadow-md"
                onClick={() => setShowConsultModal(true)}
              >
                YÊU CẦU TƯ VẤN
              </button>
            </div>
            {/* Modal State */}
            {(showModal || showConsultModal) && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
                <div className="bg-white/90 rounded-lg shadow-lg p-8 max-w-md w-full relative">
                  <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
                    onClick={() => {
                      setShowModal(false);
                      setShowConsultModal(false);
                    }}
                    aria-label="Đóng"
                  >
                    &times;
                  </button>
                  {showModal && (
                    <div className=" flex flex-col items-center">
                      <h3 className="text-xl font-bold mb-4 text-blue-600">
                        Đặt dịch vụ
                      </h3>

                      <img
                        src="https://momcare24h.vn/files/2024/06/18/032024-1_thumb.png"
                        alt={service.name}
                        className="w-32 h-32 object-cover rounded-lg mb-3 shadow"
                      />
                      <h4 className="text-lg font-bold text-blue-700 mb-1">
                        {service.name}
                      </h4>
                      <div className="flex flex-col items-center mb-2">
                        <span className="text-gray-700">
                          <span className="font-semibold">Gói:</span>{" "}
                          {service.packages[0].name}
                        </span>
                        <span className="text-gray-700">
                          <span className="font-semibold">Số buổi:</span>{" "}
                          {service.packages[0].sessions}
                        </span>
                        <span className="text-gray-700">
                          <span className="font-semibold">Giá:</span>{" "}
                          {service.packages[0].price}
                        </span>
                      </div>
                      <div className="w-full flex justify-between items-center border-t pt-3 mt-2">
                        <span className="font-bold text-blue-600">
                          Thành tiền:
                        </span>
                        <span className="font-bold text-xl text-red-600">
                          {service.packages[0].price}
                        </span>
                      </div>
                      <button
                        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded shadow"
                        onClick={() => alert("Đặt dịch vụ thành công!")}
                      >
                        Đặt dịch vụ
                      </button>
                    </div>
                  )}

                  {showConsultModal && (
                    <div className="">
                      <h3 className="text-xl font-bold mb-4 text-pink-600">
                        Yêu cầu tư vấn
                      </h3>
                      <p className="mb-4 text-gray-700">
                        Vui lòng để lại thông tin, chúng tôi sẽ tư vấn cho bạn
                        sớm nhất.
                      </p>
                      {/* Form tư vấn (giả lập) */}
                      <input
                        className="border bg-white text-black outline-none
                      shadow-md focus:border-pink-400 rounded-xl w-full mb-3
                      px-3 py-2"
                        placeholder="Họ tên (*)"
                      />
                      <input
                        className="border bg-white text-black outline-none
                      shadow-md focus:border-pink-400 rounded-xl w-full mb-3
                      px-3 py-2"
                        placeholder="Số điện thoại (*)"
                      />
                      <input
                        className="border bg-white text-black outline-none
                      shadow-md focus:border-pink-400 rounded-xl w-full mb-3
                      px-3 py-2"
                        placeholder="Email"
                      />
                      <input
                        className="border bg-white text-black outline-none
                      shadow-md focus:border-pink-400 rounded-xl w-full mb-3
                      px-3 py-2"
                        placeholder="Địa chỉ"
                      />
                      <select
                        className="border bg-white text-black outline-none
                      shadow-md focus:border-pink-400 rounded-xl w-full mb-3
                      px-3 py-2"
                      >
                        <option value="" disabled selected>
                          Chọn tuần thai
                        </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                      <div className="text-gray-700 mb-3 text-start">
                        <p> Bạn quan tâm đến địch vụ nào?</p>
                        <div className="flex flex-col gap-2 mt-2 justify-start">
                          <checkbox>
                            <input type="checkbox" className="mr-2" />
                            Chăm sóc mẹ bầu
                          </checkbox>
                          <checkbox>
                            <input type="checkbox" className="mr-2" />
                            Chăm sóc cho bé
                          </checkbox>
                        </div>
                      </div>
                      <textarea
                        className="border bg-white text-black outline-none
                         shadow-md focus:border-pink-400 rounded-xl w-full mb-3
                         px-3 py-2"
                        placeholder="Nội dung yêu cầu"
                        rows="2"
                      ></textarea>
                      <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded w-full">
                        Gửi yêu cầu
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
};

export default ServiceDetails;
