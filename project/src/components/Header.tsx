import React from 'react';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-gray-800">Path to Future</Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900">About Us</Link>
            <Link to="/resume" className="text-gray-600 hover:text-gray-900">Resume Builder</Link>
            <Link to="/interview" className="text-gray-600 hover:text-gray-900">Interview Prep</Link>
            <Link to="/feedback" className="text-gray-600 hover:text-gray-900">Feedback</Link>
          </div>
          <button className="md:hidden">
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </nav>
    </header>
  );
}