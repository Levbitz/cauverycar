import { Routes, Route } from "react-router-dom";
// import "./App.css";
// import AlertModal from "./components/AlertModal/AlertModal";

import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from "./lib/ScrollTop/ScrollTop";
import Blog from "./OtherPages/Blog/Blog";
import OurTeam from "./OtherPages/OurTeam/OurTeam";
import PrivacyPolicy from "./OtherPages/PrivacyPolicy/PrivacyPolicy";
import SingleBlogDetail from "./OtherPages/SingleBlogDetail/SingleBlogDetail";
import CarCategory from "./Pages/CarCategory/CarCategory";
import ContactPage from "./Pages/ContactPage/ContactPage";
// import AuthProvider from "./lib/Context/auth";
// import PrivateRoute from "./lib/PrivateRoute/PrivateRoute";
// import BottomMegaService from "./Pages/BottomMegaService/BottomMegaService";
// import Category from "./Pages/Category/Category";
// import ContactPage from "./Pages/ContactPage/ContactPage";
// import Details from "./Pages/Details/Details";
import HomePage from "./Pages/HomePage/HomePage";
import SingleCar from "./Pages/SingleCar/SingleCar";

import AuthProvider from "./lib/AuthContext/auth";
import LoginPage from "./Pages/LoginPage/LoginPage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import PrivateRoute from "./lib/PrivateRoute/PrivateRoute";
import PostAd from "./Pages/PostAd/PostAd";
import PhotoUpload from "./Pages/PhotoUpload/PhotoUpload";
import Promote from "./Pages/Promote/Promote";
import Profile from "./Pages/Profile/Profile";
import AboutPage from "./Pages/AboutPage/AboutPage";
import GallaryPage from "./Pages/GallaryPage/GallaryPage";
import BrandPage from "./Pages/BrandPage/BrandPage";
import EditAdInfo from "./Pages/EditAdInfo/EditAdInfo";
import PhotoEdit from "./Pages/PhotoEdit/PhotoEdit";
import SearchPage from "./Pages/SearchPage/SearchPage";
import MegaCategories from "./Pages/MagaCategories/MageCategories";

function App() {
  return (
    <>
      <AuthProvider>
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="single_car/:id" element={<SingleCar />} />
          <Route path="/team" element={<OurTeam />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/single_blog" element={<SingleBlogDetail />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy_policy" element={<PrivacyPolicy />} />
          <Route
            path="/category/:categoryUrl/:subCategoryUrl"
            element={<CarCategory />}
          />
          <Route path="/admin" element={<LoginPage />} />
          <Route path="/brand/:name" element={<BrandPage />} />
          <Route path="/q/:item" element={<SearchPage />} />

          <Route path="/create-admin" element={<PrivateRoute />}>
            <Route path="/create-admin" element={<RegisterPage />} />
          </Route>
          <Route path="/post_ad" element={<PrivateRoute />}>
            <Route path="/post_ad" element={<PostAd />} />
          </Route>
          <Route path="/photo_upload" element={<PrivateRoute />}>
            <Route path="/photo_upload" element={<PhotoUpload />} />
          </Route>

          <Route path="/promote/:id" element={<PrivateRoute />}>
            <Route path="/promote/:id" element={<Promote />} />
          </Route>
          <Route path="/edit/:id" element={<EditAdInfo />}>
            <Route path="/edit/:id" element={<EditAdInfo />} />
          </Route>
          <Route path="/edit_img/:id" element={<PhotoEdit />}>
            <Route path="/edit_img/:id" element={<PhotoEdit />} />
          </Route>

          <Route path="/profile" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>

          <Route path="/about" element={<AboutPage />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/gallary" element={<GallaryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cat/:id" element={<MegaCategories />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
