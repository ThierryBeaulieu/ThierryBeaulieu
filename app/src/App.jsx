import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ProjectPage from './pages/Projects';
import ExperiencePage from './pages/Experience';
import '../src/App.scss';

function App() {
  const routes = [
    { path: '/home', element: <HomePage /> },
    { path: '/projects', element: <ProjectPage /> },
    { path: '/experiences', element: <ExperiencePage /> },
    { path: '/', element: <HomePage /> },
  ];

  return (
    <div id='container'>
      <NavBar />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
