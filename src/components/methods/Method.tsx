import Card1 from '../../assets/card-1.png';
import Card2 from '../../assets/card-2.png';
import Card3 from '../../assets/card-3.png';


const Method = () => {
  const approaches = [
    {
      title: "Концепт и архитектура",
      desc: "Разработка архитектурной концепции и проектной документации.",
      image: Card1
    },
    {
      title: "Проектирование и планирование",
      desc: "Техническое проектирование, расчеты и координация процессов.",
      image: Card2
    },
    {
      title: "Строительство и Сдача",
      desc: "Реализация проекта с контролем сроков, бюджета и качества.",
      image: Card3
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-8 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-medium mb-6">Наш подход</h2>
          <p className="text-gray-500 text-lg">
            Мы не усложняем процессы — мы выстраиваем их так, чтобы результат был предсказуемым.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {approaches.map((approach, idx) => (
            <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow border border-gray-100 flex flex-col">
              <div className="h-64 w-full overflow-hidden p-4">
                <img 
                  src={approach.image} 
                  alt={approach.title} 
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="p-8 pt-4 flex-grow">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{approach.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{approach.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Method;