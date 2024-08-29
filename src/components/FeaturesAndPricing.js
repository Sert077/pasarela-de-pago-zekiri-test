import React from 'react';

const FeaturesAndPricing = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-black">Características y Planes</h2>

        {/* Características */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold text-black">Fácil Integración</h3>
            <p className="mt-4 text-gray-700">Integra múltiples pasarelas de pago de manera simple y rápida.</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold text-black">Soporte 24/7</h3>
            <p className="mt-4 text-gray-700">Nuestro equipo de soporte está disponible todo el día para ayudarte.</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold text-black">Seguridad Garantizada</h3>
            <p className="mt-4 text-gray-700">Tu información y la de tus clientes está protegida con altos estándares de seguridad.</p>
          </div>
        </div>

        {/* Tabla de Precios */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold text-black">Plan Básico</h3>
            <p className="mt-4 text-gray-700">$10/mes</p>
            <ul className="mt-4 text-gray-700 text-left">
              <li>- 10 Integraciones</li>
              <li>- Soporte Básico</li>
              <li>- Seguridad Estándar</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold text-black">Plan Pro</h3>
            <p className="mt-4 text-gray-700">$30/mes</p>
            <ul className="mt-4 text-gray-700 text-left">
              <li>- 50 Integraciones</li>
              <li>- Soporte Prioritario</li>
              <li>- Alta Seguridad</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold text-black">Plan Premium</h3>
            <p className="mt-4 text-gray-700">$50/mes</p>
            <ul className="mt-4 text-gray-700 text-left">
              <li>- Integraciones Ilimitadas</li>
              <li>- Soporte 24/7</li>
              <li>- Máxima Seguridad</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesAndPricing;
