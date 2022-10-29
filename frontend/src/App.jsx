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
  PM__Comments,
  PM__Contact,
  PM__Discord,
  PM__Friends,
  PM__Home,
  PM__Patreon,
  PM__TCG,
  PM__WOF,
  PM__YouTube,
  PM__Nav,
} from "./Sandbox/Phoenix_Media/PhoenixMedia__Exports";

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
          </Route>
          {/* PM ROUTES */}
          <Route path="/sandbox/projects/phoenixmedia" element={<PM__Nav />}>
            <Route index element={<PM__Home />} />
            <Route path="comments" element={<PM__Comments />} />
            <Route path="contact" element={<PM__Contact />} />
            <Route path="discord" element={<PM__Discord />} />
            <Route path="friends" element={<PM__Friends />} />
            <Route path="patreon" element={<PM__Patreon />} />
            <Route path="turpochargedgaming" element={<PM__TCG />} />
            <Route path="walloffame" element={<PM__WOF />} />
            <Route path="youtube" element={<PM__YouTube />} />
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
