
import React from 'react';

const Navbar: React.FC = () => {
  // REEMPLAZA ESTE LINK CON TU WHATSAPP REAL
  const WHATSAPP_LINK = "https://wa.me/1234567890"; 

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-background-dark/95 backdrop-blur-sm px-5 py-3 shadow-sm">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between">
        <div className="flex items-center gap-3 text-white">
          <a href="#" className="flex items-center justify-center overflow-hidden">
            <img 
              src="/IMG/logo.png" 
              alt="Logo NovaWeb Studio" 
              className="h-20 w-auto object-contain transition-transform duration-300 hover:scale-105"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement?.insertAdjacentHTML('afterbegin', '<span class="material-symbols-outlined text-primary text-3xl">rocket_launch</span>');
              }}
            />
          </a>
          <h2 className="text-xl font-bold leading-tight tracking-[-0.015em] hidden sm:block">NovaWeb Studio</h2>
        </div>
        <div className="hidden items-center gap-9 md:flex">
          <a className="text-sm font-medium leading-normal text-gray-300 hover:text-primary transition-colors" href="#">Inicio</a>
          <a className="text-sm font-medium leading-normal text-gray-300 hover:text-primary transition-colors" href="#servicios">Servicios</a>
          <a className="text-sm font-medium leading-normal text-gray-300 hover:text-primary transition-colors" href="#sobre-mi">Quién soy</a>
          <a className="text-sm font-medium leading-normal text-gray-300 hover:text-primary transition-colors" href="#nosotros">Sobre el estudio</a>
          <a className="text-sm font-medium leading-normal text-gray-300 hover:text-primary transition-colors" href="#contacto">Contacto</a>
        </div>
        <a 
          href="https://wa.me/qr/MKIKJYUKQQQZE1"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 min-w-[84px] cursor-pointer items-center justify-center rounded-lg bg-primary px-4 text-sm font-bold leading-normal tracking-[0.015em] text-white transition-all hover:bg-blue-500 shadow-[0_0_15px_rgba(51,154,240,0.3)] active:scale-95"
        >
          <span className="truncate">Hablemos</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
