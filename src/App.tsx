
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AIToolsDirectory from "./pages/AIToolsDirectory";
import LearningHub from "./pages/LearningHub";
import AIStreams from "./pages/AIStreams";
import Marketplace from "./pages/Marketplace";
import CommunityForum from "./pages/CommunityForum";
import AIAssistant from "./pages/AIAssistant";
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
          <Route path="/ai-tools" element={<AIToolsDirectory />} />
          <Route path="/learning-hub" element={<LearningHub />} />
          <Route path="/ai-streams" element={<AIStreams />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/community" element={<CommunityForum />} />
          <Route path="/ai-assistant" element={<AIAssistant />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
