'use client';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-blue-200 py-8 px-4 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Copyright */}
        <div className="mb-4 md:mb-0 text-sm">
          <p suppressHydrationWarning>&copy; {new Date().getFullYear()} Badminton Family Forever (BFF). All rights reserved.</p>
        </div>

        {/* Quick Links */}
        <div className="flex space-x-6 text-sm">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="hover:text-amber-400 transition-colors duration-300 flex items-center"
          >
            Back to Top
            <svg 
              className="w-4 h-4 ml-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
            </svg>
          </a>
        </div>

      </div>
    </footer>
  );
}