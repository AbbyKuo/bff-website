import React from 'react';

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-4 bg-[url('/images/about-bg.jpg')] bg-cover bg-center bg-no-repeat bg-fixed"
    >
      <div className="relative z-10 max-w-4xl mx-auto text-center bg-white/70 backdrop-blur-sm rounded-3xl px-8 py-12 shadow-xl">

        {/* Section label */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-6 drop-shadow-sm">
          Welcome to BFF!
        </h2>

        {/* Amber divider */}
        <div className="flex justify-center mb-8">
          <div className="h-1 w-20 bg-amber-500 rounded-full"></div>
        </div>

        <p className="text-lg md:text-xl leading-relaxed mb-10 text-gray-800 font-medium max-w-3xl mx-auto">
          BFF is one of Brisbane&rsquo;s fastest-growing and largest social badminton communities.
          Whether you&rsquo;re a novice or an experienced player, you&rsquo;ll find a welcoming space to
          stay active and meet new people from all backgrounds and ages!
        </p>

        {/* Member count highlight */}
        <div className="inline-flex items-center gap-4 bg-blue-600/10 border border-amber-500/60 rounded-2xl px-8 py-5 shadow-md">
          <div className="flex flex-col items-center">
            <span className="text-4xl font-extrabold text-amber-500">600+</span>
            <span className="text-sm font-semibold text-amber-600 uppercase tracking-wider">Members</span>
          </div>
          <div className="w-px h-12 bg-amber-500/60"></div>
          <p className="text-lg font-semibold text-blue-800 text-left">
            Proudly bringing together<br/>
            <span className="text-gray-600 font-normal">the Brisbane community</span>
          </p>
        </div>

      </div>
    </section>
  );
}
