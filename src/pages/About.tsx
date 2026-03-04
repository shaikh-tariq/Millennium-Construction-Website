import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, ShieldCheck, Star, Users, Briefcase, Home, CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32"
    >
      {/* Founder Story Section */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-[#1565C0] font-bold uppercase tracking-[0.3em] text-xs mb-4 block">About Us</span>
              <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none mb-8">
                Delivering Total Satisfaction{' '}
                <span className="text-white/20 italic">That Exceeds Expectations.</span>
              </h1>
              <p className="text-xl text-white/60 font-light leading-relaxed mb-6">
                The story of Millennium Construction's success begins with its founder, Eddie Guerrero. Growing up in Irvine, California, Eddie has a special distinction of calling Orange County his native home and has since been able to translate this heritage to many homes of his clients.
              </p>
              <p className="text-white/40 font-light leading-relaxed mb-6">
                At the young age of 16, Eddie started work full-time in the trenches with Del Mar Masonry. Through his dedication, hard work and resolve, he worked his way up to Vice President within just a few years.
              </p>
              <p className="text-white/40 font-light leading-relaxed mb-10">
                After 14 years at Del Mar Masonry and with the blessing of its founder, Eddie ventured off to form Millennium Construction. He realized his vision of forming a reputable company that combines the technical expertise of quality construction and the refined design abilities of a preeminent luxury contractor for the Orange County community.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden border border-white/5">
                <img
                  src="https://images.pexels.com/photos/5824526/pexels-photo-5824526.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Luxury outdoor living space designed by Millennium Construction"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Founder Quote Overlay */}
              <div className="absolute -bottom-8 -right-8 glass p-8 max-w-sm hidden md:block border border-white/5">
                <p className="text-sm text-white/60 italic leading-relaxed mb-4">
                  "If you love great service and value, then you owe it to yourself to call Millennium Construction. I guarantee you will be treated like family from the first day we meet."
                </p>
                <p className="text-[#1565C0] font-bold text-sm uppercase tracking-widest">Eddie Guerrero</p>
                <p className="text-[10px] text-white/40 uppercase tracking-widest">President / CEO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Core Goals */}
      <section className="py-32 bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#1565C0] font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Our Mission</span>
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter italic mb-8">
              "Creating Happiness Through Building and Design"
            </h2>
            <p className="text-xl text-white/40 font-light">Our Core Goals: Consistency, Quality and Communication</p>
          </div>
          <div className="grid md:grid-cols-3 gap-1">
            <div className="glass p-12 border border-white/5 text-center">
              <ShieldCheck aria-hidden="true" className="w-12 h-12 text-[#1565C0] mx-auto mb-6" />
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">Consistency</h3>
              <p className="text-white/40 text-sm leading-relaxed">We deliver consistent quality across every project, maintaining the same high standard from start to finish.</p>
            </div>
            <div className="glass p-12 border border-white/5 text-center">
              <Star aria-hidden="true" className="w-12 h-12 text-[#1565C0] mx-auto mb-6" />
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">Quality</h3>
              <p className="text-white/40 text-sm leading-relaxed">Five-star rated on Google, Yelp, and Houzz. Our craftsmanship speaks through thousands of satisfied clients across Orange County.</p>
            </div>
            <div className="glass p-12 border border-white/5 text-center">
              <Users aria-hidden="true" className="w-12 h-12 text-[#1565C0] mx-auto mb-6" />
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">Communication</h3>
              <p className="text-white/40 text-sm leading-relaxed">Our all in-house production and design team ensures clear, direct communication throughout your entire project lifecycle.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-[#1565C0] font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Why Choose Us</span>
              <h2 className="text-5xl font-bold uppercase tracking-tighter italic mb-10">The Millennium Difference.</h2>
              <div className="space-y-6">
                {[
                  "Established in 2002 — 22+ years of proven experience",
                  "5 different classifications of Contractor Licenses (B-General Building, C-53, C-8, C-29, C-27)",
                  "$1,000,000 General Liability & Workman's Compensation insurance",
                  "Family owned and operated business",
                  "Five-star rated on Google, Yelp, and Houzz",
                  "A+ rating from the Better Business Bureau (BBB)",
                  "Perfect record with the California State License Board",
                  "10-year warranty on all our work",
                  "View your project with the latest 3D design technology",
                  "All in-house production and design team",
                  "Preliminary budget analysis before your project begins",
                  "Financing available through HFS",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <CheckCircle aria-hidden="true" className="w-5 h-5 text-[#1565C0] shrink-0 mt-0.5" />
                    <p className="text-sm text-black/70 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="aspect-square overflow-hidden">
              <img
                src="https://images.pexels.com/photos/5582599/pexels-photo-5582599.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Beautiful outdoor kitchen and pool area built by Millennium Construction in Orange County"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-32 bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-20">
            <span className="text-[#1565C0] font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Recognition</span>
            <h2 className="text-5xl font-bold uppercase tracking-tighter italic">Award Winning.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { year: "2024", title: "Best Residential Renovation Contractors", org: "Newport Beach — GeneralContractors.org" },
              { year: "2023", title: "Five-Star Service Excellence", org: "Google Reviews · Yelp · Houzz" },
              { year: "2022", title: "A+ Rated Contractor", org: "Better Business Bureau (BBB)" },
              { year: "2002", title: "Perfect License Record", org: "California State License Board" },
            ].map((a, i) => (
              <div key={i} className="flex justify-between items-center p-8 glass border border-white/5 hover:bg-white hover:text-black transition-all duration-300 group">
                <div>
                  <p className="text-xs font-bold text-[#1565C0] mb-1">{a.year}</p>
                  <h4 className="text-xl font-bold uppercase tracking-tight">{a.title}</h4>
                  <p className="text-[10px] uppercase tracking-widest opacity-40 group-hover:opacity-60">{a.org}</p>
                </div>
                <Award aria-hidden="true" className="w-8 h-8 opacity-10 group-hover:opacity-100 transition-all" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* We Specialize In */}
      <section className="py-32 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-[#1565C0] font-bold uppercase tracking-[0.3em] text-xs mb-4 block">We Specialize In</span>
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter italic mb-16">
            Outdoor Design & Remodeling · Kitchen, Bath & Interior · Residential Design
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Home, title: "Outdoor Design & Remodeling", desc: "Custom outdoor kitchens, patios, pools, and entertainment spaces designed for SoCal living." },
              { icon: Briefcase, title: "Kitchen, Bath & Interior", desc: "Complete kitchen, bathroom, and whole-home interior remodeling with premium finishes." },
              { icon: Briefcase, title: "Residential Design & Remodeling", desc: "Full-service residential design and construction from concept to completion." },
            ].map((s, i) => (
              <div key={i} className="glass p-12 border border-white/5 text-center group hover:bg-white hover:text-black transition-all duration-500">
                <s.icon aria-hidden="true" className="w-12 h-12 text-[#1565C0] mx-auto mb-6 group-hover:text-black transition-colors" />
                <h3 className="text-xl font-bold uppercase tracking-tight mb-4">{s.title}</h3>
                <p className="text-white/40 group-hover:text-black/60 text-sm leading-relaxed transition-colors">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-white text-black text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-8">
            Ready to Build <span className="text-[#1565C0]">Your Dream?</span>
          </h2>
          <p className="text-black/40 text-lg font-light mb-12">
            Rated the best residential renovation contractors in Newport Beach. Contact us for a free consultation, 3D design preview, and budget analysis.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-12 py-5 bg-[#1565C0] text-white font-bold uppercase tracking-widest text-sm hover:scale-105 transition-all"
          >
            Get a Free Estimate <ArrowRight aria-hidden="true" className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
