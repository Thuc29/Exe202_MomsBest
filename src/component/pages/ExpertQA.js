import { useState } from "react";
import { Link } from "react-router-dom";
import {
  User,
  MessageCircle,
  Send,
  Search,
  ChevronLeft,
  Star,
  BookOpen,
} from "lucide-react";

// Mock data for experts
const experts = [
  {
    id: "1",
    name: "BS. Nguyễn Thị Minh",
    specialty: "Sản phụ khoa",
    avatar:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=120",
    experience: "15 năm kinh nghiệm",
    bio: "Chuyên gia về sản phụ khoa, tư vấn sức khỏe mẹ và bé.",
  },
  {
    id: "2",
    name: "ThS. Trần Văn Nam",
    specialty: "Dinh dưỡng",
    avatar:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=120",
    experience: "10 năm kinh nghiệm",
    bio: "Tư vấn dinh dưỡng cho mẹ bầu và trẻ nhỏ.",
  },
  {
    id: "3",
    name: "BS. Lê Thị Hoa",
    specialty: "Nhi khoa",
    avatar:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=120",
    experience: "12 năm kinh nghiệm",
    bio: "Chuyên gia chăm sóc sức khỏe trẻ sơ sinh và trẻ nhỏ.",
  },
];

// Mock data for answered questions
const answeredQuestions = [
  {
    id: "q1",
    title: "Bà bầu nên ăn gì để con phát triển tốt?",
    expert: experts[1],
    answer:
      "Mẹ bầu nên bổ sung đầy đủ protein, sắt, canxi, axit folic và các vitamin. Ăn đa dạng thực phẩm, ưu tiên rau xanh, trái cây, cá, thịt nạc và các loại hạt.",
    createdAt: "2025-05-10T09:00:00",
  },
  {
    id: "q2",
    title: "Dấu hiệu nhận biết trầm cảm sau sinh?",
    expert: experts[0],
    answer:
      "Trầm cảm sau sinh thường có biểu hiện: buồn bã kéo dài, mất ngủ, lo âu, không muốn chăm sóc con, cảm giác tội lỗi hoặc vô dụng. Nếu có các dấu hiệu này, nên gặp chuyên gia tâm lý hoặc bác sĩ.",
    createdAt: "2025-05-12T14:30:00",
  },
  {
    id: "q3",
    title: "Trẻ sơ sinh bị ho có nên dùng thuốc không?",
    expert: experts[2],
    answer:
      "Không nên tự ý dùng thuốc cho trẻ sơ sinh khi bị ho. Nên đưa trẻ đi khám để được tư vấn và điều trị phù hợp.",
    createdAt: "2025-05-15T11:20:00",
  },
];

const ExpertQA = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedExpert, setSelectedExpert] = useState("");
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionContent, setQuestionContent] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const filteredQuestions = answeredQuestions.filter(
    (q) =>
      q.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.expert.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!questionTitle.trim() || !questionContent.trim()) return;
    setSubmitted(true);
    setQuestionTitle("");
    setQuestionContent("");
    setSelectedExpert("");
    setTimeout(() => setSubmitted(false), 3000);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("vi-VN", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
  };

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
              Hỏi đáp cùng chuyên gia
            </h1>
            <p className="text-gray-600 text-center mb-6">
              Đặt câu hỏi và nhận tư vấn từ các chuyên gia hàng đầu về mẹ và bé
            </p>
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Tìm kiếm câu hỏi, chuyên gia..."
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
            {/* Sidebar: Expert Profiles */}
            <aside className="lg:w-1/4">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-4 mb-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <User size={18} /> Chuyên gia nổi bật
                </h2>
                <div className="space-y-4">
                  {experts.map((expert) => (
                    <div key={expert.id} className="flex items-center gap-3">
                      <img
                        src={expert.avatar}
                        alt={expert.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-medium text-gray-800">
                          {expert.name}
                        </h3>
                        <p className="text-pink-600 text-xs">
                          {expert.specialty}
                        </p>
                        <p className="text-gray-500 text-xs">
                          {expert.experience}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <BookOpen size={18} /> Thư viện kiến thức
                </h2>
                <p className="text-gray-600 text-sm mb-2">
                  Xem các bài viết hữu ích về sức khỏe mẹ và bé.
                </p>
                <Link
                  to="/library"
                  className="text-pink-500 hover:text-pink-700 text-sm font-medium"
                >
                  Đến thư viện →
                </Link>
              </div>
            </aside>

            {/* Main Q&A Area */}
            <div className="lg:w-3/4">
              {/* Ask Question Form */}
              <div className="bg-blue-50 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">
                  Đặt câu hỏi cho chuyên gia
                </h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Chọn chuyên gia
                    </label>
                    <select
                      className="w-full p-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-300 outline-none"
                      value={selectedExpert}
                      onChange={(e) => setSelectedExpert(e.target.value)}
                    >
                      <option value="">Chọn chuyên gia phù hợp</option>
                      {experts.map((expert) => (
                        <option key={expert.id} value={expert.id}>
                          {expert.name} - {expert.specialty}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Tiêu đề câu hỏi
                    </label>
                    <input
                      type="text"
                      className="w-full p-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-300 outline-none"
                      placeholder="Nhập tiêu đề ngắn gọn"
                      value={questionTitle}
                      onChange={(e) => setQuestionTitle(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Nội dung chi tiết
                    </label>
                    <textarea
                      className="w-full p-3 bg-white border border-gray-200 rounded-lg h-32 focus:ring-2 focus:ring-blue-300 focus:border-blue-300 outline-none"
                      placeholder="Mô tả chi tiết câu hỏi của bạn"
                      value={questionContent}
                      onChange={(e) => setQuestionContent(e.target.value)}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg"
                  >
                    Gửi câu hỏi
                  </button>
                  {submitted && (
                    <span className="ml-4 text-green-600 font-medium">
                      Đã gửi câu hỏi!
                    </span>
                  )}
                </form>
              </div>

              {/* Answered Questions List */}
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Câu hỏi đã được trả lời
              </h3>
              <div className="space-y-4">
                {filteredQuestions.length === 0 && (
                  <div className="text-gray-500">
                    Không tìm thấy câu hỏi phù hợp.
                  </div>
                )}
                {filteredQuestions.map((q) => (
                  <div
                    key={q.id}
                    className="bg-white rounded-xl border border-gray-100 shadow-sm p-4"
                  >
                    <div className="flex gap-3 mb-2">
                      <img
                        src={q.expert.avatar}
                        alt={q.expert.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-medium text-gray-800">{q.title}</h4>
                        <p className="text-xs text-gray-500">
                          {q.expert.name} • {q.expert.specialty} •{" "}
                          {formatDate(q.createdAt)}
                        </p>
                      </div>
                    </div>
                    <div className="text-gray-700 text-sm mb-2">{q.answer}</div>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <Star size={12} /> Đã trả lời
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

export default ExpertQA;
