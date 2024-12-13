const Home: React.FC = () => {
  return (
    <section className="p-8 sm:p-4 md:p-8">
      <h2 className="text-3xl sm:text-2xl md:text-4xl font-semibold text-center mb-6">Our Coffee Collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* <img src="/Home.jpg" alt="Coffee 1" className="w-full h-56 object-cover" /> */}
          <div className="p-4">
            <h3 className="text-xl font-bold">Espresso</h3>
            <p className="text-gray-600">Rich and bold espresso for the perfect start to your day.</p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* <img src="/Frame 1.jpg" alt="Coffee 2" className="w-full h-56 object-cover" /> */}
          <div className="p-4">
            <h3 className="text-xl font-bold">Cappuccino</h3>
            <p className="text-gray-600">Creamy and frothy cappuccino with a hint of sweetness.</p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* <img src="/Frame 2.jpg" alt="Coffee 3" className="w-full h-56 object-cover" /> */}
          <div className="p-4">
            <h3 className="text-xl font-bold">Latte</h3>
            <p className="text-gray-600">A smooth blend of espresso and steamed milk for a perfect balance.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;