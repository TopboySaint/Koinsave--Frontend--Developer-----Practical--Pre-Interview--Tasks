import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <>
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Nigeria's Premier
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"> Digital Bank</span>
          </h1>
          <p className="text-xl md:text-xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Experience next-generation banking with KoinSave. Secure, innovative, and built for modern Nigeria. 
            Your money, your control, your future. 
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/signup" className="bg-gradient-to-r from-green-500 to-green-600 text-white px-10 py-3 rounded-xl font-semibold text-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-2xl">
              Open Your Account
            </Link>
          </div>
          
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-white/60">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>CBN Licensed</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>NDIC Insured</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero