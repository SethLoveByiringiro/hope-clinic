import Link from 'next/link';

const CallToAction = () => {
  return (
    <section className="py-20 bg-teal-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full"></div>
        <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-white rounded-full"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Integrated Care For A Brighter Future
        </h2>
        <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
          Dedicated to fostering mental wellbeing and building healthier communities.
        </p>
        <Link 
          href="/contact" 
          className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 hover:scale-105 transition-all duration-300 inline-block text-lg"
        >
          GET STARTED
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
