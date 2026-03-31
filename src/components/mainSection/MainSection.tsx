import Image from 'next/image';
import type { Dictionary } from '@/locales';

interface MainSectionProps {
  dict: Dictionary['mainSection'];
}

const MainSection = ({ dict }: MainSectionProps) => {
  return (
    <section id="home" className="w-full pt-24 md:pt-32 pb-4 bg-white">

      {/* ── MOBILE HERO (< md) ── */}
      {/*
        Figma frame: 358×439px
          Image (Subtract): x=0  y=0   w=358 h=420  → rasm
          Text frame:       x=16 y=223 w=326 h=129  → sarlavha + tavsif
          Button frame:     x=0  y=399 w=328 h=40   → tugma rasmdan 19px pastga chiqadi
      */}
      <div className="md:hidden px-4">
        {/* Tashqi konteyner: 439px — button rasmdan pastga chiqishi uchun overflow yo'q */}
        <div className="relative w-full" style={{ height: '439px' }}>

          {/* Rasm: 420px, rounded corners, overflow-hidden faqat rasmga */}
          <div className="absolute inset-x-0 top-0 rounded-3xl overflow-hidden" style={{ height: '420px' }}>
            <Image
              src="/hero-mobile.png"
              alt="Hero Background"
              fill
              priority
              sizes="(max-width: 768px) 100vw"
              className="object-cover object-center"
            />
          </div>

          {/* Matn: x=16 y=223 */}
          <div className="absolute left-4 right-4" style={{ top: '223px' }}>
            <h1 className="text-[28px] font-semibold text-white leading-tight mb-2">
              {dict.title}
            </h1>
            <p className="text-[16px] font-medium text-white/80 leading-relaxed">
              {dict.description}
            </p>
          </div>

          {/* Tugma: x=0 y=399 w=328 (91.6% of 358) h=40 — rasmdan 19px pastga tushadi */}
          <div className="absolute left-0" style={{ top: '399px', right: '8.4%' }}>
            <button className="w-full bg-[#053232] hover:bg-primary text-white px-6 py-2 rounded-[34px] text-base font-medium tracking-tight transition-colors">
              {dict.cta}
            </button>
          </div>

        </div>
      </div>

      {/* ── DESKTOP HERO (≥ md) ── */}
      <div className="hidden md:block px-8">
        <div className="max-w-[1352px] mx-auto relative">
          <div className="w-full relative">
            <Image
              src="/Subtract.svg"
              alt="Hero Background"
              width={1352}
              height={700}
              priority
              className="w-full h-auto drop-shadow-sm"
            />

            {/* Text Overlay */}
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center px-14 lg:px-20">
              <div className="max-w-xl lg:max-w-2xl mt-8">
                <h1 className="text-5xl lg:text-[64px] font-bold text-white leading-[1.1] mb-6">
                  {dict.title}
                </h1>
                <p className="text-lg text-gray-200 max-w-[540px] leading-relaxed font-light">
                  {dict.description}
                </p>
              </div>
            </div>

            {/* CTA in cut-out area */}
            <div className="absolute bottom-0 left-0 w-[40.4%] h-[13.3%] flex items-center justify-center p-2 lg:p-4">
              <button className="bg-primary-dark hover:bg-primary text-white w-full max-w-[420px] py-3 lg:py-4 rounded-full text-sm lg:text-base font-medium transition-colors shadow-md">
                {dict.cta}
              </button>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default MainSection;
