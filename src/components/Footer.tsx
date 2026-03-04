import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#050505] pt-32 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <img src="/logo.png" alt="Millennium Construction Logo" className="h-12 object-contain" />
            </div>
            <p className="text-white/40 font-light leading-relaxed mb-8">
              Since 2002, Millennium Construction has emerged as one of Southern California's premiere General Contractors, bringing homeowners' dreams to life with...
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-[#1565C0]">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Our Services', href: '/services' },
                { name: 'Projects', href: '/projects' },
                { name: 'Contact', href: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-white/40 hover:text-white transition-colors text-sm uppercase tracking-widest">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-[#1565C0]">Our Offices</h4>
            <ul className="space-y-8">
              <li className="flex gap-4">
                <MapPin className="w-5 h-5 text-white/20 shrink-0" />
                <div>
                  <p className="text-sm font-bold uppercase mb-1">Newport Beach</p>
                  <p className="text-xs text-white/40 leading-relaxed">2901 W Coast Hwy #200, Newport Beach, CA 92663</p>
                </div>
              </li>
              <li className="flex gap-4">
                <MapPin className="w-5 h-5 text-white/20 shrink-0" />
                <div>
                  <p className="text-sm font-bold uppercase mb-1">Santa Ana</p>
                  <p className="text-xs text-white/40 leading-relaxed">1340 E Pomona Street, Santa Ana, CA 92705</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-[#1565C0]">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-white/20" />
                <span className="text-sm font-bold uppercase tracking-widest">+1 (714) 380-5413</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-white/20" />
                <span className="text-sm font-bold tracking-widest">marketing@buildingdreamsoc.com</span>
              </li>
              <li className="pt-4">
                <Link to="/contact" className="block w-full py-4 glass text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all text-center">
                  Get a Free Estimate
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-white/20 uppercase tracking-[0.2em]">
            © 2026 Millennium Construction. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            {['Privacy Policy', 'Terms of Service'].map((item) => (
              <a key={item} href="#" className="text-[10px] text-white/20 hover:text-white uppercase tracking-[0.2em] transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
