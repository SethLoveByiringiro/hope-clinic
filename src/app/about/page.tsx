import { Heart, Eye, Check } from 'lucide-react';

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/conforting.jpg)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 to-teal-800/60"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
            <nav className="text-sm">
              <span className="text-teal-200">HOME</span>
              <span className="mx-2">&gt;</span>
              <span className="text-white">ABOUT US</span>
            </nav>
          </div>
        </div>
      </section>

      {/* About Hope Integrated Clinic Section */}
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

      {/* Mission & Core Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Mission & Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>

          {/* Mission and Vision Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Heart size={24} className="text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To foster and promote mental well-being using proven, culturally relevant, and client-centered approaches. We are committed to providing comprehensive mental health and substance abuse services that empower individuals to lead healthier, more fulfilling lives.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Eye size={24} className="text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To build communities where mental well-being is preventable, and treatment is accessible and delivered with dignity. We envision a world where every individual has the support and resources they need to achieve optimal mental health and wellness.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
