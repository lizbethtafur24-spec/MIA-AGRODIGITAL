
import React from 'react';

const Process: React.FC = () => {
  return (
    <section id="proceso" className="py-24 bg-stone-100 border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-green-900 mb-4 uppercase">
            Tu producto a un mensaje de distancia
          </h2>
          <p className="text-stone-500 font-medium">Olvídate de las agencias de marketing costosas. MIA es tu equipo creativo 24/7.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white p-10 rounded-[3rem] shadow-xl hover:-translate-y-2 transition duration-300">
            <div className="w-16 h-16 bg-green-100 text-green-700 rounded-2xl flex items-center justify-center mb-6">
              <i className="fas fa-paper-plane text-2xl"></i>
            </div>
            <h3 className="text-xl font-black mb-4 uppercase tracking-tighter text-green-900">1. Envía tu oferta</h3>
            <p className="text-stone-600 font-medium italic mb-4">MIA entiende lo que vendes y el precio solo leyendo tus mensajes de WhatsApp.</p>
            <p className="text-xs text-stone-400">Solo necesitas subir una foto y dar los detalles básicos.</p>
          </div>

          <div className="bg-green-900 p-10 rounded-[3rem] shadow-2xl text-white scale-105">
            <div className="w-16 h-16 bg-orange-500 text-white rounded-2xl flex items-center justify-center mb-6">
              <i className="fas fa-wand-sparkles text-2xl"></i>
            </div>
            <h3 className="text-xl font-black mb-4 uppercase tracking-tighter">2. Efecto WOW</h3>
            <p className="text-green-100 font-medium italic">Tu foto se convierte en una pieza gráfica profesional lista para competir en el mercado.</p>
            <p className="text-xs text-green-200 mt-4 italic">"Procesando imagen y optimizando diseño con IA..."</p>
          </div>

          <div className="bg-white p-10 rounded-[3rem] shadow-xl hover:-translate-y-2 transition duration-300">
            <div className="w-16 h-16 bg-blue-100 text-blue-700 rounded-2xl flex items-center justify-center mb-6">
              <i className="fas fa-check-double text-2xl"></i>
            </div>
            <h3 className="text-xl font-black mb-4 uppercase tracking-tighter text-green-900">3. Conquista la Red</h3>
            <p className="text-stone-600 font-medium italic">"Aquí tienes tu diseño, si está correcto lo publicamos. Dale OK."</p>
            <p className="text-xs text-stone-400 mt-4 font-bold">Publicación instantánea en tus redes oficiales vinculadas.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
