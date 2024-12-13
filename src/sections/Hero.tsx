import Steam from '@/components/common/Steam/Steam';
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="section relative z-10 w-full h-[600px] bg-cover bg-center" style={{ backgroundImage: "url('/hero.jpg')"}}
    >
      <div className="inset-0 bg-black bg-opacity-50"></div>
      <div className="container flex flex-col md:flex-row items-center justify-between text-center md:text-left text-white px-6 md:px-12">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Enjoy Your Morning Coffee.</h1>
          <p className="text-lg md:text-xl mb-8">
            The Coffee Is Brewed By First Roasting The Green Coffee Beans Over Hot Coals in Brazier. Given To Opportunity.
          </p>
          <button className="bg-orange-600 text-white px-6 py-3 rounded-full hover:bg-orange-700 transition mb-4 md:mb-0">
            TEST COFFEE
          </button>
       
        </div>
        <div className=" md:w-1/2 text-center md:text-right">
          <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
            PLAY VIDEO
          </button>
        </div>
       
      </div>
      <Steam />
    </section>
  );
};

export default Hero;
