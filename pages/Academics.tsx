
import React from 'react';
import { Book, Microscope, Palette, Music, Trophy, Users } from 'lucide-react';
import { SCHOOL_NAME } from '../constants';

interface SchoolSectionProps {
  title: string;
  subtitle: string;
  overview: string;
  curriculum: string[];
  facilities: string[];
  image: string;
  reverse?: boolean;
}

const SchoolSection: React.FC<SchoolSectionProps> = ({ title, subtitle, overview, curriculum, facilities, image, reverse }) => (
  <div className={`flex flex-col lg:flex-row items-center gap-16 py-20 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
    <div className="w-full lg:w-1/2 space-y-8">
      <div className="space-y-4">
        <h2 className="text-4xl font-serif text-navy">{title}</h2>
        <h3 className="text-xl text-blue-600 font-semibold">{subtitle}</h3>
        <p className="text-gray-600 leading-relaxed text-lg">{overview}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h4 className="font-bold text-navy mb-4 flex items-center gap-2 border-l-4 border-blue-600 pl-3">Curriculum Highlights</h4>
          <ul className="space-y-2">
            {curriculum.map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" /> {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-navy mb-4 flex items-center gap-2 border-l-4 border-blue-600 pl-3">Facilities</h4>
          <ul className="space-y-2">
            {facilities.map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    <div className="w-full lg:w-1/2">
      <div className="relative group">
        <img src={image} alt={title} className="rounded-3xl shadow-2xl relative z-10 group-hover:scale-[1.02] transition-transform duration-500" />
        <div className="absolute -inset-4 bg-blue-100 rounded-3xl -z-0 group-hover:-inset-6 transition-all duration-500" />
      </div>
    </div>
  </div>
);

const Academics: React.FC<{ type: 'primary' | 'secondary' }> = ({ type }) => {
  const isPrimary = type === 'primary';

  const primaryData = {
    title: "Primary School",
    subtitle: "A Foundation for Lifelong Learning",
    overview: `Our primary education at ${SCHOOL_NAME} focuses on building core competencies in literacy, numeracy, and social skills while encouraging curiosity and creative thinking.`,
    curriculum: ["Numeracy & Literacy", "STEM Introduction", "Nigerian History & Arts", "Global Citizenship", "Phonics & Elocution"],
    facilities: ["Dedicated ICT Lab", "Junior Sports Arena", "Modern Art Room", "School Library", "Learning Centers"],
    image: "https://picsum.photos/id/21/800/600"
  };

  const secondaryData = {
    title: "Secondary School",
    subtitle: "Pathways to Global Excellence",
    overview: `We offer a rigorous academic program that prepares students for the IGCSE and WAEC examinations, emphasizing leadership and research in our Ikorodu campus.`,
    curriculum: ["Pure Sciences & Math", "Social Sciences", "ICT & Coding", "Technical Drawing", "Business & Finance"],
    facilities: ["Science Laboratories", "Modern Auditorium", "Sports Complex", "Tech Innovation Hub", "Resource Center"],
    image: "https://picsum.photos/id/22/800/600"
  };

  const data = isPrimary ? primaryData : secondaryData;

  return (
    <div className="pt-24 min-h-screen">
      <div className="bg-navy py-16 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-serif mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">{data.title}</h1>
        <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>
        <p className="text-gray-300 max-w-2xl mx-auto">Providing world-class education standards right here in the heart of Ikorodu.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SchoolSection {...data} />

        {/* Extra Activities Grid */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-navy">Extracurricular Enrichment</h2>
            <p className="text-gray-500 mt-2">Beyond the classroom development</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { icon: <Palette size={32} />, title: "Visual Arts", desc: "Painting, sculpture and creative design classes." },
               { icon: <Music size={32} />, title: "Music Academy", desc: "Individual and orchestral training in various instruments." },
               { icon: <Trophy size={32} />, title: "Sports Elite", desc: "Inter-house competitions and inter-school league participation." },
               { icon: <Microscope size={32} />, title: "Science Club", desc: "Hands-on experiments and annual science fair projects." },
               { icon: <Users size={32} />, title: "Debate & Ethics", desc: "Developing persuasive speech and critical thinking." },
               { icon: <Book size={32} />, title: "Reading Hub", desc: "Nurturing a reading culture with curated book lists." },
             ].map((item, idx) => (
               <div key={idx} className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                 <div className="text-blue-600 mb-4">{item.icon}</div>
                 <h4 className="text-xl font-bold text-navy mb-2">{item.title}</h4>
                 <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
               </div>
             ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Academics;
