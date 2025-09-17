import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import SEOHead from './components/SEOHead'
import TravLinButton from './components/TravLinButton'
import { Button } from './components/ui/button'
import { ImageWithFallback } from './components/figma/ImageWithFallback'

import SectionDivider from './components/SectionDivider'
import { 
  Ship, 
  Waves,
  Compass,
  Star,
  Search,
  Bot,
  Bell,
  Sparkles,
  Globe,
  ExternalLink,
  Calendar,
  Award,
  Shield,
  Users,
  CheckCircle,
  Anchor,
  MapPin,
  Heart
} from 'lucide-react'
import { motion } from 'motion/react'

interface CruisesProps {
  onNavigateBack?: () => void
  onNavigateToContact?: () => void
  onNavigateToServices?: () => void
  onNavigateToStories?: () => void
  onNavigateToAbout?: () => void
  onNavigateToHome?: () => void
  onNavigateToTravelOptions?: () => void
  onNavigateToCruises?: () => void
}

export default function Cruises({ onNavigateBack, onNavigateToContact, onNavigateToServices, onNavigateToStories, onNavigateToAbout, onNavigateToHome, onNavigateToTravelOptions, onNavigateToCruises }: CruisesProps) {
  // Navigation handlers
  const handleNavigateToServices = () => {
    if (onNavigateToServices) {
      onNavigateToServices()
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

  const handleNavigateToAbout = () => {
    if (onNavigateToAbout) {
      onNavigateToAbout()
    }
  }

  const handleNavigateToHome = () => {
    if (onNavigateToHome) {
      onNavigateToHome()
    }
  }

  const handleNavigateToCruises = () => {
    if (onNavigateToCruises) {
      onNavigateToCruises()
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const cruiseTypes = [
    {
      icon: Ship,
      iconColor: 'var(--brand-blue)',
      title: "Ocean Cruises",
      description: "Luxury ocean liners featuring multiple dining venues, Broadway-style shows, pools, spas, fitness centers, and extensive shore excursion programs. Choose from intimate ships to mega vessels with innovative features like surf simulators, rock climbing walls, and specialty restaurants."
    },
    {
      icon: Waves,
      iconColor: 'var(--brand-orange)',
      title: "River Cruises", 
      description: "Intimate vessels navigating Europe's Rhine, Danube, and Seine rivers, Asia's Mekong and Yangtze, plus Egypt's Nile. Features include panoramic lounges, sun decks, regional cuisine, complimentary shore excursions, and expert local guides sharing cultural insights at every port."
    },
    {
      icon: Compass,
      iconColor: 'var(--brand-yellow)',
      title: "Expedition Cruises",
      description: "Purpose-built ships accessing Antarctica, Arctic regions, Galapagos Islands, and remote Pacific destinations. Equipped with zodiacs, underwater cameras, expedition gear, marine biologists, historians, and naturalists providing educational programs and wildlife encounters."
    },
    {
      icon: Star,
      iconColor: '#000000',
      title: "Luxury Cruises",
      description: "All-suite accommodations with personal butlers, fine dining by Michelin-starred chefs, premium beverages, exclusive shore excursions, smaller ship capacity, personalised service, spa treatments, and curated experiences in marquee destinations worldwide."
    }
  ]

  return (
    <div className="min-h-screen bg-white relative">
      <SEOHead page="cruises" />

      <Header 
        onNavigateToServices={handleNavigateToServices}
        onNavigateToCruises={handleNavigateToCruises}
        onNavigateToTravelOptions={handleNavigateToTravelOptions}
        onNavigateToContact={handleNavigateToContact}
        onNavigateToStories={handleNavigateToStories}
        onNavigateToAbout={handleNavigateToAbout}
        onNavigateToAI={handleNavigateToAI}
        onNavigateToHome={handleNavigateToHome}
      />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-24"
        style={{
          background: `linear-gradient(135deg, rgba(0, 117, 204, 0.75) 0%, rgba(237, 125, 49, 0.65) 100%), url("https://images.unsplash.com/photo-1544551763-46a013bb70d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnVpc2UlMjBzaGlwJTIwb2NlYW58ZW58MXx8fHwxNzU4MDA1NTQ2fDA&ixlib=rb-4.1.0&q=80&w=1200")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="hero-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-shadow-strong">
              Cruises
            </h1>
            <h2 className="text-2xl md:text-3xl text-white/95 mb-8 font-semibold text-shadow">
              Your Cruise Masters
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-5xl mx-auto leading-relaxed text-shadow">
              Your ultimate adventure awaits with our agency - your go-to experts for unforgettable cruises! We specialise in all forms of cruise - Ocean, River, Expedition, Luxury. As proud CLIA Cruise Masters, we ensure expert guidance and unparalleled service.
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-white/10 blur-xl floating-element"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-yellow-300/20 blur-lg floating-element" style={{animationDelay: '2s'}}></div>
      </section>

      {/* CLIA Specialists Section */}
      <section className="pt-24 pb-24 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 watercolor-blob opacity-10 floating-element"></div>
        <div className="absolute bottom-32 right-20 w-48 h-48 watercolor-blob-coral opacity-8 floating-element" style={{animationDelay: '2s'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <SectionDivider />
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* LEFT Column - CLIA Visual */}
            <div className="relative">
              <div className="relative max-w-sm mx-auto lg:max-w-full">
                <div 
                  className="relative overflow-hidden"
                  style={{ 
                    borderRadius: '16px',
                    boxShadow: '0 20px 40px rgba(0, 117, 204, 0.08), 0 8px 16px rgba(237, 125, 49, 0.06)',
                    maxWidth: '320px',
                    margin: '0 auto'
                  }}
                >
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1570197788417-0e82375c9371?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTgwMDU1NDZ8MA&ixlib=rb-4.1.0&q=80&w=400"
                    alt="CLIA Cruise Booking" 
                    className="w-full h-auto object-cover"
                    style={{ borderRadius: '16px' }}
                  />
                </div>
                
                {/* CLIA Logo Overlay */}
                <div 
                  className="absolute -top-3 -right-6 z-10 w-44 h-44 sm:w-48 sm:h-48 md:w-52 md:h-52"
                  style={{
                    transform: 'rotate(-8deg)'
                  }}
                >
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTgwMDU1NDZ8MA&ixlib=rb-4.1.0&q=80&w=300"
                    alt="CLIA Cruise Consultant Certification" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

            </div>

            {/* RIGHT Column - Content */}
            <div className="flex flex-col justify-center text-left">
              <div className="space-y-6">
                <p className="text-xl text-gray-700 leading-relaxed">
                  With extensive cruise industry training, CLIA certification, and personal sailing experience, we provide expert guidance that goes beyond basic booking. We understand ship layouts, dining options, excursion values, and cabin categories to ensure your investment delivers maximum enjoyment.
                </p>
                
                <p className="text-xl text-gray-700 leading-relaxed">
                  Our specialization extends to group celebrations, multi-generational family gatherings, and milestone events at sea. From intimate river cruises through Europe to grand expedition voyages to Antarctica, we match your personality, budget, and dreams with the perfect cruise experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Which Cruise is You Section */}
      <section 
        className="pt-16 pb-16 relative overflow-hidden" 
        style={{
          background: `linear-gradient(135deg, rgba(248, 249, 250, 0.75) 0%, rgba(233, 236, 239, 0.65) 100%), url("https://images.unsplash.com/photo-1551731409-43eb3e517a1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTgwMDU1NDZ8MA&ixlib=rb-4.1.0&q=80&w=1200")"`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute top-10 left-10 w-32 h-32 watercolor-blob opacity-6 floating-element"></div>
        <div className="absolute bottom-10 right-20 w-28 h-28 watercolor-blob-coral opacity-8 floating-element" style={{animationDelay: '2s'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Which Cruise is You?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {cruiseTypes.map((cruise, index) => {
                const IconComponent = cruise.icon
                return (
                  <div 
                    key={index}
                    className="travel-card text-center p-8 group hover:scale-105 transition-all duration-500 relative overflow-hidden watercolor-shadow"
                    style={{ 
                      minHeight: '320px',
                      borderRadius: index % 2 === 0 ? '20px 8px 20px 8px' : '8px 20px 8px 20px'
                    }}
                  >
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 relative"
                      style={{ backgroundColor: cruise.iconColor }}
                    >
                      <IconComponent 
                        className={`w-8 h-8 ${cruise.iconColor === '#000000' ? 'text-white' : cruise.iconColor === 'var(--brand-yellow)' ? 'text-gray-800' : 'text-white'}`} 
                      />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{cruise.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{cruise.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Start Your Cruise Journey Section */}
      <section className="pt-20 pb-24 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-56 h-56 watercolor-blob opacity-8 floating-element"></div>
        <div className="absolute bottom-32 right-20 w-40 h-40 watercolor-blob-coral opacity-12 floating-element" style={{animationDelay: '3s'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <SectionDivider />
            
            <div className="flex items-center justify-center gap-6 mb-4">
              <Waves className="w-8 h-8 text-blue-500 animate-bounce" style={{animationDelay: '0s'}} />
              <h2 className="section-heading mb-0">Ready to Start your Cruise Journey?</h2>
              <Waves className="w-8 h-8 text-blue-500 animate-bounce" style={{animationDelay: '1s'}} />
            </div>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-6">
              Choose how you'd like to proceed with planning your perfect cruise adventure. Our experienced CLIA-certified cruise specialists are here to help you plan your perfect voyage.
            </p>
          </div>

          {/* Single Column Layout */}
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Ready, Set, Sail and Save Box */}
            <div 
              className="bg-white border border-gray-200 p-10 relative overflow-hidden travel-card"
              style={{ 
                borderRadius: '16px',
                minHeight: '400px'
              }}
            >
              <div className="text-center h-full flex flex-col justify-center">
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-8 mx-auto"
                  style={{ backgroundColor: 'var(--brand-blue)' }}
                >
                  <Ship className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--brand-blue)' }}>
                  Complete Your Cruise Experience
                </h3>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  As CLIA Cruise Specialists with firsthand cruise experience, we understand what makes each voyage special. Our cruise search feature offers access to over 60,000 sailings, cruise/air package deals, and exclusive discounts not found direct with cruise lines. Whether you're planning your first cruise or you're a seasoned sailor, we can match you with the perfect ship, itinerary, and cabin to create unforgettable memories.
                </p>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a 
                    href="https://travlin-travel.cruiseco.com.au/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <Button
                      size="lg"
                      className="px-10 py-5 font-bold text-white w-full sm:w-auto transition-all duration-300 shadow-lg hover:shadow-xl"
                      style={{ backgroundColor: 'var(--brand-blue)' }}
                    >
                      SEARCH CRUISES
                    </Button>
                  </a>
                </motion.div>
              </div>
            </div>

            {/* Travel Options Cross-sell Section */}
            <div 
              className="bg-white border border-gray-200 p-10 relative overflow-hidden travel-card"
              style={{ 
                borderRadius: '16px'
              }}
            >
              <div className="text-center">
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-8 mx-auto"
                  style={{ backgroundColor: 'var(--brand-orange)' }}
                >
                  <Globe className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--brand-orange)' }}>
                  Need Other Travel Arrangements to Complement Your Cruise Holiday?
                </h3>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  You'll possibly need flights, hotels for that pre or post-cruise stay, travel insurance for peace of mind, and possibly more. Simply explore Travel Options to complement or enhance your cruise experience.
                </p>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <TravLinButton
                    onClick={handleNavigateToTravelOptions}
                    variant="orange"
                    size="lg"
                    className="shadow-xl"
                  >
                    EXPLORE TRAVEL OPTIONS
                  </TravLinButton>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer 
        onContactClick={handleNavigateToContact}
        onNavigateToHome={handleNavigateToHome}
        onNavigateToAbout={handleNavigateToAbout}
        onNavigateToCruises={handleNavigateToCruises}
        onNavigateToTravelOptions={handleNavigateToTravelOptions}
        onNavigateToContact={handleNavigateToContact}
        onNavigateToStories={handleNavigateToStories}
      />
    </div>
  )
}