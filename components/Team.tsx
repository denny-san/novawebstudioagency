
import React from 'react';

const Team: React.FC = () => {
  // REEMPLAZA ESTE LINK CON TU WHATSAPP REAL
  const WHATSAPP_LINK = "https://wa.me/1234567890";

  return (
    <section id="sobre-mi" className="w-full bg-background-dark px-4 py-24 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full pointer-events-none"></div>
      
      <div className="mx-auto max-w-[1200px] relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Large Photo Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative group">
              {/* Neon Border Effect */}
              <div className="absolute -inset-4 bg-primary/20 rounded-[2.5rem] blur-2xl group-hover:bg-primary/30 transition-all duration-500"></div>
              
              <div className="relative aspect-[4/5] w-full max-w-[450px] overflow-hidden rounded-[2rem] border-2 border-white/10 shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                <img 
                  src="/IMG/About.jpeg" 
                  alt="Denny Sanchez Pujols" 
                  className="h-full w-full object-cover"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating Experience Badge */}
              <div className="absolute -bottom-6 -right-6 bg-background-darker border border-primary/40 p-4 rounded-2xl shadow-2xl backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-3xl">verified_user</span>
                  <div className="flex flex-col">
                    <span className="text-white font-black text-lg leading-tight">100%</span>
                    <span className="text-text-muted text-xs uppercase font-bold tracking-widest">Compromiso</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content Section */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8 text-center lg:text-left">
            <div className="flex flex-col gap-4">
              <div className="inline-flex self-center lg:self-start items-center rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-primary">
                Fundador & Creativo
              </div>
              
              {/* Neon Blue Name */}
              <h2 className="text-4xl md:text-6xl font-black text-primary drop-shadow-[0_0_15px_rgba(51,154,240,0.8)] tracking-tight">
                Denny Sanchez Pujols
              </h2>
              
              <h3 className="text-xl md:text-2xl font-bold text-white/90">
                Creador de Diseño Web & Community Manager
              </h3>
            </div>

            <div className="flex flex-col gap-6">
              <p className="text-lg text-text-muted leading-relaxed">
                Hola, soy la mente creativa detrás de NovaWeb Studio. Mi pasión es fusionar la estética visual con la funcionalidad técnica para crear ecosistemas digitales que no solo se vean bien, sino que funcionen como máquinas de crecimiento para tu negocio.
              </p>
              <p className="text-lg text-text-muted leading-relaxed">
                Como Community Manager y Diseñador Web, entiendo que una marca exitosa necesita una presencia coherente. Mi enfoque se basa en construir comunidades leales y sitios web de alto impacto que cuenten tu historia de la manera más efectiva posible.
              </p>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-5 py-3 rounded-xl transition-colors hover:border-primary/50">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span className="text-white font-bold text-sm">Diseño Estratégico</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-5 py-3 rounded-xl transition-colors hover:border-primary/50">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span className="text-white font-bold text-sm">Gestión de Redes</span>
              </div>
            </div>

            <div className="pt-6">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-xl font-black text-lg shadow-[0_0_20px_rgba(51,154,240,0.4)] hover:scale-105 active:scale-95 transition-all"
              >
                Trabajemos Juntos
                <span className="material-symbols-outlined">trending_flat</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Team;
