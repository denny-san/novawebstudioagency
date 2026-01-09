
import React from 'react';

const WhyChooseUs: React.FC = () => {
  const points = [
    {
      title: 'Enfoque en ROI',
      description: 'Cada acción y línea de código está pensada para recuperar tu inversión y generar ganancias escalables.'
    },
    {
      title: 'Comunicación Constante',
      description: 'Nunca te preguntarás en qué estado está tu proyecto. Te mantenemos informado con reportes claros.'
    },
    {
      title: 'Tecnología Moderna',
      description: 'Usamos las herramientas más rápidas, seguras y optimizadas del mercado actual.'
    }
  ];

  return (
    <section className="w-full bg-background-dark px-4 py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left: Image with floating badge */}
          <div className="relative order-2 lg:order-1">
            <div 
              className="relative aspect-square w-full max-w-[500px] overflow-hidden rounded-3xl bg-white/5 border border-white/10 shadow-2xl transition-all duration-500 hover:scale-[1.01]"
              style={{ 
                backgroundImage: `url('https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1000')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-background-dark/20 mix-blend-multiply"></div>
              
              {/* Quality Badge */}
              <div className="absolute bottom-8 right-8 rounded-2xl bg-background-darker/80 border border-white/10 p-5 shadow-2xl backdrop-blur-md animate-bounce-slow">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-900/30 text-green-400 border border-green-500/30">
                    <span className="material-symbols-outlined text-2xl font-bold">verified</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-base font-bold text-white leading-tight">Calidad Garantizada</span>
                    <span className="text-sm text-text-muted">Soporte técnico 12 meses</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 flex flex-col gap-10 lg:order-2">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                Por Qué Elegirnos
              </h2>
              <p className="text-lg text-text-muted leading-relaxed">
                Creemos en la transparencia absoluta y en evitar el lenguaje técnico innecesario. Nuestro objetivo primordial es que entiendas el valor real de cada paso de tu inversión.
              </p>
            </div>
            <div className="flex flex-col gap-8">
              {points.map((point, index) => (
                <div key={index} className="flex gap-5 group">
                  <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                    <span className="material-symbols-outlined text-sm font-bold">check</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{point.title}</h4>
                    <p className="mt-2 text-base text-text-muted leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
