
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 agro-gradient rounded-xl flex items-center justify-center text-white shadow-lg shadow-green-200">
              <i className="fas fa-magic text-lg"></i>
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tighter text-green-900">
                MIA <span className="text-orange-600 uppercase">Digital</span>
              </span>
            </div>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-semibold text-stone-700">
            <a href="#proceso" className="hover:text-green-700 transition">¿Cómo funciona?</a>
            <a href="#demo" className="hover:text-green-700 transition">Demo Chat</a>
            <a href="#precios" className="hover:text-green-700 transition">Planes</a>
          </div>
          <button className="bg-green-800 text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-green-900 transition flex items-center gap-2">
            <i className="fab fa-whatsapp"></i> Vender ahora
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
