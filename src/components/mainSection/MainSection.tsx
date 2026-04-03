'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import type { Dictionary } from '@/locales';

interface MainSectionProps {
  dict: Dictionary['mainSection'];
}

interface FeedbackFormValues {
  feedback: string;
}

const MainSection = ({ dict }: MainSectionProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FeedbackFormValues>({
    defaultValues: {
      feedback: '',
    },
    mode: 'onTouched',
  });

  const onSubmit = async (data: FeedbackFormValues) => {
    await fetch('/api/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    reset();
    setIsModalOpen(false);
  };

  const closeModal = () => {
    reset();
    setIsModalOpen(false);
  };

  return (
    <section id="home" className="w-full pt-24 md:pt-32 pb-4 bg-white">
      {/* ── MOBILE HERO (< md) ── */}
      <div className="md:hidden px-4">
        <div className="relative w-full" style={{ height: '439px' }}>
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

          <div className="absolute left-4 right-4 top-25 md:top-55.75 px-2" style={{ maxWidth: '326px' }}>
            <h1 className="text-[28px] font-semibold text-white leading-tight mb-2">
              {dict.title}
            </h1>
            <p className="text-[16px] font-medium text-white/80 leading-relaxed">
              {dict.description}
            </p>
          </div>

          <div className="absolute left-0 sm:mt-px mt-3.75 md:mt-0" style={{ top: '399px', right: '8.4%' }}>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="w-full bg-[#053232] hover:bg-primary text-white px-6 py-2 rounded-[34px] text-base font-medium tracking-tight transition-colors"
            >
              {dict.cta}
            </button>
          </div>
        </div>
      </div>

      {/* ── DESKTOP HERO (≥ md) ── */}
      <div className="hidden md:block px-8">
        <div className="max-w-363 mx-auto relative">
          <div className="w-full relative">
            <Image
              src="/Subtract.svg"
              alt="Hero Background"
              width={1352}
              height={700}
              priority
              className="w-full h-auto drop-shadow-sm"
            />

            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center px-14 lg:px-20">
              <div className="max-w-xl lg:max-w-2xl mt-8">
                <h1 className="text-5xl lg:text-[64px] font-bold text-white leading-[1.1] mb-6">
                  {dict.title}
                </h1>
                <p className="text-lg text-gray-200 max-w-135 leading-relaxed font-light">
                  {dict.description}
                </p>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 w-[40.4%] h-[13.3%] flex items-start justify-start p-2 lg:px-0 lg:py-4">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="bg-primary-dark hover:bg-primary text-white w-full max-w-135 py-3 lg:py-4 rounded-[20px] text-sm lg:text-base font-medium transition-colors shadow-md"
              >
                {dict.cta}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="feedback-modal-title"
          onClick={closeModal}
        >
          <div
            className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 id="feedback-modal-title" className="text-xl font-semibold text-gray-900">
                {dict.modalTitle}
              </h2>
              <button
                type="button"
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-900"
                aria-label="Закрыть"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <textarea
                  {...register('feedback', {
                    required: 'Напишите какую консультацию вы хотите получить',
                    minLength: {
                      value: 10,
                      message: 'Минимум 10 символов',
                    },
                  })}
                  placeholder="Напишите чем мы можем вам помочь..."
                  className="w-full min-h-35 rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-primary resize-none"
                />
                {errors.feedback && (
                  <p className="mt-2 text-sm text-red-500">{errors.feedback.message}</p>
                )}
              </div>

              <div className="flex gap-3 justify-end">
                <button
                  type="button"
                  onClick={closeModal}
                  className="rounded-full border border-gray-300 px-5 py-2 text-sm font-medium text-gray-700"
                >
                  Отмена
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-full bg-[#053232] px-5 py-2 text-sm font-medium text-white hover:bg-primary disabled:opacity-60"
                >
                  {isSubmitting ? 'Отправка...' : 'Отправить'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default MainSection;
