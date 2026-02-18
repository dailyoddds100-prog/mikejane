
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_IMAGES } from '../constants';

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  };

  return (
    <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden group">
      {GALLERY_IMAGES.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out transform ${
            idx === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          }`}
        >
          <img
            src={img.url}
            alt={img.caption}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
            <div className="p-8 md:p-16 text-white max-w-4xl">
              <h3 className="text-2xl md:text-4xl font-serif mb-2">{img.caption}</h3>
              <p className="text-white/80 md:text-lg">Experience world-class learning facilities at Mike-Jane Academy.</p>
            </div>
          </div>
        </div>
      ))}

      {/* Controls */}
      <button 
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/20 backdrop-blur-md hover:bg-black/40 text-white rounded-full transition-all opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft size={32} />
      </button>
      <button 
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/20 backdrop-blur-md hover:bg-black/40 text-white rounded-full transition-all opacity-0 group-hover:opacity-100"
      >
        <ChevronRight size={32} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {GALLERY_IMAGES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all ${idx === currentIndex ? 'bg-white w-8' : 'bg-white/40'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
