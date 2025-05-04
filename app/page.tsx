import Hero from "./components/Hero"
import WearYourStory from "./components/WearYourStory"
import FeatureCarousel from "./components/FeatureCarousel"
import PortfolioGrid from "./components/PortfolioGrid"
import Timeline from "./components/Timeline"
import Marquee from "./components/Marquee"
import ContactForm from "./components/ContactForm"
import NewsletterSubscribe from "./components/NewsletterSubscribe"
import ProductVideoPage from "./components/ProductVideoPage"; // ← Pastikan ini ada


export default function Home() {
  return (
    <>
      <Hero />
      <WearYourStory />
      <FeatureCarousel />
      <ProductVideoPage />
      {/* <PortfolioGrid /> */}
      <Timeline />
      <Marquee />
      <ContactForm />
      <NewsletterSubscribe />
    
    </>
  )
}
