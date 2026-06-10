import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function RecentNews() {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  const news = [
    {
      typeKey: 'recentNews.items.caseStudy.type',
      dateKey: 'recentNews.items.caseStudy.date',
      titleKey: 'recentNews.items.caseStudy.title',
      descriptionKey: 'recentNews.items.caseStudy.description',
      link: '#insights-1'
    },
    {
      typeKey: 'recentNews.items.methodology.type',
      dateKey: 'recentNews.items.methodology.date',
      titleKey: 'recentNews.items.methodology.title',
      descriptionKey: 'recentNews.items.methodology.description',
      link: '#insights-2'
    },
    {
      typeKey: 'recentNews.items.sectorUpdate.type',
      dateKey: 'recentNews.items.sectorUpdate.date',
      titleKey: 'recentNews.items.sectorUpdate.title',
      descriptionKey: 'recentNews.items.sectorUpdate.description',
      link: '#insights-3'
    }
  ];

  return (
    <section className="bg-slate-50 py-20 md:py-32">
      <div className="container">
        {/* Section Header */}
        <div className="mb-16 animate-fade-in">
          <h2 className={`text-4xl md:text-5xl font-bold font-bold text-slate-900 mb-4 ${isRtl ? 'text-right' : ''}`}>
            {t('recentNews.heading')}
          </h2>
          <p className={`text-lg text-gray-600 mb-4 ${isRtl ? 'text-right' : ''}`}>
            {t('recentNews.subtitle')}
          </p>
          <div className="w-16 h-1 bg-green-600" />
        </div>

        {/* News List */}
        <div className="space-y-6 mb-12">
          {news.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="group block p-6 bg-white rounded-lg border border-gray-200 hover:border-green-600 hover:shadow-lg transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <p className={`text-sm font-bold font-bold text-green-600 mb-2 ${isRtl ? 'text-right' : ''}`}>
                    {t(item.typeKey)} • {t(item.dateKey)}
                  </p>
                  <h3 className={`text-xl font-bold font-bold text-slate-900 group-hover:text-green-600 transition-colors mb-2 ${isRtl ? 'text-right' : ''}`}>
                    {t(item.titleKey)}
                  </h3>
                  <p className={`text-gray-600 text-sm ${isRtl ? 'text-right' : ''}`}>
                    {t(item.descriptionKey)}
                  </p>
                </div>
                <ArrowRight className="flex-shrink-0 text-slate-900 group-hover:text-green-600 transition-colors mt-1" size={20} />
              </div>
            </a>
          ))}
        </div>

        {/* More News Button */}
        <div className="text-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <button className="inline-flex items-center gap-2 px-8 py-3 border-2 border-slate-900 text-slate-900 font-bold font-bold rounded hover:bg-slate-900 hover:text-white transition-all duration-200">
            {t('recentNews.button')}
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
