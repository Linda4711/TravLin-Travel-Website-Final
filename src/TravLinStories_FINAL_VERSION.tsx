import React from 'react'
import Header from './components/Header'
import TravelBlog from './components/TravelBlog'
import SEOHead from './components/SEOHead'
import Footer from './components/Footer'
import { ImageWithFallback } from './components/figma/ImageWithFallback'

interface TravLinStoriesProps {
  onNavigateBack: () => void
  onNavigateToContact: () => void
  onNavigateToServices?: () => void
  onNavigateToCruises?: () => void
  onNavigateToTravelOptions?: () => void
  onNavigateToAbout?: () => void
  onNavigateToHome?: () => void
}

export default function TravLinStories({ onNavigateBack, onNavigateToContact, onNavigateToServices, onNavigateToCruises, onNavigateToTravelOptions, onNavigateToAbout, onNavigateToHome }: TravLinStoriesProps) {
  // Unified navigation handlers
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
    // Already on stories page, scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' })
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
    <div className="min-h-screen bg-white">
      <SEOHead page="stories" />

      <Header 
        onNavigateToServices={handleNavigateToServices}
        onNavigateToCruises={handleNavigateToCruises}
        onNavigateToTravelOptions={handleNavigateToTravelOptions}
        onNavigateToContact={handleNavigateToContact}
        onNavigateToStories={handleNavigateToStories}
        onNavigateToAbout={onNavigateToAbout}
        onNavigateToAI={handleNavigateToAI}
        onNavigateToHome={onNavigateToHome}
      />
      
      {/* Hero Section with combined content */}
      <section 
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-24"
        style={{
          background: `linear-gradient(135deg, rgba(0, 117, 204, 0.75) 0%, rgba(237, 125, 49, 0.65) 100%), url("https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=800&fit=crop")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="hero-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-shadow-strong">
              TravLin Stories
            </h1>
            <h2 className="text-2xl md:text-3xl text-white/95 mb-8 font-semibold text-shadow">
              Stories • News • Destination Guides • Inspiration
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-5xl mx-auto leading-relaxed text-shadow mb-8">
              Discover incredible journeys, insider secrets, and expert travel wisdom that turn dreams into unforgettable adventures. Your next extraordinary escape starts here!
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-white/10 blur-xl floating-element"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-yellow-300/20 blur-lg floating-element" style={{animationDelay: '2s'}}></div>
      </section>

      {/* Main TravelBlog Content */}
      <TravelBlog />

      <Footer 
        onContactClick={handleNavigateToContact}
        onNavigateToServices={handleNavigateToServices}
        onNavigateToCruises={handleNavigateToCruises}
        onNavigateToTravelOptions={handleNavigateToTravelOptions}
        onNavigateToStories={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        onNavigateToAbout={onNavigateToAbout}
        onNavigateToAI={handleNavigateToAI}
        onNavigateToHome={onNavigateToHome}
      />
    </div>
  )
}