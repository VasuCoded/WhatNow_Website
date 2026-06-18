'use client';
import React from 'react';
import ScrollVelocity from '../ui/ScrollVelocity';

const ITEMS = [
  "JEE",
  "NEET",
  "UCEED",
  "CLAT",
  "NDA",
  "NIFT",
  "Merchant Navy",
  "Urban Planning",
  "Game Design",
  "Agriculture"
];

export default function Marquee() {
  const marqueeContent = (
    <div className="flex items-center">
      {ITEMS.map((item, index) => (
        <React.Fragment key={index}>
          <span className="text-gray-400 font-bold text-lg md:text-2xl tracking-widest uppercase">
            {item}
          </span>
          <span className="mx-10 md:mx-16 w-2 h-2 rounded-full bg-gray-300 shrink-0"></span>
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div className="relative w-full overflow-hidden bg-white dark:bg-[#0E111E] py-6 lg:py-8 flex items-center">
      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-white dark:from-[#0E111E] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-white dark:from-[#0E111E] to-transparent z-10 pointer-events-none"></div>

      <ScrollVelocity
        texts={[marqueeContent]}
        velocity={50}
        damping={50}
        stiffness={400}
        numCopies={8}
        scrollerClassName="scroller"
      />
    </div>
  );
}
