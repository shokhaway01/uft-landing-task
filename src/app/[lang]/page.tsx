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
  const dict = getDictionary(lang);
  return { title: dict.metadata.title };
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
      <Header dict={{ header: dict.header, common: dict.common }} lang={lang} />
      <main>
        <MainSection dict={dict.mainSection} />
        <AboutUs dict={dict.aboutUs} />
        <Services dict={dict.services} />
        <Method dict={dict.method} />
        <Gallery dict={dict.gallery} lang={lang} />
        <DetailedServices dict={dict.detailedServices} />
        <Location dict={dict.location} />
      </main>
      <Footer dict={dict.footer} />
    </div>
  );
}
