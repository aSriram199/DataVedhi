import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/theme-provider';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Events from './components/Events';
import About from './components/About';
import Contact from './components/Contact';
import OurTeam from './pages/OurTeam'; 
import UpcomingEvents from './pages/UpcomingEvents';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-white dark:bg-gray-900">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <main>
                <Hero />
                <Events />
                <About />
                <Contact />
              </main>
            } />
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="/upcoming-events" element={<UpcomingEvents />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
