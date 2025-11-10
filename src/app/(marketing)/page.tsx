import { HeroSection } from '@/components/marketing/home/hero-section';
import { ProfileSection } from '@/components/marketing/home/profile-section';
import { ProfileTabs } from '@/components/marketing/home/profile-tabs/profile-tabs';
import { Footer } from '@/components/marketing/shared/footer';
import { cn } from '@/lib/utils';

const HomePage = () => {
  return (
    <div className={cn('min-h-screen bg-background')}>
      {/* Hero Section with Cover */}
      <HeroSection />

      {/* Profile Section */}
      <ProfileSection />

      {/* Tabs Section */}
      <ProfileTabs />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
