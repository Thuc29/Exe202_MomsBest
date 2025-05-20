import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Heart,
  Share2,
  BookmarkPlus,
  MessageCircle,
  ChevronLeft,
  Send,
  Flag,
  ThumbsUp,
  MoreHorizontal,
  Image,
  Smile,
  Paperclip,
} from "lucide-react";

// Mock data for a single thread
const threadData = {
  id: "1",
  title: "Làm thế nào để giảm nghén trong 3 tháng đầu?",
  content:
    "Mình đang mang thai tháng thứ 2 và bị nghén khá nặng, ăn gì cũng nôn. Các mẹ có kinh nghiệm gì để chia sẻ không ạ? Mình đã thử uống gừng và ăn nhẹ nhưng vẫn không đỡ nhiều. Bác sĩ bảo đây là hiện tượng bình thường nhưng mình thấy khó chịu quá và sợ ảnh hưởng đến em bé.",
  category: "Thai kỳ 3 tháng đầu",
  author: {
    name: "HongNhung",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120",
    joinDate: "Tháng 3, 2024",
    posts: 28,
  },
  createdAt: "2025-05-18T08:30:00",
  views: 356,
  likes: 42,
  comments: [
    {
      id: "c1",
      author: {
        name: "BichHoa",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120",
        isExpert: true,
        specialty: "Dinh dưỡng",
      },
      content:
        "Chào bạn, nghén là hiện tượng rất phổ biến trong thai kỳ. Mình khuyên bạn nên:\n1. Ăn nhiều bữa nhỏ thay vì 3 bữa lớn\n2. Uống trà gừng ấm (không quá nóng)\n3. Tránh mùi nấu nướng nếu có thể\n4. Ăn bánh quy giòn trước khi ngủ và khi thức dậy\n5. Đảm bảo uống đủ nước\nHy vọng bạn sẽ cảm thấy đỡ hơn!",
      createdAt: "2025-05-18T09:15:00",
      likes: 15,
    },
    {
      id: "c2",
      author: {
        name: "MaiAnh",
        avatar:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120",
      },
      content:
        "Mình cũng bị nghén nặng lúc mang thai bé đầu. Mình thấy chanh muối giúp đỡ nhiều lắm. Thử xem nhé!",
      createdAt: "2025-05-18T10:30:00",
      likes: 8,
    },
    {
      id: "c3",
      author: {
        name: "ThanhHuyen",
        avatar:
          "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=120",
      },
      content:
        "Bạn thử vitamin B6 xem, mình uống thấy đỡ hẳn. Nhớ hỏi ý kiến bác sĩ trước khi dùng nhé!",
      createdAt: "2025-05-18T11:45:00",
      likes: 10,
      replies: [
        {
          id: "r1",
          author: {
            name: "HongNhung",
            avatar:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120",
          },
          content: "Cảm ơn bạn, mình sẽ hỏi bác sĩ về việc này!",
          createdAt: "2025-05-18T12:15:00",
          likes: 2,
        },
      ],
    },
    {
      id: "c4",
      author: {
        name: "BS. Nguyễn Thị Minh",
        avatar:
          "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=120",
        isExpert: true,
        specialty: "Sản phụ khoa",
      },
      content:
        "Xin chào bạn, với tình trạng nghén nặng, ngoài các biện pháp mà các bạn đã chia sẻ, tôi khuyên bạn nên:\n\n- Theo dõi lượng nước tiểu, nếu thấy giảm đáng kể hoặc sẫm màu, hãy đến gặp bác sĩ ngay\n- Cân nhắc bổ sung vitamin B6 liều 10-25mg, 3 lần/ngày (sau khi tham khảo ý kiến bác sĩ)\n- Tránh thức ăn cay, nhiều dầu mỡ và mùi nồng\n- Nghỉ ngơi đầy đủ, tránh căng thẳng\n\nNếu tình trạng nghén kéo dài và khiến bạn không thể ăn uống, giảm cân nhiều, hãy đến cơ sở y tế để được thăm khám và điều trị kịp thời.",
      createdAt: "2025-05-18T14:30:00",
      likes: 24,
    },
  ],
  isPinned: true,
  isFollowing: false,
  relatedThreads: [
    {
      id: "2",
      title: "Những thực phẩm nên tránh trong 3 tháng đầu thai kỳ",
      comments: 15,
      views: 230,
    },
    {
      id: "3",
      title: "Cách đối phó với mệt mỏi khi mang thai",
      comments: 22,
      views: 312,
    },
    {
      id: "4",
      title: "Các vitamin cần thiết cho bà bầu 3 tháng đầu",
      comments: 18,
      views: 275,
    },
  ],
};

