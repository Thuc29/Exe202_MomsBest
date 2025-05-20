import React, { useState } from "react";

const blogPosts = [
  {
    id: 11,
    title: "Chăm Sóc Sức Khỏe Mẹ Bầu Trước Sinh",
    description:
      "Những lưu ý quan trọng giúp mẹ bầu khỏe mạnh, thai nhi phát triển tốt trong suốt thai kỳ.",
    content: `Giai đoạn trước sinh là thời điểm quan trọng để mẹ chuẩn bị sức khỏe và tinh thần.\n\n- Ăn uống đủ chất, bổ sung vitamin và khoáng chất.\n- Tập thể dục nhẹ nhàng như yoga, đi bộ.\n- Khám thai định kỳ và tuân thủ hướng dẫn của bác sĩ.\n- Giữ tinh thần lạc quan, tránh căng thẳng.\n\nChăm sóc tốt trước sinh giúp mẹ và bé đều khỏe mạnh!`,
    image:
      "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80",
    date: "2024-06-10",
    author: "Bác sĩ Lê Thị Hồng",
    category: "Trước sinh",
    views: 2100,
    tags: ["mẹ bầu", "sức khỏe", "trước sinh"],
    source: "Bệnh viện Phụ sản Trung ương",
    externalLink: "https://benhvienphusantrunguong.org.vn/",
  },
  {
    id: 12,
    title: "Bí Quyết Chăm Sóc Mẹ Và Bé Sau Sinh",
    description:
      "Hướng dẫn chăm sóc sức khỏe, dinh dưỡng và tinh thần cho mẹ và bé trong giai đoạn sau sinh.",
    content: `Sau sinh, mẹ cần chú ý:\n\n- Nghỉ ngơi hợp lý, tránh làm việc nặng.\n- Ăn uống đủ chất, bổ sung sắt và canxi.\n- Vệ sinh cá nhân sạch sẽ, chăm sóc vết mổ (nếu có).\n- Chăm sóc bé: cho bú đúng cách, giữ ấm, theo dõi sức khỏe.\n- Chia sẻ cảm xúc với người thân để tránh trầm cảm sau sinh.\n\nChăm sóc tốt giúp mẹ hồi phục nhanh và bé phát triển khỏe mạnh!`,
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    date: "2024-06-09",
    author: "Chuyên gia Nguyễn Thị Lan",
    category: "Sau sinh",
    views: 1850,
    tags: ["sau sinh", "mẹ và bé"],
    source: "Tạp chí Sức khỏe & Đời sống",
    externalLink: "https://suckhoedoisong.vn/",
  },
  {
    id: 1,
    title: "5 Mẹo Nấu Ăn Nhanh Cho Người Bận Rộn",
    description:
      "Khám phá những mẹo đơn giản giúp bạn tiết kiệm thời gian trong bếp mà vẫn có bữa ăn ngon miệng.",
    content: `Nội dung chi tiết về mẹo nấu ăn nhanh.\n\n1. Chuẩn bị nguyên liệu từ tối hôm trước.\n2. Sử dụng nồi áp suất hoặc nồi chiên không dầu.\n3. Ưu tiên các món một nồi.\n4. Sơ chế rau củ số lượng lớn.\n5. Lên thực đơn trước cho cả tuần.\n\nVới các mẹo này, bạn sẽ tiết kiệm được nhiều thời gian mà vẫn đảm bảo bữa ăn ngon miệng cho gia đình!`,
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
    date: "2024-06-01",
    author: "Nguyễn Thị Mai",
    category: "Mẹo bếp núc",
    views: 1200,
    tags: ["nấu ăn", "mẹo bếp"],
    source: "Blog Ẩm thực Việt",
    externalLink: "https://amthucviet.com/",
  },
  {
    id: 2,
    title: "Cách Chọn Nguyên Liệu Tươi Ngon Mỗi Ngày",
    description:
      "Bí quyết chọn rau củ, thịt cá tươi ngon cho bữa cơm gia đình thêm tròn vị.",
    content: `Nội dung chi tiết về cách chọn nguyên liệu.\n\n- Rau củ: chọn loại còn tươi, không dập nát.\n- Thịt cá: ưu tiên loại có màu sắc tự nhiên, không có mùi lạ.\n- Tránh mua thực phẩm để lâu ngày.\n\nChọn nguyên liệu tươi giúp món ăn ngon và an toàn hơn!`,
    image:
      "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=600&q=80",
    date: "2024-05-28",
    author: "Trần Văn Hùng",
    category: "Nguyên liệu",
    views: 980,
  },
  {
    id: 3,
    title: "Món Ăn Dinh Dưỡng Cho Bé Yêu",
    description:
      "Gợi ý thực đơn giàu dinh dưỡng, dễ chế biến cho các bé từ 1-5 tuổi.",
    content: `Nội dung chi tiết về món ăn cho bé.\n\n- Cháo cá hồi bí đỏ\n- Súp gà ngô non\n- Bánh khoai lang hấp\n\nCác món này vừa ngon vừa bổ dưỡng cho bé phát triển toàn diện!`,
    image:
      "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80",
    date: "2024-05-20",
    author: "Lê Thị Hạnh",
    category: "Dinh dưỡng",
    views: 1500,
  },
  {
    id: 4,
    title: "Bí Quyết Làm Bánh Ngon Tại Nhà",
    description: "Các bước đơn giản để làm bánh thơm ngon, mềm mịn.",
    content: `Nội dung chi tiết về làm bánh.\n\n- Chọn nguyên liệu chất lượng.\n- Đo lường chính xác.\n- Làm nóng lò trước khi nướng.\n\nLàm bánh tại nhà vừa vui vừa đảm bảo vệ sinh!`,
    image:
      "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=600&q=80",
    date: "2024-05-15",
    author: "Phạm Minh Châu",
    category: "Làm bánh",
    views: 870,
  },
  {
    id: 5,
    title: "Thực Đơn Eat Clean Cho Người Mới Bắt Đầu",
    description: "Gợi ý thực đơn eat clean đơn giản, dễ làm, tốt cho sức khỏe.",
    content: `Nội dung chi tiết về eat clean.\n\n- Sáng: Yến mạch, sữa chua, trái cây\n- Trưa: Ức gà, rau củ luộc\n- Tối: Salad cá ngừ\n\nĂn sạch giúp cơ thể khỏe mạnh, giảm cân hiệu quả!`,
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=600&q=80",
    date: "2024-05-10",
    author: "Ngô Thị Lan",
    category: "Eat Clean",
    views: 1120,
  },
  {
    id: 6,
    title: "Cách Ướp Thịt Nướng Đậm Đà Chuẩn Vị",
    description: "Bí quyết ướp thịt nướng mềm, thơm, đậm đà.",
    content: `Nội dung chi tiết về ướp thịt nướng.\n\n- Sử dụng tỏi, hành, tiêu, mật ong\n- Ướp ít nhất 1 tiếng\n- Nướng trên than hoa cho thơm\n\nThịt nướng ngon nhờ bí quyết ướp đúng cách!`,
    image:
      "https://images.unsplash.com/photo-1506089676908-3592f7389d4d?auto=format&fit=crop&w=600&q=80",
    date: "2024-05-05",
    author: "Đỗ Văn Bình",
    category: "Nướng",
    views: 1340,
  },
  {
    id: 7,
    title: "Món Ăn Chay Thanh Đạm Dễ Làm",
    description: "Các món chay ngon, dễ chế biến cho ngày rằm.",
    content: `Nội dung chi tiết về món ăn chay.\n\n- Đậu hũ sốt cà\n- Canh nấm rong biển\n- Gỏi cuốn chay\n\nĂn chay giúp thanh lọc cơ thể và tốt cho sức khỏe!`,
    image:
      "https://images.unsplash.com/photo-1504674900247-ec6b0b1b7982?auto=format&fit=crop&w=600&q=80",
    date: "2024-05-01",
    author: "Lý Thị Hoa",
    category: "Ăn chay",
    views: 900,
  },
  {
    id: 8,
    title: "Cách Làm Salad Tươi Ngon Giòn Mát",
    description: "Hướng dẫn làm salad rau củ tươi ngon, bổ dưỡng.",
    content: `Nội dung chi tiết về làm salad.\n\n- Chọn rau củ tươi\n- Sử dụng sốt tự làm\n- Thêm hạt dinh dưỡng\n\nSalad giúp bổ sung vitamin và khoáng chất cho cơ thể!`,
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    date: "2024-04-28",
    author: "Nguyễn Văn Tùng",
    category: "Salad",
    views: 1050,
  },
  {
    id: 9,
    title: "Bữa Sáng Nhanh Gọn Cho Gia Đình",
    description: "Gợi ý các món ăn sáng nhanh, đủ chất cho cả nhà.",
    content: `Nội dung chi tiết về bữa sáng nhanh.\n\n- Bánh mì trứng\n- Cháo thịt bằm\n- Sữa hạt tự làm\n\nBữa sáng đủ chất giúp khởi đầu ngày mới năng lượng!`,
    image:
      "https://images.unsplash.com/photo-1504674900247-ec6b0b1b7982?auto=format&fit=crop&w=600&q=80",
    date: "2024-04-25",
    author: "Trần Thị Hương",
    category: "Bữa sáng",
    views: 800,
  },
  {
    id: 10,
    title: "Cách Làm Nước Chấm Ngon Đúng Điệu",
    description: "Các công thức nước chấm ngon cho từng món ăn.",
    content: `Nội dung chi tiết về nước chấm.\n\n- Nước mắm chua ngọt\n- Sốt mè rang\n- Nước tương tỏi ớt\n\nNước chấm ngon làm tăng hương vị món ăn!`,
    image:
      "https://images.unsplash.com/photo-1465101178521-c1a9136a3b41?auto=format&fit=crop&w=600&q=80",
    date: "2024-04-20",
    author: "Vũ Minh Tuấn",
    category: "Nước chấm",
    views: 950,
  },
];

