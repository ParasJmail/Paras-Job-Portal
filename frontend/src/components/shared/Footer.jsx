import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-t-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Job Hunt</h2>
            <p className="text-sm">© 2024 Your Company. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://www.instagram.com/parasjaitly" className="hover:text-gray-400" aria-label="Instagram">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.976.976 1.248 2.243 1.31 3.608.058 1.267.069 1.647.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.31 3.608-.976.976-2.243 1.248-3.608 1.31-1.267.058-1.647.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.31-.976-.976-1.248-2.243-1.31-3.608-.058-1.267-.069-1.647-.069-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.31-3.608C4.517 2.497 5.784 2.224 7.15 2.163 8.416 2.106 8.796 2.094 12 2.094zm0-2.163C8.667 0 8.26.014 7.053.073 5.847.132 4.68.335 3.725 1.29.633 4.383.633 7.617.633 12s0 7.617 3.092 10.71c.955.955 2.122 1.158 3.328 1.217 1.207.059 1.614.073 4.947.073s3.741-.014 4.947-.073c1.206-.059 2.373-.262 3.328-1.217C23.367 19.617 23.367 16.383 23.367 12s0-7.617-3.092-10.71C20.28.335 19.113.132 17.907.073 16.74.014 16.333 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-10.845a1.44 1.44 0 1 0 0-2.882 1.44 1.44 0 0 0 0 2.882z"/></svg>
            </a>
            <a href="https://x.com/ParasJaitly" className="hover:text-gray-400" aria-label="Twitter">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.835 9.835 0 01-2.828.775 4.934 4.934 0 002.165-2.724 9.867 9.867 0 01-3.127 1.195 4.924 4.924 0 00-8.38 4.49A13.978 13.978 0 011.67 3.149 4.93 4.93 0 003.16 9.724a4.903 4.903 0 01-2.229-.616v.062a4.93 4.93 0 003.946 4.827 4.902 4.902 0 01-2.224.084 4.93 4.93 0 004.6 3.417A9.869 9.869 0 010 21.543a13.978 13.978 0 007.548 2.212c9.057 0 14.01-7.507 14.01-14.01 0-.213-.004-.425-.015-.636A10.012 10.012 0 0024 4.557z" /></svg>
            </a>
            <a href="https://www.linkedin.com/in/paras-jaitly-044b82274/" className="hover:text-gray-400" aria-label="LinkedIn">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452H16.85v-5.569c0-1.327-.027-3.037-1.852-3.037-1.854 0-2.137 1.446-2.137 2.94v5.666H9.147V9.756h3.448v1.464h.05c.48-.91 1.653-1.871 3.401-1.871 3.634 0 4.307 2.39 4.307 5.498v5.605zM5.337 8.29c-1.105 0-2-.896-2-2 0-1.106.895-2 2-2 1.104 0 2 .895 2 2 0 1.104-.896 2-2 2zM7.119 20.452H3.553V9.756h3.566v10.696zM22.225 0H1.771C.791 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451c.979 0 1.771-.774 1.771-1.729V1.729C24 .774 23.205 0 22.225 0z" /></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
