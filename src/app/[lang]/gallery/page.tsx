import React from 'react'
import type { Metadata } from 'next';
import { getDictionary, type Locale } from '@/locales';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = getDictionary(lang);
  return { title: `${dict.galleryPage.title} — ${dict.common.brand}` };
}

type WorkCard = {
  id: number
  title: string
  description: string
  deliveryDate: string
  qualityScore: number
  image: string
}

const workMetadata = [
  { id: 1, qualityScore: 4.8, image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=80' },
  { id: 2, qualityScore: 4.7, image: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=1200&q=80' },
  { id: 3, qualityScore: 4.9, image: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=1200&q=80' },
  { id: 4, qualityScore: 4.6, image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80' },
  { id: 5, qualityScore: 4.8, image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80' },
  { id: 6, qualityScore: 4.7, image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80' },
  { id: 7, qualityScore: 4.9, image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1200&q=80' },
  { id: 8, qualityScore: 4.5, image: 'https://images.unsplash.com/photo-1519996529931-28324d5a630e?auto=format&fit=crop&w=1200&q=80' },
  { id: 9, qualityScore: 4.8, image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80' },
  { id: 10, qualityScore: 4.7, image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80' },
  { id: 11, qualityScore: 4.6, image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=80' },
  { id: 12, qualityScore: 4.8, image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1200&q=80' },
  { id: 13, qualityScore: 4.7, image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80' },
  { id: 14, qualityScore: 4.9, image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80' },
  { id: 15, qualityScore: 4.8, image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80' },
];

const Page = async ({ params }: { params: Promise<{ lang: Locale }> }) => {
  const { lang } = await params;
  const dict = getDictionary(lang);
  const gp = dict.galleryPage;

  const qualityBadge = (score: number) => {
    if (score >= 4.8) return gp.badges.excellent
    if (score >= 4.6) return gp.badges.good
    return gp.badges.standard
  }

  return (
    <main style={{ padding: '24px' }}>
      <div className="flex items-center justify-between mb-8">
        <h1 style={{ fontSize: '28px', marginBottom: '16px' }}>{gp.title}</h1>
        <a href={`/${lang}`} className="px-4 py-4 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full text-sm font-medium transition-colors inline-block">{gp.backLink}</a>
      </div>

      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '16px',
        }}
      >
        {workMetadata.map((meta, idx) => {
          const projectText = gp.works[idx];
          if (!projectText) return null;

          return (
            <article
              key={meta.id}
              style={{
                border: '1px solid #e5e7eb',
                borderRadius: '14px',
                overflow: 'hidden',
                background: '#fff',
                boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
              }}
            >
              <img
                src={meta.image}
                alt={projectText.title}
                style={{ width: '100%', height: '180px', objectFit: 'cover' }}
                loading="lazy"
              />

              <div style={{ padding: '12px' }}>
                <h2 style={{ fontSize: '18px', marginBottom: '8px' }}>{projectText.title}</h2>
                <p style={{ fontSize: '14px', color: '#4b5563', marginBottom: '10px' }}>{projectText.description}</p>
                <p style={{ fontSize: '14px', marginBottom: '6px' }}>
                  <strong>{gp.deliveryDate}:</strong> {projectText.deliveryDate}
                </p>
                <p style={{ fontSize: '14px' }}>
                  <strong>{gp.qualityScore}:</strong> {meta.qualityScore.toFixed(1)} / 5 ({qualityBadge(meta.qualityScore)})
                </p>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}

export default Page