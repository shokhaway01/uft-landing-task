import { FiArrowDownRight } from 'react-icons/fi';
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
                  <h3 className={`text-xl max-w-[150px] font-semibold mb-4 ${style.text}`}>{service.title}</h3>
                  <p className={`text-sm leading-relaxed ${style.descColor}`}>{service.desc}</p>
                </div>
                <div className="mt-8 flex justify-end">
                  <button className="w-10 h-10 rounded-full flex items-center justify-center bg-accent text-white hover:bg-accent-hover transition-colors">
                    <FiArrowDownRight className="text-xl" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
