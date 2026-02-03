import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative bg-[#111111] pt-24 pb-12 overflow-hidden text-stone-300">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#0ea771]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-8 lg:px-16">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Section 1: Brand & Bio (4 Columns) */}
          <div className="lg:col-span-4 space-y-8">
            <a href="/" className="flex items-center gap-2 group">
              <div className="w-3 h-3 rounded-full bg-[#0ea771] group-hover:scale-125 transition-transform duration-500" />
              <span className="text-2xl font-bold tracking-tighter text-white">
                DAIRY<span className="text-[#0ea771]">CO</span>
              </span>
            </a>
            <p className="text-stone-400 font-light leading-relaxed max-w-sm">
              A 3-month professional training program designed to build skilled, 
              self-sustainable Village Dairy Counsellors who support dairy farmers 
              and strengthen rural livelihoods.
            </p>
            {/* Social Placeholder */}
            <div className="flex gap-4">
              {['fb', 'tw', 'ig', 'in'].map((social) => (
                <div key={social} className="w-10 h-10 rounded-full border border-stone-800 flex items-center justify-center hover:border-[#0ea771] hover:text-[#0ea771] transition-all cursor-pointer">
                  <span className="text-xs uppercase font-bold">{social}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Quick Links (2 Columns) */}
          <div className="lg:col-span-2 space-y-6">
            <h5 className="text-white font-serif text-lg tracking-wide">Program</h5>
            <ul className="space-y-4 font-light text-sm">
              <li><a href="#" className="hover:text-[#0ea771] transition-colors">About</a></li>
              <li><a href="#" className="hover:text-[#0ea771] transition-colors">Structure</a></li>
              <li><a href="#" className="hover:text-[#0ea771] transition-colors">Methodology</a></li>
              <li><a href="#" className="hover:text-[#0ea771] transition-colors">Impact</a></li>
            </ul>
          </div>

          {/* Section 3: Resources (3 Columns) */}
          <div className="lg:col-span-3 space-y-6">
            <h5 className="text-white font-serif text-lg tracking-wide">Resources</h5>
            <ul className="space-y-4 font-light text-sm">
              <li><a href="#" className="hover:text-[#0ea771] transition-colors">Training Materials</a></li>
              <li><a href="#" className="hover:text-[#0ea771] transition-colors">Field Internship</a></li>
              <li><a href="#" className="hover:text-[#0ea771] transition-colors">Apply for Training</a></li>
              <li><a href="#" className="hover:text-[#0ea771] transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Section 4: Contact (3 Columns) */}
          <div className="lg:col-span-3 space-y-6">
            <h5 className="text-white font-serif text-lg tracking-wide">Contact Office</h5>
            <div className="space-y-5 font-light text-sm">
              <div className="flex items-start gap-3">
                <span className="text-[#0ea771]">📍</span>
                <span>Rural Development & Dairy Training Center, India</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#0ea771]">✉️</span>
                <span className="break-all">info@villagedairycounsellor.org</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#0ea771]">📞</span>
                <span>+91 XXXXX XXXXX</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Card - Matching Previous Theme Styles */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-stone-900/50 border border-stone-800 rounded-[32px] p-8 mb-16"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-stone-800 flex items-center justify-center">
              <lord-icon
                src="https://cdn.lordicon.com/ofwpzftr.json" // Shield icon
                trigger="loop"
                delay="2000"
                colors="primary:#ffffff,secondary:#0ea771"
                style={{ width: "40px", height: "40px" }}
              />
            </div>
            <div className="text-center md:text-left">
              <h6 className="text-white font-serif text-xl mb-2">Certification & Trust</h6>
              <p className="text-stone-500 font-light leading-relaxed text-sm">
                Certified Village Dairy Counsellors are trained through structured assessments, 
                field internships, and practical evaluations to ensure professional competency and 
                real-world impact.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Footer Bottom: Legal & Copyright */}
        <div className="pt-12 border-t border-stone-900 flex flex-col md:flex-row justify-between items-center gap-6 text-[13px] tracking-wide text-stone-600 uppercase font-bold">
          <p>© 2026 Village Dairy Counsellor Program</p>
          
          <div className="flex flex-wrap justify-center gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;