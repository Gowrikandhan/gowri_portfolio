import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ShoppingMallProject from "./pages/ShoppingMallProject";
import CoffeeShopProject from "./pages/CoffeeShopProject";
import FlowBoardProjectManager from "./pages/FlowBoardProjectManager";
import SyncSpace from './pages/SyncSpace';
import NexusSocialPlatform from './pages/NexusSocialPlatform';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/project/shopping-mall" element={<ShoppingMallProject />} />
          <Route path="/project/coffee-shop" element={<CoffeeShopProject />} />
          <Route path="/project/flowboard-project-manager" element={<FlowBoardProjectManager />}/>
          <Route path="/project/syncspace" element={<SyncSpace />}/>
          <Route path="/project/nexus-social-platform" element={<NexusSocialPlatform />}/>

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
