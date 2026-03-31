import React from 'react';
import { FiArrowDownRight } from 'react-icons/fi';

const Gallery = () => {
  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-8 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Left Text and Title */}
          <div className="w-full lg:w-1/3 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl md:text-5xl font-medium mb-6">Галерея проектов</h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                Реализованные проекты — это не визуализации, а реальные объекты, 
                построенные нашей командой. Каждый из них отражает наш подход к 
                качеству, срокам и деталям.
              </p>
            </div>
            
            {/* Left large image */}
            <div className="relative rounded-3xl overflow-hidden h-[450px] group">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop" 
                alt="Project" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <button className="absolute bottom-6 right-6 w-12 h-12 bg-primary-dark rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors z-10">
                <FiArrowDownRight className="text-xl" />
              </button>
            </div>
          </div>

          {/* Right Images Grid */}
          <div className="w-full lg:w-2/3 flex flex-col gap-6">
            <div className="flex flex-col md:flex-row gap-6 h-[450px] md:h-[600px]">
              
              {/* Middle column (2 images stacked) */}
              <div className="flex flex-col gap-6 w-full md:w-1/2">
                <div className="relative rounded-3xl overflow-hidden h-1/2 group">
                  <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop" alt="Project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <button className="absolute bottom-6 right-6 w-10 h-10 bg-primary-dark rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors z-10"><FiArrowDownRight/></button>
                </div>
                <div className="relative rounded-3xl overflow-hidden h-1/2 group">
                  <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2670&auto=format&fit=crop" alt="Project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <button className="absolute bottom-6 right-6 w-10 h-10 bg-primary-dark rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors z-10"><FiArrowDownRight/></button>
                </div>
              </div>

              {/* Right column (1 tall image) */}
              <div className="relative rounded-3xl overflow-hidden w-full md:w-1/2 group h-full hidden md:block">
                <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop" alt="Project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <button className="absolute bottom-6 right-6 w-12 h-12 bg-primary-dark rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors z-10"><FiArrowDownRight className="text-xl"/></button>
              </div>

            </div>

            <div className="mt-4 flex justify-start md:justify-end">
              <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-full text-sm font-medium transition-colors">
                Посмотреть больше проектов
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Gallery;
