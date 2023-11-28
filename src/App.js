import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import HotelListing1 from "./pages/HotelListing1";
import HotelListing from "./pages/HotelListing";
import HotelSearch from "./pages/HotelSearch";
import FlightsSearch from "./pages/FlightsSearch";
import FlightListing from "./pages/FlightListing";
import FlightDetailPage from "./pages/FlightDetailPage";
import BookingDetail2 from "./pages/BookingDetail2";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/hotel-listing-1":
        title = "";
        metaDescription = "";
        break;
      case "/hotel-listing":
        title = "";
        metaDescription = "";
        break;
      case "/hotel-search":
        title = "";
        metaDescription = "";
        break;
      case "/flights-search":
        title = "";
        metaDescription = "";
        break;
      case "/flight-listing":
        title = "";
        metaDescription = "";
        break;
      case "/flight-detail-page":
        title = "";
        metaDescription = "";
        break;
      case "/booking-detail-2":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/hotel-listing-1" element={<HotelListing1 />} />
      <Route path="/hotel-listing" element={<HotelListing />} />
      <Route path="/hotel-search" element={<HotelSearch />} />
      <Route path="/flights-search" element={<FlightsSearch />} />
      <Route path="/flight-listing" element={<FlightListing />} />
      <Route path="/flight-detail-page" element={<FlightDetailPage />} />
      <Route path="/booking-detail-2" element={<BookingDetail2 />} />
    </Routes>
  );
}
export default App;
