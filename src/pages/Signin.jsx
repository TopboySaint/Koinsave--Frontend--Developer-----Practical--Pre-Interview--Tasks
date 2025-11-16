import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from 'react';
import api from '../api/axios';

const Signin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [serverError, setServerError] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);

  // Get the intended destination from location state, default to dashboard
  const from = location.state?.from?.pathname || '/dashboard';

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    }),
    onSubmit: async values => {
      setServerError("");
      setIsSigningIn(true);
      try {
        const res = await api.post('/signin', values);
        if (res.status === 200) {
          localStorage.setItem('webVault',res.data.token)
          navigate(from, { replace: true });
        }
      } catch (err) {
        if (err.response && err.response.data && err.response.data.message) {
          setServerError(err.response.data.message);
        } else {
          setServerError("Incorrect email or password");
        }
        console.log(err);
      } finally {
        setIsSigningIn(false);
      }
    },
  });

  // console.log(formik.values);
  // console.log(formik.errors);
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800 px-4 py-6 sm:p-6">
      <div className="w-full max-w-md sm:max-w-lg bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl p-6 sm:p-10 border border-green-100 dark:border-gray-700 mx-auto">
        <Link to="/" className="flex items-center justify-center gap-2 mb-6">
          <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">K</span>
          </div>
          <span className="text-2xl font-extrabold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">KoinSave</span>
        </Link>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-800 dark:text-gray-100 mb-6 sm:mb-8 text-center tracking-tight sm:tracking-wide drop-shadow-lg" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
          Sign In to KoinSave
        </h2>
        <form className="space-y-5 sm:space-y-6" onSubmit={formik.handleSubmit}>
          {serverError && (
            <div className="text-red-600 text-base mb-4 text-center font-semibold bg-red-50 border border-red-200 rounded-lg py-2 px-4">
              {serverError}
            </div>
          )}
          <div>
            <label className="block text-gray-700 dark:text-gray-200 mb-2 font-medium" htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-gray-50 dark:bg-gray-700 dark:text-white transition-all"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-base mt-1">{formik.errors.email}</div>
            ) : null}
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-200 mb-2 font-medium" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-gray-50 dark:bg-gray-700 dark:text-white transition-all"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 text-base mt-1">{formik.errors.password}</div>
            ) : null}
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-green-600 to-green-700 text-white text-lg font-bold rounded-lg hover:from-green-700 hover:to-green-800 transition-all shadow-lg hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 transform hover:scale-[1.02]"
            disabled={isSigningIn}
          >
            {isSigningIn ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Signing In...
              </>
            ) : (
              'Sign In'
            )}
          </button>
        </form>
        <p className="mt-6 sm:mt-8 text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 text-center">Forgot your password? <span className='underline cursor-pointer'>Reset it</span></p>
        <p className="mt-4 text-xs sm:text-sm text-gray-700 dark:text-gray-200 text-center">
          You don't have an account yet?{' '}
          <Link to="/signup" className="text-green-600 dark:text-green-300 underline font-semibold hover:text-green-800 dark:hover:text-green-200 transition">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
