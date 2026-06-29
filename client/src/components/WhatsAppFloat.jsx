import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/919944940051?text=Hello!%20I%20reached%20out%20from%20the%20ABM%20Groups%20website."
      target="_blank"
      className="wa-float"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  );
}
