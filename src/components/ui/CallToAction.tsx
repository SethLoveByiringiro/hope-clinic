import Link from 'next/link';

const CallToAction = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-teal-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full"></div>
        <div className="absolute top-32 right-20 w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-8 h-8 sm:w-12 sm:h-12 bg-white rounded-full"></div>
        <div className="absolute bottom-32 right-1/3 w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight">
          Integrated Care For A Brighter Future
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-teal-100 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
          Dedicated to fostering mental wellbeing and building healthier communities.
        </p>
        <Link 
          href="/contact" 
          className="bg-green-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-green-600 hover:scale-105 transition-all duration-300 inline-block text-base sm:text-lg"
        >
          GET STARTED
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
