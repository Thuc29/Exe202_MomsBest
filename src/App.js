import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import Header from "./component/layouts/Header";
import Footer from "./component/layouts/Footer";
import ServiceMother from "./component/pages/ServiceMother";
import Doctors from "./component/pages/Doctors";
import Contact from "./component/pages/Contact";
import HomePage from "./component/pages/HomePage";
import NotFound from "./component/pages/NotFound";
import Products from "./component/pages/Products";
import ServiceBaby from "./component/pages/ServiceBaby";
import ServiceDetails from "./component/pages/ServiceDetails";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/mother" element={<ServiceMother />} />
        <Route path="/services/baby" element={<ServiceBaby />} />
        <Route path="/services/details" element={<ServiceDetails />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
