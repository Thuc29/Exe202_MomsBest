import React, { useState } from "react";

const ChatbotButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Nút Chatbot nổi */}
      <button
        className="fixed z-50 bottom-6 right-6 bg-gradient-to-tr from-pink-100 via-pink-300 to-pink-500 hover:scale-110 active:scale-95 transition-transform duration-200 shadow-2xl hover:shadow-pink-300/60 text-white rounded-full w-16 h-16 flex items-center justify-center text-4xl focus:outline-none border-4 border-pink-600/70 group"
        onClick={() => setOpen((o) => !o)}
        aria-label="Mở Chatbot"
      >
        <span className="inline-block animate-bounce group-hover:animate-spin">
          🤖
        </span>
      </button>
      {/* Khung chat */}
      <div
        className={`fixed z-50 bottom-6 right-6 w-96  max-w-[90vw] bg-white rounded-3xl shadow-2xl border border-pink-200 flex flex-col overflow-hidden transition-all duration-500 ${
          open
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "translate-y-10 opacity-0 pointer-events-none"
        } animate-fade-in`}
        style={{ minHeight: open ? 500 : 0 }}
      >
        <div className="bg-gradient-to-r from-pink-500/80 via-pink-400/80 to-pink-300/80 text-white px-5 py-3 flex justify-between items-center rounded-t-3xl shadow-md">
          <span className="font-semibold tracking-wide">Chatbot hỗ trợ</span>
          <button
            onClick={() => setOpen(false)}
            className="text-white text-2xl font-bold hover:bg-pink-400/30 rounded-full w-8 h-8 flex items-center justify-center transition-colors"
            aria-label="Đóng Chatbot"
          >
            ×
          </button>
        </div>
        <div className="flex-1 p-5 text-base text-gray-700 bg-gradient-to-b from-white via-pink-50 to-white">
          <p className="mb-2">Xin chào! Mình có thể giúp gì cho bạn?</p>
          <ul className="mt-2 list-disc list-inside text-pink-600 space-y-1">
            <li>Hỏi đáp nhanh về mẹ & bé</li>
            <li>Hướng dẫn sử dụng website</li>
            <li>Tư vấn sản phẩm</li>
          </ul>
        </div>
        <div className="p-3 border-t flex bg-white">
          <input
            type="text"
            className="flex-1 border border-pink-200 rounded-l-2xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all text-gray-700 bg-pink-50 placeholder:text-pink-300"
            placeholder="Nhập câu hỏi..."
          />
          <button className="bg-gradient-to-tr from-pink-400 to-pink-500 text-white px-5 py-2 rounded-r-2xl font-semibold shadow hover:from-pink-500 hover:to-pink-600 transition-all disabled:opacity-60">
            Gửi
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatbotButton;
