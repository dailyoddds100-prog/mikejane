
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, BookOpen, Globe, CheckCircle2 } from 'lucide-react';
import Carousel from '../components/Carousel';
import home from '../images/home.jpg'
import { SCHOOL_NAME } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section - Updated with premium Navy Bluish background */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[#001f3f]">
          {/* Base Image Texture */}
          <img 
            src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=2000" 
            alt="Mike-Jane Academy Campus" 
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
          {/* Rich Navy Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#001f3f] via-[#002b5e]/90 to-[#001f3f]/80"></div>
          
          {/* Subtle Geometric Pattern */}
          <div className="absolute inset-0 opacity-10" style={{ 
            backgroundImage: 'radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)', 
            backgroundSize: '32px 32px' 
          }}></div>
          
          {/* Animated Glow Effect */}
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <span className="inline-block py-2 px-5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-300 text-xs font-bold tracking-[0.2em] uppercase mb-8">
              Excellence Redefined • Ikorodu, Lagos
            </span>
            <h1 className="text-5xl md:text-8xl font-serif mb-8 leading-[1.1] drop-shadow-2xl">
              Knowledge for <span className="text-blue-400">Dignity</span>, <br />
              and <span className="text-blue-400">Power</span>
            </h1>
            <p className="text-lg md:text-2xl text-blue-100/80 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Welcome to {SCHOOL_NAME}. We provide a world-class educational experience designed to empower students with knowledge, character, and vision.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Link 
                to="/about" 
                className="w-full sm:w-auto px-10 py-5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 hover:scale-105 transition-all shadow-[0_10px_30px_rgba(37,99,235,0.3)] flex items-center justify-center gap-2"
              >
                Discover Our Story <ArrowRight size={20} />
              </Link>
              <Link 
                to="/primary" 
                className="w-full sm:w-auto px-10 py-5 bg-white/5 backdrop-blur-sm border border-white/20 hover:bg-dark hover:text-navy text-white font-bold rounded-xl hover:scale-105 transition-all"
              >
                Our Curriculum
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif text-navy mb-4">The Mike-Jane Advantage</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: <Award size={40} />, title: "Academic Excellence", desc: "Top-tier results in WAEC, IGCSE and Common Entrance exams." },
              { icon: <BookOpen size={40} />, title: "Modern Curriculum", desc: "Integration of British and Nigerian curricula for a global outlook." },
              { icon: <Users size={40} />, title: "Small Class Sizes", desc: "Dedicated attention ensuring no child is left behind." },
              { icon: <Globe size={40} />, title: "Global Exposure", desc: "International partnerships and exchange opportunities." },
            ].map((item, idx) => (
              <div key={idx} className="group p-8 rounded-2xl border border-gray-100 hover:shadow-2xl transition-all duration-300 bg-gray-50 hover:bg-white text-center">
                <div className="mb-6 text-blue-600 inline-block p-4 bg-white rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Auto-Sliding Gallery Preview */}
      <section className="bg-gray-100">
        <div className="text-center py-12">
            <h2 className="text-3xl font-serif text-navy mb-2">Life at {SCHOOL_NAME}</h2>
            <p className="text-gray-500">A glimpse into our daily campus activities in Ikorodu</p>
        </div>
        <Carousel />
      </section>

      {/* Call to Action */}
      <section className="py-24 relative overflow-hidden bg-navy">
        <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="text-white max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Join the Mike-Jane Family</h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Admissions for the upcoming academic session are now open. Secure your child's spot in Ikorodu's premier institution for balanced growth and world-class learning.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <li className="flex items-center gap-2 text-gray-200"><CheckCircle2 className="text-blue-400" size={20} /> Entrance Examinations</li>
              <li className="flex items-center gap-2 text-gray-200"><CheckCircle2 className="text-blue-400" size={20} /> Parent Interviews</li>
              <li className="flex items-center gap-2 text-gray-200"><CheckCircle2 className="text-blue-400" size={20} /> Campus Tours</li>
              <li className="flex items-center gap-2 text-gray-200"><CheckCircle2 className="text-blue-400" size={20} /> Scholarship Programs</li>
            </ul>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all shadow-lg">Apply Now</button>
              <button className="px-8 py-4 bg-transparent border border-white/30 hover:bg-white/10 text-white font-bold rounded-lg transition-all">Contact Registrar</button>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
             <img src={home} alt="Mike-Jane Students" className="rounded-2xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
