import Link from 'next/link';
import { Users, User, FileText, Shield, Car, BookOpen, Heart, Scale } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Users size={24} />,
      title: "Diagnostic Assessments",
      description: "A clinical evaluation performed by a licensed professional to accurately assess your needs."
    },
    {
      icon: <User size={24} />,
      title: "Treatment Plan & Medication Management",
      description: "We create a detailed treatment plan and provide expert management of your medication."
    },
    {
      icon: <Scale size={24} />,
      title: "Clinical & Forensic Consultations",
      description: "Professional consultations for clinical and forensic evaluations."
    },
    {
      icon: <Heart size={24} />,
      title: "Individual Therapy",
      description: "Work one-on-one with a trained professional in a private, supportive environment."
    },
    {
      icon: <Users size={24} />,
      title: "Intensive Outpatient Group Therapy",
      description: "A structured psychological treatment program that offers support and guidance in a group setting."
    },
    {
      icon: <BookOpen size={24} />,
      title: "Psycho-Education",
      description: "We provide educational resources and information to help you better understand your mental health needs."
    },
    {
      icon: <Shield size={24} />,
      title: "Misdemeanor Domestic Violence Offender Treatment",
      description: "A specialized behavioral health service for individuals with a misdemeanor domestic violence offense."
    },
    {
      icon: <Car size={24} />,
      title: "DUI (Screening, Education, & Treatment)",
      description: "We offer behavioral screening and follow-up treatment and education for certain driving offenses."
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-green-600 text-white p-6 sm:p-8 rounded-lg mb-8 sm:mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Our Best Services For Your Solution
              </h2>
            </div>
            <div>
              <p className="text-green-100 text-base sm:text-lg leading-relaxed">
                We provide a full range of outpatient mental health and substance abuse services, from the least to the most intensive. We serve adults who need support, evaluations, and counseling for various mental illnesses and substance abuse issues.
              </p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group"
            >
              <div className="text-teal-600 mb-3 sm:mb-4 group-hover:text-teal-700 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 group-hover:text-teal-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
