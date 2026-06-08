import { useTranslation } from 'react-i18next';
import { useLocation } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';

export default function Services() {
  const { t, i18n } = useTranslation();
  const [, navigate] = useLocation();
  const isRtl = i18n.language === 'ar';

  const services = [
    {
      id: 'research-evaluation',
      titleKey: 'services.research.title',
      descKey: 'services.research.description',
      icon: '📊'
    },
    {
      id: 'third-party-monitoring',
      titleKey: 'services.monitoring.title',
      descKey: 'services.monitoring.description',
      icon: '🔍'
    },
    {
      id: 'data-analysis',
      titleKey: 'services.dataAnalysis.title',
      descKey: 'services.dataAnalysis.description',
      icon: '📈'
    },
    {
      id: 'capacity-building',
      titleKey: 'services.capacityBuilding.title',
      descKey: 'services.capacityBuilding.description',
      icon: '🤝'
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
                {t('services.hero.title')}
              </h1>
              <p className={`text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed ${isRtl ? 'text-right' : ''}`}>
                {t('services.hero.description')}
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-12 sm:mb-16 md:mb-20">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className={`group hover:shadow-xl transition-all duration-300 p-6 sm:p-8 border border-gray-200 rounded-lg hover:border-green-400 ${isRtl ? 'text-right' : ''}`}
                >
                  <div className="text-4xl sm:text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 group-hover:text-green-600 transition-colors">
                    {t(service.titleKey)}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                    {t(service.descKey)}
                  </p>
                  <button 
                    onClick={() => navigate(`/services/${service.id}`)}
                    className={`inline-flex items-center gap-2 text-green-600 font-semibold hover:gap-3 transition-all cursor-pointer bg-none border-none p-0 ${isRtl ? 'flex-row-reverse' : ''}`}
                  >
                    {t('common.contactUs')}
                    <ArrowRight size={20} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-slate-900 text-white px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 text-center`}>
              {t('services.methodology.title')}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[1, 2, 3].map((step) => (
                <div key={step} className={`text-center ${isRtl ? 'text-right' : ''}`}>
                  <div className="w-14 sm:w-16 h-14 sm:h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <span className="text-xl sm:text-2xl font-bold">{step}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
                    {t(`services.methodology.step${step}.title`)}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    {t(`services.methodology.step${step}.desc`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-r from-green-600 to-green-700 text-white px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 ${isRtl ? 'text-right' : ''}`}>
              {t('services.cta.title')}
            </h2>
            <p className={`text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed ${isRtl ? 'text-right' : ''}`}>
              {t('services.cta.description')}
            </p>
            <button className="px-6 sm:px-8 py-2 sm:py-3 bg-white text-green-600 font-bold rounded hover:bg-gray-100 transition-all text-sm sm:text-base">
              {t('services.cta.button')}
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
