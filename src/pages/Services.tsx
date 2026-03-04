import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Building2, Hammer, Truck, ShieldCheck, Zap, Globe, ArrowRight } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    { num: "01", title: "Pre-Construction", desc: "Comprehensive feasibility studies, value engineering, and risk mitigation before ground is broken." },
    { num: "02", title: "BIM & Scheduling", desc: "Clash detection and critical-path scheduling using Level 3 BIM to guarantee timeline certainty." },
    { num: "03", title: "Precision Execution", desc: "Flawless site management with zero-harm safety protocols and strict ISO 9001 quality control." },
    { num: "04", title: "Commissioning", desc: "Rigorous system testing and seamless handover, ensuring your facility is day-one operational." }
  ];

  return (
    <section className="py-32 bg-[#0a0a0a] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-20">
          <span className="text-[#1565C0] font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Our Method</span>
          <h2 className="text-5xl font-bold uppercase tracking-tighter italic">How We Deliver.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((s, i) => (
            <div key={i} className="relative group">
              <span className="text-7xl font-bold opacity-5 font-display mb-6 block group-hover:text-primary group-hover:opacity-100 transition-all">{s.num}</span>
              <h4 className="text-xl font-bold uppercase tracking-widest mb-4">{s.title}</h4>
              <p className="text-white/40 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const faqs = [
    { q: "What sectors do you specialize in?", a: "We specialize in Industrial, Commercial, and Infrastructure sectors, with a strong focus on complex, large-scale projects." },
    { q: "Do you offer Design & Construct services?", a: "Yes, we provide full end-to-end Design & Construct (D&C) solutions, leveraging our in-house engineering expertise." },
    { q: "How do you ensure site safety?", a: "Safety is our top priority. We maintain a 0.0 LTI frequency rate and are ISO 45001 certified for Occupational Health and Safety." },
    { q: "What is your approach to sustainability?", a: "We are committed to sustainable building practices and regularly deliver projects with high Green Star and NABERS ratings." }
  ];

  return (
    <section className="py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-20">
          <span className="text-[#1565C0] font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Common Questions</span>
          <h2 className="text-5xl font-bold uppercase tracking-tighter italic">FAQs.</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {faqs.map((f, i) => (
            <div key={i} className="glass p-10 border border-white/5">
              <h4 className="text-lg font-bold uppercase tracking-tight mb-4 text-primary">{f.q}</h4>
              <p className="text-white/40 text-sm leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      id: "outdoor-kitchens",
      icon: Building2,
      title: "Outdoor Kitchens & BBQ's",
      desc: "Custom outdoor kitchen and BBQ installations designed for Southern California outdoor living.",
      features: ["Custom Grills", "Countertops", "Built-in Appliances"]
    },
    {
      id: "outdoor-rooms",
      icon: Hammer,
      title: "Outdoor Rooms & Patios",
      desc: "Beautiful outdoor living spaces including patios, pergolas, and entertainment areas.",
      features: ["Covered Patios", "Pergolas", "Entertainment Areas"]
    },
    {
      id: "swimming-pools",
      icon: Truck,
      title: "Swimming Pools & Spas",
      desc: "Custom swimming pool and spa design and construction for luxury outdoor living.",
      features: ["Pool Design", "Spa Installation", "Water Features"]
    },
    {
      id: "interior-remodeling",
      icon: ShieldCheck,
      title: "Interior Remodeling",
      desc: "Complete kitchen, bathroom, and whole-home interior remodeling services.",
      features: ["Kitchen Remodel", "Bath Renovation", "Whole Home"]
    },
    {
      id: "hardscape",
      icon: Zap,
      title: "Hard-Scape: Stonework & Masonry",
      desc: "Expert stonework, masonry, and hard-scape design and installation.",
      features: ["Stone Patios", "Retaining Walls", "Masonry Work"]
    },
    {
      id: "design-services",
      icon: Globe,
      title: "3D Design & Renderings",
      desc: "State-of-the-art 3D design renderings so you can visualize your project before construction begins.",
      features: ["3D Renderings", "2D Plans", "Virtual Tours"]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32"
    >
      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-20">
            <span className="text-[#1565C0] font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Our Capabilities</span>
            <h1 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter leading-none mb-8">
              End-to-End <br />
              <span className="text-white/20 italic">Solutions.</span>
            </h1>
            <p className="text-xl text-white/60 font-light leading-relaxed">
              We deliver end-to-end design and construct solutions that mitigate risk,
              control capital expenditure, and ensure total project success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
            {services.map((service, i) => (
              <Link key={i} to={`/services/${service.id}`} className="glass p-12 border border-white/5 group hover:bg-white hover:text-black transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1565C0] rounded-sm block">
                <service.icon aria-hidden="true" className="w-12 h-12 text-[#1565C0] mb-8 group-hover:text-black transition-colors" />
                <h3 className="text-2xl font-bold uppercase tracking-tight mb-6">{service.title}</h3>
                <p className="text-white/40 group-hover:text-black/60 text-sm leading-relaxed mb-8 transition-colors">
                  {service.desc}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest opacity-60">
                      <div className="w-1 h-1 bg-[#1565C0] rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary group-hover:text-black flex items-center gap-2">
                  View Service Details <ArrowRight aria-hidden="true" className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />
      <FAQSection />
    </motion.div>
  );
};

export default Services;
