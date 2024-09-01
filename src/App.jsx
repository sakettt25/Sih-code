import React, { useState } from 'react';
import emblem from './assets/emblem.jpg'; 
import googleLogo from './assets/google-logo.jpg'; 

// Eye icon SVG component
const EyeIcon = ({ isVisible, onClick }) => (
  <svg
    onClick={onClick}
    xmlns="http://www.w3.org/2000/svg"
    className={`w-5 h-5 cursor-pointer absolute inset-y-0 right-3 my-auto ${isVisible ? 'text-yellow-500' : 'text-gray-400'}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d={isVisible ? 'M12 3C6.48 3 2 12 2 12s4.48 9 10 9 10-9 10-9-4.48-9-10-9zM12 15a3 3 0 100-6 3 3 0 000 6z' : 'M12 3C6.48 3 2 12 2 12s4.48 9 10 9 10-9 10-9-4.48-9-10-9zM12 15a3 3 0 100-6 3 3 0 000 6z'}
    />
  </svg>
);

function App() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const backgroundStyle = {
    background: 'linear-gradient(to bottom right, #000000, #330e62)', // Black to dark purple gradient
  };

  const formStyle = {
    background: 'linear-gradient(to bottomm right, #4a148c, #6a1b9a)', // Dark purple gradient
    color: '#fff',
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="flex min-h-screen">
      <div className="flex-none" style={{ flex: '3 1 70%' }}>
        <div className="w-full h-full relative" style={backgroundStyle}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="p-8 rounded-lg shadow-xl w-full max-w-sm" style={formStyle}>

              {/* Login Form */}
              <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
              <label className="block text-sm font-medium mb-2">Username</label>
              <input
                type="text"
                placeholder="Username"
                className="w-full p-3 border border-transparent rounded-lg mb-4 bg-gray-200 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <label className="block text-sm font-medium mb-2">Password</label>
              <div className="relative">
                <input
                  type={isPasswordVisible ? 'text' : 'password'}
                  placeholder="Password"
                  className="w-full p-3 pr-12 border border-transparent rounded-lg mb-4 bg-gray-200 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                <EyeIcon
                  isVisible={isPasswordVisible}
                  onClick={togglePasswordVisibility}
                />
              </div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember-me"
                    className="mr-2"
                  />
                  <label htmlFor="remember-me" className="text-sm">Remember me</label>
                </div>
                <a href="#" className="text-sm hover:underline">Forgot Password?</a>
              </div>
              <button className="w-full p-3 bg-purple-700 text-white rounded-lg shadow hover:bg-purple-950 transition duration-300 mb-4">Login</button>
              {/* Or Continue with Google Section */}
              <div className="text-center mb-4">
                <p className="text-sm mb-2">Or</p>
                <p className="text-sm mb-2">continue with</p>
                <a href="#" className="flex justify-center rounded-md">
                  <img
                    src={googleLogo}
                    alt="Continue with Google"
                    className="w-24 h-auto object-contain rounded-lg"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right Side: 40% Width with White Background and Logo/Header */}
      <div className="flex-none" style={{ flex: '2 1 30%' }}>
        <div className="w-full h-full bg-white p-8 flex flex-col items-center justify-center">
          {/* Logo and Header */}
          <img
            src={emblem}
            alt="Emblem of India"
            className="w-40 mb-4"
          />
          <h1 className="text-2xl font-bold text-center mb-2">
            Government of National Capital Territory of Delhi
          </h1>
          <p className="text-lg text-center mb-5">
            राष्ट्रीय राजधानी क्षेत्र दिल्ली सरकार
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
