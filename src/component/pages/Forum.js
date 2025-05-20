import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Search,
  MessageSquare,
  PlusCircle,
  Calendar,
  Heart,
  Share2,
  BookmarkPlus,
  MessageCircle,
  Filter,
  TrendingUp,
  Clock,
  Eye,
} from "lucide-react";

// Mock data for forum categories
const categories = [
  {
    id: "1",
    name: "Sức khỏe tiền sản",
    icon: "🤰",
    description: "Thảo luận về sức khỏe trước khi mang thai",
    threads: 124,
    color: "bg-pink-100 text-pink-600",
  },
  {
    id: "2",
    name: "Thai kỳ 3 tháng đầu",
    icon: "🌱",
    description: "Chia sẻ kinh nghiệm và thắc mắc về 3 tháng đầu thai kỳ",
    threads: 256,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: "3",
    name: "Thai kỳ 3 tháng giữa",
    icon: "🌿",
    description: "Mọi vấn đề liên quan đến 3 tháng giữa thai kỳ",
    threads: 189,
    color: "bg-green-100 text-green-600",
  },
  {
    id: "4",
    name: "Thai kỳ 3 tháng cuối",
    icon: "🌳",
    description: "Chuẩn bị cho sinh nở và các vấn đề 3 tháng cuối",
    threads: 210,
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: "5",
    name: "Chăm sóc sơ sinh",
    icon: "👶",
    description: "Mọi điều về chăm sóc bé trong những tháng đầu đời",
    threads: 315,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    id: "6",
    name: "Nuôi con bằng sữa mẹ",
    icon: "🍼",
    description: "Chia sẻ kinh nghiệm và khó khăn khi cho con bú",
    threads: 276,
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    id: "7",
    name: "Sức khỏe tinh thần mẹ",
    icon: "🧠",
    description: "Thảo luận về các vấn đề tâm lý sau sinh và cách đối phó",
    threads: 142,
    color: "bg-red-100 text-red-600",
  },
  {
    id: "8",
    name: "Dinh dưỡng mẹ và bé",
    icon: "🥗",
    description: "Chia sẻ kiến thức về chế độ ăn uống cho mẹ và bé",
    threads: 198,
    color: "bg-emerald-100 text-emerald-600",
  },
];