const POSTS_PER_PAGE = 6;

function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPost, setSelectedPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [search, setSearch] = useState("");
  const [showMoreCategories, setShowMoreCategories] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [blogList, setBlogList] = useState(blogPosts);
  const [addForm, setAddForm] = useState({
    title: "",
    description: "",
    content: "",
    category: "",
    author: "",
    image: "",
  });
  const [addError, setAddError] = useState("");

  // Lấy danh sách category duy nhất
  const allCategories = [
    "Tất cả",
    ...Array.from(new Set(blogList.map((post) => post.category))),
  ];
  const maxCategories = 5;
  const visibleCategories = allCategories.slice(0, maxCategories);
  const hiddenCategories = allCategories.slice(maxCategories);

  // Lọc theo category và từ khóa
  const filteredPosts = blogList.filter((post) => {
    const matchCategory =
      selectedCategory === "Tất cả" || post.category === selectedCategory;
    const keyword = search.trim().toLowerCase();
    const matchSearch =
      !keyword ||
      post.title.toLowerCase().includes(keyword) ||
      post.description.toLowerCase().includes(keyword) ||
      post.content.toLowerCase().includes(keyword);
    return matchCategory && matchSearch;
  });

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIdx = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(startIdx, startIdx + POSTS_PER_PAGE);

  const openModal = (post) => setSelectedPost(post);
  const closeModal = () => setSelectedPost(null);

  const handlePageChange = (page) => {
    setLoading(true);
    setTimeout(() => {
      setCurrentPage(page);
      setLoading(false);
    }, 400);
  };

  // Helper để cắt bớt mô tả dài
  const truncate = (str, n) => (str.length > n ? str.slice(0, n) + "..." : str);

  // Khi đổi tab category thì về trang 1
  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
    setShowMoreCategories(false);
  };

  // Khi tìm kiếm thì về trang 1
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  // Thêm blog mới
  const handleAddBlog = (e) => {
    e.preventDefault();
    // Validate
    if (
      !addForm.title ||
      !addForm.description ||
      !addForm.content ||
      !addForm.category ||
      !addForm.author ||
      !addForm.image
    ) {
      setAddError("Vui lòng nhập đầy đủ thông tin.");
      return;
    }
    // Thêm blog mới vào đầu danh sách
    setBlogList([
      {
        id: Date.now(),
        title: addForm.title,
        description: addForm.description,
        content: addForm.content,
        image: addForm.image,
        date: new Date().toISOString().slice(0, 10),
        author: addForm.author,
        category: addForm.category,
        views: Math.floor(Math.random() * 1000) + 1,
      },
      ...blogList,
    ]);
    setShowAddModal(false);
    setAddForm({
      title: "",
      description: "",
      content: "",
      category: "",
      author: "",
      image: "",
    });
    setAddError("");
    setSelectedCategory("Tất cả");
    setCurrentPage(1);
  };

  return (
    <div className="bg-[url('https://images.pexels.com/photos/1888614/pexels-photo-1888614.jpeg?auto=compress&cs=tinysrgb&w=600')]  bg-center font-space-grotesk">
      {" "}
      <div className="max-w-6xl pt-24 mx-auto px-4 py-10">
        <div className="relative bg-gradient-to-r from-pink-100/80 to-blue-100/80 rounded-2xl overflow-hidden">
          <div className="flex justify-center items-center px-4 pt-4">
            <h1 className="text-4xl font-bold p-4 text-center text-gray-800">
              Blog
            </h1>
          </div>
          {/* Search box */}
          <div className="flex justify-center mb-6">
            <input
              type="text"
              value={search}
              onChange={handleSearchChange}
              placeholder="Tìm kiếm bài viết..."
              className="w-full max-w-md px-4 py-2 border border-pink-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400 text-gray-700 shadow-sm"
            />
          </div>
        </div>
        {/* Tab category */}
        <div className="flex flex-wrap gap-2 justify-center mt-5 mb-8 relative">
          {visibleCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-4 py-2 rounded-full font-medium border transition-colors duration-200 text-sm shadow-sm
              ${
                selectedCategory === cat
                  ? "bg-pink-500 text-white border-pink-500"
                  : "bg-white text-pink-500 border-pink-300 hover:bg-pink-50"
              }
            `}
            >
              {cat}
            </button>
          ))}
          {hiddenCategories.length > 0 && (
            <div className="relative">
              <button
                onClick={() => setShowMoreCategories((v) => !v)}
                className={`px-4 py-2 rounded-full font-medium border transition-colors duration-200 text-sm shadow-sm bg-white text-pink-500 border-pink-300 hover:bg-pink-50`}
              >
                +{hiddenCategories.length}
              </button>
              {showMoreCategories && (
                <div className="absolute left-0 mt-2 bg-white border border-pink-200 rounded-lg shadow-lg z-10 min-w-[140px]">
                  {hiddenCategories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => handleCategoryChange(cat)}
                      className={`block w-full text-left px-4 py-2 text-sm font-medium border-b last:border-b-0 border-pink-50 hover:bg-pink-50 transition-colors duration-200
                      ${
                        selectedCategory === cat
                          ? "bg-pink-100 text-pink-600"
                          : "text-pink-500"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
          <button
            onClick={() => setShowAddModal(true)}
            className="px-5 py-2 ml-9 bg-pink-500 text-white rounded-full font-semibold shadow hover:bg-pink-600 transition-colors duration-200"
          >
            + Thêm blog
          </button>
        </div>
        {/* Modal thêm blog */}
        {showAddModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 animate-fadeIn">
            <form
              onSubmit={handleAddBlog}
              className="bg-white rounded-xl shadow-xl max-w-lg w-full p-8 relative animate-fadeInUp"
            >
              <button
                type="button"
                onClick={() => {
                  setShowAddModal(false);
                  setAddError("");
                }}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl font-bold"
                aria-label="Đóng"
              >
                ×
              </button>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                Thêm Blog Mới
              </h2>
              {addError && (
                <div className="mb-3 text-red-500 text-sm">{addError}</div>
              )}
              <input
                type="text"
                placeholder="Tiêu đề"
                className="w-full mb-3 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
                value={addForm.title}
                onChange={(e) =>
                  setAddForm((f) => ({ ...f, title: e.target.value }))
                }
              />
              <input
                type="text"
                placeholder="Mô tả ngắn"
                className="w-full mb-3 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
                value={addForm.description}
                onChange={(e) =>
                  setAddForm((f) => ({ ...f, description: e.target.value }))
                }
              />
              <textarea
                placeholder="Nội dung chi tiết"
                className="w-full mb-3 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300 min-h-[80px]"
                value={addForm.content}
                onChange={(e) =>
                  setAddForm((f) => ({ ...f, content: e.target.value }))
                }
              />
              <input
                type="text"
                placeholder="Chuyên mục (category)"
                className="w-full mb-3 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
                value={addForm.category}
                onChange={(e) =>
                  setAddForm((f) => ({ ...f, category: e.target.value }))
                }
                list="category-list"
              />
              <datalist id="category-list">
                {allCategories
                  .filter((c) => c !== "Tất cả")
                  .map((c) => (
                    <option key={c} value={c} />
                  ))}
              </datalist>
              <input
                type="text"
                placeholder="Tác giả"
                className="w-full mb-3 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
                value={addForm.author}
                onChange={(e) =>
                  setAddForm((f) => ({ ...f, author: e.target.value }))
                }
              />
              <input
                type="text"
                placeholder="Link ảnh (URL)"
                className="w-full mb-4 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
                value={addForm.image}
                onChange={(e) =>
                  setAddForm((f) => ({ ...f, image: e.target.value }))
                }
              />
              <button
                type="submit"
                className="w-full py-2 bg-pink-500 text-white rounded-lg font-semibold hover:bg-pink-600 transition-colors duration-200"
              >
                Thêm blog
              </button>
            </form>
          </div>
        )}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="w-12 h-12 border-4 border-pink-300 border-t-pink-500 rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {currentPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col group relative cursor-pointer"
              >
                <div className="overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-pink-100 text-pink-600 text-xs font-semibold px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-xs flex items-center gap-1">
                      <svg
                        width="16"
                        height="16"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M12 5c-7 0-9 4.5-9 7.5 0 3 2.5 7.5 9 7.5s9-4.5 9-7.5c0-3-2-7.5-9-7.5Zm0 13c-5.5 0-8-3.7-8-6.5C4 8.7 6.5 5 12 5s8 3.7 8 6.5c0 2.8-2.5 6.5-8 6.5Zm0-10a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm0 6a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
                        />
                      </svg>
                      {post.views}
                    </span>
                  </div>
                  <h2 className="text-2xl font-semibold mb-2 text-gray-900 group-hover:text-pink-600 transition-colors duration-200">
                    {truncate(post.title, 50)}
                  </h2>
                  <p className="text-gray-600 mb-4 flex-1">
                    {truncate(post.description, 80)}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{post.author}</span>
                    <span>
                      {new Date(post.date).toLocaleDateString("vi-VN")}
                    </span>
                  </div>
                  <button
                    onClick={() => openModal(post)}
                    className="inline-block mt-auto px-4 py-2 bg-pink-500 text-white rounded-lg font-medium hover:bg-pink-600 transition-colors duration-200"
                  >
                    Đọc tiếp
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        {/* Pagination */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => handlePageChange(i + 1)}
              className={`px-4 py-2 rounded-lg font-medium border transition-colors duration-200 ${
                currentPage === i + 1
                  ? "bg-pink-500 text-white border-pink-500"
                  : "bg-white text-pink-500 border-pink-300 hover:bg-pink-50"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
        {/* Modal for post detail */}
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 animate-fadeIn ">
            <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full p-0 relative animate-fadeInUp flex flex-col max-h-[90vh] overflow-y-auto h-screen scrollbar-thin scrollbar-track-pink-50 scrollbar-thumb-pink-200">
              <button
                onClick={closeModal}
                className="absolute top-3 right-4 text-gray-400 hover:text-gray-700 text-3xl font-bold z-20"
                aria-label="Đóng"
              >
                ×
              </button>
              {/* Image on top */}
              <div className="w-full p-6 md:p-8 flex flex-col items-center border-b border-pink-50">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="rounded-xl shadow-lg object-cover w-full max-w-xl h-72 md:h-96 mb-2"
                />
                <div className="text-xs text-gray-400 mb-1">Link ảnh:</div>
                <div className="bg-gray-100 rounded px-3 py-2 text-pink-700 font-mono break-all select-all cursor-pointer text-xs w-full max-w-xl">
                  {selectedPost.image}
                </div>
              </div>
              {/* Content */}
              <div className="w-full flex flex-col p-6 md:p-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-pink-100 text-pink-600 text-xs font-semibold px-3 py-1 rounded-full">
                    {selectedPost.category}
                  </span>
                  <span className="text-gray-400 text-xs flex items-center gap-1">
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M12 5c-7 0-9 4.5-9 7.5 0 3 2.5 7.5 9 7.5s9-4.5 9-7.5c0-3-2-7.5-9-7.5Zm0 13c-5.5 0-8-3.7-8-6.5C4 8.7 6.5 5 12 5s8 3.7 8 6.5c0 2.8-2.5 6.5-8 6.5Zm0-10a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm0 6a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
                      />
                    </svg>
                    {selectedPost.views}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900 leading-tight">
                  {selectedPost.title}
                </h2>
                <div className="text-lg text-gray-700 mb-4 font-medium">
                  {selectedPost.description}
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                  <span>{selectedPost.author}</span>
                  <span>
                    {new Date(selectedPost.date).toLocaleDateString("vi-VN")}
                  </span>
                </div>
                {/* Thông tin phụ */}
                <div className="flex flex-wrap gap-2 mb-4 text-xs text-gray-400 items-center">
                  <span>
                    Thời gian đọc: ~
                    {Math.max(1, Math.round(selectedPost.content.length / 500))}{" "}
                    phút
                  </span>
                  {selectedPost.tags && selectedPost.tags.length > 0 && (
                    <>
                      <span className="text-gray-300">|</span>
                      {selectedPost.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-pink-50 text-pink-400 px-2 py-1 rounded mr-1"
                        >
                          #{tag}
                        </span>
                      ))}
                    </>
                  )}
                </div>
                {/* Nguồn và liên kết ngoài */}
                {(selectedPost.source || selectedPost.externalLink) && (
                  <div className="mb-4 text-sm text-gray-500 flex flex-wrap gap-2 items-center">
                    {selectedPost.source && (
                      <span>
                        Nguồn:{" "}
                        <span className="font-medium text-gray-700">
                          {selectedPost.source}
                        </span>
                      </span>
                    )}
                    {selectedPost.externalLink && (
                      <a
                        href={selectedPost.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline hover:text-blue-700 ml-2"
                      >
                        Xem chi tiết
                      </a>
                    )}
                  </div>
                )}
                <pre className="text-gray-800 mb-4 whitespace-pre-wrap font-sans text-base md:text-lg leading-relaxed">
                  {selectedPost.content}
                </pre>
                <div className="flex gap-3 mt-auto">
                  <button className="px-4 py-2 bg-blue-100 text-blue-600 rounded-lg font-medium hover:bg-blue-200 transition-colors duration-200 flex items-center gap-2">
                    <svg
                      width="18"
                      height="18"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 8a6 6 0 1 0-12 0c0 4.5 6 10 6 10s6-5.5 6-10Zm-6 3a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                    </svg>
                    Chia sẻ
                  </button>
                  <button
                    onClick={closeModal}
                    className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200"
                  >
                    Đóng
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Hiệu ứng fadeIn */}
        <style>{`
        .animate-fadeIn { animation: fadeIn 0.3s; }
        .animate-fadeInUp { animation: fadeInUp 0.4s; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(40px);} to { opacity: 1; transform: none; } }
      `}</style>
      </div>
    </div>
  );
}

export default Blog;
