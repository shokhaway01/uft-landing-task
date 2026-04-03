'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FiArrowDownRight, FiX } from 'react-icons/fi';
import type { Dictionary } from '@/locales';

interface GalleryProps {
  dict: Dictionary['gallery'];
  lang: string;
}

interface Project {
  id: number;
  image: string;
  alt: string;
  title: string;
  description: string;
  details: string;
}

const projectImages = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop',
    alt: 'Project 1',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop',
    alt: 'Project 2',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2670&auto=format&fit=crop',
    alt: 'Project 3',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop',
    alt: 'Project 4',
  },
];

const Gallery = ({ dict, lang }: GalleryProps) => {
  const [selectedProject, setSelectedProject] = useState<{ image: string; alt: string; title: string; description: string; details: string } | null>(null);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, []);

  const openModal = (imgData: typeof projectImages[0], textData: any) => {
    setSelectedProject({
      image: imgData.image,
      alt: imgData.alt,
      title: textData.title,
      description: textData.description,
      details: textData.details,
    });
  };
  const closeModal = () => setSelectedProject(null);

  return (
    <>
      <section id="projects" className="w-full py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:h-[650px] xl:h-[750px]">
            {/* Column 1 */}
            <div className="flex flex-col gap-6">
              <div className="lg:mb-2">
                <h2 className="text-4xl md:text-5xl font-medium mb-4 lg:mb-6">{dict.title}</h2>
                <p className="text-gray-500 text-lg leading-relaxed lg:max-w-[95%]">{dict.description}</p>
              </div>
              <div className="relative rounded-3xl overflow-hidden h-[400px] lg:h-auto lg:flex-1 group">
                <Image
                  src={projectImages[0].image}
                  alt={projectImages[0].alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <button
                  type="button"
                  onClick={() => openModal(projectImages[0], dict.projects[0])}
                  className="absolute bottom-6 right-6 w-12 h-12 bg-primary-dark rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors z-10"
                >
                  <FiArrowDownRight className="text-xl" />
                </button>
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-6">
              <div className="relative rounded-3xl overflow-hidden h-[350px] lg:h-auto lg:flex-[1.2] group">
                <Image
                  src={projectImages[1].image}
                  alt={projectImages[1].alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <button
                  type="button"
                  onClick={() => openModal(projectImages[1], dict.projects[1])}
                  className="absolute bottom-6 right-6 w-12 h-12 bg-primary-dark rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors z-10"
                >
                  <FiArrowDownRight className="text-xl" />
                </button>
              </div>
              <div className="relative rounded-3xl overflow-hidden h-[300px] lg:h-auto lg:flex-[1] group">
                <Image
                  src={projectImages[2].image}
                  alt={projectImages[2].alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <button
                  type="button"
                  onClick={() => openModal(projectImages[2], dict.projects[2])}
                  className="absolute bottom-6 right-6 w-12 h-12 bg-primary-dark rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors z-10"
                >
                  <FiArrowDownRight className="text-xl" />
                </button>
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-6">
              <div className="relative rounded-3xl overflow-hidden h-[450px] lg:h-auto lg:flex-1 group">
                <Image
                  src={projectImages[3].image}
                  alt={projectImages[3].alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <button
                  type="button"
                  onClick={() => openModal(projectImages[3], dict.projects[3])}
                  className="absolute bottom-6 right-6 w-12 h-12 bg-primary-dark rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors z-10"
                >
                  <FiArrowDownRight className="text-xl" />
                </button>
              </div>
              <button
                type="button"
                className="w-full py-4 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full text-sm font-medium transition-colors"
                onClick={() => {
                  window.location.href = `/${lang}/gallery`;
                }}
              >
                {dict.viewMore}
              </button>
            </div>
          </div>
        </div>
      </section>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 overflow-y-auto"
          onClick={closeModal}
        >
          <div
            className="bg-white w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[250px] md:h-auto md:w-1/3 flex-shrink-0">
              <Image
                src={selectedProject.image}
                alt={selectedProject.alt}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover"
              />
            </div>

            <div className="p-6 md:p-8 flex-1 overflow-y-auto max-h-[600px] relative">
              <button
                type="button"
                onClick={closeModal}
                className="sticky top-4 right-0 float-right w-10 h-10 rounded-full bg-gray-200 text-gray-800 flex items-center justify-center hover:bg-gray-300 transition-colors z-20"
              >
                <FiX className="text-xl" />
              </button>

              <h3 className="text-3xl md:text-4xl font-medium mb-6 pr-8">{selectedProject.title}</h3>
              <p className="text-gray-600 font-semibold mb-6 text-lg">{selectedProject.description}</p>
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap mb-6 text-base">{selectedProject.details}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
