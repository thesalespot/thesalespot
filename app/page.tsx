import { HeroSection } from '@/components/hero-section';
import { HowItWorks } from '@/components/how-it-works';
import { WhoWeHelp } from '@/components/who-we-help';
import { Benefits } from '@/components/benefits';
import { WaitlistCTA } from '@/components/waitlist-cta';
import { BackgroundBoxesPreview } from '@/components/Box';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
       {/* <BackgroundBoxesPreview/> */}
      <HeroSection />
      <HowItWorks />
      <WhoWeHelp />
      <Benefits />
      <WaitlistCTA />
    </main>
  );
}