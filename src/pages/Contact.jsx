import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      <Navbar />
      
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Contact
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"> KoinSave</span>
          </h1>
          <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Get in touch with our team. We're here to help with all your banking needs and questions.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center hover:bg-white/15 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-white text-xl font-semibold mb-4">Call Us</h3>
              <p className="text-white/80 mb-2">Customer Service</p>
              <p className="text-green-400 font-semibold">+234 700 KOINSAVE</p>
              <p className="text-green-400 font-semibold">+234 700 564 6728</p>
              <p className="text-white/60 text-sm mt-2">24/7 Support Available</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center hover:bg-white/15 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-white text-xl font-semibold mb-4">Email Us</h3>
              <p className="text-white/80 mb-2">General Inquiries</p>
              <p className="text-green-400 font-semibold">support@koinsave.ng</p>
              <p className="text-white/80 mb-2 mt-4">Business Inquiries</p>
              <p className="text-green-400 font-semibold">business@koinsave.ng</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center hover:bg-white/15 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-white text-xl font-semibold mb-4">Visit Us</h3>
              <p className="text-white/80 mb-2">Head Office</p>
              <p className="text-green-400 font-semibold">Plot 1234, Ahmadu Bello Way</p>
              <p className="text-green-400 font-semibold">Victoria Island, Lagos</p>
              <p className="text-white/60 text-sm mt-2">Mon - Fri: 8AM - 6PM</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions (FAQs)
            </h2>
            <p className="text-lg text-white/70">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <h3 className="text-white text-lg font-semibold mb-3">How do I open a KoinSave account?</h3>
              <p className="text-white/80">
                You can open an account in minutes through our mobile app or website. Simply download the app, 
                provide your BVN, upload a valid ID, and follow the verification process.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <h3 className="text-white text-lg font-semibold mb-3">What are your transaction limits?</h3>
              <p className="text-white/80">
                Transaction limits vary by account type. Standard accounts have daily limits of ₦500,000 for transfers 
                and ₦100,000 for ATM withdrawals. Premium accounts enjoy higher limits.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <h3 className="text-white text-lg font-semibold mb-3">Is my money safe with KoinSave?</h3>
              <p className="text-white/80">
                Yes, your funds are protected by NDIC insurance up to ₦500,000. We also use bank-grade security 
                measures including 256-bit encryption and multi-factor authentication.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <h3 className="text-white text-lg font-semibold mb-3">How can I contact customer support?</h3>
              <p className="text-white/80">
                Our customer support is available 24/7 through phone (+234 700 KOINSAVE), email (support@koinsave.ng), 
                live chat in the app, or by visiting any of our branch locations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;