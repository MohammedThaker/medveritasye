import { Play } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function HeroSection() {
  const { t } = useTranslation();
  return (
    <section className="relative w-full min-h-screen md:h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(surveyor.png)',
          filter: 'brightness(0.5) contrast(1.1)'
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 w-full px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
        {/* Left Content */}
        <div className="w-full md:w-1/2 max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2 md:mb-4 animate-fade-in leading-tight">
            {t('hero.title1')}
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-green-400 mb-6 md:mb-8 animate-fade-in leading-tight" style={{ animationDelay: '0.1s' }}>
            {t('hero.title2')}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-xl animate-slide-up leading-relaxed" style={{ animationDelay: '0.2s' }}>
            {t('hero.description')}
          </p>
        </div>

        {/* Play Button - Hidden on Mobile */}
        <div className="hidden lg:flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 cursor-pointer animate-slide-in-left flex-shrink-0" style={{ animationDelay: '0.3s' }}>
          <Play size={40} className="text-white fill-white" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
