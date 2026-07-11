// 1. Define the impact data with custom SVG icons
const impactData = [
  {
    title: "Women in Sport",
    description: "Over 50% of our members are women, and many of our organisers/hosts are female.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
      </svg>
    )
  },
  {
    title: "Young People",
    description: "We provide a welcoming and active environment for young people to develop skills and form friendships.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    )
  },
  {
    title: "Seniors & Connection",
    description: "We support seniors in maintaining mobility, fitness, and strong social ties.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
      </svg>
    )
  }
];

export default function Impact() {
  return (
    <section id="impact" className="py-20 px-4 bg-blue-600">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-white mb-4">Our Impact</h2>
          <div className="flex justify-center mb-4"><div className="h-1 w-16 bg-amber-500 rounded-full"></div></div>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Badminton Fam Forever is more than just a place to play. We are dedicated to building a supportive and inclusive environment for everyone.
          </p>
        </div>
        
        {/* 2. Render the Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {impactData.map((item, index) => (
            <div 
              key={index} 
              // Added: group, hover:-translate-y-2, hover:shadow-xl, hover:border-blue-200, transition-all
              className="group bg-white p-8 rounded-2xl shadow-sm border border-blue-100 hover:shadow-xl hover:-translate-y-2 hover:border-amber-400 transition-all duration-300 flex flex-col items-center text-center cursor-default"
            >
              <div 
                // Added: group-hover:bg-blue-600, group-hover:text-white, group-hover:scale-110
                className="bg-amber-100 text-amber-600 p-4 rounded-full mb-6 transition-all duration-300 group-hover:bg-amber-500 group-hover:text-white group-hover:scale-110"
              >
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-blue-700 mb-4 group-hover:text-amber-600 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* 3. Core Value Banner */}
        <div className="bg-gradient-to-r from-amber-500 to-amber-400 p-10 rounded-3xl text-center shadow-lg relative overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-amber-300 opacity-30 rounded-full blur-2xl"></div>
          
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 relative z-10">Our Core Value</h3>
          <p className="text-xl md:text-2xl text-blue-800 italic font-light relative z-10">
            &ldquo;We strongly believe sport has the power to unite people and create positive social change.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}