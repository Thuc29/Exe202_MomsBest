import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaMoneyCheckAlt,
  FaUniversity,
  FaWallet,
} from "react-icons/fa";

// Giả lập dữ liệu đơn hàng
const mockOrder = [
  {
    id: 1,
    name: "Sữa bột Dielac Mama",
    price: 299000,
    quantity: 2,
  },
  {
    id: 2,
    name: "Tã dán Huggies size NB",
    price: 145000,
    quantity: 1,
  },
];

const paymentMethods = [
  {
    key: "cod",
    label: "Thanh toán khi nhận hàng (COD)",
    icon: <FaMoneyCheckAlt className="text-green-500" size={22} />,
  },
  {
    key: "bank",
    label: "Chuyển khoản ngân hàng",
    icon: <FaUniversity className="text-blue-500" size={22} />,
  },
  {
    key: "e-wallet",
    label: "Ví điện tử (Momo, ZaloPay...)",
    icon: <FaWallet className="text-pink-500" size={22} />,
  },
  {
    key: "paypal",
    label: "Paypal",
    icon: <FaCcPaypal className="text-blue-700" size={22} />,
  },
  {
    key: "credit",
    label: "Thẻ tín dụng/ghi nợ",
    icon: (
      <span className="flex gap-1">
        <FaCcVisa className="text-indigo-500" size={22} />
        <FaCcMastercard className="text-orange-500" size={22} />
      </span>
    ),
  },
];

export default function Checkout() {
  const [info, setInfo] = useState({
    name: "",
    address: "",
    phone: "",
    payment: "cod",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const subtotal = mockOrder.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!info.name || !info.address || !info.phone) {
      setError("Vui lòng nhập đầy đủ thông tin giao hàng.");
      return;
    }
    setError("");
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setTimeout(() => navigate("/"), 2000);
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-24 bg-gradient-to-br from-pink-50 to-blue-50 text-black py-8 font-space-grotesk">
      <div className="container mx-auto px-4 md:w-2/3 lg:w-1/2">
        <h1 className="text-2xl font-bold text-pink-600 mb-6">Thanh toán</h1>
        {success ? (
          <div className="bg-white/80 p-8 rounded-xl shadow text-center text-green-600 text-xl font-bold">
            Đặt hàng thành công! Cảm ơn bạn đã mua sắm tại Mẹ & Bé.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white/80 p-6 rounded-xl shadow space-y-6"
          >
            <div>
              <h2 className="text-lg font-bold mb-2 text-pink-500">
                Thông tin giao hàng
              </h2>
              <input
                type="text"
                name="name"
                placeholder="Họ và tên"
                className="w-full p-3 border rounded mb-2"
                value={info.name}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="address"
                placeholder="Địa chỉ giao hàng"
                className="w-full p-3 border rounded mb-2"
                value={info.address}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Số điện thoại"
                className="w-full p-3 border rounded mb-2"
                value={info.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <h2 className="text-lg font-bold mb-2 text-pink-500">
                Phương thức thanh toán
              </h2>
              <div className="flex flex-col gap-2">
                {paymentMethods.map((pm) => (
                  <label
                    key={pm.key}
                    className={`flex items-center gap-3 p-2 rounded cursor-pointer border transition ${
                      info.payment === pm.key
                        ? "border-pink-500 bg-pink-50"
                        : "border-gray-200"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value={pm.key}
                      checked={info.payment === pm.key}
                      onChange={handleChange}
                      className="accent-pink-500"
                    />
                    {pm.icon}
                    <span className="font-medium">{pm.label}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-lg font-bold mb-2 text-pink-500">
                Tóm tắt đơn hàng
              </h2>
              <ul className="mb-2">
                {mockOrder.map((item) => (
                  <li
                    key={item.id}
                    className="flex justify-between text-gray-700"
                  >
                    <span>
                      {item.name} x {item.quantity}
                    </span>
                    <span>
                      {(item.price * item.quantity).toLocaleString()}đ
                    </span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between font-bold text-pink-600 text-lg">
                <span>Tổng cộng:</span>
                <span>{subtotal.toLocaleString()}đ</span>
              </div>
            </div>
            {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
            <button
              type="submit"
              className="w-full bg-pink-500 text-white py-3 rounded-full font-bold text-lg hover:bg-pink-600 transition"
              disabled={submitting}
            >
              {submitting ? "Đang xử lý..." : "Xác nhận Đặt hàng"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
