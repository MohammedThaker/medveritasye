import { useState, useEffect } from 'react';
import { Menu, X, Languages } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Navigation() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const menuItems = [
    { label: t('nav.about'), href: '/#about' },
    { label: t('nav.services'), href: '/services' },
    { label: t('nav.research'), href: '/research' },
    { label: t('nav.updates'), href: '/updates' },
    { label: t('common.contactUs'), href: '/contact' },
  ];

  const navTextStyle = {
    fontFamily: '"Graphik-Medium", sans-serif',
    fontSize: '19px',
    fontWeight: 700,
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-green-600/30">
      <div className="max-w-full px-4 sm:px-6 lg:px-30">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo and Brand */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a href="/" aria-label="Medveritas home" className="inline-flex items-center">
              <img
                src="/logo.png"
                alt="Medveritas Logo"
                className="h-8 sm:h-10 w-auto"
              />
            </a>
            <div className="block">
              <div className="text-black font-bold text-sm sm:text-base leading-tight">
                Medveritas
              </div>
              <div className="text-[#004c4a] text-xs leading-tight">
                {i18n.language === 'ar' ? 'ميدفرتاس للدراسات والبحوث' : 'For Studies & Research'}
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-12 flex-1 justify-center px-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                style={navTextStyle}
                className="text-[#004c4a] text-xs sm:text-sm font-medium hover:text-[#004c4a] transition-colors duration-200 relative group whitespace-nowrap"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#004c4a] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Desktop Right Section */}
          <div className="hidden lg:flex items-center gap-4">
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-[#004c4a] hover:text-[#004c4a] transition-colors px-3 py-2 rounded hover:bg-slate-800"
            >
              <Languages size={18} />
              <span className="text-xs font-medium">{i18n.language === 'en' ? 'العربية' : 'EN'}</span>
            </button>
            <a href="/#newsletter" style={navTextStyle} className="px-4 sm:px-6 py-2 border border-[#004c4a] text-[#004c4a] text-xs sm:text-sm font-medium rounded hover:bg-[#004c4a] hover:text-[#004c4a] transition-all duration-200 whitespace-nowrap">
              {t('nav.subscribe')}
            </a>
          </div>

          {/* Mobile Language and Menu Button */}
          <div className="lg:hidden flex items-center gap-2 sm:gap-3">
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-[#004c4a] hover:text-[#004c4a] transition-colors p-2 rounded hover:bg-slate-800"
              title={i18n.language === 'en' ? 'العربية' : 'English'}
            >
              <Languages size={18} />
              <span className="text-xs font-medium hidden sm:inline">{i18n.language === 'en' ? 'AR' : 'EN'}</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#004c4a] hover:text-[#004c4a] transition-colors p-2 rounded hover:bg-slate-800"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 border-t border-[#004c4a]/30 bg-[oklch(0.76_0.17_129.57_/_0.18)] animate-slide-down">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                style={navTextStyle}
                className="block px-4 py-3 text-[#004c4a] text-sm hover:bg-[#004c4a] hover:text-[#004c4a] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="px-4 py-4 border-t border-[#004c4a]/30 flex flex-col gap-3">
              <a href="/#newsletter" style={navTextStyle} className="w-full px-4 py-2 border border-[#004c4a] text-[#004c4a] text-sm font-medium rounded hover:bg-[#004c4a] hover:text-[#004c4a] transition-all text-center">
                {t('nav.subscribe')}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
