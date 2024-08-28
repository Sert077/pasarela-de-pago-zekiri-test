import React from 'react';

const CTA = () => {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4 text-black">¿Qué necesitas?</h2>
        <div className="flex justify-center space-x-4">
          <button className="border px-4 py-2 rounded text-black">Integrar pasarela de pago</button>
          <button className="border px-4 py-2 rounded text-black">Cobrar en tienda física</button>
          <button className="border px-4 py-2 rounded text-black">Cobrar en linea</button>
          <button className=" bg-purple-700 border px-4 py-2 rounded text-white">Otra consulta</button>
        </div>
      </div>
    </section>
  );
}

export default CTA;
