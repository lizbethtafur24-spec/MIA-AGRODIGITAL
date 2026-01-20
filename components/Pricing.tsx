
import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section id="precios" className="py-24 agro-gradient text-center text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-black mb-16 uppercase">Planes diseñados para crecer</h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
          {/* Plan Impacto */}
          <div className="bg-white/10 backdrop-blur-md p-10 rounded-[3rem] border border-white/20 flex flex-col group hover:bg-white/20 transition">
            <h3 className="font-black text-xl mb-4 uppercase">Plan "Impacto"</h3>
            <div className="text-4xl font-black mb-6 italic">S/ 7.00 <span className="text-sm font-normal opacity-70">/ post</span></div>
            <p className="text-sm opacity-80 mb-8 flex-grow">Para productores que venden por campañas específicas. Paga solo por lo que generas.</p>
            <button className="w-full py-4 rounded-2xl bg-white text-green-900 font-black uppercase text-xs tracking-widest hover:scale-105 transition">Empezar</button>
          </div>

          {/* Plan Dueña y Señora */}
          <div className="bg-white p-12 rounded-[3.5rem] text-slate-900 scale-105 shadow-2xl flex flex-col border-4 border-orange-500 relative">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-6 py-1 rounded-full text-xs font-black uppercase">Más Popular</div>
            <h3 className="font-black text-xl mb-2 uppercase text-green-800 italic">Plan "DUEÑA Y SEÑORA"</h3>
            <div className="text-5xl font-black mb-8">S/ 49.00 <span className="text-sm font-normal text-slate-500">/ mes</span></div>
            <ul className="text-xs text-stone-600 space-y-4 mb-10 text-left font-bold uppercase tracking-tight flex-grow">
              <li><i className="fas fa-check text-green-600 mr-2"></i> 12 Diseños Profesionales</li>
              <li><i className="fas fa-check text-green-600 mr-2"></i> Presencia fija en FB/IG</li>
              <li><i className="fas fa-check text-green-600 mr-2"></i> Publicación Automática</li>
              <li><i className="fas fa-check text-green-600 mr-2"></i> Atención Prioritaria</li>
              <li><i className="fas fa-check text-green-600 mr-2"></i> Panel de métricas básico</li>
            </ul>
            <button className="w-full py-5 rounded-2xl bg-green-800 text-white font-black uppercase text-sm tracking-widest shadow-xl hover:bg-green-900 transition hover:scale-105">Suscribirme</button>
          </div>

          {/* Plan Liderazgo */}
          <div className="bg-white/10 backdrop-blur-md p-10 rounded-[3rem] border border-white/20 flex flex-col group hover:bg-white/20 transition">
            <h3 className="font-black text-xl mb-4 uppercase">Plan "Liderazgo"</h3>
            <div className="text-4xl font-black mb-6 italic">S/ 99.00 <span className="text-sm font-normal opacity-70">/ mes</span></div>
            <p className="text-[11px] font-bold text-orange-300 mb-6 uppercase tracking-widest italic leading-tight">Dirigido a Asociaciones y Gremios</p>
            <ul className="text-[10px] text-left space-y-4 opacity-90 mb-8 uppercase font-bold tracking-widest flex-grow">
              <li><i className="fas fa-users mr-1 text-orange-400"></i> Gestión para 10 productores</li>
              <li><i className="fas fa-network-wired mr-1 text-orange-400"></i> Publicación en Red Empresarial</li>
              <li><i className="fas fa-layer-group mr-1 text-orange-400"></i> Subida masiva de productos</li>
              <li><i className="fas fa-headset mr-1 text-orange-400"></i> Soporte Humano Directo</li>
            </ul>
            <button className="w-full py-4 rounded-2xl bg-white/20 text-white border border-white/40 font-black uppercase text-xs tracking-widest hover:bg-white/30 transition">Consultar</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
