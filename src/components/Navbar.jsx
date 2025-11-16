import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <>
      <nav className="fixed w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">K</span>
                </div>
                <span className="text-white text-xl font-bold">KoinSave</span>
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link to="/services" className="text-white/80 hover:text-white transition-colors">Services</Link>
              <Link to="/about" className="text-white/80 hover:text-white transition-colors">About</Link>
              <Link to="/contact" className="text-white/80 hover:text-white transition-colors">Contact</Link>
              <button
                onClick={toggleDarkMode}
                className="text-white/80 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
              <Link to="/signin" className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105">
                Sign In
              </Link>
            </div>

            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={toggleDarkMode}
                className="text-white/80 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
              <button 
                className="text-white p-2"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
                  </svg>
                )}
              </button>
            </div>
          </div>

          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white/10 backdrop-blur-md rounded-lg mt-2 border border-white/20">
                <Link 
                  to="/services" 
                  className="block px-3 py-3 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </Link>
                <Link 
                  to="/about" 
                  className="block px-3 py-3 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                <Link 
                  to="/contact" 
                  className="block px-3 py-3 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
                <Link 
                  to="/signin" 
                  className="block mt-4 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-3 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 text-center font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  Sign In
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}

export default Navbar