import { Form, Button, Row, Col } from "react-bootstrap";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
const ContactSection = () => {
  const words = [
    {
      text: "Đặt lịch thăm khám với ",
    },

    {
      text: " chúng tôi.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <section className="!font-space-grotesk  page-section bg-gradient-to-r from-pink-200 to-blue-100 py-5">
      <div className="container px-4 bg-white/90 rounded-lg p-5 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <TypewriterEffectSmooth
              words={words}
              className=" items-center justify-center"
            />
            <p className="text-gray-600 mb-6">
              Điền thông tin của bạn và chúng tôi sẽ liên hệ với bạn để đặt lịch
              hẹn với bác sĩ.
            </p>

            <div className="">
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
          </div>

          <div className="relative h-full min-h-[300px] md:min-h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29793.988458865282!2d105.81636406311645!3d21.022738359976415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9bd9861ca1%3A0xe7887f7b72ca17a9!2sHanoi%2C%20Vietnam!5e0!3m2!1sen!2s!4v1743654245898!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map location"
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
