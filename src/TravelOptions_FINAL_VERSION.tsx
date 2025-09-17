import React, { useState } from 'react'
import Header from './components/Header'
import WhatsTrending from './components/WhatsTrending'
import TravelInsurance from './components/TravelInsurance'
import UsefulLinksCompact from './components/UsefulLinksCompact'
import Footer from './components/Footer'
import SEOHead from './components/SEOHead'
import { Button } from './components/ui/button'
import { Card, CardContent } from './components/ui/card'
import SectionDivider from './components/SectionDivider'

import { ImageWithFallback } from './components/figma/ImageWithFallback'
import TravLinButton from './components/TravLinButton'
import { Input } from './components/ui/input'
import { Checkbox } from './components/ui/checkbox'
import { toast } from 'sonner@2.0.3'
import emailjs from '@emailjs/browser'
import { 
  Home, 
  Globe, 
  CheckCircle, 
  Users, 
  Heart, 
  Shield, 
  MapPin, 
  Plane, 
  Car,
  FileText,
  Phone,
  Headphones,
  CreditCard,
  Calendar,
  Star
} from 'lucide-react'
import { motion } from 'motion/react'

interface TravelOptionsProps {
  onNavigateBack?: () => void
  onNavigateToContact?: () => void
  onNavigateToServices?: () => void
  onNavigateToStories?: () => void
  onNavigateToAbout?: () => void
  onNavigateToHome?: () => void
  onNavigateToCruises?: () => void
  onNavigateToTravelOptions?: () => void
}

