import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center font-space-grotesk text-black bg-primary">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-xl shadow-md">
        <div className="text-center">
          <h1 className="text-2xl font-bold">ĐĂNG NHẬP</h1>
        </div>
        <form className="space-y-6">
          <div className="space-y-2">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary"
              required
            />
          </div>
          <div className="space-y-2">
            <input
              type="password"
              placeholder="Mật khẩu"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary"
              required
            />
          </div>
          <div>
            <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300">
              ĐĂNG NHẬP
            </button>
          </div>
        </form>
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <div className="h-px bg-gray-300 w-1/4"></div>
            <p className="text-sm text-gray-500">HOẶC</p>
            <div className="h-px bg-gray-300 w-1/4"></div>
          </div>
          <div className="flex justify-center space-x-4">
            <button className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              F
            </button>
            <button className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              G
            </button>
          </div>
          <div className="text-sm">
            <span className="text-gray-600">Bạn chưa có tài khoản? </span>
            <Link to="/register" className="text-secondary hover:underline">
              Đăng ký
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
