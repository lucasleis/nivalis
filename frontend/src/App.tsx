import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollProvider } from "./components/scroll/ScrollProvider";
import { ThemeProvider } from "./components/theme/ThemeProvider";

import AppShell from "./AppShell";

// Pages
import Home from "./pages/Home";

// Case Studies
import MvpBurgersCaseStudy from "./components/pages/case-study/mvp-burgers";
import LupaCaseStudy from "./components/pages/case-study/lupa";
import PagosCaseStudy from "./components/pages/case-study/pagos";

export default function App() {
  return (
    <ThemeProvider>
      <ScrollProvider>
        <BrowserRouter>
          <Routes>

            {/* Layout wrapper */}
            <Route element={<AppShell />}>

              {/* Home */}
              <Route path="/" element={<Home />} />

              {/* Case Studies */}
              <Route path="/case-study/mvp-burgers" element={<MvpBurgersCaseStudy />} />
              <Route path="/case-study/lupa" element={<LupaCaseStudy />} />
              <Route path="/case-study/pagos" element={<PagosCaseStudy />} />

            </Route>

          </Routes>
        </BrowserRouter>
      </ScrollProvider>
    </ThemeProvider>
  );
}