export default function TravelOptions({ onNavigateBack, onNavigateToContact, onNavigateToServices, onNavigateToStories, onNavigateToAbout, onNavigateToHome, onNavigateToCruises, onNavigateToTravelOptions }: TravelOptionsProps) {
  // Subscription form state
  const [email, setEmail] = useState('')
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Handle subscription form submission
  const handleSubscription = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      toast.error('Please enter your email address')
      return
    }
    
    if (!agreedToPrivacy) {
      toast.error('Please agree to the privacy policy')
      return
    }
    
    setIsSubmitting(true)
    
    try {
      // Mock subscription - would integrate with real service in production
      toast.success('Thank you! You\'ll be notified as soon as our AI feature launches.')
      setEmail('')
      setAgreedToPrivacy(false)
    } catch (error) {
      console.error('Subscription Error:', error)
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Travel services data
  const travelServices = [
    {
      title: 'Escorted Tours with expert local guides',
      benefit: 'Discover destinations with insider knowledge and cultural insights while enjoying hassle-free group travel with like-minded explorers'
    },
    {
      title: 'Air & Land Packages with seamless coordination',
      benefit: 'Experience stress-free travel with perfectly timed connections and comprehensive support from departure to return'
    },
    {
      title: 'Independent Travel with custom itineraries',
      benefit: 'Enjoy complete freedom and flexibility with personalized travel plans tailored to your interests, pace, and budget preferences'
    },
    {
      title: 'Hotels & Accommodation from luxury to budget',
      benefit: 'Access our extensive network of quality accommodations worldwide, from boutique luxury resorts to comfortable budget-friendly options'
    },
    {
      title: 'Car Rental and transport solutions',
      benefit: 'Travel at your own pace with reliable vehicle rentals and transport options, including insurance coverage and 24/7 roadside assistance'
    },
    {
      title: 'Visa Services and Travel Notifications',
      benefit: 'Navigate complex visa requirements effortlessly with our expert assistance and stay informed with real-time travel updates and safety alerts'
    }
  ]

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

  return (
    <div className="min-h-screen bg-white relative">
      <SEOHead page="travel-options" />

      

      <Header 
        onNavigateToServices={handleNavigateToServices}
        onNavigateToCruises={handleNavigateToCruises}
        onNavigateToTravelOptions={onNavigateToTravelOptions || (() => window.scrollTo({ top: 0, behavior: 'smooth' }))}
        onNavigateToContact={handleNavigateToContact}
        onNavigateToStories={handleNavigateToStories}
        onNavigateToAbout={handleNavigateToAbout}
        onNavigateToAI={handleNavigateToAI}
        onNavigateToHome={handleNavigateToHome}
      />
      
      {/* Hero Section - Travel Options Focused with Beautiful European Houses Image */}
      <section 
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-24"
        style={{
          background: `linear-gradient(135deg, rgba(237, 125, 49, 0.75) 0%, rgba(0, 117, 204, 0.65) 100%), url("https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=800&fit=crop")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="hero-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-shadow-strong">
              Travel Options
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-white/95 mb-6 text-shadow">
              Complete Travel Solutions
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-5xl mx-auto leading-relaxed text-shadow mb-8">
              Beyond cruising, we deliver complete travel solutions through trusted partnerships. From escorted tours and independent adventures to accommodation, transport, visa services and travel insurance - we exceed expectations at every step.
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-white/10 blur-xl floating-element"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-yellow-300/20 blur-lg floating-element" style={{animationDelay: '2s'}}></div>
      </section>

      {/* Travel Options Services Section - White Background */}
      <section id="travel-options-services" className="section-spacing section-white relative overflow-hidden">
        {/* Background watercolor elements */}
        <div className="absolute top-20 left-10 w-56 h-56 watercolor-blob opacity-8 floating-element"></div>
        <div className="absolute bottom-32 right-20 w-40 h-40 watercolor-blob-coral opacity-12 floating-element" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 rounded-full bg-gradient-to-br from-teal-200 to-teal-300 opacity-15 floating-element" style={{ animationDelay: '1s' }}></div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="content-separator"></div>
          
          {/* Travel Services Grid - Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-8">
            {travelServices.map((service, index) => (
              <div key={index} className="travel-card p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg" 
                       style={{ backgroundColor: '#22c55e' }}>
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-800 mb-3 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {service.benefit}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* What's Trending Section */}
      <section className="section-spacing section-light">
        <div className="content-separator"></div>
        <WhatsTrending onNavigateToContact={onNavigateToContact} />
      </section>

      {/* Ready to Plan Your Adventure Section - WITH PLANE ICONS */}
      <section className="section-spacing section-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 left-10 w-56 h-56 watercolor-blob opacity-8 floating-element"></div>
        <div className="absolute bottom-32 right-20 w-40 h-40 watercolor-blob-coral opacity-12 floating-element" style={{animationDelay: '3s'}}></div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="content-separator"></div>
          <div className="text-center mb-12">
            <SectionDivider />
            
            {/* HEADING WITH PLANE ICONS */}
            <div className="flex items-center justify-center gap-6 mb-4">
              <Plane className="w-8 h-8 text-orange-500 animate-bounce" style={{animationDelay: '0s'}} />
              <h2 className="section-heading mb-0">Ready to Plan Your Adventure?</h2>
              <Plane className="w-8 h-8 text-orange-500 animate-bounce" style={{animationDelay: '1s'}} />
            </div>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-6">
              Choose how you'd like to proceed with planning your perfect travel experience. Our travel specialists are ready to help you discover amazing destinations and create unforgettable memories.
            </p>
          </div>

          {/* Single Column Layout */}
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* AI Travel Section - Outside the Box Two Column Layout */}
            <div 
              data-ai-travel-section
              className="relative overflow-hidden bg-gray-50 rounded-lg p-8" 
              style={{ 
                position: 'relative'
              }}
            >
              {/* COMING SOON Banner - Compact */}
              <div 
                className="absolute top-4 left-1/2 transform -translate-x-1/2 rotate-2 text-gray-800 text-lg font-black px-8 py-3 rounded-lg z-40"
                style={{
                  background: `linear-gradient(135deg, var(--brand-yellow) 0%, #ffcd33 50%, var(--brand-yellow) 100%)`,
                  boxShadow: `0 15px 40px rgba(255, 192, 0, 0.8), 0 10px 25px rgba(255, 192, 0, 0.6), 0 5px 15px rgba(255, 192, 0, 0.4)`,
                  border: '3px solid rgba(255, 192, 0, 0.9)',
                  animation: 'softFlash 3s ease-in-out infinite',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                }}
              >
                COMING SOON
              </div>

              {/* AI Content - Compact Two Column Layout */}
              <div className="relative z-10 pt-16">
                {/* Header with Icon and Title */}
                <div className="text-center mb-6">
                  <div className="relative mb-4 mx-auto">
                    <div 
                      className="w-14 h-14 rounded-full flex items-center justify-center relative mx-auto"
                      style={{ 
                        background: `linear-gradient(135deg, var(--brand-yellow) 0%, #ffcd33 50%, var(--brand-yellow) 100%)`,
                        boxShadow: '0 6px 20px rgba(255, 192, 0, 0.4)'
                      }}
                    >
                      <Star className="w-7 h-7 text-gray-800 animate-soft-flash" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--brand-yellow)' }}>
                    AI Travel Planning is Coming!
                  </h3>
                </div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                  
                  {/* LEFT COLUMN - Content */}
                  <div className="space-y-3">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      We're developing an AI travel experience to enhance your planning for escorted tours, independent adventures, accommodation, and transport arrangements.
                    </p>

                    <div className="bg-white rounded-lg p-3 border border-gray-200">
                      <p className="text-sm text-gray-800 mb-2">
                        <strong>Be the First to jump</strong>
                      </p>
                      <p className="text-xs text-gray-600">
                        Get exclusive early access to our revolutionary travel AI when it launches.
                      </p>
                    </div>
                  </div>

                  {/* RIGHT COLUMN - Form */}
                  <div className="space-y-3">
                    <form onSubmit={handleSubscription} className="space-y-3">
                      <div>
                        <Input
                          type="email"
                          placeholder="Your email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-white border-gray-200 focus:border-gray-400 focus:ring-gray-400"
                          disabled={isSubmitting}
                        />
                        <p className="text-xs text-gray-500 mt-1 leading-tight">
                          <strong>Privacy:</strong> No data stored without consent. AI interactions are clearly labeled. Your preferences remain confidential to TravLin Travel.
                        </p>
                      </div>
                      
                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="privacy-agreement-travel"
                          checked={agreedToPrivacy}
                          onCheckedChange={(checked) => setAgreedToPrivacy(checked as boolean)}
                          disabled={isSubmitting}
                        />
                        <label 
                          htmlFor="privacy-agreement-travel" 
                          className="text-xs text-gray-600 leading-tight cursor-pointer"
                        >
                          I agree to the privacy policy
                        </label>
                      </div>
                      
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          type="submit"
                          size="lg"
                          className="px-8 py-4 font-bold text-gray-800 w-full transition-all duration-300 shadow-lg hover:shadow-xl"
                          style={{ backgroundColor: 'var(--brand-yellow)' }}
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? 'NOTIFYING...' : 'NOTIFY ME WHEN LAUNCHED'}
                        </Button>
                      </motion.div>
                    </form>
                  </div>
                </div>

                {/* Cruise Options - Single Column */}
                <div className="mt-6 max-w-md mx-auto">
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200 text-center">
                    <p className="text-sm text-gray-600 mb-3">
                      <strong>Want to return to Explore Cruise Options?</strong>
                    </p>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        onClick={handleNavigateToCruises}
                        size="lg"
                        className="px-8 py-4 font-bold text-white w-full transition-all duration-300 shadow-lg hover:shadow-xl"
                        style={{ backgroundColor: 'var(--brand-blue)' }}
                      >
                        EXPLORE CRUISE OPTIONS
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Insurance Section */}
      <section className="section-spacing section-light">
        <div className="content-separator"></div>
        <TravelInsurance />
      </section>
      
      <Footer 
        onContactClick={handleNavigateToContact}
        onNavigateToServices={handleNavigateToServices}
        onNavigateToCruises={handleNavigateToCruises}
        onNavigateToTravelOptions={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        onNavigateToStories={handleNavigateToStories}
        onNavigateToAbout={handleNavigateToAbout}
        onNavigateToAI={handleNavigateToAI}
        onNavigateToHome={handleNavigateToHome}
      />
    </div>
  )
}