import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/theme-provider';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Events from './components/Events';
import About from './components/About';
import Contact from './components/Contact';
import Achievements from './components/Achievements';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-white dark:bg-gray-900">
          <Navbar />
          <main>
            <Hero />
            <Events />
            <About />
            <Achievements />
            <Contact />
          </main>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;