"use client";

import React from 'react';

const pricingData = {
  plans: ["FREE", "BASICO", "PRO", "PREMIUM"],
  features: [
    { name: "Precio mensual", values: ["USD0", "USD10", "USD30", "USD50"] },
    { name: "Precio anual", values: ["USD0", "USD96", "USD300", "USD480"] },
    { name: "Precio mensual con pago anual", values: ["USD0", "USD8", "USD25", "USD40"] },
    { name: "Tasa de la transacción", values: ["USD0", "5%", "5%", "5%"] },
  ],
  salesChannels: [
    { name: "Tienda en línea", values: [true, true, true, true] },
    { name: "Tienda en Facebook", values: [false, true, true, true] },
    { name: "Tienda en Instagram", values: [false, false, true, true] },
    { name: "Punto de venta móvil", values: [false, false, false, true] },
  ],
};

const PricingTable = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-black">Cómo elegir la mejor pasarela para tu tienda en línea</h2>
        <p className="text-2xl text-center mb-10 text-black">Nuestros Planes</p>
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-left border-collapse text-black">
            <thead>
              <tr>
                <th className="px-4 py-2"></th>
                {pricingData.plans.map((plan, index) => (
                  <th key={index} className="px-4 py-2 text-center border border-gray-300">{plan}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {pricingData.features.map((feature, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 font-semibold border border-gray-300">{feature.name}</td>
                  {feature.values.map((value, index) => (
                    <td key={index} className="px-4 py-2 text-center border border-gray-300">{value}</td>
                  ))}
                </tr>
              ))}
              <tr>
                <td colSpan={5} className="px-4 py-2 font-semibold border border-gray-300 bg-gray-100">CANALES DE VENTA</td>
              </tr>
              {pricingData.salesChannels.map((channel, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 font-semibold border border-gray-300">{channel.name}</td>
                  {channel.values.map((enabled, index) => (
                    <td key={index} className="px-4 py-2 text-center border border-gray-300">
                      {enabled ? "✔️" : ""}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
