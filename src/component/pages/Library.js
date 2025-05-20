import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, BookOpen, ChevronLeft } from "lucide-react";

// Mock categories
const categories = [
  { id: "1", name: "Cẩm nang thai kỳ" },
  { id: "2", name: "Dinh dưỡng mẹ và bé" },
  { id: "3", name: "Chăm sóc sơ sinh" },
  { id: "4", name: "Sức khỏe tinh thần" },
  { id: "5", name: "Phát triển trẻ nhỏ" },
];

// Mock articles
const articles = [
  {
    id: "a1",
    title: "Những điều mẹ bầu cần biết trong 3 tháng đầu",
    summary:
      "Tìm hiểu các lưu ý quan trọng về dinh dưỡng, vận động và kiểm tra sức khỏe trong 3 tháng đầu thai kỳ.",
    category: "Cẩm nang thai kỳ",
    thumbnail:
      "https://images.pexels.com/photos/3933271/pexels-photo-3933271.jpeg?auto=compress&w=400",
  },
  {
    id: "a2",
    title: "Thực đơn dinh dưỡng cho mẹ sau sinh",
    summary:
      "Gợi ý thực đơn giúp mẹ phục hồi sức khỏe và tăng lượng sữa cho bé.",
    category: "Dinh dưỡng mẹ và bé",
    thumbnail:
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&w=400",
  },
  {
    id: "a3",
    title: "Cách tắm cho trẻ sơ sinh an toàn",
    summary:
      "Hướng dẫn các bước tắm cho trẻ sơ sinh đúng cách, an toàn và nhẹ nhàng.",
    category: "Chăm sóc sơ sinh",
    thumbnail:
      "https://images.pexels.com/photos/3933275/pexels-photo-3933275.jpeg?auto=compress&w=400",
  },
  {
    id: "a4",
    title: "Dấu hiệu trầm cảm sau sinh và cách phòng tránh",
    summary:
      "Nhận biết sớm các dấu hiệu trầm cảm sau sinh và biện pháp hỗ trợ tâm lý cho mẹ.",
    category: "Sức khỏe tinh thần",
    thumbnail:
      "https://images.pexels.com/photos/3768913/pexels-photo-3768913.jpeg?auto=compress&w=400",
  },
  {
    id: "a5",
    title: "Các mốc phát triển quan trọng của trẻ 1-3 tuổi",
    summary:
      "Tổng hợp các mốc phát triển về vận động, ngôn ngữ và nhận thức của trẻ nhỏ.",
    category: "Phát triển trẻ nhỏ",
    thumbnail:
      "https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg?auto=compress&w=400",
  },
  {
    id: "a6",
    title: "Bí quyết giúp bé ăn ngon miệng hơn",
    summary:
      "Chia sẻ các mẹo nhỏ giúp bé yêu ăn uống tốt và phát triển khỏe mạnh.",
    category: "Dinh dưỡng mẹ và bé",
    thumbnail:
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&w=400",
  },
  {
    id: "a7",
    title: "Chuẩn bị tâm lý trước khi mang thai",
    summary:
      "Những lưu ý về sức khỏe tinh thần, cảm xúc và các bước chuẩn bị tâm lý vững vàng trước khi bước vào thai kỳ.",
    category: "Cẩm nang thai kỳ",
    thumbnail:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&w=400",
  },
];

const Library = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredArticles = articles.filter(
    (a) =>
      (selectedCategory === "" || a.category === selectedCategory) &&
      (a.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        a.summary.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-cover bg-center bg-[url('https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=600')] flex flex-col font-space-grotesk">
      {/* Hero Section */}
      <section className="pt-24 pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
            <Link
              to="/forum"
              className="inline-flex items-center text-blue-500 hover:text-blue-700 mb-4"
            >
              <ChevronLeft size={18} />
              <span>Quay lại diễn đàn</span>
            </Link>
            <h1 className="text-3xl font-bold text-pink-600 text-center mb-4">
              Thư viện kiến thức
            </h1>
            <p className="text-gray-600 text-center mb-6">
              Kho tài liệu hữu ích về sức khỏe, dinh dưỡng và phát triển mẹ & bé
            </p>
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Tìm kiếm bài viết..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-3 px-12 rounded-full bg-white text-gray-800 border border-pink-200 focus:ring-2 focus:ring-pink-300 focus:border-pink-300 outline-none"
              />
              <Search
                className="absolute left-4 top-3.5 text-gray-400"
                size={18}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 flex-grow">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar: Categories */}
            <aside className="lg:w-1/4">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-4 mb-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <BookOpen size={18} /> Danh mục
                </h2>
                <div className="space-y-2">
                  <button
                    className={`w-full text-left px-4 py-2 rounded-lg transition font-medium ${
                      selectedCategory === ""
                        ? "bg-pink-500 text-white"
                        : "bg-white text-gray-700 hover:bg-pink-50"
                    }`}
                    onClick={() => setSelectedCategory("")}
                  >
                    Tất cả bài viết
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      className={`w-full text-left px-4 py-2 rounded-lg transition font-medium ${
                        selectedCategory === cat.name
                          ? "bg-pink-500 text-white"
                          : "bg-white text-gray-700 hover:bg-pink-50"
                      }`}
                      onClick={() => setSelectedCategory(cat.name)}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* Main Article Grid */}
            <div className="lg:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredArticles.length === 0 && (
                  <div className="col-span-2 text-gray-500">
                    Không tìm thấy bài viết phù hợp.
                  </div>
                )}
                {filteredArticles.map((article) => (
                  <div
                    key={article.id}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden flex flex-col"
                  >
                    <img
                      src={article.thumbnail}
                      alt={article.title}
                      className="h-40 w-full object-cover"
                    />
                    <div className="p-5 flex-1 flex flex-col">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 flex-1">
                        {article.summary}
                      </p>
                      <Link
                        to={`/forum/library/article/${article.id}`}
                        className="text-pink-500 hover:text-pink-700 text-sm font-medium mt-auto"
                      >
                        Đọc tiếp →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm py-6 mt-8">
        <div className="container mx-auto text-center">
          <p className="text-gray-600">
            © 2025 Diễn đàn Mẹ và Bé. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Library;
