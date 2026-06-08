import { useTranslation } from 'react-i18next';
import { useLocation } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Calendar, ArrowRight } from 'lucide-react';

export default function Updates() {
  const { t, i18n } = useTranslation();
  const [, navigate] = useLocation();
  const isRtl = i18n.language === 'ar';

  const updates = [
    {
      id: 'health-initiative',
      titleKey: 'updates.update1.title',
      descKey: 'updates.update1.desc',
      dateKey: 'updates.update1.date',
      categoryKey: 'updates.update1.category'
    },
    {
      id: 'partnership-announcement',
      titleKey: 'updates.update2.title',
      descKey: 'updates.update2.desc',
      dateKey: 'updates.update2.date',
      categoryKey: 'updates.update2.category'
    },
    {
      id: 'research-report',
      titleKey: 'updates.update3.title',
      descKey: 'updates.update3.desc',
      dateKey: 'updates.update3.date',
      categoryKey: 'updates.update3.category'
    },
    {
      id: 'field-expansion',
      titleKey: 'updates.update4.title',
      descKey: 'updates.update4.desc',
      dateKey: 'updates.update4.date',
      categoryKey: 'updates.update4.category'
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-3xl">
              <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight ${isRtl ? 'text-right' : ''}`}>
                {t('updates.hero.title')}
              </h1>
              <p className={`text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed ${isRtl ? 'text-right' : ''}`}>
                {t('updates.hero.description')}
              </p>
            </div>
          </div>
        </section>

        {/* Updates Grid */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
              {updates.map((update, index) => (
                <div 
                  key={index}
                  className={`group border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-green-600 ${isRtl ? 'text-right' : ''}`}
                >
                  <div className="bg-gradient-to-r from-green-600 to-green-700 h-1 sm:h-2"></div>
                  <div className="p-6 sm:p-8">
                    <div className={`flex items-center gap-2 mb-4 ${isRtl ? 'flex-row-reverse' : ''}`}>
                      <Calendar size={16} className="text-green-600 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-500">
                        {t(update.dateKey)}
                      </span>
                    </div>
                    <span className="inline-block px-2 sm:px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full mb-4">
                      {t(update.categoryKey)}
                    </span>
                    <h3 className="text-lg sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4 group-hover:text-green-600 transition-colors">
                      {t(update.titleKey)}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                      {t(update.descKey)}
                    </p>
                    <button 
                      onClick={() => navigate(`/updates/${update.id}`)}
                      className={`inline-flex items-center gap-2 text-green-600 font-semibold hover:gap-3 transition-all cursor-pointer bg-none border-none p-0 text-sm sm:text-base ${isRtl ? 'flex-row-reverse' : ''}`}
                    >
                      {t('common.contactUs')}
                      <ArrowRight size={18} className="flex-shrink-0" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-slate-50 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 md:mb-16 text-center text-slate-900`}>
              {t('updates.timeline.title')}
            </h2>
            <div className="max-w-2xl mx-auto">
              {[1, 2, 3].map((item) => (
                <div key={item} className={`flex gap-4 sm:gap-8 mb-8 sm:mb-12 relative ${isRtl ? 'flex-row-reverse' : ''}`}>
                  <div className={`flex flex-col items-center ${isRtl ? 'items-end' : ''}`}>
                    <div className="w-3 sm:w-4 h-3 sm:h-4 bg-green-600 rounded-full flex-shrink-0"></div>
                    {item < 3 && <div className="w-0.5 sm:w-1 h-20 sm:h-24 bg-green-200 mt-3 sm:mt-4"></div>}
                  </div>
                  <div className={`pb-8 ${isRtl ? 'text-right' : ''}`}>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                      {t(`updates.timeline.event${item}.title`)}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {t(`updates.timeline.event${item}.desc`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-r from-green-600 to-green-700 text-white px-4 sm:px-6 lg:px-8">
          <div className={`max-w-6xl mx-auto text-center ${isRtl ? 'text-right' : ''}`}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              {t('updates.newsletter.title')}
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              {t('updates.newsletter.description')}
            </p>
            <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto ${isRtl ? 'flex-row-reverse' : ''}`}>
              <input 
                type="email" 
                placeholder={t('updates.newsletter.placeholder')}
                className="flex-1 px-4 py-2 sm:py-3 rounded text-slate-900 focus:outline-none focus:ring-2 focus:ring-white text-sm sm:text-base"
              />
              <button className="px-6 sm:px-8 py-2 sm:py-3 bg-white text-green-600 font-bold rounded hover:bg-gray-100 transition-all text-sm sm:text-base whitespace-nowrap">
                {t('updates.newsletter.button')}
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
