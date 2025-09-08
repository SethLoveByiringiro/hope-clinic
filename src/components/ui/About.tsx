import Link from 'next/link';
import { Check } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About Hope Integrated Clinic
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                AT HOPE INTEGRATED CLINIC, we believe that healthy individuals are the foundation of healthy communities. We are a team of dedicated professionals committed to fostering and promoting mental and behavioral wellbeing. We offer a full spectrum of outpatient mental health and substance abuse services, working to make essential care both accessible and effective.
              </p>
            </div>
            
            {/* Key Features */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                  <Check size={14} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Holistic Approach</h3>
                  <p className="text-gray-600 text-sm">Comprehensive care addressing all aspects of mental health</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                  <Check size={14} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Person-Focused Care</h3>
                  <p className="text-gray-600 text-sm">Individualized treatment plans tailored to your unique needs</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                  <Check size={14} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Accessible Services</h3>
                  <p className="text-gray-600 text-sm">Making mental health care available to everyone</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                  <Check size={14} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Community-Minded</h3>
                  <p className="text-gray-600 text-sm">Building stronger communities through better mental health</p>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <Link 
                href="/contact" 
                className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 hover:scale-105 transition-all duration-300 inline-block"
              >
                CONTACT US
              </Link>
            </div>
          </div>
          
          {/* Right Content - Images */}
          <div className="space-y-6">
            {/* Group Therapy Image */}
            <div className="w-full h-64 rounded-lg overflow-hidden">
              <img 
                src="/IMG-20250904-WA0006.jpg" 
                alt="Group Therapy Session" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Bottom Row */}
            <div className="grid grid-cols-2 gap-4">
              {/* Experience Card */}
              <div className="bg-teal-600 text-white p-6 rounded-lg text-center">
                <div className="text-3xl font-bold">+10</div>
                <div className="text-sm">Years Experience</div>
              </div>
              
              {/* Individual Session Image */}
              <div className="w-full h-32 rounded-lg overflow-hidden">
                <img 
                  src="/IMG-20250904-WA0004.jpg" 
                  alt="Individual Therapy Session" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
