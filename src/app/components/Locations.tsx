import React from 'react';

// 1. Define the location data and their Google Maps embed URLs
const locationsData = [
  {
    name: "Sky Badminton",
    address: "116–118 Wembley Road, Logan Central QLD 4114",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3534.4136693583505!2d153.1049481759655!3d-27.64267042409918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b914408bbce4a0d%3A0xf3df171f9893a1ff!2sSky%20Badminton!5e0!3m2!1sen!2sau!4v1781245717038!5m2!1sen!2sau"
  },
  {
    name: "Active Badminton Centre",
    address: "55 Gardens Drive, Willawong QLD 4110",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.617226328521!2d153.02685417596413!3d-27.605394422502396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b914512bea5c865%3A0xe7d7267e4040af01!2sActive%20Badminton%20Centre!5e0!3m2!1sen!2sau!4v1781245684645!5m2!1sen!2sau"
  }
];

export default function Locations() {
  return (
    <section id="locations" className="py-16 px-4 bg-gray-900 text-white text-center">
      <h2 className="text-3xl font-bold mb-10">Our Locations</h2>
      
      {/* 2. Map through the locations array */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {locationsData.map((loc, index) => (
          <div 
            key={index} 
            className="flex flex-col bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-700 text-left transition-transform duration-300 hover:-translate-y-1"
          >
            {/* Map Embed */}
            <div className="w-full h-64 md:h-72 relative bg-gray-700">
              <iframe
                src={loc.mapSrc}
                title={`Map of ${loc.name}`}
                className="absolute top-0 left-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            
            {/* Venue Details */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-blue-400 mb-3">{loc.name}</h3>
              <div className="flex items-start text-gray-300">
                {/* SVG Map Pin Icon */}
                <svg 
                  className="w-6 h-6 mr-3 text-blue-500 shrink-0 mt-0.5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <p className="leading-relaxed">{loc.address}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}