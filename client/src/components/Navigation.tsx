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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-green-600/30">
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
            <div className="hidden sm:block">
              <div className="text-white font-bold text-sm sm:text-base leading-tight">
                Medveritas
              </div>
              <div className="text-green-400 text-xs leading-tight">
                {i18n.language === 'ar' ? 'للدراسات والبحوث' : 'Institute'}
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-12 flex-1 justify-center px-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white text-xs sm:text-sm font-medium hover:text-green-400 transition-colors duration-200 relative group whitespace-nowrap"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Desktop Right Section */}
          <div className="hidden lg:flex items-center gap-4">
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-white hover:text-green-400 transition-colors px-3 py-2 rounded hover:bg-slate-800"
            >
              <Languages size={18} />
              <span className="text-xs font-medium">{i18n.language === 'en' ? 'العربية' : 'EN'}</span>
            </button>
            <a href="/#newsletter" className="px-4 sm:px-6 py-2 border border-green-600 text-white text-xs sm:text-sm font-medium rounded hover:bg-green-600 hover:text-white transition-all duration-200 whitespace-nowrap">
              {t('nav.subscribe')}
            </a>
          </div>

          {/* Mobile Language and Menu Button */}
          <div className="lg:hidden flex items-center gap-2 sm:gap-3">
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-white hover:text-green-400 transition-colors p-2 rounded hover:bg-slate-800"
              title={i18n.language === 'en' ? 'العربية' : 'English'}
            >
              <Languages size={18} />
              <span className="text-xs font-medium hidden sm:inline">{i18n.language === 'en' ? 'AR' : 'EN'}</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-green-400 transition-colors p-2 rounded hover:bg-slate-800"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 border-t border-green-600/30 bg-slate-800 animate-slide-down">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-3 text-white text-sm hover:bg-green-600 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="px-4 py-4 border-t border-green-600/30 flex flex-col gap-3">
              <a href="/#newsletter" className="w-full px-4 py-2 border border-green-600 text-white text-sm font-medium rounded hover:bg-green-600 hover:text-white transition-all text-center">
                {t('nav.subscribe')}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
