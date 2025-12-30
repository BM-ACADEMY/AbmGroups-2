import React from "react";
import { motion } from "framer-motion";

// Placeholder InstagramEmbed component with responsive iframe
const InstagramEmbed = ({ permalink }) => {
  // Clean Instagram URL by removing query parameters and adding embed
  const cleanUrl = permalink.split("?")[0] + "embed";
  return (
    <div className="w-full relative pt-[125%] sm:pt-[100%] bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
      <iframe
        src={cleanUrl}
        className="absolute top-0 left-0 w-full h-full"
        frameBorder="0"
        scrolling="no"
        allowTransparency
        allow="encrypted-media"
        title="Instagram Embed"
      />
    </div>
  );
};

const InstagramFeeds = () => {
  const instagramLinks = [
    "https://www.instagram.com/kamarudeen_bm/",
    // Add more links here to test the centering logic
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="bg-[#020202] overflow-hidden" id="moments">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 max-w-full">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Our Instagram <span className="text-yellow-400">Moments</span>
          </h2>
          <p className="mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-white">
            Follow us for more updates and behind-the-scenes content
          </p>
        </div>

        {/* CENTER MODE CHANGES:
           1. Changed 'grid' to 'flex'
           2. Added 'flex-wrap' (allows items to wrap to next line)
           3. Added 'justify-center' (centers items horizontally)
        */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {instagramLinks.map((link, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              // Set explicit widths here to mimic columns, but allow centering
              className="w-full sm:w-80 md:w-96 transform hover:scale-105 transition-transform duration-300 ease-out"
            >
              <InstagramEmbed permalink={link} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeeds;