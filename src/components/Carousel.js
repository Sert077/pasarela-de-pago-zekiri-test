import React from 'react';

const Carousel = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-black">Integra todos los métodos de pago a tu tienda en línea</h2>
        <p className="text-lg mb-8 text-black">Acepta pagos en línea con todas las tarjetas de crédito y débito respaldadas por Visa, Mastercard, American Express y otros.</p>
        <div className="flex justify-center space-x-8">
          <img src="/images/visa.png" alt="Visa" className="w-24 h-24 object-contain"/>
          <img src="/images/mscard.png" alt="Mastercard" className="w-24 h-24 object-contain"/>
          <img src="/images/amexpress.png" alt="Amex" className="w-24 h-24 object-contain"/>
          <img src="/images/7-ele.png" alt="7-Eleven" className="w-24 h-24 object-contain"/>
          <img src="/images/paypal.png" alt="Paypal" className="w-24 h-24 object-contain"/>
          <img src="/images/stripe.png" alt="Stripe" className="w-24 h-24 object-contain"/>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
