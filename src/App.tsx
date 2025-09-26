import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Pricing from "./pages/Pricing";
import SetupGuides from "./pages/SetupGuides";
import ResellerProgram from "./pages/ResellerProgram";
import AffiliateProgram from "./pages/AffiliateProgram";
import Channels from "./pages/Channels";
import LifetimeSubscription from "./pages/LifetimeSubscription";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/setup-guides" element={<SetupGuides />} />
          <Route path="/reseller" element={<ResellerProgram />} />
          <Route path="/affiliate" element={<AffiliateProgram />} />
          <Route path="/channels" element={<Channels />} />
          <Route path="/lifetime" element={<LifetimeSubscription />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
