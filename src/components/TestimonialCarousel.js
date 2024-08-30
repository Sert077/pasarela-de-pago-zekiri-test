"use client";

import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    quote: "Esta herramienta de Zekiri ha sido clave para el éxito de nuestro negocio en línea.",
    name: "Juan Arevalo",
  },
  {
    quote: "Integrar la pasarela de pagos fue rápido y sencillo, Zekiri altamente recomendado.",
    name: "María González",
  },
  {
    quote: "El soporte técnico es increíble, siempre están listos para ayudar los de Zekiri.",
    name: "Carlos Rodríguez",
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 10000); // Cambia cada 10 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, []);

  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto text-center px-4 md:px-0">
        <h2 className="text-3xl font-bold mb-8 text-black">Lo que dicen nuestros clientes</h2>
        <div className="relative">
          {/* Contenedor del carrusel */}
          <div className="flex overflow-x-auto space-x-8 justify-center">
            <div className="w-full md:w-2/3 flex-shrink-0 p-4 bg-white rounded shadow mx-auto">
              <p className="text-lg text-gray-800">&quot;{testimonials[currentIndex].quote}&quot;</p>
              <h3 className="mt-4 text-xl font-semibold text-black">{testimonials[currentIndex].name}</h3>
            </div>
          </div>
          {/* Botones de navegación */}
          <div className="absolute top-1/2 -translate-y-1/2 left-1 md:left-40">
            <button 
              onClick={prevTestimonial} 
              className="bg-blue-500 text-white rounded-full p-1 hover:bg-blue-600 transition transform scale-125"
              style={{ width: '35px', height: '35px' }}
            >
              &#8249;
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-1 md:right-40">
            <button 
              onClick={nextTestimonial} 
              className="bg-blue-500 text-white rounded-full p-1 hover:bg-blue-600 transition transform scale-125"
              style={{ width: '35px', height: '35px' }}
            >
              &#8250;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
