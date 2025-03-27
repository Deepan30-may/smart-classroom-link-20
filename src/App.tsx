
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Pages
import Welcome from "./pages/Welcome";
import TeacherDashboard from "./pages/TeacherDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import SubjectList from "./pages/SubjectList";
import SubjectDetails from "./pages/SubjectDetails";
import ClassSelection from "./pages/ClassSelection";
import StudentPerformance from "./pages/StudentPerformance";
import ChatSupport from "./pages/ChatSupport";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/teacher" element={<TeacherDashboard />} />
            <Route path="/teacher/class/:classId" element={<ClassSelection />} />
            <Route path="/student" element={<StudentDashboard />} />
            <Route path="/student/subjects" element={<SubjectList />} />
            <Route path="/student/subjects/:subjectId" element={<SubjectDetails />} />
            <Route path="/student/performance" element={<StudentPerformance />} />
            <Route path="/chat" element={<ChatSupport />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
