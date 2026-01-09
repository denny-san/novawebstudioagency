
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="nosotros" className="w-full bg-background-dark overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-4 py-16 md:py-24">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
          <div className="flex flex-1 flex-col gap-6 text-left">
            <div className="flex flex-col gap-4">
              <span className="w-fit rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
                Sobre Nosotros
              </span>
              <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] text-white md:text-5xl lg:text-6xl">
                Más que una agencia,<br />
                <span className="text-primary">tu socio estratégico.</span>
              </h1>
              <p className="max-w-[540px] text-lg font-normal leading-relaxed text-text-muted">
                En NovaWeb Studio, transformamos ideas complejas en experiencias digitales que generan resultados. No solo construimos sitios web, construimos negocios.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a 
                href="#servicios"
                className="flex h-12 cursor-pointer items-center justify-center rounded-lg bg-primary px-8 text-base font-bold text-white shadow-[0_0_20px_rgba(51,154,240,0.3)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(51,154,240,0.5)] active:scale-95"
              >
                Ver nuestros servicios
              </a>
              <a 
                href="#sobre-mi"
                className="flex h-12 cursor-pointer items-center justify-center rounded-lg border border-white/20 bg-transparent px-8 text-base font-bold text-white transition-all hover:bg-white/5 hover:border-white/40 active:scale-95"
              >
                Conoce al equipo
              </a>
            </div>
          </div>
          <div className="flex-1 lg:mt-0 mt-8">
            <div 
              className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white/5 border border-white/10 shadow-2xl transition-transform duration-700 hover:scale-[1.02]"
              style={{ 
                backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-background-dark/20 mix-blend-overlay"></div>
              <div className="absolute -top-4 -right-4 h-24 w-24 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 h-24 w-24 bg-blue-500/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
