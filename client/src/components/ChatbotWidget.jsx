import React, { useState } from "react";
import { MessageSquare, X, Bot } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-24 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
            className="mb-4 bg-[#111111] rounded-2xl shadow-2xl overflow-hidden border border-[#ffcc00]/20 flex flex-col"
            style={{ width: '380px', height: '550px', maxHeight: 'calc(100vh - 200px)', maxWidth: 'calc(100vw - 48px)' }}
          >
            {/* Header section in case the iframe doesn't have an inbuilt header/close button */}
            <div className="bg-[#1a1a1a] p-3 flex justify-between items-center text-white border-b border-[#333]">
              <div className="flex items-center gap-2">
                <div className="bg-[#ffcc00] p-1.5 rounded-full">
                  <Bot size={18} className="text-black" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#ffcc00] m-0 leading-tight">ABM Support</h3>
                  <p className="text-xs text-gray-400 m-0 leading-tight">We typically reply in minutes</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white"
              >
                <X size={18} />
              </button>
            </div>
            
            {/* Iframe Content */}
            <div className="flex-1 w-full bg-white relative">
              <iframe
                src="https://chatbot-nu-drab-94.vercel.app/widget"
                className="w-full h-full border-0 absolute inset-0"
                title="Chatbot Interface"
                allow="microphone"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#1a1a1a] border-2 border-[#ffcc00] text-[#ffcc00] w-14 h-14 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(255,204,0,0.3)] hover:shadow-[0_0_20px_rgba(255,204,0,0.5)] transition-shadow z-50 relative group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? (
          <X size={26} className="transition-transform group-hover:rotate-90 duration-300" />
        ) : (
          <MessageSquare size={26} className="transition-transform group-hover:scale-110 duration-300" />
        )}
      </motion.button>
    </div>
  );
};

export default ChatbotWidget;
