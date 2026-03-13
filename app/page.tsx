import Header from "@/components/header/header";
import Hero from "@/components/landing/hero";
import Trust from "@/components/landing/trust";
import Steps from "@/components/landing/steps";
import ExpertCare from "@/components/landing/expertcare";
import Stats from "@/components/landing/stats";
import StartJourney from "@/components/landing/startjourney";
import Conditions from "@/components/landing/conditions";
import Benefits from "@/components/landing/benefits";
import Pricing from "@/components/landing/pricing";
import Reviews from "@/components/landing/reviews";
import Faq from "@/components/landing/faq";
import SpeakWithDoc from "@/components/landing/speakwithdoc";
import Footer from "@/components/footer/footer";
import BackToTop from "@/components/backtotop";

export default function Home() {
  return (
    <>
      <Header />
      {/* id="main-content" is the skip-link target */}
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Trust />
        <Steps />
        <ExpertCare />
        <Stats />
        <StartJourney />
        <Conditions />
        <Benefits />
        <Pricing />
        <Reviews />
        <Faq />
        <SpeakWithDoc />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}