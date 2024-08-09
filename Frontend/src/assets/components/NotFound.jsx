import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#2b2b2b] text-white p-6">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-4 text-[#99EA73]">404</h1>
        <h2 className="text-2xl md:text-4xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-lg md:text-xl mb-8">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        <Link to="/" className="px-6 py-3 bg-[#99EA73] text-[#2b2b2b] rounded-full text-lg font-semibold hover:bg-[#78c761] transition-all duration-300">
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
