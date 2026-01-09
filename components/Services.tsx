
import React from 'react';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  color: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, color }) => (
  <div className="group relative flex flex-col gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.08] hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
    {/* Decorative background glow that appears on hover */}
    <div className={`absolute -right-4 -top-4 h-24 w-24 rounded-full opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-40`} style={{ backgroundColor: color }}></div>
    
    <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-background-darker border border-white/10 text-white shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:shadow-primary/20" style={{ color: color }}>
      <span className="material-symbols-outlined text-4xl">{icon}</span>
    </div>
    
    <div className="relative flex flex-col gap-3">
      <h3 className="text-2xl font-extrabold tracking-tight text-white group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      <p className="text-base leading-relaxed text-text-muted">
        {description}
      </p>
    </div>

    <div className="mt-auto pt-4 relative">
      <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-white/80 transition-all hover:text-primary group/link">
        Saber más 
        <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover/link:translate-x-1">arrow_forward</span>
      </a>
    </div>
  </div>
);

const Services: React.FC = () => {
  const services = [
    {
      icon: 'palette',
      title: 'Diseño UI/UX Premium',
      description: 'Creamos interfaces que no solo se ven increíbles, sino que están diseñadas para guiar al usuario hacia la conversión utilizando psicología del diseño y estética moderna.',
      color: '#339AF0'
    },
    {
      icon: 'code_blocks',
      title: 'Desarrollo Web Elite',
      description: 'Arquitecturas robustas, rápidas y escalables utilizando el stack tecnológico más avanzado. Sitios web optimizados para el rendimiento y la seguridad total.',
      color: '#20C997'
    },
    {
      icon: 'rocket_launch',
      title: 'Estrategia de Growth',
      description: 'No solo lanzamos webs, impulsamos negocios. Implementamos SEO técnico, automatización y estrategias de marketing digital enfocadas 100% en resultados.',
      color: '#FF922B'
    }
  ];

  return (
    <section id="servicios" className="relative w-full overflow-hidden bg-background-dark px-4 py-24 md:py-32">
      {/* Background Decorative Element */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px] pointer-events-none"></div>
      
      <div className="mx-auto flex max-w-[1200px] flex-col gap-20">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="inline-flex items-center rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-primary">
            Nuestros Servicios
          </div>
          <h2 className="max-w-[800px] text-4xl font-black leading-[1.1] tracking-tight text-white md:text-6xl">
            Soluciones digitales que <br />
            <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">transforman realidades.</span>
          </h2>
          <p className="max-w-[640px] text-lg leading-relaxed text-text-muted">
            En NovaWeb Studio, combinamos creatividad y tecnología para resolver los desafíos más complejos de tu negocio en el mundo digital.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
