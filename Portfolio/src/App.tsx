import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ShoppingMallProject from "./pages/ShoppingMallProject";
import CoffeeShopProject from "./pages/CoffeeShopProject";

const queryClient = new QueryClient();

const App = () => {
  return (
    <main style={{ padding: "40px", textAlign: "center" }}>
      <h1>My Portfolio 🚀</h1>
      <p>React + Vite + Tailwind working correctly</p>
    </main>
  );
};

export default App;
