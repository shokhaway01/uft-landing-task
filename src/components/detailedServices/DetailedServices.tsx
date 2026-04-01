import type { Dictionary } from '@/locales';

interface DetailedServicesProps {
  dict: Dictionary['detailedServices'];
}

const DetailedServices = ({ dict }: DetailedServicesProps) => {
  return (
    <section id="services" className="w-full py-16 md:py-24 px-4 md:px-8 bg-white">
      <div className="max-w-[1400px] mx-auto bg-primary-dark rounded-[32px] md:rounded-[40px] p-4 md:p-6 w-full">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          
          {/* Header cell */}
          <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-start">
            <p className="text-[#aebfb9] text-sm md:text-[15px] mb-2">{dict.subtitle}</p>
            <h2 className="text-4xl lg:text-[44px] font-normal leading-tight tracking-tight text-white">{dict.title}</h2>
          </div>

          {/* Cards */}
          {dict.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[24px] lg:rounded-[32px] p-6 md:p-8 lg:p-10 flex flex-col justify-between min-h-[230px] lg:min-h-[250px]"
            >
              <div className="flex justify-end">
                <span className="text-[48px] lg:text-[56px] font-medium text-[#9ba9a5] leading-none">{item.num}</span>
              </div>
              <div className="mt-8">
                <h3 className="text-[20px] lg:text-[22px] font-normal mb-3 text-gray-900 leading-snug">{item.title}</h3>
                <p className="text-[14px] lg:text-[15px] text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default DetailedServices;
