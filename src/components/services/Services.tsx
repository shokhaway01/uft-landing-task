'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FiArrowDownRight, FiX } from 'react-icons/fi';
import type { Dictionary } from '@/locales';

interface ServicesProps {
  dict: Dictionary['services'];
}

const cardStyles = [
  { bg: 'bg-bg-light', text: 'text-gray-900', descColor: 'text-gray-500' },
  { bg: 'bg-primary-dark', text: 'text-white', descColor: 'text-gray-300' },
  { bg: 'bg-bg-light', text: 'text-gray-900', descColor: 'text-gray-500' },
  { bg: 'bg-primary-dark', text: 'text-white', descColor: 'text-gray-300' },
];


const serviceImages = [
  'https://picsum.photos/seed/service-1/1200/600',
  'https://picsum.photos/seed/service-2/1200/600',
  'https://picsum.photos/seed/service-3/1200/600',
  'https://picsum.photos/seed/service-4/1200/600',
];

const Services = ({ dict }: ServicesProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeService = activeIndex !== null ? dict.items[activeIndex] : null;

  const closeModal = () => setActiveIndex(null);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };

    if (activeIndex !== null) {
      window.addEventListener('keydown', onEsc);
    }

    return () => window.removeEventListener('keydown', onEsc);
  }, [activeIndex]);



  const activeImage =
    activeIndex !== null
      ? serviceImages[activeIndex % serviceImages.length]
      : serviceImages[0];

  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-8 bg-white">
      <div className="max-w-350 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-medium mb-6">{dict.title}</h2>
          <p className="text-gray-500 text-lg">{dict.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dict.items.map((service, idx) => {
            const style = cardStyles[idx % cardStyles.length];
            return (
              <div
                key={idx}
                className={`rounded-3xl p-8 flex flex-col justify-between min-h-70 ${style.bg} transition-transform hover:-translate-y-2 duration-300`}
              >
                <div>
                  <h3 className={`text-xl max-w-[150px] font-semibold mb-4 ${style.text}`}>
                    {service.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${style.descColor}`}>{service.desc}</p>
                </div>

                <div className="mt-8 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-accent text-white hover:bg-accent-hover transition-colors"
                    aria-label={dict.modal.ariaMore.replace('{title}', service.title)}
                  >
                    <FiArrowDownRight className="text-xl" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {activeService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6"
          onClick={closeModal}
        >
          <div
            className="w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
          >
            <div className="relative h-56 md:h-72 w-full">
              <Image
                src={activeImage}
                alt={activeService.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1024px"
                priority
                unoptimized
              />
              <button
                type="button"
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/90 text-gray-600 hover:bg-white"
                aria-label={dict.modal.ariaClose}
              >
                <FiX className="text-xl" />
              </button>
            </div>

            <div className="p-8 md:p-10">
              <h3 id="service-modal-title" className="text-3xl font-semibold text-gray-900 mb-3">
                {activeService.title}
              </h3>
              <p className="text-gray-500 text-base md:text-lg mb-6">{activeService.desc}</p>

              <div className="space-y-4 text-gray-700 leading-8 text-base md:text-lg">
                {(activeService.details as string[]).map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-5 py-2.5 rounded-xl bg-primary-dark text-white hover:opacity-90 transition"
                >
                  {dict.modal.ariaClose.split(' ')[0]} {/* Simple way to get "Close" or similar. */}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
