import { Routes, Route } from 'react-router-dom';
import ProductProvider from './contexts/ProductProvider';
import HomePage from './pages/Home';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './App.css';
import ProjectPage from './pages/Projects';
import ExperiencePage from './pages/Experience';

function App() {
  const routes = [
    { path: '/home', element: <HomePage /> },
    { path: '/projects', element: <ProjectPage /> },
    { path: '/experiences', element: <ExperiencePage /> },
    { path: '/', element: <HomePage /> },
  ];

  return (
    <div id='container'>
      <ProductProvider>
        <NavBar />
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
        <Footer />
      </ProductProvider>
    </div>
  );
}

export default App;
