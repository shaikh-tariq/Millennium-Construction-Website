import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import ImageGallery from '../components/ImageGallery';
import {
  ArrowRight,
  Star,
  ShieldCheck,
  Award,
  CheckCircle,
  Phone,
  Home as HomeIcon,
  Waves,
  Flame,
  Paintbrush,
  Hammer,
  Ruler,
} from 'lucide-react';

const Hero = () => (
  <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-black/50 z-10" />
      <video autoPlay loop muted playsInline className="w-full h-full object-cover scale-105">
        <source src="/bg_cons.mp4" type="video/mp4" />
      </video>
    </div>
    <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <span className="inline-block px-4 py-1 glass text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
          Southern California's Top Design & Build Company · Est. 2002
        </span>
        <h1 className="text-5xl md:text-8xl font-bold leading-[0.9] tracking-tighter mb-8 uppercase">
          Creating <span className="text-[#1565C0]">Happiness</span>
        </h1>
        <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          Since 2002, Millennium Construction has emerged as one of Southern California's premiere General Contractors. With our 2D and 3D design services we bring homeowners' dreams to life.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <Link to="/contact" className="group relative px-10 py-5 bg-[#1565C0] text-white font-bold uppercase tracking-widest overflow-hidden transition-all duration-300 hover:pr-14">
            <span className="relative z-10">Get a Free Estimate</span>
            <ArrowRight aria-hidden="true" className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
          </Link>
          <a href="tel:+17143805413" className="glass px-10 py-5 text-white font-bold uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-3">
            <Phone aria-hidden="true" className="w-4 h-4" /> (714) 380-5413
          </a>
        </div>
      </motion.div>
    </div>
    <motion.div aria-hidden="true" animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
      <span className="text-[10px] uppercase tracking-[0.4em] text-white/40">Scroll</span>
      <div className="w-[1px] h-12 bg-gradient-to-b from-[#1565C0] to-transparent" />
    </motion.div>
  </section>
);

