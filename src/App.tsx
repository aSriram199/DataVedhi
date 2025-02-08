import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/theme-provider';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Events from './components/Events';
import Blog from './components/Blog';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-white dark:bg-gray-900">
          <Navbar />
          <main>
            <Hero />
            <Events />
            <Blog />
            <About />
            <Contact />
          </main>
          <footer className="bg-gray-900 text-gray-400 py-8 text-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <p>© 2024 TechHub. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;