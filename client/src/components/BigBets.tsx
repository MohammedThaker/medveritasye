import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function BigBets() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  const bets = [
    {
      number: '1',
      titleKey: 'bigBets.items.research.title',
      descriptionKey: 'bigBets.items.research.description',
      link: '#research'
    },
    {
      number: '2',
      titleKey: 'bigBets.items.monitoring.title',
      descriptionKey: 'bigBets.items.monitoring.description',
      link: '#monitoring'
    },
    {
      number: '3',
      titleKey: 'bigBets.items.strategy.title',
      descriptionKey: 'bigBets.items.strategy.description',
      link: '#strategy'
    },
    {
      number: '4',
      titleKey: 'bigBets.items.capacityBuilding.title',
      descriptionKey: 'bigBets.items.capacityBuilding.description',
      link: '#capacity'
    }
  ];

  return (
    <section className="bg-white py-20 md:py-32">
      <div className="container">
        {/* Section Header */}
        <div className="mb-16 animate-fade-in">
          <h2 className={`text-4xl md:text-5xl font-bold text-slate-900 mb-4 ${isRtl ? 'text-right' : ''}`}>
            {t('bigBets.heading')}
          </h2>
          <p className={`text-lg text-gray-600 mb-4 ${isRtl ? 'text-right' : ''}`}>
            {t('bigBets.subtitle')}
          </p>
          <div className="w-16 h-1 bg-green-600" />
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {bets.map((bet, index) => (
            <div
              key={index}
              className="group p-8 border-l-4 border-green-600 hover:shadow-lg transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl font-bold text-green-600 mb-4">
                {bet.number}
              </div>
              <h3 className={`text-2xl font-bold text-slate-900 mb-4 ${isRtl ? 'text-right' : ''}`}>
                {t(bet.titleKey)}
              </h3>
              <p className={`text-gray-600 leading-relaxed mb-6 ${isRtl ? 'text-right' : ''}`}>
                {t(bet.descriptionKey)}
              </p>
              <a
                href={bet.link}
                className="inline-flex items-center gap-2 text-slate-900 font-semibold hover:text-green-600 transition-colors group-hover:translate-x-2 transition-transform"
              >
                {t('bigBets.learnMore')}
                <ArrowRight size={18} />
              </a>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 bg-slate-50 p-6 md:p-12 rounded-lg mb-12">
          <div className="text-center animate-slide-up" style={{ animationDelay: '0s' }}>
            <div className="text-3xl md:text-5xl font-bold text-green-600 mb-2">300+</div>
            <div className={`text-sm md:text-base text-slate-900 font-semibold ${isRtl ? 'text-right' : ''}`}>{t('bigBets.stats.fieldStaff')}</div>
          </div>
          <div className="text-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="text-3xl md:text-5xl font-bold text-green-600 mb-2">34</div>
            <div className={`text-sm md:text-base text-slate-900 font-semibold ${isRtl ? 'text-right' : ''}`}>{t('bigBets.stats.governorates')}</div>
          </div>
          <div className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-3xl md:text-5xl font-bold text-green-600 mb-2">20+</div>
            <div className={`text-sm md:text-base text-slate-900 font-semibold ${isRtl ? 'text-right' : ''}`}>{t('bigBets.stats.projects')}</div>
          </div>
          <div className="text-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="text-3xl md:text-5xl font-bold text-green-600 mb-2">10</div>
            <div className={`text-sm md:text-base text-slate-900 font-semibold ${isRtl ? 'text-right' : ''}`}>{t('bigBets.stats.years')}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
