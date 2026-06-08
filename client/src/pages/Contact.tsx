import { useTranslation } from 'react-i18next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Linkedin, Twitter, CheckCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export default function Contact() {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const isArabic = i18n.language === 'ar';

  const validateForm = () => {
    const errors: Record<string, string> = {};

    if (!formData.name.trim()) {
      errors.name = t('contact.form.nameRequired') || 'Name is required';
    }
    if (!formData.email.trim()) {
      errors.email = t('contact.form.emailRequired') || 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = t('contact.form.emailInvalid') || 'Please enter a valid email';
    }
    if (!formData.subject.trim()) {
      errors.subject = t('contact.form.subjectRequired') || 'Subject is required';
    }
    if (!formData.message.trim()) {
      errors.message = t('contact.form.messageRequired') || 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = t('contact.form.messageTooShort') || 'Message must be at least 10 characters';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error(t('contact.form.pleaseFixErrors') || 'Please fix the errors above');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success
      setSubmitSuccess(true);
      toast.success(t('contact.form.successMessage') || 'Message sent successfully!');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      toast.error(t('contact.form.errorMessage') || 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t('contact.address'),
      content: t('contact.addressValue'),
    },
    {
      icon: Mail,
      title: t('contact.email'),
      content: 'info@medveritas.com',
    },
    {
      icon: Phone,
      title: t('contact.phone'),
      content: '+967 (0) XXX XXX XXX',
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 px-4 mt-20">
          <div className="max-w-4xl mx-auto">
            <h1 className={`text-5xl md:text-6xl font-bold mb-6 leading-tight ${isArabic ? 'text-right' : ''}`}>
              {t('contact.title')}
            </h1>
            <div className={`w-24 h-1 bg-green-500 mb-6 ${isArabic ? 'ml-auto' : ''}`}></div>
            <p className={`text-xl text-gray-300 max-w-2xl ${isArabic ? 'text-right' : ''}`}>
              {t('contact.subtitle')}
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 py-16">
          {/* Contact Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div 
                  key={index} 
                  className={`p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg hover:border-green-200 transition-all duration-300 ${isArabic ? 'text-right' : ''}`}
                >
                  <div className={`flex items-start gap-4 ${isArabic ? 'flex-row-reverse' : ''}`}>
                    <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="text-green-600" size={28} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{info.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{info.content}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact Form and Info Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className={`${isArabic ? 'text-right' : ''}`}>
              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-slate-900">
                {t('contact.sendMessage')}
              </h2>
              <p className="text-gray-600 mb-10">
                {t('contact.formDescription') || 'Fill out the form below and we\'ll get back to you as soon as possible.'}
              </p>

              {submitSuccess && (
                <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-xl flex items-start gap-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <h3 className="font-semibold text-green-900">
                      {t('contact.form.successTitle') || 'Message Sent!'}
                    </h3>
                    <p className="text-green-800 text-sm">
                      {t('contact.form.successDescription') || 'Thank you for your message. We\'ll be in touch soon.'}
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-3">
                    {t('contact.form.name')} *
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t('contact.form.namePlaceholder')}
                    className={`h-12 text-base ${isArabic ? 'text-right' : ''} ${formErrors.name ? 'border-red-500' : ''}`}
                  />
                  {formErrors.name && (
                    <div className="mt-2 flex items-center gap-2 text-red-600 text-sm">
                      <AlertCircle size={16} />
                      {formErrors.name}
                    </div>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-3">
                    {t('contact.form.email')} *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t('contact.form.emailPlaceholder')}
                    className={`h-12 text-base ${isArabic ? 'text-right' : ''} ${formErrors.email ? 'border-red-500' : ''}`}
                  />
                  {formErrors.email && (
                    <div className="mt-2 flex items-center gap-2 text-red-600 text-sm">
                      <AlertCircle size={16} />
                      {formErrors.email}
                    </div>
                  )}
                </div>

                {/* Subject Field */}
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-3">
                    {t('contact.form.subject')} *
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={t('contact.form.subjectPlaceholder')}
                    className={`h-12 text-base ${isArabic ? 'text-right' : ''} ${formErrors.subject ? 'border-red-500' : ''}`}
                  />
                  {formErrors.subject && (
                    <div className="mt-2 flex items-center gap-2 text-red-600 text-sm">
                      <AlertCircle size={16} />
                      {formErrors.subject}
                    </div>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-3">
                    {t('contact.form.message')} * ({formData.message.length}/500)
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t('contact.form.messagePlaceholder')}
                    maxLength={500}
                    rows={6}
                    className={`text-base resize-none ${isArabic ? 'text-right' : ''} ${formErrors.message ? 'border-red-500' : ''}`}
                  />
                  {formErrors.message && (
                    <div className="mt-2 flex items-center gap-2 text-red-600 text-sm">
                      <AlertCircle size={16} />
                      {formErrors.message}
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold h-12 text-base transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      {t('contact.form.sending') || 'Sending...'}
                    </span>
                  ) : (
                    t('contact.form.send')
                  )}
                </Button>
              </form>
            </div>

            {/* Info Section */}
            <div className={`space-y-8 ${isArabic ? 'text-right' : ''}`}>
              {/* Business Hours */}
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-10 border border-slate-200">
                <h2 className="text-2xl font-bold mb-8 text-slate-900">
                  {t('contact.businessHours')}
                </h2>
                
                <div className="space-y-8">
                  <div className="pb-8 border-b border-slate-200">
                    <h3 className="font-bold text-slate-900 mb-2 text-lg">
                      {t('contact.weekdays')}
                    </h3>
                    <p className="text-gray-600 text-base">8:00 AM - 5:00 PM (GMT+3)</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2 text-lg">
                      {t('contact.weekends')}
                    </h3>
                    <p className="text-gray-600 text-base">{t('contact.closed')}</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-green-50 rounded-2xl p-10 border border-green-200">
                <h3 className="font-bold text-slate-900 mb-6 text-lg">
                  {t('contact.followUs')}
                </h3>
                <div className={`flex gap-4 ${isArabic ? 'flex-row-reverse' : ''}`}>
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white hover:bg-green-700 hover:scale-110 transition-all duration-300 shadow-md"
                  >
                    <Linkedin size={22} />
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white hover:bg-green-700 hover:scale-110 transition-all duration-300 shadow-md"
                  >
                    <Twitter size={22} />
                  </a>
                </div>
              </div>

              {/* FAQ or Additional Info */}
              <div className="bg-slate-900 text-white rounded-2xl p-10">
                <h3 className="font-bold mb-4 text-lg">
                  {t('contact.responseTime') || 'Response Time'}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {t('contact.responseTimeDescription') || 'We typically respond to all inquiries within 24-48 business hours. For urgent matters, please call us directly.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
