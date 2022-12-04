import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import { useAuthContext } from './contexts/AuthProvider';
import ContentChooser from './components/ContentChooser';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectsModal';
import { useEffect, useState, useCallback } from 'react';
import { TOKEN_STATE, useCheckToken } from './hooks/useCheckToken';
import PageNotFound from './pages/PageNotFound';
import LoadingScreen from './components/LoadingScreen';
import ConditionalRoute from './components/ConditionalRoute';

function App() {

  const { isCheckingToken, isTokenValid, retryCheckToken } = useCheckToken();
  const { token } = useAuthContext();


  useEffect(() => {
    retryCheckToken()
  }, [token])


  return (
    <>
      <Routes>
        <Route path='/' element={(isCheckingToken === true || isTokenValid === TOKEN_STATE.NOT_SET_YET) ? <LoadingScreen /> : isTokenValid === TOKEN_STATE.VALID ? <Navigate to='/dashboard' /> : <Navigate to='/login' />} />

        <Route path='/login' element={
          isCheckingToken === true ? <LoadingScreen /> : (
            <ConditionalRoute renderIf={isTokenValid === TOKEN_STATE.INVALID} go={{ to: '/dashboard', if: isTokenValid === TOKEN_STATE.VALID }}>
              <Login />
            </ConditionalRoute>
          )} />

        <Route path="/dashboard" element={
          isCheckingToken === true ? <LoadingScreen /> : (
            <ConditionalRoute renderIf={isTokenValid === TOKEN_STATE.VALID}
              go={{ to: '/login', if: isTokenValid === TOKEN_STATE.INVALID }}
            >
              <Dashboard isTokenValid={isTokenValid} />
            </ConditionalRoute>)
        }>
          <Route index element={<ContentChooser />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/new" element={<ProjectModal />} />
          <Route path="projects/edit" element={<ProjectModal />} />
        </Route>

        <Route path='*' element={<PageNotFound />} />

      </Routes >
    </>
  );
}

export default App;
