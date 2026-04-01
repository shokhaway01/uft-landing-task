import { FiMapPin, FiPhone } from 'react-icons/fi';
import type { Dictionary } from '@/locales';

interface LocationProps {
  dict: Dictionary['location'];
}

const Location = ({ dict }: LocationProps) => {
  return (
    <section id='contact' className="w-full py-16 md:py-24 px-4 md:px-8 bg-white">
      <div className="max-w-350 mx-auto flex flex-col items-center">
        <div className="self-start grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12 md:ml-10">

          {/* Left Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-medium mb-6 uppercase">
              {dict.title}
            </h2>
            <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-lg">
              {dict.description}
            </p>
          </div>

          {/* Right Contact Details */}
          <div className="flex flex-col gap-8 justify-center lg:pl-16">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-dark text-white rounded-xl flex items-center justify-center shrink-0">
                <FiMapPin className="text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1 text-gray-900">{dict.cityLabel}</h3>
                <p className="text-gray-500 text-sm">{dict.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-dark text-white rounded-xl flex items-center justify-center shrink-0">
                <FiPhone className="text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1 text-gray-900">{dict.phoneLabel}</h3>
                <p className="text-gray-500 text-sm">{dict.phone}</p>
              </div>
            </div>
          </div>

        </div>

        {/* Map */}
        <div className="w-full max-w-[1340px] h-100 md:h-150 rounded-4xl overflow-hidden bg-gray-200">
          <iframe
            className="w-full h-full object-contain opacity-80"
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A1deb371678dfcb44b7940111b37400e964d4a8ddb8ca94e11394d82d70694841&amp;source=constructor"
            width="400"
            height="400"
            style={{ border: 0 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Location;
