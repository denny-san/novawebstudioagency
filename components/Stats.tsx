
import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { value: '+50', label: 'Proyectos lanzados' },
    { value: '98%', label: 'Clientes satisfechos' },
    { value: '5 años', label: 'De experiencia' },
    { value: '24/7', label: 'Soporte dedicado' },
  ];

  return (
    <section className="w-full border-y border-white/10 bg-background-darker py-12">
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-8 px-4 md:grid-cols-4">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center justify-center gap-1 text-center group cursor-default">
            <span className="text-4xl font-black text-white drop-shadow-[0_0_10px_rgba(51,154,240,0.3)] group-hover:text-primary transition-colors duration-300">
              {stat.value}
            </span>
            <span className="text-sm font-medium text-text-muted group-hover:text-white transition-colors">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
