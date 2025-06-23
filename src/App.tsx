
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import AIToolsDirectory from "./pages/AIToolsDirectory";
import LearningHub from "./pages/LearningHub";
import AIStreams from "./pages/AIStreams";
import Marketplace from "./pages/Marketplace";
import CommunityForum from "./pages/CommunityForum";
import AIAssistant from "./pages/AIAssistant";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/ai-tools" element={<AIToolsDirectory />} />
            <Route path="/learning-hub" element={<LearningHub />} />
            <Route path="/ai-streams" element={
              <ProtectedRoute>
                <AIStreams />
              </ProtectedRoute>
            } />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/community" element={
              <ProtectedRoute>
                <CommunityForum />
              </ProtectedRoute>
            } />
            <Route path="/ai-assistant" element={<AIAssistant />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
