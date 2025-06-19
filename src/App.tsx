import { useState } from "react";
import { ThemeProvider } from "./components/theme-provider";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingScreen from "./components/loading";
import Customer from "./pages/customer";

function App() {
  const [done, setDone] = useState(false);
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="min-w-screen overflow-x-hidden">
        {done ? (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
            <Customer />
          </BrowserRouter>
        ) : (
          <LoadingScreen onFinish={() => setDone(true)} />
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
