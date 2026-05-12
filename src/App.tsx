// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./components/Layout";
// import Index from "./pages/Index";
// import About from "./pages/About";
// import Services from "./pages/Services";
// import Values from "./pages/Values";
// import Brand from "./pages/Brand";
// import Contact from "./pages/Contact";
// import NotFound from "./pages/NotFound";
// import Blog from "./pages/Blog";
// import WhyUs from "./pages/WhyUs";


// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <BrowserRouter>
//         <Layout>
//           <Routes>
//             <Route path="/" element={<Index />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/services" element={<Services />} />
//             <Route path="/values" element={<Values />} />
//             <Route path="/brand" element={<Brand />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/blog" element={<Blog />} />
//             <Route path="/whyus" element={<WhyUs />} />
      
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//         </Layout>
//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;





import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import AdminLayout from "./components/AdminLayout"; // 👈 NEW
import ScrollToTop from "./components/ScrollToTop";

import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Values from "./pages/Values";
import Brand from "./pages/Brand";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import WhyUs from "./pages/WhyUs";
import Careers from "./pages/Careers";
import HomePage from "./components/home/Homepage";
import Demo from "./pages/demo";
import ArcaHero from "./components/home/Pintrest";

import Oursolution from "./pages/OurSolutions";
import ProjectsPage from "./pages/ProjectsPage";
import MissionValues from "./pages/MissionValues";
import WhatsAppFloat from "./WhatsAppFloat";
import ViewDetailsPage from "./pages/ViewDetailsPage";
import Login from "./pages/Login";
import ContactTable from "./pages/ContactTable";
import BlogComingSoon from "./pages/BlogComingSoon";
import CareersComingSoon from "./pages/CareersComingSoon";
import ChangePassword from "./pages/ForgotPassword";
import ProtectedRoute from "./test/ProtectedRoute";
import AdminBlogManager from "./components/AdminBlogManager"; // 👈 IMPORT ADMIN BLOG MANAGER
import CareersPage from "./pages/CareersComingSoon";
import AdminCareerManager from "./components/AdminCareerManager";
import AdminApplications from "./components/AdminApplications";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <BrowserRouter>
        <ScrollToTop />

        <Routes>

          {/* ✅ PUBLIC ROUTES */}
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<Index />} />
            <Route path="/Demo" element={<Demo />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/values" element={<Values />} />
            <Route path="/brand" element={<Brand />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/oursolution" element={<Oursolution />} />
            <Route path="/projectpage" element={<ProjectsPage />} />
            <Route path="/missionvalues" element={<MissionValues />} />
            <Route path="/viewdetailspage" element={<ViewDetailsPage />} />
            <Route path="/whyus" element={<WhyUs />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/careerscomingsoon" element={<CareersPage />} />
            <Route path="/blogcomingsoon" element={<BlogComingSoon />} />
            <Route path="/hh" element={<ArcaHero />} />
          </Route>

          {/* ✅ ADMIN ROUTES */}
          <Route element={<AdminLayout />}>
            <Route path="/admin" element={<Login />} />
            
            {/* Admin Blog Management - Protected */}
            <Route
              path="/admin/blog"
              element={
                <ProtectedRoute>
                  <AdminBlogManager />
                </ProtectedRoute>
              }
            />

            <Route
  path="/admin/applications"
  element={
    <ProtectedRoute>
      <AdminApplications />
    </ProtectedRoute>
  }
/>

            <Route
  path="/admin/careers"
  element={
    <ProtectedRoute>
      <AdminCareerManager />
    </ProtectedRoute>
  }
/>
            
            {/* Contacts Management - Protected */}
            <Route
              path="/contacts"
              element={
                <ProtectedRoute>
                  <ContactTable />
                </ProtectedRoute>
              }
            />
            
            {/* Forgot Password */}
            <Route path="/forgot-password" element={<ChangePassword />} />
          </Route>

          {/* ✅ 404 */}
          <Route path="*" element={<NotFound />} />

        </Routes>

        <WhatsAppFloat />

      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;