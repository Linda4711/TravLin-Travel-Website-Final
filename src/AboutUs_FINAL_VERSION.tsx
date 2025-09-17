import React from 'react'
import Header from './components/Header'
import LindaForsterVideo from './components/LindaForsterVideo'
import Services from './components/Services_FIXED'
import Footer from './components/Footer'
import SEOHead from './components/SEOHead'

interface AboutUsPageProps {
  onNavigateBack?: () => void
  onNavigateToContact?: () => void
  onNavigateToServices?: () => void
  onNavigateToCruises?: () => void
  onNavigateToTravelOptions?: () => void
  onNavigateToStories?: () => void
  onNavigateToHome?: () => void
}

export default function AboutUsPage({ onNavigateBack, onNavigateToContact, onNavigateToServices, onNavigateToCruises, onNavigateToTravelOptions, onNavigateToStories, onNavigateToHome }: AboutUsPageProps) {
  // Unified navigation handlers
  const handleNavigateToAbout = () => {
    // Already on about page, scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavigateToServices = () => {
    if (onNavigateToServices) {
      onNavigateToServices()
    }
  }

  const handleNavigateToCruises = () => {
    if (onNavigateToCruises) {
      onNavigateToCruises()
    }
  }

  const handleNavigateToTravelOptions = () => {
    if (onNavigateToTravelOptions) {
      onNavigateToTravelOptions()
    }
  }

  const handleNavigateToStories = () => {
    if (onNavigateToStories) {
      onNavigateToStories()
    }
  }

  const handleNavigateToAI = () => {
    if (onNavigateToContact) {
      onNavigateToContact()
    }
  }

  const handleNavigateToContact = () => {
    if (onNavigateToContact) {
      onNavigateToContact()
    } else {
      window.location.href = '/contact'
    }
  }

  return (
    <div className="min-h-screen bg-white relative">
      <SEOHead page="about" />

      <Header 
        onNavigateToAbout={handleNavigateToAbout}
        onNavigateToServices={handleNavigateToServices}
        onNavigateToCruises={handleNavigateToCruises}
        onNavigateToTravelOptions={handleNavigateToTravelOptions}
        onNavigateToContact={handleNavigateToContact}
        onNavigateToStories={handleNavigateToStories}
        onNavigateToAI={handleNavigateToAI}
        onNavigateToHome={onNavigateToHome}
      />
      

      
      {/* Hero Section - Travel Planning Theme with Maps and Coffee */}
      <section 
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-24"
        style={{
          background: `linear-gradient(135deg, rgba(0, 117, 204, 0.85) 0%, rgba(237, 125, 49, 0.75) 100%), url("https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=800&fit=crop")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="hero-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-shadow-strong">
              About Us
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white/95 mb-8 text-shadow">You Dream, We Create</h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-5xl mx-auto leading-relaxed text-shadow mb-8">
              Established in June 2016, we've been creating extraordinary journeys and unforgettable memories. With travel agency experience since 2006, Linda Forster has elevated our approach to transforming travel dreams into reality, crafting personalized adventures with passion, expertise, and genuine care for every traveler.
            </p>
          </div>
        </div>

        {/* Decorative Elements - Same as TravLin Stories */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-white/10 blur-xl floating-element"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-yellow-300/20 blur-lg floating-element" style={{animationDelay: '2s'}}></div>
      </section>

      {/* Linda Forster and Video Section */}
      <LindaForsterVideo />
      
      {/* Our Services Section */}
      <section id="our-services" className="py-12 section-light">
        <Services />
      </section>
      
      <Footer 
        onContactClick={handleNavigateToContact}
        onNavigateToAbout={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        onNavigateToServices={handleNavigateToServices}
        onNavigateToCruises={handleNavigateToCruises}
        onNavigateToTravelOptions={handleNavigateToTravelOptions}
        onNavigateToStories={handleNavigateToStories}
        onNavigateToAI={handleNavigateToAI}
        onNavigateToHome={onNavigateToHome}
      />
    </div>
  )
}