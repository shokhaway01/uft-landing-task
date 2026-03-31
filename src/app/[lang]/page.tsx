import type { Metadata } from 'next';
import { getDictionary, locales, type Locale } from '@/locales';
import Header from '@/components/header/Header';
import MainSection from '@/components/mainSection/MainSection';
import AboutUs from '@/components/aboutUs/AboutUs';
import Services from '@/components/services/Services';
import Method from '@/components/methods/Method';
import Gallery from '@/components/gallery/Gallery';
import DetailedServices from '@/components/detailedServices/DetailedServices';
import Location from '@/components/location/Location';
import Footer from '@/components/footer/Footer';

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const titles: Record<Locale, string> = {
    ru: 'Power Build Construction — Строительное бюро полного цикла',
    en: 'Power Build Construction — Full-Cycle Construction Bureau',
    uz: "Power Build Construction — To'liq tsiklli qurilish byurosi",
  };
  return { title: titles[lang] };
}

export default async function LangPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = getDictionary(lang);

  return (
    <div className="w-full min-h-screen bg-bg-gray">
      <Header dict={dict.header} lang={lang} />
      <main>
        <MainSection dict={dict.mainSection} />
        <AboutUs dict={dict.aboutUs} />
        <Services dict={dict.services} />
        <Method dict={dict.method} />
        <Gallery dict={dict.gallery} />
        <DetailedServices dict={dict.detailedServices} />
        <Location dict={dict.location} />
      </main>
      <Footer dict={dict.footer} />
    </div>
  );
}
