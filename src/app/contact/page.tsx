'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

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
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact</h1>
            <nav className="text-sm">
              <span className="text-teal-200">HOME</span>
              <span className="mx-2">&gt;</span>
              <span className="text-white">CONTACT US</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  We're Here to Listen, <span className="text-teal-600">Contact Us Today</span>
                </h2>
                <p className="text-lg text-gray-600">
                  We are here to help. Whether you have questions, need to schedule an appointment, or want to learn more about our services, please reach out.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    >
                      <option value="">Select a Service</option>
                      <option value="diagnostic">Diagnostic Assessments</option>
                      <option value="treatment">Treatment Plan & Medication Management</option>
                      <option value="consultations">Clinical & Forensic Consultations</option>
                      <option value="individual">Individual Therapy</option>
                      <option value="group">Intensive Outpatient Group Therapy</option>
                      <option value="education">Psycho-Education</option>
                      <option value="domestic">Misdemeanor Domestic Violence Offender Treatment</option>
                      <option value="dui">DUI (Screening, Education, & Treatment)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Tell us how we can help you..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                >
                  SUBMIT
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Email */}
              <div className="bg-teal-600 text-white p-6 rounded-lg">
                <div className="flex items-center space-x-4">
                  <Mail size={24} />
                  <div>
                    <h3 className="font-semibold">Email Address</h3>
                    <p className="text-teal-100">hopeintegrated23@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-teal-600 text-white p-6 rounded-lg">
                <div className="flex items-center space-x-4">
                  <Phone size={24} />
                  <div>
                    <h3 className="font-semibold">Phone Number</h3>
                    <p className="text-teal-100">(520) 771-6551</p>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="bg-teal-600 text-white p-6 rounded-lg">
                <div className="flex items-center space-x-4">
                  <MapPin size={24} />
                  <div>
                    <h3 className="font-semibold">Our Address</h3>
                    <p className="text-teal-100">3425 East Grant Rd, Tucson, AZ 85716</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
