import { useTranslation } from 'react-i18next';
import { useLocation } from 'wouter';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { FileText, TrendingUp, Award } from 'lucide-react';

export default function Research() {
  const { t, i18n } = useTranslation();
  const [, navigate] = useLocation();
  const isRtl = i18n.language === 'ar';

  const researchAreas = [
    {
      id: 'health-systems',
      titleKey: 'research.area1.title',
      descKey: 'research.area1.desc',
      icon: FileText
    },
    {
      id: 'education-outcomes',
      titleKey: 'research.area2.title',
      descKey: 'research.area2.desc',
      icon: TrendingUp
    },
    {
      id: 'economic-livelihoods',
      titleKey: 'research.area3.title',
      descKey: 'research.area3.desc',
      icon: Award
    }
  ];

  const publications = [
    { id: 'health-systems', titleKey: 'research.pub1.title', yearKey: 'research.pub1.year' },
    { id: 'education-outcomes', titleKey: 'research.pub2.title', yearKey: 'research.pub2.year' },
    { id: 'economic-livelihoods', titleKey: 'research.pub3.title', yearKey: 'research.pub3.year' },
    { id: 'health-systems', titleKey: 'research.pub4.title', yearKey: 'research.pub4.year' }
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
                {t('research.hero.title')}
              </h1>
              <p className={`text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed ${isRtl ? 'text-right' : ''}`}>
                {t('research.hero.description')}
              </p>
            </div>
          </div>
        </section>

        {/* Research Areas */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 md:mb-16 text-center text-slate-900`}>
              {t('research.areas.title')}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {researchAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <div 
                    key={index}
                    className={`group p-6 sm:p-8 border-2 border-gray-200 rounded-lg hover:border-green-600 hover:shadow-xl transition-all duration-300 ${isRtl ? 'text-right' : ''}`}
                  >
                    <Icon className="w-10 sm:w-12 h-10 sm:h-12 text-green-600 mb-4 sm:mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-lg sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">
                      {t(area.titleKey)}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {t(area.descKey)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Key Findings */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-slate-50 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 md:mb-16 text-center text-slate-900`}>
              {t('research.findings.title')}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
              <div className={`bg-white p-6 sm:p-8 rounded-lg shadow-lg ${isRtl ? 'text-right' : ''}`}>
                <h3 className="text-lg sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">
                  {t('research.findings.finding1.title')}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                  {t('research.findings.finding1.desc')}
                </p>
                <div className="text-2xl sm:text-3xl font-bold text-green-600">
                  {t('research.findings.finding1.stat')}
                </div>
              </div>
              <div className={`bg-white p-6 sm:p-8 rounded-lg shadow-lg ${isRtl ? 'text-right' : ''}`}>
                <h3 className="text-lg sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4">
                  {t('research.findings.finding2.title')}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                  {t('research.findings.finding2.desc')}
                </p>
                <div className="text-2xl sm:text-3xl font-bold text-green-600">
                  {t('research.findings.finding2.stat')}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Publications */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 md:mb-16 text-center text-slate-900`}>
              {t('research.publications.title')}
            </h2>
            <div className="space-y-3 sm:space-y-4 max-w-3xl mx-auto">
              {publications.map((pub, index) => (
                <div 
                  key={index}
                  onClick={() => navigate(`/research/${pub.id}`)}
                  className={`p-4 sm:p-6 border border-gray-200 rounded-lg hover:border-green-600 hover:bg-green-50 transition-all cursor-pointer group ${isRtl ? 'text-right' : ''}`}
                >
                  <div className={`flex items-start justify-between gap-4 ${isRtl ? 'flex-row-reverse' : ''}`}>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-green-600 transition-colors break-words">
                        {t(pub.titleKey)}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500 mt-2">
                        {t(pub.yearKey)}
                      </p>
                    </div>
                    <FileText className="w-5 sm:w-6 h-5 sm:h-6 text-green-600 flex-shrink-0" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-r from-green-600 to-green-700 text-white px-4 sm:px-6 lg:px-8">
          <div className={`max-w-6xl mx-auto text-center ${isRtl ? 'text-right' : ''}`}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              {t('research.cta.title')}
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              {t('research.cta.description')}
            </p>
            <button className="px-6 sm:px-8 py-2 sm:py-3 bg-white text-green-600 font-bold rounded hover:bg-gray-100 transition-all text-sm sm:text-base">
              {t('research.cta.button')}
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