const SpecializationsSection = () => {
  const services = [
    { icon: Flame, title: "Outdoor Kitchens & BBQ's", img: "https://images.pexels.com/photos/5824526/pexels-photo-5824526.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { icon: HomeIcon, title: "Outdoor Rooms & Patios", img: "https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { icon: Waves, title: "Swimming Pools & Spas", img: "https://images.pexels.com/photos/261327/pexels-photo-261327.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { icon: Paintbrush, title: "Interior Remodeling", img: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { icon: Hammer, title: "Stonework & Masonry", img: "https://images.pexels.com/photos/5582599/pexels-photo-5582599.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { icon: Ruler, title: "3D Design & Renderings", img: "https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?auto=compress&cs=tinysrgb&w=800" },
  ];

  return (
    <section className="py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-20">
          <span className="text-[#1565C0] font-bold uppercase tracking-[0.3em] text-xs mb-4 block">We Specialize In</span>
          <h2 className="text-5xl md:text-7xl font-bold uppercase leading-none tracking-tighter">Outdoor Design &<br />Remodeling.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
          {services.map((s, i) => (
            <Link key={i} to="/services" className="group relative h-[400px] overflow-hidden border border-white/5 block">
              <img src={s.img} alt={s.title} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-40 group-hover:opacity-60" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <s.icon aria-hidden="true" className="w-10 h-10 text-[#1565C0] mb-4 transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500" />
                <h3 className="text-2xl font-bold uppercase tracking-tight">{s.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const MissionSection = () => (
  <section className="py-32 bg-white text-black">
    <div className="max-w-5xl mx-auto px-6 text-center">
      <span className="text-[#1565C0] font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Our Mission</span>
      <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter italic mb-8">
        "Creating Happiness Through Building and Design"
      </h2>
      <p className="text-lg text-black/60 font-light mb-16">Our Core Goals: Consistency, Quality and Communication</p>
      <div className="grid md:grid-cols-3 gap-12">
        <div className="text-center">
          <div className="w-20 h-20 rounded-full border-2 border-[#1565C0]/30 flex items-center justify-center mx-auto mb-6">
            <ShieldCheck aria-hidden="true" className="w-8 h-8 text-[#1565C0]" />
          </div>
          <h4 className="text-xl font-bold uppercase tracking-tight mb-3">Consistency</h4>
          <p className="text-sm text-black/60 leading-relaxed">Same high standards from first consultation to final walkthrough.</p>
        </div>
        <div className="text-center">
          <div className="w-20 h-20 rounded-full border-2 border-[#1565C0]/30 flex items-center justify-center mx-auto mb-6">
            <Star aria-hidden="true" className="w-8 h-8 text-[#1565C0]" />
          </div>
          <h4 className="text-xl font-bold uppercase tracking-tight mb-3">Quality</h4>
          <p className="text-sm text-black/60 leading-relaxed">Five-star rated on Google, Yelp, and Houzz with thousands of satisfied clients.</p>
        </div>
        <div className="text-center">
          <div className="w-20 h-20 rounded-full border-2 border-[#1565C0]/30 flex items-center justify-center mx-auto mb-6">
            <Phone aria-hidden="true" className="w-8 h-8 text-[#1565C0]" />
          </div>
          <h4 className="text-xl font-bold uppercase tracking-tight mb-3">Communication</h4>
          <p className="text-sm text-black/60 leading-relaxed">All in-house production and design team — clear, direct updates.</p>
        </div>
      </div>
    </div>
  </section>
);

const WhyChooseUsSection = () => (
  <section className="py-32 bg-[#0a0a0a] border-y border-white/5">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <span className="text-[#1565C0] font-bold uppercase tracking-[0.3em] text-xs mb-6 block">Why Choose Us</span>
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter leading-none mb-10">
            The Millennium <span className="text-white/20 italic">Difference.</span>
          </h2>
          <div className="space-y-5">
            {[
              "Est. 2002 — Over 22 years of experience",
              "5 Contractor License Classifications",
              "$1,000,000 General Liability Insurance",
              "Family owned and operated",
              "Five-star rated on Google, Yelp & Houzz",
              "A+ rated by the Better Business Bureau",
              "Perfect record with CA State License Board",
              "10-year warranty on all work",
              "Latest 3D design technology",
              "Financing available through HFS",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <CheckCircle aria-hidden="true" className="w-5 h-5 text-[#1565C0] shrink-0" />
                <p className="text-sm text-white/70">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="aspect-square overflow-hidden border border-white/5">
          <img src="https://images.pexels.com/photos/5824526/pexels-photo-5824526.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Outdoor living space by Millennium Construction" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
      </div>
    </div>
  </section>
);

const AwardBanner = () => (
  <section className="py-16 bg-[#1565C0] text-white">
    <div className="max-w-5xl mx-auto px-6 text-center">
      <Award aria-hidden="true" className="w-12 h-12 mx-auto mb-6" />
      <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-tighter mb-4">
        Rated Best Residential Renovation Contractors in Newport Beach 2024!
      </h2>
      <p className="text-white/80 text-lg font-light">— GeneralContractors.org</p>
    </div>
  </section>
);

const TestimonialsSection = () => (
  <section className="py-32 bg-[#050505]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="max-w-2xl mb-20">
        <span className="text-[#1565C0] font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Client Reviews</span>
        <h2 className="text-5xl font-bold uppercase tracking-tighter">What Our Clients Say.</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-20">
        {[
          { quote: "Millennium Construction transformed our backyard into a resort. The outdoor kitchen and pool area exceed everything we imagined. Eddie and his team are true professionals.", author: "The Rodriguez Family", role: "Outdoor Kitchen & Pool, Newport Beach" },
          { quote: "Incredible quality and communication from start to finish. The 3D renderings helped us visualize everything perfectly. We've already referred them to our neighbors!", author: "Karen M.", role: "Full Interior Remodel, Santa Ana" },
        ].map((t, i) => (
          <div key={i} className="relative">
            <div className="flex gap-1 mb-6">{[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 text-[#1565C0] fill-[#1565C0]" />)}</div>
            <p className="text-xl font-light leading-relaxed mb-8 italic text-white/80">{t.quote}</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-[#1565C0]" />
              <div>
                <p className="text-sm font-bold uppercase tracking-widest">{t.author}</p>
                <p className="text-[10px] uppercase tracking-widest text-white/30">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Home = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <Hero />
      <AwardBanner />
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
        <SpecializationsSection />
      </motion.div>
      <MissionSection />
      <WhyChooseUsSection />
      <ImageGallery
        images={[
          { src: 'https://images.pexels.com/photos/5824526/pexels-photo-5824526.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Outdoor kitchen', caption: 'Outdoor Kitchen — Newport Beach' },
          { src: 'https://images.pexels.com/photos/261327/pexels-photo-261327.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Swimming pool', caption: 'Pool & Spa — Laguna Beach' },
          { src: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Kitchen remodel', caption: 'Kitchen Remodel — Santa Ana' },
          { src: 'https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Outdoor patio', caption: 'Covered Patio — Irvine' },
          { src: 'https://images.pexels.com/photos/5582599/pexels-photo-5582599.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Stonework', caption: 'Masonry & Stonework — Newport Beach' },
          { src: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Bathroom remodel', caption: 'Bathroom Remodel — Orange County' },
          { src: 'https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: '3D design rendering', caption: '3D Design Rendering Preview' },
          { src: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1200', alt: 'Home exterior', caption: 'Exterior Renovation — Costa Mesa' },
        ]}
        accentColor="#1565C0"
        title="Our Portfolio."
        subtitle="Featured Projects"
      />
      <TestimonialsSection />
      <section className="py-32 bg-[#0a0a0a] text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-8">Ready to Build <span className="text-[#1565C0]">Your Dream?</span></h2>
          <p className="text-white/40 text-lg font-light mb-12">Southern California's best-rated design and build company. Contact us for a free consultation, 3D design preview, and budget analysis.</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link to="/contact" className="px-12 py-6 bg-[#1565C0] text-white font-bold uppercase tracking-widest hover:scale-105 transition-all">Get a Free Estimate</Link>
            <a href="tel:+17143805413" className="px-12 py-6 glass text-white font-bold uppercase tracking-widest hover:bg-white/10 transition-all">Call (714) 380-5413</a>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
