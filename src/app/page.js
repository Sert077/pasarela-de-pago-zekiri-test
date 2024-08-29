import Header from '../components/Header';
import Hero from '../components/Hero';
import CTA from '../components/CTA';
import Carousel from '../components/Carousel';
import TestimonialCarousel from '../components/TestimonialCarousel'; 
import FeaturesAndPricing from '../components/FeaturesAndPricing';
import GrowEcommerce from '../components/GrowEcommerce';   
import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <CTA />
      <Carousel />
      <TestimonialCarousel />
      <GrowEcommerce />  
      <FeaturesAndPricing />
      <div className="text-center my-8">
        <Link className="bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-600 transition" href="/pricing">
            Ver planes de precios
        </Link>
      </div>    
    </div>
  );
}
