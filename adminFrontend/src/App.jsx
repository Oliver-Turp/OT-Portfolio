import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import { useAuthContext } from './contexts/AuthProvider';
import ContentChooser from './components/ContentChooser';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectsModal';
import { useEffect, useState } from 'react';
import { useCheckToken } from './hooks/useCheckToken';
import PageNotFound from './pages/PageNotFound';
import LoadingScreen from './components/LoadingScreen';
import { useSessionStorage } from './hooks/useSessionStorage'

function App() {
  const { getAdminInfo, token } = useAuthContext();
  const { isChecking, isValid } = useCheckToken();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    console.log('isValid: ' + isValid);
  }, [isValid, isChecking]);


  useEffect(() => {
    if (token === "" || isValid === false || isValid === undefined) {
      setIsAuthenticated(false)
    }else if (isValid === true){
      setIsAuthenticated(true)
    }
  }, [token, isValid])

  useEffect(() => {
    console.log("isAuthenticated: ", isAuthenticated)
    if (isAuthenticated === true) {
      navigate({ pathname: '/' })
    }
  }, [isAuthenticated])


  if (isAuthenticated === false) {
    return (
      <Routes>
        <Route path='/' element={isChecking ? <LoadingScreen /> : <Navigate to="/login" />} />
        <Route path='/login' element={<Login setIsAuthenticated={(value) => setIsAuthenticated(value)} />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    )
  } else {

    return (
      <Routes>
        <Route
          path="/"
          element={
            <Navigate to="/dashboard" />
          }
        />

        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<ContentChooser />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/new" element={<ProjectModal />} />
          <Route path="projects/edit" element={<ProjectModal />} />
        </Route>

        <Route path='*' element={<PageNotFound />} />
      </Routes>
    );
  }
}

export default App;
