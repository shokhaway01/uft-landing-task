import Image from 'next/image';
import { FiArrowDownRight } from 'react-icons/fi';
import type { Dictionary } from '@/locales';

interface GalleryProps {
  dict: Dictionary['gallery'];
}

const Gallery = ({ dict }: GalleryProps) => {
  return (
    <section id="projects" className="w-full py-16 md:py-24 px-4 md:px-8 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:h-[650px] xl:h-[750px]">

          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            <div className="lg:mb-2">
              <h2 className="text-4xl md:text-5xl font-medium mb-4 lg:mb-6">{dict.title}</h2>
              <p className="text-gray-500 text-lg leading-relaxed lg:max-w-[95%]">
                {dict.description}
              </p>
            </div>
            <div className="relative rounded-3xl overflow-hidden h-[400px] lg:h-auto lg:flex-1 group">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
                alt="Project"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <button className="absolute bottom-6 right-6 w-12 h-12 bg-primary-dark rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors z-10">
                <FiArrowDownRight className="text-xl" />
              </button>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            <div className="relative rounded-3xl overflow-hidden h-[350px] lg:h-auto lg:flex-[1.2] group">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop"
                alt="Project"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <button className="absolute bottom-6 right-6 w-12 h-12 bg-primary-dark rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors z-10">
                <FiArrowDownRight className="text-xl" />
              </button>
            </div>
            <div className="relative rounded-3xl overflow-hidden h-[300px] lg:h-auto lg:flex-[1] group">
              <Image
                src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2670&auto=format&fit=crop"
                alt="Project"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <button className="absolute bottom-6 right-6 w-12 h-12 bg-primary-dark rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors z-10">
                <FiArrowDownRight className="text-xl" />
              </button>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6">
            <div className="relative rounded-3xl overflow-hidden h-[450px] lg:h-auto lg:flex-1 group">
              <Image
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop"
                alt="Project"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <button className="absolute bottom-6 right-6 w-12 h-12 bg-primary-dark rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors z-10">
                <FiArrowDownRight className="text-xl" />
              </button>
            </div>
            <button className="w-full py-4 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full text-sm font-medium transition-colors">
              {dict.viewMore}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Gallery;
