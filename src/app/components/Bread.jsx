'use client';

import { useState, useEffect } from 'react';

export default function ModernCarousel() {
  const [index, setIndex] = useState(0);
  
  // التبديل التلقائي للصور
  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((index + 1) % 3);
    }, 4000);
    
    return () => clearTimeout(timer);
  }, [index]);

  // التنقل للصورة السابقة
  const prevSlide = () => {
    setIndex(index === 0 ? 2 : index - 1);
  };

  // التنقل للصورة التالية
  const nextSlide = () => {
    setIndex(index === 2 ? 0 : index + 1);
  };

  return (
    <div className="relative h-64 sm:h-80 md:h-96 w-full mx-auto my-8 shadow-2xl">
      {/* حاوية الصور مع الحواف المنحنية */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
        {/* الصور مع تأثيرات الانتقال */}
        <div className="relative w-full h-full">
          <div 
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === 0 ? 'opacity-100' : 'opacity-0'}`}
          >
            <img src="/Post36.jpg" alt="Post 36" className="w-full h-full object-cover" />
          </div>
          
          <div 
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === 1 ? 'opacity-100' : 'opacity-0'}`}
          >
            <img src="/Post40.jpg" alt="Post 40" className="w-full h-full object-cover" />
          </div>
          
          <div 
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === 2 ? 'opacity-100' : 'opacity-0'}`}
          >
            <img src="/Post50.jpg" alt="Post 50" className="w-full h-full object-cover" />
          </div>
        </div>
        
        {/* طبقة تظليل جمالية فوق الصور */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-40"></div>
      </div>

      {/* أزرار التنقل بتصميم عصري */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white bg-opacity-30 backdrop-blur-sm text-white border border-white border-opacity-30 shadow-lg hover:bg-opacity-50 transition-all duration-300"
        aria-label="السابق"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white bg-opacity-30 backdrop-blur-sm text-white border border-white border-opacity-30 shadow-lg hover:bg-opacity-50 transition-all duration-300"
        aria-label="التالي"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* مؤشرات بتصميم عصري */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {[0, 1, 2].map((i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === index 
                ? 'bg-white w-6' 
                : 'bg-white bg-opacity-60 hover:bg-opacity-100'
            }`}
            aria-label={`عرض الصورة ${i + 1}`}
          />
        ))}
      </div>
      
      {/* رقم الصورة الحالية بتصميم عصري */}
      <div className="absolute top-4 right-4 bg-green-500 bg-opacity-20 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm font-medium">
        {index + 1}/3
      </div>
    </div>
  );
}