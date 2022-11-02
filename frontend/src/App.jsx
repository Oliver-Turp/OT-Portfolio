import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useLayoutEffect } from "react";

import {
  Home__Nav,
  Home__Index,
  Home__About,
  Home__Contact,
  Home__Projects,
  Home__Services,
} from "./Home/Home__Exports";

import {
  Horizontal,
  DropDown,
  Hamburger,
  Carousel,
  Gallery,
  Plain,
  Multiline,
  Directory,
  Static,
  Toggle,
  MailTo,
  Form,
} from "./Sandbox/Examples/ExamplesExports";

import Error from "./Error";

import Home__Survey from "./Home/Components/Home__Survey";

function App() {
  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };

  return (
    <Router basename="/">
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home__Nav />}>
            <Route index element={<Home__Index />} />
            <Route path="about" element={<Home__About />} />
            <Route path="contact" element={<Home__Contact />} />
            <Route path="projects" element={<Home__Projects />} />
            <Route path="services" element={<Home__Services />} />
            <Route path="survey" element={<Home__Survey />} />
          </Route>
          {/* SANDBOX ROUTES */}
          {/* HEADERS */}
          <Route
            path="/sandbox/examples/header/horizontal"
            element={<Horizontal />}
          />
          <Route
            path="/sandbox/examples/header/dropdown"
            element={<DropDown />}
          />
          <Route
            path="/sandbox/examples/header/hamburger"
            element={<Hamburger />}
          />
          {/* IMAGE */}
          <Route path="/sandbox/examples/image/gallery" element={<Gallery />} />
          <Route
            path="/sandbox/examples/image/carousel"
            element={<Carousel />}
          />
          {/* CONTACT */}
          <Route path="/sandbox/examples/contact/mailto" element={<MailTo />} />
          <Route path="/sandbox/examples/contact/form" element={<Form />} />
          {/* FOOTER */}
          <Route path="/sandbox/examples/footer/plain" element={<Plain />} />
          <Route
            path="/sandbox/examples/footer/multiline"
            element={<Multiline />}
          />
          <Route
            path="/sandbox/examples/footer/directory"
            element={<Directory />}
          />
          {/* Theme */}
          <Route path="/sandbox/examples/theme/static" element={<Static />} />
          <Route path="/sandbox/examples/theme/toggle" element={<Toggle />} />
          {/* GENERAL ERROR PAGE */}
          <Route path="*" element={<Error />} />
        </Routes>
      </Wrapper>
    </Router>
  );
}

export default App;
