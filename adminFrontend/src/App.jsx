import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import { useAuthContext } from './contexts/AuthProvider';
import ContentChooser from './components/ContentChooser';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectsModal';
import { useEffect, useState, useCallback } from 'react';
import { useCheckToken } from './hooks/useCheckToken';
import PageNotFound from './pages/PageNotFound';
import LoadingScreen from './components/LoadingScreen';
import PrivateRoute from './components/PrivateRoute';
import { useSessionStorage } from './hooks/useSessionStorage';

function App() {
  const { getAdminInfo, token } = useAuthContext();
  const navigate = useNavigate();

  const [isAuthenticated, setIsAuthenticated] = useSessionStorage("IS_AUTHENTICATED", false)


  // const { isChecking, isValid } = useCallback(
  //   () => {
  //     useCheckToken();
  //   },
  //   [],
  // )


  const {isChecking, isValid} = useCheckToken();

  useEffect(() => {

    if (token === "") {
      setIsAuthenticated(false)
    }

  }, [token])

  useEffect(() => {
    if (isValid === true) {
      setIsAuthenticated(true)
    }
  }, [isValid])



  useEffect(() => {
    if (isAuthenticated === true) {
      navigate({ pathname: '/dashboard' })
    } else {

      navigate({ pathname: '/login' })
    }
  }, [isAuthenticated])


  useEffect(() => {
    console.log("isAuthenticated: ", isAuthenticated)
  })



  return (
    <Routes>

      {/* {isAuthenticated === false && <Route path='/' element={<Navigate to={'/login'}/>} />} */}
      {isAuthenticated === false && <Route path='/login' element={<Login setIsAuthenticated={setIsAuthenticated} />} />}

      {isAuthenticated === true && <Route path='/' element={<Navigate to="/dashboard" />} />}

      {isAuthenticated === false && <Route path='/' element={isChecking ? <LoadingScreen /> : isValid === false ? <Navigate to={'/login'} replace /> : <Navigate to="/dashboard" replace />} />}
      <Route path="/dashboard" element={(
        <PrivateRoute isAuthenticated={isAuthenticated} >
          <Dashboard />
        </PrivateRoute>)
      }>
        <Route index element={<ContentChooser />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/new" element={<ProjectModal />} />
        <Route path="projects/edit" element={<ProjectModal />} />
      </Route>

      <Route path='*' element={<PageNotFound />} />

    </Routes >
  );
}

export default App;
