
const DetailedServices = () => {
  const details = [
    { num: "01", title: "Строительство под ключ", desc: "Мы создаем пространства, которые определяют облик окружающей среды." },
    { num: "02", title: "Частичное строительство", desc: "Работаем с отдельными этапами — фундамент, коробка, отделка." },
    { num: "03", title: "Реконструкция объектов", desc: "Работаем с отдельными этапами — фундамент, коробка, отделка." },
    { num: "04", title: "Техническое сопровождение", desc: "Обновляем здания с учетом новых требований и нагрузок." },
    { num: "05", title: "Оптимизация проектов", desc: "Контроль и консультации на всех этапах строительства." }
  ];

  return (
    <section className="w-full py-16 px-4 md:px-8 bg-white">
      <div className="max-w-[1400px] mx-auto bg-primary-dark rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 text-white min-h-[600px] flex flex-col justify-center">
        
        <div className="flex flex-col xl:flex-row gap-12">
          
          {/* Left Text */}
          <div className="xl:w-1/4">
            <p className="text-gray-400 text-sm mb-2">Какой то там текст о про услуги</p>
            <h2 className="text-4xl md:text-5xl font-medium">Наши услуги</h2>
          </div>

          {/* Right Cards Grid */}
          <div className="xl:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {details.map((item, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 text-gray-900 flex flex-col justify-between min-h-[220px]">
                <div className="flex justify-end">
                  <span className="text-4xl md:text-5xl font-light text-gray-300">{item.num}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default DetailedServices;
