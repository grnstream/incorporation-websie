import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import HomePage from "./pages/home.page";
import MainLayout from "./layouts/main.layout";
import FloatingContactWidget from "./components/custom/FloatingActionButtons";
import AboutUsPage from "./pages/about.page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Navigate to="/home" />} replace />
          <Route path="home" element={<HomePage />} />
          <Route path="about" element={<AboutUsPage />} />
        </Route>
      </Routes>
      <FloatingContactWidget />
    </BrowserRouter>
  );
}

export default App;
