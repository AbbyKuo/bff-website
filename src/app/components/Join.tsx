'use client';

export default function Join() {
  return (
    <section id="join" className="relative bg-blue-600 text-white py-20 px-4 text-center overflow-hidden">
      {/* Decorative amber top border */}
      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="text-4xl font-extrabold mb-3">Join BFF – We&rsquo;d love to have you!</h2>
        <div className="flex justify-center mb-6"><div className="h-1 w-16 bg-amber-500 rounded-full"></div></div>
        <p className="text-xl mb-10 text-blue-100">
          Ready to hit the courts? To join or learn more, reach out to us today:
        </p>
        
        {/* Contact Button */}
        <a 
          href="tel:0411397739" 
          className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-400 text-blue-900 font-bold text-xl md:text-2xl py-4 px-8 md:px-10 rounded-full shadow-lg hover:scale-105 transition-all duration-300 mb-12"
        >
          {/* Phone Icon */}
          <svg className="w-6 h-6 md:w-8 md:h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
          </svg>
          Contact Truc: 0411 397 739
        </a>

        {/* Social Media Links */}
        <div className="flex justify-center items-center space-x-6 md:space-x-8">
          
          {/* WhatsApp */}
          <a
              href="https://chat.whatsapp.com/LDLF3ggrNXc6Ka3TISrgY5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-amber-400 transition-colors duration-300"
              aria-label="WhatsApp"
          >
            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
            </svg>
          </a>

          {/* Facebook */}
          <a
              href="https://www.facebook.com/share/g/1D7MikJRaw/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-amber-400 transition-colors duration-300"
              aria-label="Facebook"
          >
            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
            </svg>
          </a>

          {/* Instagram */}
          <a
              href="https://www.instagram.com/badmintonsocials_brisbane?igsh=aTU0azZwcWd5eW0="
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-amber-400 transition-colors duration-300"
              aria-label="Instagram"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </a>

          {/* WeChat */}
          <a
              href="/images/socials/wechat-qr.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-amber-400 transition-colors duration-300"
              aria-label="WeChat"
          >
            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.295.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-3.825-6.348-7.601-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .246-.11.246-.246a.29.29 0 0 0-.04-.177l-.326-1.233a.49.49 0 0 1 .177-.554C23.196 18.602 24 17.08 24 15.4c0-3.226-2.955-5.705-7.062-5.542zm-3.833 2.9c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}