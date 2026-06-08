import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    [t('footer.services')]: [
      { label: t('footer.serviceItems.research'), href: '#' },
      { label: t('footer.serviceItems.monitoring'), href: '#' },
      { label: t('footer.serviceItems.strategy'), href: '#' },
      { label: t('footer.serviceItems.capacity'), href: '#' }
    ],
    [t('footer.quickLinks')]: [
      { label: t('footer.linkItems.about'), href: '#' },
      { label: t('footer.linkItems.services'), href: '#' },
      { label: t('footer.linkItems.insights'), href: '#' },
      { label: t('footer.linkItems.contact'), href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' }
  ];

  return (
    <footer className="bg-slate-900 text-white py-16 md:py-24">
      <div className="container">
        {/* Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1 animate-fade-in">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-slate-900 font-bold text-lg">MV</span>
              </div>
              <span className="font-bold font-bold text-lg">Medveritas</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('footer.brand')}
            </p>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <div key={category} className="animate-slide-up" style={{ animationDelay: `${(index + 1) * 0.1}s` }}>
              <h4 className="font-bold text-white mb-4">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 text-sm hover:text-yellow-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mb-8" />

        {/* Contact Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-gray-700">
          <div>
            <h4 className="font-bold text-white mb-3">{t('footer.contact')}</h4>
            <p className="text-gray-400 text-sm mb-2">{t('footer.address')}</p>
            <p className="text-gray-400 text-sm mb-2">📧 info@medveritas.com</p>
            <p className="text-gray-400 text-sm">📱 +967 (0) XXX XXX XXX</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-3">{t('footer.follow')}</h4>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="text-gray-400 hover:text-yellow-400 transition-colors hover:scale-110 transform duration-200"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
          <div>
            <h4 className="font-bold text-white mb-3">{t('footer.newsletter')}</h4>
            <p className="text-gray-400 text-sm mb-3">
              {t('footer.newsletterDesc')}
            </p>
            <button className="text-yellow-400 hover:text-yellow-300 transition-colors text-sm font-semibold flex items-center gap-2">
              <Mail size={16} />
              {t('footer.subscribe')}
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Copyright */}
          <p className="text-gray-400 text-sm text-center md:text-left">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
