import Link from 'next/link';
import { Phone, Clock, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/conforting.jpg)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600/90 via-teal-500/70 to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <p className="text-sm font-medium text-teal-200 uppercase tracking-wide">
                LIVE YOUR LIFE
              </p>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Your Mental Wellness Journey Starts Here
              </h1>
              <p className="text-lg text-white max-w-2xl">
                AT HOPE INTEGRATED CLINIC, we are dedicated to fostering and promoting mental wellbeing through proven, culturally relevant, and client-centered approaches.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 text-center"
              >
                CONTACT US
              </Link>
            </div>
          </div>
          
          {/* Right Content - Empty space to match prototype */}
          <div className="hidden lg:block">
            {/* Empty space to maintain layout balance */}
          </div>
        </div>
      </div>
      
      {/* Information Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start">
              <div>
                <p className="text-sm font-medium">Need Mental Service?</p>
                <p className="text-sm">(520) 771-6551</p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start relative">
              <div className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 w-px h-8 bg-white/30"></div>
              <div className="md:pl-8">
                <p className="text-sm font-medium">Opening Hours</p>
                <p className="text-sm">Monday to Friday 9:00 AM - 5:00 PM</p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start relative">
              <div className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 w-px h-8 bg-white/30"></div>
              <div className="md:pl-8">
                <p className="text-sm font-medium">Email Us</p>
                <p className="text-sm">hopeintegrated23@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
