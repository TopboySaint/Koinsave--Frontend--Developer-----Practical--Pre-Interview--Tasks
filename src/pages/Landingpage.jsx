import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Footer from '../components/Footer';

const Landingpage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 dark:from-gray-950 dark:via-slate-900 dark:to-gray-950">
      <Navbar/>
      <Hero/>
      <Features/>
      <Footer/>
    </div>
  );
};

export default Landingpage;