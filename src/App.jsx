import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import HomePage from "./pages/home.page";
import MainLayout from "./layouts/main.layout";
import FloatingContactWidget from "./components/custom/FloatingActionButtons";
import AboutUsPage from "./pages/about.page";
import ContactPage from "./pages/contact.page";
import ServicesPage from "./pages/services.page";
import PrivacyPolicyPage from "./pages/privacy-policy.page";
import RefundPolicyPage from "./pages/refund-policy.page";
import TermsAndConditionsPage from "./pages/terms-and-conditions.page";
import IncoBotPage from "./pages/incobot.page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Navigate to="/home" />} replace />
          <Route path="home" element={<HomePage />} />
          <Route path="about" element={<AboutUsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="refund-policy" element={<RefundPolicyPage />} />
          <Route path="terms-and-conditions" element={<TermsAndConditionsPage />} />
          <Route path="incobot" element={<IncoBotPage />} />
        </Route>
      </Routes>
      <FloatingContactWidget />
    </BrowserRouter>
  );
}

export default App;
