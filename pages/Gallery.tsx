
import React, { useState } from 'react';
import Carousel from '../components/Carousel';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'classroom' | 'sports' | 'events' | 'campus'>('all');

  const filteredImages = filter === 'all' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === filter);

  return (
    <div className="pt-24 min-h-screen">
      <div className="bg-navy py-16 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-serif mb-4">Our Campus Life</h1>
        <p className="text-gray-400 px-4">Capturing moments of growth, joy, and excellence.</p>
      </div>

      <Carousel />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['all', 'classroom', 'sports', 'events', 'campus'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`px-6 py-2 rounded-full font-semibold transition-all uppercase text-xs tracking-widest ${
                filter === cat ? 'bg-navy text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img, idx) => (
            <div 
              key={idx} 
              className="relative aspect-square overflow-hidden rounded-2xl shadow-md group animate-in fade-in duration-500"
            >
              <img 
                src={img.url + "?q=" + idx} 
                alt={img.caption} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
                <div>
                    <p className="text-white font-serif text-xl mb-2">{img.caption}</p>
                    <span className="text-blue-200 text-xs uppercase tracking-widest font-bold">{img.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredImages.length === 0 && (
            <div className="text-center py-20 text-gray-400">
                No images found for this category.
            </div>
        )}
      </section>
    </div>
  );
};

export default Gallery;
