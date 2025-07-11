import { Routes, Route, useLocation } from "react-router-dom";
import TopBar from "./Components/TopBar";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import ProductCard from "./Components/ProductCard";
import CategoryCarousel from "./Components/CategoryCarousel";
import FragranceSection from "./Components/FragranceSection";
import SkinInsights from "./Components/SkinInsights";
import ConcernSection from "./Components/ConcernSection";
import Footer from "./Components/Footer";
import Launches from "./Components/Launches";
import CareSection from "./Components/CareSection";
import CustomerReviews from "./Components/CustomerReviews";
import ViewAllProducts from "./Pages/ViewAllProducts";
import TryNow from "./Pages/TryNow";
import ChatBot from "./Pages/ChatBot";
import LoginPage from "./Pages/LoginPage";
import HealthConsultation from "./Components/HealthConsultation";
import BookAppointment from "./Components/BookAppointment";
import HealthArticles from "./Components/HealthArticles";
import ErrorBoundary from "./Components/ErrorBoundary"; // make sure this file exists
import "./App.css";

function App() {
  const location = useLocation();
  const isChatbotPage = location.pathname === "/chatbot";

  return (
    <div className="App">
      {!isChatbotPage && <TopBar />}
      {!isChatbotPage && <Navbar />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <ProductCard />
              <SkinInsights />
              <CategoryCarousel />
              <ConcernSection />
              <HealthConsultation />
              <BookAppointment />
              <HealthArticles />
              {/* <Launches /> */}
              <FragranceSection />
              <CareSection />
              <CustomerReviews />
            </>
          }
        />
        <Route path="/products" element={<ViewAllProducts />} />
        <Route path="/try-now" element={<TryNow />} />
        <Route
          path="/chatbot"
          element={
            <ErrorBoundary>
              <ChatBot />
            </ErrorBoundary>
          }
        />
        <Route path="/login" element={<LoginPage />} />
      </Routes>

      {!isChatbotPage && <Footer />}
    </div>
  );
}

export default App;
