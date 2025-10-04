import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/navbar.jsx';
import Home from './pages/Home.jsx';
import { ThemeProvider } from './components/theme-provider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <Navbar />
      <Home />
    </ThemeProvider>
  </StrictMode>,
)
