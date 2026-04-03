'use client';

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

  const details = (activeService as { details?: string | string[] } | null)?.details;

  const paragraphs =
    Array.isArray(details)
      ? details
      : typeof details === 'string'
      ? details.split('\n').filter(Boolean)
      : activeService
      ? Array.from({ length: 6 }, () => activeService.desc)
      : [];

  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-8 bg-white">
      <div className="max-w-[1400px] mx-auto">
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
                className={`rounded-3xl p-8 flex flex-col justify-between min-h-[280px] ${style.bg} transition-transform hover:-translate-y-2 duration-300`}
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
                    aria-label={`Подробнее о ${service.title}`}
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
            className="w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-2xl bg-white p-8 md:p-10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
          >
            <div className="flex items-start justify-between gap-4 mb-6">
              <h3 id="service-modal-title" className="text-3xl font-semibold text-gray-900">
                {activeService.title}
              </h3>
              <button
                type="button"
                onClick={closeModal}
                className="p-2 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                aria-label="Закрыть модальное окно"
              >
                <FiX className="text-xl" />
              </button>
            </div>

            <div className="space-y-4 text-gray-700 leading-8 text-base md:text-lg">
              {paragraphs.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </div>

            <div className="mt-8 flex justify-end">
              <button
                type="button"
                onClick={closeModal}
                className="px-5 py-2.5 rounded-xl bg-primary-dark text-white hover:opacity-90 transition"
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
