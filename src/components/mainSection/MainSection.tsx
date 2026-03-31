import Subtract from '../../assets/Subtract.svg';

const MainSection = () => {
  return (
    <section id='home' className="w-full pt-32 pb-4 px-4 md:px-8 bg-white">
      <div className="max-w-[1352px] mx-auto relative">
        <div className="w-full relative">
          <img src={Subtract} alt="Hero Background with dynamic cut-out" className="w-full h-auto drop-shadow-sm" />
          
          {/* Text Overlay */}
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center px-10 md:px-14 lg:px-20">
            <div className="max-w-xl lg:max-w-2xl mt-8">
              <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-white leading-[1.1] mb-6">
                Precision in Every Step.
              </h1>
              <p className="text-sm md:text-lg text-gray-200 max-w-[540px] leading-relaxed font-light">
                We provide full-cycle architectural and construction solutions, managing every stage of development — from strategic planning and technical documentation to construction and commissioning.
              </p>
            </div>
          </div>

          {/* Button positioned inside the Cut-out space */}
          <div className="absolute bottom-0 left-0 w-[40.4%] h-[13.3%] flex items-center justify-center p-2 lg:p-4">
            <button className="bg-primary-dark hover:bg-primary text-white w-full max-w-[420px] py-2 sm:py-3 lg:py-4 rounded-full text-[10px] sm:text-sm lg:text-base font-medium transition-colors shadow-md">
              Получить бесплатную консультацию
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;