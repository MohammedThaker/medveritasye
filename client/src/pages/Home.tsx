import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import WhoWeAre from '@/components/WhoWeAre';
import BigBets from '@/components/BigBets';
import ImpactReport from '@/components/ImpactReport';
import OurResults from '@/components/OurResults';

import Newsletter from '@/components/Newsletter';
import RecentNews from '@/components/RecentNews';
import Footer from '@/components/Footer';

/**
 * Rockefeller Foundation Home Page
 * 
 * Design Philosophy: Modern Institutional Design
 * - High contrast with bold colors (black, white, yellow, cyan)
 * - Clear hierarchy and professional layout
 * - Smooth animations and transitions
 * - Responsive design for all devices
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* Who We Are Section */}
      <WhoWeAre />

      {/* Big Bets Section */}
      <BigBets />

      {/* Impact Report Section */}
      <ImpactReport />

      {/* Our Results Section */}
      <OurResults />

      {/* Newsletter Section */}
      <Newsletter />

      {/* Recent News Section */}
      <RecentNews />

      {/* Footer */}
      <Footer />
    </div>
  );
}
