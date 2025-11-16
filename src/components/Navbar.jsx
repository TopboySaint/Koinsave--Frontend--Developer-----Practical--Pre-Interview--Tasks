import { Link } from 'react-router-dom';
import { useState } from 'react';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
              <Link to="/signin" className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105">
                Sign In
              </Link>
            </div>

            <div className="md:hidden">
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