import { useState, createContext, useContext } from 'react';
import Navbar from './components/navbar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Contacts from './pages/Contacts.jsx';

// Create Navigation Context
const NavigationContext = createContext();

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within NavigationProvider');
  }
  return context;
};

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigate = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'portfolio':
        return <Portfolio />;
      case 'contacts':
        return <Contacts />;
      default:
        return <Home />;
    }
  };

  return (
    <NavigationContext.Provider value={{ currentPage, navigate }}>
      <Navbar />
      {renderPage()}
    </NavigationContext.Provider>
  );
}

export default App;