const ThreadDetail = () => {
  const { threadId } = useParams();
  const [thread, setThread] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [commentText, setCommentText] = useState("");
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    // In a real app, fetch thread data based on threadId
    // For now, use mock data
    setThread(threadData);
    setIsLoading(false);
    setIsFollowing(threadData.isFollowing);
  }, [threadId]);

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

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    // In a real app, send comment to API
    alert("Bình luận của bạn đã được gửi!");
    setCommentText("");
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    // In a real app, send like/unlike to API
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
    // In a real app, send save/unsave to API
  };

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
    // In a real app, send follow/unfollow to API
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500"></div>
      </div>
    );
  }

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
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              {thread.title}
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-2">
              <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs">
                {thread.category}
              </span>
              <span className="flex items-center gap-1">
                <MessageCircle size={14} /> {thread.comments.length} bình luận
              </span>
              <span className="flex items-center gap-1">
                <Heart size={14} /> {thread.likes} thích
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-4 flex-grow">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Thread Content */}
            <div className="lg:w-3/4">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 mb-6">
                {/* Thread Author Info */}
                <div className="flex items-start gap-4 mb-6 pb-6 border-b border-gray-100">
                  <img
                    src={thread.author.avatar}
                    alt={thread.author.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-800">
                          {thread.author.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          Tham gia từ {thread.author.joinDate} •{" "}
                          {thread.author.posts} bài viết
                        </p>
                      </div>
                      <p className="text-sm text-gray-500">
                        {formatDate(thread.createdAt)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Thread Content */}
                <div className="prose max-w-none mb-6">
                  <p className="text-gray-700 whitespace-pre-line">
                    {thread.content}
                  </p>
                </div>

                {/* Thread Actions */}
                <div className="flex flex-wrap items-center justify-between mt-6 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={handleLike}
                      className={`flex items-center gap-1 px-3 py-1.5 rounded-full ${
                        isLiked
                          ? "bg-pink-100 text-pink-600"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      <Heart
                        size={16}
                        fill={isLiked ? "currentColor" : "none"}
                      />
                      <span>{isLiked ? thread.likes + 1 : thread.likes}</span>
                    </button>
                    <button
                      onClick={handleSave}
                      className={`flex items-center gap-1 px-3 py-1.5 rounded-full ${
                        isSaved
                          ? "bg-blue-100 text-blue-600"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      <BookmarkPlus
                        size={16}
                        fill={isSaved ? "currentColor" : "none"}
                      />
                      <span>Lưu</span>
                    </button>
                    <button className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200">
                      <Share2 size={16} />
                      <span>Chia sẻ</span>
                    </button>
                    <button className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200">
                      <Flag size={16} />
                      <span>Báo cáo</span>
                    </button>
                  </div>
                  <button
                    onClick={handleFollow}
                    className={`px-4 py-1.5 rounded-full ${
                      isFollowing
                        ? "bg-pink-500 text-white"
                        : "bg-pink-100 text-pink-600 hover:bg-pink-200"
                    }`}
                  >
                    {isFollowing ? "Đang theo dõi" : "Theo dõi chủ đề"}
                  </button>
                </div>
              </div>

              {/* Comments Section */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 mb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-6">
                  Bình luận ({thread.comments.length})
                </h2>

                {/* Comment Form */}
                <form
                  onSubmit={handleSubmitComment}
                  className="mb-8 bg-white rounded-xl border border-gray-200 overflow-hidden"
                >
                  <textarea
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder="Viết bình luận của bạn..."
                    className="w-full p-4 border-b border-gray-200 focus:outline-none focus:ring-0 resize-none"
                    rows="3"
                  ></textarea>
                  <div className="flex items-center justify-between p-3 bg-gray-50">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        className="p-1.5 rounded-full hover:bg-gray-200"
                      >
                        <Image size={18} className="text-gray-500" />
                      </button>
                      <button
                        type="button"
                        className="p-1.5 rounded-full hover:bg-gray-200"
                      >
                        <Smile size={18} className="text-gray-500" />
                      </button>
                      <button
                        type="button"
                        className="p-1.5 rounded-full hover:bg-gray-200"
                      >
                        <Paperclip size={18} className="text-gray-500" />
                      </button>
                    </div>
                    <button
                      type="submit"
                      disabled={!commentText.trim()}
                      className={`flex items-center gap-1 px-4 py-1.5 rounded-full ${
                        commentText.trim()
                          ? "bg-pink-500 text-white hover:bg-pink-600"
                          : "bg-gray-200 text-gray-400 cursor-not-allowed"
                      }`}
                    >
                      <Send size={16} />
                      <span>Gửi</span>
                    </button>
                  </div>
                </form>

                {/* Comments List */}
                <div className="space-y-6">
                  {thread.comments.map((comment) => (
                    <div
                      key={comment.id}
                      className="bg-white rounded-xl border border-gray-100 shadow-sm p-4"
                    >
                      {/* Comment Header */}
                      <div className="flex items-start gap-3 mb-3">
                        <img
                          src={comment.author.avatar}
                          alt={comment.author.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-medium text-gray-800">
                              {comment.author.name}
                            </h3>
                            {comment.author.isExpert && (
                              <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full text-xs">
                                Chuyên gia {comment.author.specialty}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-gray-500">
                            {formatDate(comment.createdAt)}
                          </p>
                        </div>
                        <button className="p-1 text-gray-400 hover:text-gray-600">
                          <MoreHorizontal size={16} />
                        </button>
                      </div>

                      {/* Comment Content */}
                      <div className="mb-3">
                        <p className="text-gray-700 whitespace-pre-line">
                          {comment.content}
                        </p>
                      </div>

                      {/* Comment Actions */}
                      <div className="flex items-center gap-4 text-sm">
                        <button className="flex items-center gap-1 text-gray-500 hover:text-pink-500">
                          <ThumbsUp size={14} />
                          <span>{comment.likes}</span>
                        </button>
                        <button className="text-gray-500 hover:text-blue-500">
                          Trả lời
                        </button>
                      </div>

                      {/* Nested Replies */}
                      {comment.replies && comment.replies.length > 0 && (
                        <div className="mt-4 pl-8 border-l-2 border-gray-100 space-y-4">
                          {comment.replies.map((reply) => (
                            <div
                              key={reply.id}
                              className="bg-gray-50 rounded-lg p-3"
                            >
                              <div className="flex items-start gap-3 mb-2">
                                <img
                                  src={reply.author.avatar}
                                  alt={reply.author.name}
                                  className="w-8 h-8 rounded-full object-cover"
                                />
                                <div className="flex-1">
                                  <div className="flex items-center gap-2">
                                    <h4 className="font-medium text-gray-800">
                                      {reply.author.name}
                                    </h4>
                                  </div>
                                  <p className="text-xs text-gray-500">
                                    {formatDate(reply.createdAt)}
                                  </p>
                                </div>
                              </div>
                              <div className="mb-2">
                                <p className="text-gray-700 text-sm">
                                  {reply.content}
                                </p>
                              </div>
                              <div className="flex items-center gap-4 text-xs">
                                <button className="flex items-center gap-1 text-gray-500 hover:text-pink-500">
                                  <ThumbsUp size={12} />
                                  <span>{reply.likes}</span>
                                </button>
                                <button className="text-gray-500 hover:text-blue-500">
                                  Trả lời
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/4">
              {/* Related Threads */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-4 mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Chủ đề liên quan
                </h3>
                <div className="space-y-3">
                  {thread.relatedThreads.map((relatedThread) => (
                    <Link
                      key={relatedThread.id}
                      to={`/forum/thread/${relatedThread.id}`}
                      className="block bg-pink-50 hover:bg-pink-100 p-3 rounded-lg transition"
                    >
                      <h4 className="text-sm font-medium text-gray-800 line-clamp-2">
                        {relatedThread.title}
                      </h4>
                      <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <MessageCircle size={12} /> {relatedThread.comments}
                        </span>
                        <span className="flex items-center gap-1">
                          <Heart size={12} /> {relatedThread.views}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Category Info */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Về chuyên mục
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {thread.category} là nơi chia sẻ kinh nghiệm và thắc mắc về
                  giai đoạn đầu của thai kỳ.
                </p>
                <Link
                  to={`/forum?category=${encodeURIComponent(thread.category)}`}
                  className="text-pink-500 hover:text-pink-700 text-sm font-medium"
                >
                  Xem tất cả chủ đề →
                </Link>
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

export default ThreadDetail;
