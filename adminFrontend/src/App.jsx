import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import { useAuthContext } from './contexts/AuthProvider';
import ContentChooser from './components/ContentChooser';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectsModal';
import { useEffect } from 'react';
import RingLoader from 'react-spinners/RingLoader';
import { useCheckToken } from './hooks/useCheckToken';

function App() {
  const { getAdminInfo } = useAuthContext();
  const { isChecking, isValid } = useCheckToken();

  useEffect(() => {
    console.log('isValid: ' + isValid);
  });

  // if (!isOnline) {
  //   return (
  //     <div
  //       style={{
  //         width: '100%',
  //         height: '100%',
  //         display: 'flex',
  //         flexDirection: 'column',
  //         justifyContent: 'center',
  //         alignItems: 'center',
  //         gap: '1rem',
  //       }}
  //     >
  //       <p
  //         style={{
  //           color: 'var(--secondary-clr-dark)',
  //           fontSize: '2rem',
  //         }}
  //       >
  //         No Internet ...{' '}
  //       </p>
  //     </div>
  //   );
  // }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            // redirect  user to login page if there's no token

            isChecking === true ? (
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '1rem',
                }}
              >
                <p
                  style={{
                    color: 'var(--secondary-clr-dark)',
                    fontSize: '2rem',
                  }}
                >
                  Please Wait...
                </p>
                <RingLoader
                  color={'var(--secondary-clr)'}
                  loading={true}
                  cssOverride={{ backgroundColor: 'white' }}
                />
              </div>
            ) : isValid === true ? (
              <Navigate to="/dashboard" />
            ) : (
              <>
                {console.log('invalidating token')}
                {/* {invalidateToken()} */}
                <Navigate to="/login" />
              </>
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
