import { useTranslation } from 'react-i18next';

export default function WhoWeAre() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  return (
    <section className="bg-slate-900 text-white py-20 md:py-32">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className={`animate-slide-up ${isRtl ? 'md:order-2' : 'md:order-1'} order-2`}>
            <h3 className="text-xs md:text-sm font-bold text-green-400 mb-4 tracking-widest">
              {t('who.advantage')}
            </h3>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              {t('who.title')}
            </h2>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6">
              {t('who.desc1')}
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              {t('who.desc2')}
            </p>
            
            {/* Three Pillars */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-1 bg-green-400 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-white mb-2">{t('who.pillar1Title')}</h4>
                  <p className="text-gray-400">{t('who.pillar1Desc')}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1 bg-green-400 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-white mb-2">{t('who.pillar2Title')}</h4>
                  <p className="text-gray-400">{t('who.pillar2Desc')}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1 bg-green-400 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-white mb-2">{t('who.pillar3Title')}</h4>
                  <p className="text-gray-400">{t('who.pillar3Desc')}</p>
                </div>
              </div>
            </div>

            <button className="mt-6 md:mt-8 px-6 md:px-8 py-2 md:py-3 text-sm md:text-base bg-green-600 text-white font-bold rounded hover:bg-green-700 transition-all duration-200 hover:shadow-lg active:scale-95">
              {t('who.button')}
            </button>
          </div>

          {/* Right Image */}
          <div className={`relative h-64 md:h-96 rounded-lg overflow-hidden animate-slide-in-left ${isRtl ? 'md:order-1' : 'md:order-2'} order-1`} style={{ animationDelay: '0.2s' }}>
            <img
              src="surveyor.png"
              alt="Team collaboration"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
