import { Switch, Route, Router } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Doctors from "@/pages/Doctors";
import Appointments from "@/pages/Appointments";
import PatientInfo from "@/pages/PatientInfo";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function AppRouter() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/doctors" component={Doctors} />
        <Route path="/appointments" component={Appointments} />
        <Route path="/patient-info" component={PatientInfo} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  // Use hash routing for GitHub Pages static hosting
  const isStatic = import.meta.env.VITE_STATIC_BUILD === 'true';
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        {isStatic ? (
          <Router hook={useHashLocation}>
            <AppRouter />
          </Router>
        ) : (
          <AppRouter />
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
