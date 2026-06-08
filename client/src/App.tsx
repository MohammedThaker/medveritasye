import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Research from "./pages/Research";
import Updates from "./pages/Updates";
import ServiceDetail from "./pages/ServiceDetail";
import ResearchDetail from "./pages/ResearchDetail";
import UpdateDetail from "./pages/UpdateDetail";
import Contact from "./pages/Contact";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/services/:serviceId" component={ServiceDetail} />
      <Route path="/research" component={Research} />
      <Route path="/research/:researchId" component={ResearchDetail} />
      <Route path="/updates" component={Updates} />
      <Route path="/updates/:updateId" component={UpdateDetail} />
      <Route path="/contact" component={Contact} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
