import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

function ContactButton() {
  return (
    <div className="floating-whats">
      <FloatingWhatsApp
        phoneNumber="5584987060515"
        accountName="Crislene Lopes"
        // eslint-disable-next-line global-require
        avatar={ require('../images/profile_whats.jpg') }
        statusMessage="Psicológa CRP-17/6365"
        chatMessage="Olá, como posso ajudar?"
        placeholder=""

      />

    </div>
  );
}

export default ContactButton;
