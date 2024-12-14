import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Path to Future</h3>
            <p className="text-gray-400">Empowering careers through guidance and tools.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="/resume" className="text-gray-400 hover:text-white">Resume Builder</a></li>
              <li><a href="/interview" className="text-gray-400 hover:text-white">Interview Prep</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: contact@pathtofuture.com</li>
              <li>Phone: (555) 123-4567</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><Twitter className="h-6 w-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Linkedin className="h-6 w-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Github className="h-6 w-6" /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Path to Future. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}