import React from 'react';

// Define the data structure
const weeklySchedule = [
  {
    day: "Monday",
    isWeekend: false,
    sessions: [
      { venue: "Active Badminton Centre", time: "7:00 PM – 9:00 PM" }
    ]
  },
  {
    day: "Tuesday",
    isWeekend: false,
    sessions: [
      { venue: "Sky Badminton", time: "7:00 PM – 9:00 PM" }
    ]
  },
  {
    day: "Wednesday",
    isWeekend: false,
    sessions: [
      { venue: "Sky Badminton", time: "7:00 PM – 9:00 PM" }
    ]
  },
  {
    day: "Friday",
    isWeekend: false,
    sessions: [
      { venue: "Sky Badminton", time: "7:00 PM – 9:00 PM" }
    ]
  },
  {
    day: "Saturday",
    isWeekend: true,
    sessions: [
      { venue: "Active Badminton Centre", time: "Session 1: 8:00 AM – 10:00 AM" },
      { venue: "Active Badminton Centre", time: "Session 2: 10:00 AM – 12:00 PM" },
      { venue: "Sky Badminton", time: "Session 3: 6:00 PM – 8:00 PM" }
    ]
  },
  {
    day: "Sunday",
    isWeekend: true,
    sessions: [
      { venue: "Sky Badminton", time: "Session 1: 12:00 PM – 2:00 PM" }
    ]
  }
];

export default function Sessions() {
  return (
    <section id="sessions" className="bg-gray-50 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-2">Weekly Sessions</h2>
        <div className="flex justify-center mb-3"><div className="h-1 w-16 bg-amber-500 rounded-full"></div></div>
        <p className="text-center text-gray-500 mb-10 font-semibold">
          No Membership Fees! Simply book your session in advance and pay per session.
        </p>
        
        {/* Map through the schedule array */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {weeklySchedule.map((scheduleItem, index) => (
            <div 
              key={index} 
              // Added: group, hover:-translate-y-2, hover:shadow-lg, transition-all, and hover border colors
              className={`group p-6 rounded-xl shadow-sm border transition-all duration-300 hover:-translate-y-2 hover:shadow-lg cursor-default ${
                scheduleItem.isWeekend 
                  ? 'bg-white border-amber-200 hover:border-amber-400' 
                  : 'bg-white border-gray-100 hover:border-blue-300'
              }`}
            >
              <h3 className={`text-xl font-bold border-b pb-2 mb-4 transition-colors duration-300 ${
                scheduleItem.isWeekend 
                  ? 'text-amber-600 border-amber-200 group-hover:border-amber-400' 
                  : 'text-blue-700 border-gray-200 group-hover:text-blue-600 group-hover:border-blue-300'
              }`}>
                {scheduleItem.day}
              </h3>
              
              {/* Map through the individual sessions for that specific day */}
              <div className="space-y-3">
                {scheduleItem.sessions.map((session, sIndex) => (
                  <div key={sIndex}>
                    <p className={`font-semibold transition-colors duration-300 ${
                      scheduleItem.isWeekend 
                        ? 'text-amber-700' 
                        : 'text-gray-900 group-hover:text-blue-700'
                    }`}>
                      {session.venue}
                    </p>
                    <p className={`text-sm ${
                      scheduleItem.isWeekend ? 'text-amber-600' : 'text-gray-600'
                    }`}>
                      {session.time}
                    </p>
                  </div>
                ))}
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}