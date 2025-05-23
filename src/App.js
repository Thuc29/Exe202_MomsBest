import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import Header from "./component/layouts/Header";
import Footer from "./component/layouts/Footer";
import HomePage from "./component/pages/HomePage";
import NotFound from "./component/pages/NotFound";
import Products from "./component/pages/Products";
import Blog from "./component/pages/Blog";
import ScrollToTop from "./component/ScrollTop";
import Forum from "./component/pages/Forum";
import ThreadDetail from "./component/pages/ThreadDetail";
import Library from "./component/pages/Library";
import ArticleDetail from "./component/pages/ArticleDetail";
import ProductDetail from "./component/pages/ProductDetail";
import Checkout from "./component/pages/Checkout";
import { CartProvider } from "./component/context/CartContext";
import LoginPage from "./component/pages/LoginPage";
import ProfilePage from "./component/pages/ProfilePage";
import ChatbotButton from "./component/ui/ChatbotButton";
import ScrollToTopButton from "./component/ui/ScrollToTopButton";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/forum/thread/:threadId" element={<ThreadDetail />} />
          <Route path="/forum/library" element={<Library />} />
          <Route
            path="/forum/library/article/:articleId"
            element={<ArticleDetail />}
          />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <ChatbotButton />
        <ScrollToTopButton />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