// Mock data for forum threads/posts
const threads = [
  {
    id: "1",
    title: "Làm thế nào để giảm nghén trong 3 tháng đầu?",
    content:
      "Mình đang mang thai tháng thứ 2 và bị nghén khá nặng, ăn gì cũng nôn. Các mẹ có kinh nghiệm gì để chia sẻ không ạ?",
    category: "Thai kỳ 3 tháng đầu",
    author: {
      name: "HongNhung",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120",
    },
    createdAt: "2025-05-18T08:30:00",
    views: 356,
    likes: 42,
    comments: 23,
    isPinned: true,
  },
  {
    id: "2",
    title: "Chế độ dinh dưỡng cho bà bầu 3 tháng cuối",
    content:
      "Mình đang tháng thứ 7 và muốn tìm hiểu về chế độ dinh dưỡng phù hợp để con phát triển tốt trong giai đoạn cuối. Ai có kiến thức chia sẻ giúp mình với?",
    category: "Thai kỳ 3 tháng cuối",
    author: {
      name: "ThuyLinh84",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120",
    },
    createdAt: "2025-05-17T14:45:00",
    views: 289,
    likes: 31,
    comments: 18,
    isPinned: false,
  },
  {
    id: "3",
    title: "Bé 2 tháng tuổi hay quấy khóc về đêm",
    content:
      "Con mình 2 tháng tuổi, gần đây hay quấy khóc vào ban đêm, đặc biệt là từ 11h đến 2h sáng. Mình đã thử nhiều cách nhưng không hiệu quả. Các mẹ có kinh nghiệm gì không ạ?",
    category: "Chăm sóc sơ sinh",
    author: {
      name: "NgaMai",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120",
    },
    createdAt: "2025-05-16T20:15:00",
    views: 412,
    likes: 54,
    comments: 36,
    isPinned: false,
  },
  {
    id: "4",
    title: "Dấu hiệu nhận biết trầm cảm sau sinh",
    content:
      "Mình sinh em bé được 2 tháng và cảm thấy rất mệt mỏi, hay khóc và không muốn chăm sóc con. Mình không biết đây có phải là dấu hiệu của trầm cảm sau sinh không? Mọi người có ai từng trải qua không ạ?",
    category: "Sức khỏe tinh thần mẹ",
    author: {
      name: "PhuongAnh",
      avatar:
        "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=120",
    },
    createdAt: "2025-05-15T09:30:00",
    views: 378,
    likes: 67,
    comments: 42,
    isPinned: true,
  },
  {
    id: "5",
    title: "Cách tăng sữa mẹ hiệu quả",
    content:
      "Mình đang cho con bú nhưng lượng sữa không đủ. Mọi người có cách nào giúp tăng sữa hiệu quả không ạ?",
    category: "Nuôi con bằng sữa mẹ",
    author: {
      name: "ThaoTran",
      avatar:
        "https://images.unsplash.com/photo-1546961329-78bef0414d7c?auto=format&fit=crop&w=120",
    },
    createdAt: "2025-05-14T16:20:00",
    views: 521,
    likes: 89,
    comments: 54,
    isPinned: false,
  },
  {
    id: "6",
    title: "Thực đơn dinh dưỡng cho mẹ sau sinh mổ",
    content:
      "Mình vừa sinh mổ được 1 tuần, các mẹ có thực đơn dinh dưỡng nào giúp hồi phục nhanh và có nhiều sữa không ạ?",
    category: "Dinh dưỡng mẹ và bé",
    author: {
      name: "MinhNguyet",
      avatar:
        "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?auto=format&fit=crop&w=120",
    },
    createdAt: "2025-05-13T11:40:00",
    views: 345,
    likes: 41,
    comments: 27,
    isPinned: false,
  },
];

// Dữ liệu giả cho chuyên gia hỏi đáp
const experts = [
  {
    id: "1",
    name: "BS. Nguyễn Thị Minh",
    specialty: "Sản phụ khoa",
    avatar:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=120",
    experience: "15 năm kinh nghiệm",
  },
  {
    id: "2",
    name: "ThS. Trần Văn Nam",
    specialty: "Dinh dưỡng",
    avatar:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=120",
    experience: "10 năm kinh nghiệm",
  },
  {
    id: "3",
    name: "BS. Lê Thị Hoa",
    specialty: "Nhi khoa",
    avatar:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=120",
    experience: "12 năm kinh nghiệm",
  },
];

const getThreadCount = (categoryName) =>
  threads.filter((thread) => thread.category === categoryName).length;

