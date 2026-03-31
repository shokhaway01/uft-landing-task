import type { Dictionary } from '@/locales';

interface AboutUsProps {
  dict: Dictionary['aboutUs'];
}

const AboutUs = ({ dict }: AboutUsProps) => {
  return (
    <section id="about" className="w-full py-16 md:py-24 px-4 md:px-8 bg-white">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left Text */}
        <div>
          <h2 className="text-3xl md:text-5xl font-semibold mb-6 flex flex-col">
            <span className="mb-8">{dict.title}</span>
            <span className="text-gray-600 text-lg md:text-xl font-normal leading-relaxed block max-w-xl">
              {dict.description}
            </span>
          </h2>
        </div>

        {/* Right Stats Grid */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-12">
          {dict.stats.map((stat, idx) => (
            <div key={idx} className="text-center md:text-left">
              <div className="text-5xl md:text-6xl font-light mb-2 text-gray-900">{stat.value}</div>
              <div className="text-sm md:text-base text-gray-500 w-32 md:w-auto mx-auto md:mx-0">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
