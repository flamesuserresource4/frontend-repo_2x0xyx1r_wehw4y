import Hero from "./components/Hero";
import FeaturedRestaurants from "./components/FeaturedRestaurants";
import WhyChoose from "./components/WhyChoose";
import Cities from "./components/Cities";
import Blog from "./components/Blog";
import FinalCTA from "./components/FinalCTA";
import SiteFooter from "./components/SiteFooter";

function App() {
  return (
    <div className="min-h-screen bg-white text-stone-900">
      {/* Hero */}
      <Hero />

      {/* Featured */}
      <FeaturedRestaurants />

      {/* Why choose */}
      <WhyChoose />

      {/* Cities */}
      <Cities />

      {/* Blog */}
      <Blog />

      {/* Final CTA */}
      <FinalCTA />

      {/* Footer */}
      <SiteFooter />
    </div>
  );
}

export default App;
