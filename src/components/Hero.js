import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-black">
          Integra la pasarela de pago que quieras a tu{' '}
          <span className="font-extrabold">tienda en línea</span>
        </h1>
        <p className="mt-4 text-lg text-black">
          Escoge la pasarela de pago que más te convenga y la integramos por ti.</p>
          <p className= "text-black"> Además podemos ayudarte a recibir pagos en línea desde cualquier lugar de forma simple y sin rebotes.</p>
        
        <div className="mt-1">
          <img 
            src="/images/laptopzekiri.png" 
            alt="Laptop" 
            className="mx-auto w-1/4" 
          />
        </div>
        <div className="mt-1">
          <a 
            href="https://wa.link/tc8pce" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-4 py-2 rounded inline-block"
          >
            Agendar llamada consultiva
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
