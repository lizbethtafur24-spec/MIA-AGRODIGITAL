
import React from 'react';
import ChatDemo from './ChatDemo';

const Hero: React.FC = () => {
  return (
    <header className="pt-32 pb-16 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-left animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-black bg-orange-100 text-orange-800 rounded-full border border-orange-200">
            <i className="fas fa-star"></i>
            <span>SI SABES USAR WHATSAPP, SABES USAR MIA</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-slate-900 tracking-tight uppercase">
            Tú pones el producto, <br />
            <span className="gradient-text">MIA lo pone en el mercado</span>
          </h1>
          <p className="text-lg text-stone-600 mb-10 max-w-xl leading-relaxed font-medium">
            Tus fotos caseras se convierten en anuncios premium. Sin aplicaciones complicadas, sin registros difíciles, solo a través de mensajes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#demo" 
              className="whatsapp-bg text-white px-8 py-4 rounded-2xl font-black text-lg flex items-center justify-center gap-3 shadow-xl hover:scale-105 transition-all"
            >
              ¡PRUEBA LA DEMO AHORA!
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <img 
                  key={i} 
                  src={`https://picsum.photos/100/100?random=${i}`} 
                  className="w-10 h-10 rounded-full border-2 border-white shadow-sm" 
                  alt="User"
                />
              ))}
            </div>
            <p className="text-sm text-stone-500 font-semibold">
              +500 productores ya usan MIA Digital
            </p>
          </div>
        </div>

        <div id="demo" className="relative">
          <ChatDemo />
          <div className="absolute -bottom-6 -right-6 hidden lg:block bg-orange-500 text-white p-6 rounded-3xl shadow-2xl animate-bounce">
            <p className="text-xs font-black uppercase">¡Sube una foto!</p>
            <i className="fas fa-arrow-up block mt-2"></i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
