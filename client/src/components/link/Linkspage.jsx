import React from "react";
import { Share, MoreVertical, Instagram, Sparkles,Facebook} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { RWebShare } from "react-web-share";
import { linkData, profileData } from "../data/Data";
import noiseiamge from "../../assets/Linkslogo/download.svg";

const LinkTree = () => {
  const noisePattern = `url(${noiseiamge})`;

  return (
    <div className="min-h-screen bg-[#181818] flex items-center justify-center p-4 font-sans text-white">
      
      {/* CHANGED: max-w-md -> max-w-xl (Makes the card wider) */}
      <div className="w-full max-w-xl bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-[2rem] shadow-2xl overflow-hidden border border-zinc-500 relative">
        <div
          className="absolute inset-0 z-0 opacity-15 pointer-events-none mix-blend-overlay"
          style={{ backgroundImage: noisePattern }}
        />

        <div className="relative z-10">
          <div className="p-6 pb-2 relative">
            <div className="flex justify-end items-center mb-6">
              <RWebShare
                data={{
                  text: profileData.description,
                  url: window.location.href,
                  title: profileData.name,
                }}
                onClick={() => console.log("Shared successfully!")}
              >
                <button className="w-8 h-8 flex items-center justify-center bg-zinc-700/50 rounded-full hover:bg-zinc-600 transition backdrop-blur-sm">
                  <Share size={16} />
                </button>
              </RWebShare>
            </div>

            <div className="flex flex-col items-center text-center space-y-3">
              <div className="w-20 h-20 border-2 border-white rounded-full p-1 overflow-hidden shadow-lg bg-white/10 backdrop-blur-sm">
                <img
                  src={profileData.logoUrl}
                  alt="Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <h1 className="text-xl font-serif font-bold tracking-wide text-gray-100 drop-shadow-md">
                {profileData.name}
              </h1>

              <p className="text-sm text-gray-300 leading-relaxed max-w-xs mx-auto drop-shadow-sm">
                {profileData.description}
              </p>
            </div>
          </div>

          <div className="p-4 space-y-3 pb-10">
            {linkData.map((link) => (
              // 1. Parent Wrapper
              <div
                key={link.id}
                className="group flex items-center bg-black/80 hover:bg-zinc-800 border border-zinc-700/50 hover:border-zinc-500 transition-all duration-300 rounded-full shadow-lg backdrop-blur-sm cursor-pointer hover:scale-[1.02]"
              >
                {/* 2. Left Side: The Clickable Link */}
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center p-1.5 min-w-0" 
                >
                  {link.thumbnail ? (
                    <div className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0 border border-zinc-600">
                      <img
                        src={link.thumbnail}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-11 h-11 rounded-full flex-shrink-0" />
                  )}

                  <div className="flex-1 text-center px-2">
                    <span className="text-sm font-semibold text-gray-200 group-hover:text-white line-clamp-2">
                      {link.title}
                    </span>
                  </div>
                </a>

                {/* 3. Right Side: The Share Button */}
                <div className="pr-4 pl-1">
                  <RWebShare
                    data={{
                      text: link.title,
                      url: link.url,
                      title: link.title,
                    }}
                    onClick={() => console.log("Link shared successfully!")}
                  >
                    <button
                      className="text-gray-500 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <MoreVertical size={18} />
                    </button>
                  </RWebShare>
                </div>
              </div>
            ))}
          </div>

          {/* Social Media Section */}
            <div className="flex flex-col items-center w-full space-y-4 pb-8 pt-4">
              
              {/* Divider with Text */}
              <div className="flex items-center w-full px-12 opacity-60">
                <div className="h-[1px] bg-zinc-600 flex-1"></div>
                <span className="px-3 text-[10px] text-zinc-400 uppercase tracking-[0.2em] font-medium">
                  Social Media
                </span>
                <div className="h-[1px] bg-zinc-600 flex-1"></div>
              </div>

              {/* Icons Row */}
              <div className="flex gap-6">
                <a
                  href={profileData.instagramlink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-500 transition-colors transform hover:scale-110 duration-200"
                >
                  <Instagram size={24} />
                </a>
                
                {/* Example of a second icon (Duplicate as requested) */}
                <a
                  href={profileData.facebooklink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500 transition-colors transform hover:scale-110 duration-200"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href={profileData.whatsapplink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-500 transition-colors transform hover:scale-110 duration-200"
                >
                  <FaWhatsapp size={24} />
                </a>
              </div>

            </div>
        </div>
      </div>
    </div>
  );
};

export default LinkTree;