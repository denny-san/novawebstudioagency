
import React from 'react';

const Process: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: 'Escucha Activa',
      description: 'Entendemos tus metas, tu audiencia y tus desafíos actuales para proponer el mejor camino.',
      active: true
    },
    {
      number: 2,
      title: 'Diseño & Estrategia',
      description: 'Creamos prototipos y planes de acción a medida que reflejan la esencia de tu marca.',
      active: false
    },
    {
      number: 3,
      title: 'Desarrollo',
      description: 'Construimos tu solución utilizando las últimas tecnologías para asegurar velocidad y seguridad.',
      active: false
    },
    {
      number: 4,
      title: 'Lanzamiento',
      description: 'Publicamos tu proyecto con soporte continuo para asegurar un crecimiento sostenido.',
      active: false
    }
  ];

  return (
    <section className="w-full bg-background-darker px-4 py-24 border-y border-white/5">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl">
              Cómo Trabajamos
            </h2>
            <p className="text-lg text-text-muted">Un proceso transparente, ágil y totalmente colaborativo.</p>
          </div>
          <button className="group flex items-center gap-2 font-bold text-primary hover:text-white transition-colors duration-300">
            Ver detalles del proceso 
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
        </div>
        
        <div className="relative flex flex-col justify-between gap-12 md:flex-row md:gap-4">
          {/* Connector Line */}
          <div className="absolute left-6 top-6 h-[80%] w-0.5 bg-white/10 md:left-0 md:top-6 md:h-0.5 md:w-full"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-1 flex-col gap-5 md:items-center md:text-center group">
              <div className={`
                flex h-12 w-12 items-center justify-center rounded-full text-xl font-bold transition-all duration-300 ring-8 ring-background-darker
                ${step.active 
                  ? 'bg-primary text-white shadow-[0_0_20px_rgba(51,154,240,0.5)]' 
                  : 'bg-background-darker text-primary border-2 border-primary/50 group-hover:border-primary group-hover:bg-primary/5'}
              `}>
                {step.number}
              </div>
              <div className="pl-1 md:pl-0">
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted max-w-[250px] md:mx-auto">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
