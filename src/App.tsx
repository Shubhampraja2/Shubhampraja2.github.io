import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { FeaturesPage } from "./components/FeaturesPage";
import { HowItWorks } from "./components/HowItWorks";
import { AppPreview } from "./components/AppPreview";
import { SecurityPrivacy } from "./components/SecurityPrivacy";
import { AboutUs } from "./components/AboutUs";
import { Testimonials } from "./components/Testimonials";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { PrivacyPolicyPage } from "./components/PrivacyPolicyPage";
import { TermsPage } from "./components/TermsPage";
import { ContactPage } from "./components/ContactPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState<
    "home" | "features" | "privacy" | "terms" | "contact"
  >("home");
  const [pendingScrollTarget, setPendingScrollTarget] =
    useState<string | null>(null);

  const navigateToFeatures = () => {
    setCurrentPage("features");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToHome = (targetSection?: string) => {
    setCurrentPage("home");
    window.scrollTo({ top: 0, behavior: "instant" });

    // If a target section is specified, scroll to it after navigation
    if (targetSection) {
      setPendingScrollTarget(targetSection);
    }
  };

  const navigateToPage = (
    page: "privacy" | "terms" | "contact",
  ) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Handle scrolling to target section after navigation
  useEffect(() => {
    if (currentPage === "home" && pendingScrollTarget) {
      // Small delay to ensure DOM is ready
      const timer = setTimeout(() => {
        const element = document.querySelector(
          pendingScrollTarget,
        );
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
        setPendingScrollTarget(null);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [currentPage, pendingScrollTarget]);

  if (currentPage === "features") {
    return (
      <div className="min-h-screen bg-[#0A0F1C]">
        <Header
          onNavigateToFeatures={navigateToFeatures}
          onNavigateToHome={navigateToHome}
          currentPage={currentPage}
        />
        <FeaturesPage onNavigateHome={navigateToHome} />
        <Footer onNavigateToPage={navigateToPage} />
      </div>
    );
  }

  if (currentPage === "privacy") {
    return (
      <div className="min-h-screen bg-[#0A0F1C]">
        <Header
          onNavigateToFeatures={navigateToFeatures}
          onNavigateToHome={navigateToHome}
          currentPage="home"
        />
        <PrivacyPolicyPage onNavigateHome={navigateToHome} />
        <Footer onNavigateToPage={navigateToPage} />
      </div>
    );
  }

  if (currentPage === "terms") {
    return (
      <div className="min-h-screen bg-[#0A0F1C]">
        <Header
          onNavigateToFeatures={navigateToFeatures}
          onNavigateToHome={navigateToHome}
          currentPage="home"
        />
        <TermsPage onNavigateHome={navigateToHome} />
        <Footer onNavigateToPage={navigateToPage} />
      </div>
    );
  }

  if (currentPage === "contact") {
    return (
      <div className="min-h-screen bg-[#0A0F1C]">
        <Header
          onNavigateToFeatures={navigateToFeatures}
          onNavigateToHome={navigateToHome}
          currentPage="home"
        />
        <ContactPage onNavigateHome={navigateToHome} />
        <Footer onNavigateToPage={navigateToPage} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0F1C]">
      <Header
        onNavigateToFeatures={navigateToFeatures}
        onNavigateToHome={navigateToHome}
        currentPage={currentPage}
      />
      <section id="home">
        <Hero />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="how-it-works">
        <HowItWorks />
      </section>
      <section id="app-preview">
        <AppPreview />
      </section>
      <section id="security">
        <SecurityPrivacy />
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="cta">
        <CTA />
      </section>
      <Footer onNavigateToPage={navigateToPage} />
    </div>
  );
}