
import React from 'react';
import { Target, Eye, ShieldCheck, Heart, Users } from 'lucide-react';
import { SCHOOL_NAME } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen ">
      <div className="bg-navy py-16 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-serif mb-4">About {SCHOOL_NAME}</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">Founded on excellence, dedicated to character building in Ikorodu since 1995.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        {/* Story Section */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl font-serif text-navy mb-6">Our Legacy</h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              {SCHOOL_NAME} started with a simple vision: to create an educational environment in Ikorodu where academic brilliance is balanced with strong moral values. For nearly three decades, we have been a beacon of quality education in Lagos.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              We believe that every child has a unique spark. Our role is to provide the fuel and the environment for that spark to become a flame that lights up the world.
            </p>
          </div>
          <div className="w-full lg:w-1/2 relative">
             <img src="https://picsum.photos/id/12/800/600" alt="Legacy of Mike-Jane" className="rounded-2xl shadow-2xl" />
             <div className="absolute -bottom-6 -right-6 bg-blue-600 p-8 rounded-2xl text-white shadow-xl hidden md:block">
                <span className="text-5xl font-bold block">28+</span>
                <span className="text-sm uppercase tracking-widest font-bold">Years of Excellence</span>
             </div>
          </div>
        </div>

        {/* Vision/Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-12 rounded-3xl border border-gray-100 hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                    <Eye size={32} />
                </div>
                <h3 className="text-3xl font-serif text-navy mb-6">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed text-lg">Achieve excellence through effective learning process with integrity
Become independent and responsible global citizen.</p>
            </div>
            <div className="bg-navy p-12 rounded-3xl text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-150 transition-transform duration-700"><Target size={200} /></div>
                <div className="w-16 h-16 bg-white text-navy rounded-2xl flex items-center justify-center mb-8 shadow-lg relative z-10">
                    <Target size={32} />
                </div>
                <h3 className="text-3xl font-serif mb-6 relative z-10">Our Mission</h3>
                <p className="text-gray-100/80 leading-relaxed text-lg relative z-10">Our mission at Mike-Jane school is to impact positive in the young minds in their formative years the orientation for academic excellence and aspirations for self-worth with moral values in achieving generation and global relevance</p>
            </div>
        </div>

        {/* Values */}
        <div className="py-20 text-center">
            <h2 className="text-4xl font-serif text-navy mb-16">Our Core Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                    { icon: <ShieldCheck className="text-blue-600" size={40} />, title: "Integrity", desc: "Honesty in words and consistency in actions." },
                    { icon: <Award className="text-blue-600" size={40} />, title: "Excellence", desc: "Striving for the highest possible standards." },
                    { icon: <Users className="text-blue-600" size={40} />, title: "Collaboration", desc: "Working together to achieve common goals." },
                    { icon: <Heart className="text-blue-600" size={40} />, title: "Empathy", desc: "Understanding and respecting others' feelings." },
                ].map((val, i) => (
                    <div key={i} className="p-10 bg-white rounded-3xl shadow-sm border border-gray-50 flex flex-col items-center">
                        <div className="mb-6">{val.icon}</div>
                        <h4 className="text-xl font-bold text-navy mb-3">{val.title}</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">{val.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

const Award = ({ size, className }: { size: number, className: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
    <circle cx="12" cy="8" r="6" />
  </svg>
);

export default About;
