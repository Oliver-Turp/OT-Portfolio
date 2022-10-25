import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { useAuthContext } from "./contexts/AuthProvider";
import ContentChooser from "./components/ContentChooser";
import Projects from "./components/Projects";
import ProjectModal from "./components/ProjectsModal";

function App() {
  const { token } = useAuthContext();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            // redirect  user to login page if there's no token
            token === "" ? (
              <Navigate to="/login" />
            ) : (
              <Navigate to="/dashboard" />
            )
            // token === null || token === undefined || token === '' ? <Login /> : <Dashboard />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<ContentChooser />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/new" element={<ProjectModal />} />
          <Route path="projects/edit" element={<ProjectModal />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