const Forum = () => {
  const [activeTab, setActiveTab] = useState("categories");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("newest");
  const [showNewThreadModal, setShowNewThreadModal] = useState(false);

  const filteredThreads = threads.filter((thread) => {
    const searchMatch =
      thread.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      thread.content.toLowerCase().includes(searchTerm.toLowerCase());

    const categoryMatch =
      selectedCategory === null || thread.category === selectedCategory.name;

    return searchMatch && categoryMatch;
  });

  const sortedThreads = [...filteredThreads].sort((a, b) => {
    if (sortOption === "newest") {
      return new Date(b.createdAt) - new Date(a.createdAt);
    } else if (sortOption === "mostViewed") {
      return b.views - a.views;
    } else if (sortOption === "mostCommented") {
      return b.comments - a.comments;
    }
    return 0;
  });

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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="min-h-screen bg-cover bg-center bg-[url('https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=600')] flex flex-col font-space-grotesk">
      {/* Hero Section */}
      <section className="pt-24 pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
            <h1 className="text-3xl font-bold text-pink-600 text-center mb-4">
              Diễn đàn Mẹ và Bé
            </h1>
            <p className="text-gray-600 text-center mb-6">
              Nơi chia sẻ kinh nghiệm, đặt câu hỏi và kết nối cộng đồng các bà
              mẹ
            </p>
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Tìm kiếm chủ đề, bài viết..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-3 px-12 rounded-full bg-white text-gray-800 border border-pink-200 focus:ring-2 focus:ring-pink-300 focus:border-pink-300 outline-none"
              />
              <Search
                className="absolute left-4 top-3.5 text-gray-400"
                size={18}
              />
              <button
                onClick={() => setShowNewThreadModal(true)}
                className="absolute right-2 top-1.5 bg-pink-500 hover:bg-pink-600 text-white px-4 py-1.5 rounded-full flex items-center gap-1.5"
              >
                <PlusCircle size={16} />
                <span>Chủ đề mới</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 flex-grow">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Sidebar */}
            <aside className="lg:w-1/4">
              {/* Navigation Tabs */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden mb-6">
                <div className="flex">
                  <button
                    onClick={() => setActiveTab("categories")}
                    className={`flex-1 py-3 text-center font-medium transition ${
                      activeTab === "categories"
                        ? "bg-pink-500 text-white"
                        : "bg-white text-gray-600 hover:bg-pink-50"
                    }`}
                  >
                    Chuyên mục
                  </button>
                  <button
                    onClick={() => setActiveTab("experts")}
                    className={`flex-1 py-3 text-center font-medium transition ${
                      activeTab === "experts"
                        ? "bg-pink-500 text-white"
                        : "bg-white text-gray-600 hover:bg-pink-50"
                    }`}
                  >
                    Chuyên gia
                  </button>
                  <Link
                    to="/forum/library"
                    className={`flex-1 py-3 text-center font-medium transition ${
                      window.location.pathname === "/library"
                        ? "bg-pink-500 text-white"
                        : "bg-white text-gray-600 hover:bg-pink-50"
                    }`}
                    style={{ display: "block" }}
                  >
                    Thư viện
                  </Link>
                </div>
              </div>

              {/* Filters */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-4 mb-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <Filter size={18} /> Sắp xếp chủ đề
                </h2>
                <div className="space-y-2 text-black">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="sortOption"
                      value="newest"
                      checked={sortOption === "newest"}
                      onChange={() => setSortOption("newest")}
                      className="mr-2"
                    />
                    <Clock size={16} className="mr-2 text-gray-500" />
                    <span>Mới nhất</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="sortOption"
                      value="mostViewed"
                      checked={sortOption === "mostViewed"}
                      onChange={() => setSortOption("mostViewed")}
                      className="mr-2"
                    />
                    <Eye size={16} className="mr-2 text-gray-500" />
                    <span>Xem nhiều nhất</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="sortOption"
                      value="mostCommented"
                      checked={sortOption === "mostCommented"}
                      onChange={() => setSortOption("mostCommented")}
                      className="mr-2"
                    />
                    <MessageCircle size={16} className="mr-2 text-gray-500" />
                    <span>Bình luận nhiều</span>
                  </label>
                </div>
              </div>

              {/* Quick Stats or Featured Content */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <TrendingUp size={18} /> Chủ đề nổi bật
                </h2>
                <div className="space-y-3">
                  {threads
                    .sort((a, b) => b.likes - a.likes)
                    .slice(0, 3)
                    .map((thread) => (
                      <Link
                        key={thread.id}
                        to={`/forum/thread/${thread.id}`}
                        className="block bg-pink-50 hover:bg-pink-100 p-3 rounded-lg transition"
                      >
                        <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
                          {thread.title}
                        </h3>
                        <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <Heart size={12} /> {thread.likes}
                          </span>
                          <span className="flex items-center gap-1">
                            <MessageSquare size={12} /> {thread.comments}
                          </span>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </aside>

            {/* Main Content Area */}
            <div className="lg:w-3/4">
              {activeTab === "categories" && (
                <>
                  {selectedCategory ? (
                    // Selected Category View with Threads
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6">
                      <div className="flex justify-between items-center mb-6">
                        <div>
                          <button
                            onClick={() => setSelectedCategory(null)}
                            className="text-blue-500 hover:text-blue-700 mb-2 flex items-center gap-1"
                          >
                            ← Quay lại chuyên mục
                          </button>
                          <div className="flex items-center gap-4 mb-4">
                            <span
                              className={`text-4xl p-4 rounded-full shadow ${selectedCategory.color}`}
                            >
                              {selectedCategory.icon}
                            </span>
                            <div>
                              <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
                                {selectedCategory.name}
                              </h2>
                              <p className="text-gray-600 text-lg">
                                {selectedCategory.description}
                              </p>
                              <div className="flex gap-4 mt-2 text-sm text-gray-500">
                                <span>
                                  {getThreadCount(selectedCategory.name)} chủ đề
                                </span>
                                {/* Có thể thêm số lượng bài viết nếu có */}
                              </div>
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() => setShowNewThreadModal(true)}
                          className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full flex items-center gap-2"
                        >
                          <PlusCircle size={18} />
                          <span>Tạo chủ đề mới</span>
                        </button>
                      </div>

                      <div className="space-y-4">
                        <AnimatePresence>
                          {sortedThreads
                            .filter(
                              (thread) =>
                                thread.category === selectedCategory.name
                            )
                            .map((thread) => (
                              <motion.div
                                key={thread.id}
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                transition={{ duration: 0.3 }}
                                className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                              >
                                <div className="p-4">
                                  <div className="flex justify-between items-start">
                                    <div className="flex items-center gap-3">
                                      <img
                                        src={thread.author.avatar}
                                        alt={thread.author.name}
                                        className="w-10 h-10 rounded-full object-cover"
                                      />
                                      <div>
                                        <h3 className="text-sm font-medium text-gray-500">
                                          {thread.author.name}
                                        </h3>
                                        <p className="text-xs text-gray-400">
                                          {formatDate(thread.createdAt)}
                                        </p>
                                      </div>
                                    </div>
                                    {thread.isPinned && (
                                      <span className="bg-yellow-100 text-yellow-600 text-xs px-2 py-1 rounded-full">
                                        Ghim
                                      </span>
                                    )}
                                  </div>
                                  <Link
                                    to={`/forum/thread/${thread.id}`}
                                    className="block mt-3"
                                  >
                                    <h2 className="text-lg font-semibold text-gray-800 hover:text-pink-600 transition">
                                      {thread.title}
                                    </h2>
                                    <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                                      {thread.content}
                                    </p>
                                  </Link>
                                  <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
                                    <span className="flex items-center gap-1">
                                      <Eye size={16} /> {thread.views}
                                    </span>
                                    <span className="flex items-center gap-1">
                                      <Heart size={16} /> {thread.likes}
                                    </span>
                                    <span className="flex items-center gap-1">
                                      <MessageSquare size={16} />{" "}
                                      {thread.comments}
                                    </span>
                                  </div>
                                </div>
                              </motion.div>
                            ))}
                        </AnimatePresence>
                      </div>
                    </div>
                  ) : (
                    // Categories List View
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <AnimatePresence>
                        {categories.map((category) => (
                          <motion.div
                            key={category.id}
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            transition={{ duration: 0.3 }}
                            className={`relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-shadow overflow-hidden cursor-pointer border-2 border-transparent hover:border-pink-400 group`}
                          >
                            <div className="p-5 flex flex-col h-full">
                              <div className="flex items-center gap-4 mb-3">
                                <span
                                  className={`text-3xl p-3 rounded-full shadow ${category.color} transition-transform group-hover:scale-110`}
                                >
                                  {category.icon}
                                </span>
                                <div>
                                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-pink-600 transition">
                                    {category.name}
                                  </h3>
                                  <div className="flex justify-between items-center">
                                    <span className="text-gray-500 text-sm">
                                      {getThreadCount(category.name)} chủ đề
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex  items-center">
                                <p className="text-gray-600 justify-start truncate text-sm flex-1 group-hover:text-gray-800 transition">
                                  {category.description}
                                </p>
                                <button
                                  className="text-pink-500 justify-end hover:text-pink-700 text-sm font-medium"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedCategory(category);
                                  }}
                                >
                                  Xem tất cả →
                                </button>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                  )}
                </>
              )}

              {activeTab === "experts" && (
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Hỏi đáp cùng chuyên gia
                  </h2>

                  {/* Expert Profiles */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    {experts.map((expert) => (
                      <div
                        key={expert.id}
                        className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
                      >
                        <div className="flex flex-col items-center text-center">
                          <img
                            src={expert.avatar}
                            alt={expert.name}
                            className="w-20 h-20 rounded-full object-cover mb-3"
                          />
                          <h3 className="font-semibold text-gray-800">
                            {expert.name}
                          </h3>
                          <p className="text-pink-600 text-sm mb-1">
                            {expert.specialty}
                          </p>
                          <p className="text-gray-500 text-xs">
                            {expert.experience}
                          </p>
                          <button className="mt-3 bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-1.5 rounded-full">
                            Gửi câu hỏi
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Ask Question Form */}
                  <div className="bg-blue-50 rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-semibold text-blue-800 mb-4">
                      Đặt câu hỏi cho chuyên gia
                    </h3>
                    <form>
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                          Chọn chuyên gia
                        </label>
                        <select className="w-full p-3 text-black bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-300 outline-none">
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
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                          Nội dung chi tiết
                        </label>
                        <textarea
                          className="w-full p-3 bg-white border border-gray-200 rounded-lg h-32 focus:ring-2 focus:ring-blue-300 focus:border-blue-300 outline-none"
                          placeholder="Mô tả chi tiết câu hỏi của bạn"
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg"
                      >
                        Gửi câu hỏi
                      </button>
                    </form>
                  </div>

                  {/* Previous Q&A */}
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Câu hỏi được trả lời gần đây
                  </h3>
                  <div className="space-y-4">
                    {threads.slice(0, 3).map((thread) => (
                      <div
                        key={thread.id}
                        className="bg-white rounded-xl border border-gray-100 shadow-sm p-4"
                      >
                        <div className="flex gap-3">
                          <span className="bg-blue-100 text-blue-600 h-8 w-8 flex items-center justify-center rounded-full font-semibold">
                            Q
                          </span>
                          <div>
                            <h4 className="font-medium text-gray-800">
                              {thread.title}
                            </h4>
                            <p className="text-gray-500 text-sm">
                              {thread.author.name} •{" "}
                              {formatDate(thread.createdAt)}
                            </p>
                            <p className="text-gray-600 text-sm mt-1">
                              {thread.content}
                            </p>
                            <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                              <span className="flex items-center gap-1">
                                <Eye size={12} /> {thread.views}
                              </span>
                              <span className="flex items-center gap-1">
                                <Heart size={12} /> {thread.likes}
                              </span>
                              <span className="flex items-center gap-1">
                                <MessageSquare size={12} /> {thread.comments}
                              </span>

                              <Link
                                to={`/forum/thread/${thread.id}`}
                                className="text-blue-500 hover:text-blue-700"
                              >
                                Xem thêm
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {activeTab === "library" && (
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Thư viện tài liệu
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Tài liệu hữu ích cho mẹ và bé
                  </p>
                  {/* Add your library content here */}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* New Thread Modal */}
      <AnimatePresence>
        {showNewThreadModal && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md mx-auto">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Tạo chủ đề mới
              </h2>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Tiêu đề
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-300 outline-none"
                    placeholder="Nhập tiêu đề của bạn"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Nội dung
                  </label>
                  <textarea
                    className="w-full p-3 bg-white border border-gray-200 rounded-lg h-32 focus:ring-2 focus:ring-pink-300 focus:border-pink-300 outline-none"
                    placeholder="Nhập nội dung của bạn"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-6 rounded-lg"
                >
                  Gửi chủ đề
                </button>
                <button
                  type="button"
                  onClick={() => setShowNewThreadModal(false)}
                  className="ml-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-6 rounded-lg"
                >
                  Đóng
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default Forum;
