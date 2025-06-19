import { useState } from "react";
import { ThemeProvider } from "./components/theme-provider";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingScreen from "./components/loading";
import Customer from "./pages/customer";
import SmoothFollower from "./components/cursor";
import { Features } from "./pages/features";
import { Integrations } from "./pages/integretion";
import { UseCases } from "./pages/usecases";
import { Testimonials } from "./pages/testimonial";

function App() {
  const [done, setDone] = useState(false);
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-w-screen overflow-x-hidden">
        {done ? (
          <>
            <SmoothFollower />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
              <Customer />
              <Features />
              <Integrations />
              <UseCases />
              <Testimonials/>
            </BrowserRouter>
          </>
        ) : (
          <LoadingScreen onFinish={() => setDone(true)} />
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
