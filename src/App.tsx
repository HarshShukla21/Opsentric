import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Login from "./pages/Login.tsx";
import ForgotPassword from "./pages/ForgotPassword.tsx";
import WorkerLogin from "./pages/WorkerLogin.tsx";
import WorkerRegister from "./pages/WorkerRegister.tsx";
import WorkerPortal from "./pages/WorkerPortal.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import WorkerRequests from "./pages/admin/WorkerRequests.tsx";
import Workers from "./pages/admin/Workers.tsx";
import Clients from "./pages/admin/Clients.tsx";
import Attendance from "./pages/admin/Attendance.tsx";
import Salary from "./pages/admin/Salary.tsx";
import Billing from "./pages/admin/Billing.tsx";
import Reports from "./pages/admin/Reports.tsx";
import CMS from "./pages/admin/CMS.tsx";
import SettingsPage from "./pages/admin/Settings.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/worker/login" element={<WorkerLogin />} />
          <Route path="/worker/register" element={<WorkerRegister />} />
          <Route path="/worker/portal" element={<WorkerPortal />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin/worker-requests" element={<WorkerRequests />} />
          <Route path="/admin/workers" element={<Workers />} />
          <Route path="/admin/clients" element={<Clients />} />
          <Route path="/admin/attendance" element={<Attendance />} />
          <Route path="/admin/salary" element={<Salary />} />
          <Route path="/admin/billing" element={<Billing />} />
          <Route path="/admin/reports" element={<Reports />} />
          <Route path="/admin/cms" element={<CMS />} />
          <Route path="/admin/settings" element={<SettingsPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
