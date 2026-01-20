
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-white py-16 text-center">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <div className="w-12 h-12 agro-gradient rounded-xl flex items-center justify-center text-white shadow-lg mb-2">
            <i className="fas fa-magic text-xl"></i>
          </div>
          <span className="text-2xl font-black tracking-tighter uppercase">MIA DIGITAL</span>
          <div className="flex gap-6 text-xl text-stone-500">
            <a href="#" className="hover:text-white transition"><i className="fab fa-facebook"></i></a>
            <a href="#" className="hover:text-white transition"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-white transition"><i className="fab fa-whatsapp"></i></a>
          </div>
          <p className="text-[10px] text-stone-500 mt-4 font-bold uppercase tracking-[0.4em]">
            © 2026 MIA DIGITAL - EL PODER DE TU MARCA EN TUS MANOS
          </p>
          <div className="mt-8 text-[10px] text-stone-600 max-w-lg">
            Desarrollado para potenciar la agricultura familiar y la microempresa artesanal mediante el uso responsable de Inteligencia Artificial.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
