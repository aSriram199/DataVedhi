import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/theme-provider';
import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Events from './components/Events';

const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const UpcomingEvents = lazy(() => import('./components/UpcomingEvents'));
const OurTeam = lazy(() => import('./components/OurTeam'));

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter basename="/DataVedhi">
        <div className="relative min-h-screen h-screen bg-white dark:bg-gray-900 overflow-y-auto overscroll-none">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <main className="relative w-full">
                <Hero />
                <Suspense 
                  fallback={
                    <div className="flex items-center justify-center min-h-[400px]">
                      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900 dark:border-white"></div>
                    </div>
                  }
                >
                  <div className="flex flex-col">
                    <Events />
                    <About />
                    <Contact />
                  </div>
                </Suspense>
              </main>
            } />
            <Route path="/upcoming-events" element={
              <Suspense fallback={
                <div className="flex items-center justify-center min-h-screen">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900 dark:border-white"></div>
                </div>
              }>
                <UpcomingEvents />
              </Suspense>
            } />
            <Route path="/our-team" element={
              <Suspense fallback={
                <div className="flex items-center justify-center min-h-screen">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900 dark:border-white"></div>
                </div>
              }>
                <OurTeam />
              </Suspense>
            } />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;