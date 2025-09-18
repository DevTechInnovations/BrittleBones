import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"; 

import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";  
import GetInvolved from "./pages/GetInvolved";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Donate from "./pages/Donate";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";
import VolunteerForm from "./pages/VolunteerForm";
import Donation from "./components/ItemDonationPage";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>  
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public routes wrapped in Layout */}
            <Route element={<Layout />}>
              <Route index element={<Home />} />   {/* "/" */}
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="get-involved" element={<GetInvolved />} />
              <Route path="events" element={<Events />} />
              <Route path="gallery" element={<Gallery />} />
              <Route path="donate" element={<Donate />} />
              <Route path="volunteer" element={<VolunteerForm />} />
              <Route path="item-donation" element={<Donation />} />
            </Route>

            {/* Admin routes (no Layout) */}
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />

            {/* Catch-all 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
