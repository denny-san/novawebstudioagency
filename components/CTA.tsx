
import React from 'react';

const CTA: React.FC = () => {
  // REEMPLAZA ESTOS LINKS CON LOS TUYOS
  const WHATSAPP_LINK = "https://wa.me/1234567890";
  const PORTFOLIO_LINK = "https://soc-analyst-portfolio.vercel.app/"; // O tu link de portafolio real

  return (
    <section id="contacto" className="w-full bg-background-dark px-4 py-24">
      <div className="mx-auto max-w-[1200px] overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary to-blue-700 px-8 py-20 text-center text-white shadow-[0_30px_60px_-15px_rgba(51,154,240,0.4)] relative border border-white/20">
        {/* Background blobs for depth */}
        <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-[100px] pointer-events-none"></div>
        <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-blue-400/20 blur-[100px] pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col items-center gap-8">
          <h2 className="max-w-[850px] text-4xl font-black leading-tight tracking-tight md:text-6xl drop-shadow-lg">
            ¿Listo para llevar tu negocio al siguiente nivel?
          </h2>
          <p className="max-w-[650px] text-xl font-medium text-blue-50/90 leading-relaxed">
            No dejes que tu competencia se adelante en la carrera digital. Hablemos hoy mismo y descubramos juntos cómo podemos impulsar tu crecimiento.
          </p>
          <div className="mt-4 flex flex-col gap-5 sm:flex-row">
            <a 
              href="https://wa.me/qr/MKIKJYUKQQQZE1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-16 min-w-[220px] cursor-pointer items-center justify-center rounded-xl bg-white px-8 text-lg font-bold text-primary transition-all hover:bg-gray-50 hover:-translate-y-1 hover:shadow-2xl active:scale-95"
            >
              Agenda una llamada
            </a>
            <a 
              href="https://soc-analyst-portfolio.vercel.app/"
              className="flex h-16 min-w-[220px] cursor-pointer items-center justify-center rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-md px-8 text-lg font-bold text-white transition-all hover:bg-white/20 hover:-translate-y-1 active:scale-95"
            >
              Ver portafolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
