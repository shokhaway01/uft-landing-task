import { FiArrowDownRight } from 'react-icons/fi';

const Services = () => {
  const services = [
    {
      title: "Жилое строительство",
      desc: "Возводим дома и жилые комплексы с учетом сроков и бюджета.",
      bg: "bg-bg-light",
      text: "text-gray-900",
      descColor: "text-gray-500",
      btnColor: "bg-accent text-white"
    },
    {
      title: "Коммерческое строительство",
      desc: "Реализуем объекты для бизнеса — от офисов до торговых помещений.",
      bg: "bg-primary-dark",
      text: "text-white",
      descColor: "text-gray-300",
      btnColor: "bg-accent text-white"
    },
    {
      title: "Ремонт и отделка",
      desc: "Выполняем полный цикл внутренних работ с контролем качества.",
      bg: "bg-bg-light",
      text: "text-gray-900",
      descColor: "text-gray-500",
      btnColor: "bg-accent text-white"
    },
    {
      title: "Инженерные системы",
      desc: "Проектируем и внедряем системы, которые работают стабильно и без перегрузок.",
      bg: "bg-primary-dark",
      text: "text-white",
      descColor: "text-gray-300",
      btnColor: "bg-accent text-white"
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-8 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-medium mb-6">Наши сервисы</h2>
          <p className="text-gray-500 text-lg">
            Мы предоставляем конкретные строительные решения без лишней сложности — быстро, понятно и по делу.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className={`rounded-3xl p-8 flex flex-col justify-between min-h-[280px] ${service.bg} transition-transform hover:-translate-y-2 duration-300`}
            >
              <div>
                <h3 className={`text-xl font-semibold mb-4 ${service.text}`}>{service.title}</h3>
                <p className={`text-sm leading-relaxed ${service.descColor}`}>{service.desc}</p>
              </div>
              <div className="mt-8 flex justify-end">
                <button className={`w-10 h-10 rounded-full flex items-center justify-center ${service.btnColor} hover:bg-accent-hover transition-colors`}>
                  <FiArrowDownRight className="text-xl" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;