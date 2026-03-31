import { FiMapPin, FiPhone } from 'react-icons/fi';

const Location = () => {
  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-8 bg-white">
      <div className="max-w-350 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          
          {/* Left Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-medium mb-6 uppercase">Наше<br/>Расположение</h2>
            <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-lg">
              Наш офис расположен в Ташкенте. Мы открыты для сотрудничества с частными и корпоративными клиентами.
            </p>
          </div>

          {/* Right Text details */}
          <div className="flex flex-col gap-8 justify-center lg:pl-16">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-dark text-white rounded-xl flex items-center justify-center shrink-0">
                <FiMapPin className="text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1 text-gray-900">Melbourne</h3>
                <p className="text-gray-500 text-sm">100 Flinders Street, Melbourne VIC 3000 AU</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-dark text-white rounded-xl flex items-center justify-center shrink-0">
                <FiPhone className="text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1 text-gray-900">Номер телефона</h3>
                <p className="text-gray-500 text-sm">+998 99 123 45 67</p>
              </div>
            </div>
          </div>

        </div>

        {/* Map placeholder */}
        <div className="w-full h-100 md:h-150 rounded-4xl overflow-hidden bg-gray-200">
          
          <iframe className='w-full h-full object-cover opacity-80' src="https://yandex.ru/map-widget/v1/?um=constructor%3A1deb371678dfcb44b7940111b37400e964d4a8ddb8ca94e11394d82d70694841&amp;source=constructor" width="500" height="400" frameBorder="0"></iframe>

        </div>
      </div>
    </section>
  );
};

export default Location;
