import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Hero from "./components/ui/Hero";
import ProductGrid from "./components/ui/ProductGrid";
import Subscription from "./components/ui/Subscription";
import AboutSection from "./pages/public/About";
import LocationPage from "./pages/public/Location";
import PastelesPage from "./pages/public/Pasteles";

const Home = () => (
  <>
    <Hero />
    <ProductGrid />
    <Subscription />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>

          <Route index element={<Home />} />
          <Route path="about" element={<AboutSection />} />
          <Route path="ubicanos" element={<LocationPage />} />
          <Route path="pasteles" element={<PastelesPage />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;