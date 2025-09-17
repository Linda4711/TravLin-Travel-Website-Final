import React, { useState, useEffect } from 'react'
import { Toaster } from './components/ui/sonner'
import { Button } from './components/ui/button'
import { motion } from 'motion/react'

// Import all the separate page components
import AboutUsPage from './AboutUs_FINAL_VERSION'
import CruisesPage from './Cruises_FINAL_VERSION'
import TravelOptionsPage from './TravelOptions_FINAL_VERSION'
import ContactPage from './Contact_FINAL_VERSION'
import TravLinStoriesPage from './TravLinStories_FINAL_VERSION'

// Import home page components
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About_WORKING'
import OurValues from './components/OurValues'
import SlidingImageSeparator from './components/SlidingImageSeparator'
import WhatsTrending from './components/WhatsTrending'
import Credentials from './components/Credentials'
import Testimonials from './components/Testimonials'
import TravelInsurance from './components/TravelInsurance'
import TravelBlog from './components/TravelBlog'
import AITravelPlannerWidgetExpanded from './components/AITravelPlannerWidgetExpanded'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import SEOHead from './components/SEOHead'

type PageType = 'home' | 'about' | 'cruises' | 'travel-options' | 'contact' | 'stories'

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home')
  const [isLoading, setIsLoading] = useState(false)
  const [pageDirection, setPageDirection] = useState<'forward' | 'backward'>('forward')

  // Smooth page transitions with loading states
  const navigateWithTransition = (newPage: PageType, direction: 'forward' | 'backward' = 'forward') => {
    setIsLoading(true)
    setPageDirection(direction)
    
    setTimeout(() => {
      setCurrentPage(newPage)
      setIsLoading(false)
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50)
    }, 300)
  }

  // Enhanced navigation handlers with improved UX
  const navigateToHome = () => {
    console.log('🏠 Navigating to Home page')
    navigateWithTransition('home', 'backward')
  }
  const navigateToAbout = () => {
    console.log('ℹ️ Navigating to About page')
    navigateWithTransition('about', 'forward')
  }
  const navigateToAboutServices = () => {
    console.log('🛎️ Navigating to About page - Our Services section')
    navigateWithTransition('about', 'forward')
    // Wait for page transition, then scroll to services
    setTimeout(() => {
      const servicesSection = document.getElementById('our-services')
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' })
      }
    }, 500)
  }
  const navigateToCruises = () => {
    console.log('🚢 Navigating to Cruises page')
    navigateWithTransition('cruises', 'forward')
  }
  const navigateToTravelOptions = () => {
    console.log('✈️ Navigating to Travel Options page')
    navigateWithTransition('travel-options', 'forward')
  }
  const navigateToContact = () => {
    console.log('📞 Navigating to Contact page')
    navigateWithTransition('contact', 'forward')
    // Extra ensure scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 500)
  }

  // Dedicated footer contact navigation with enhanced scroll handling
  const handleFooterContactClick = () => {
    console.log('📞 Footer Contact Us clicked - navigating to Contact page top')
    if (currentPage === 'contact') {
      // Already on contact page, just scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      // Navigate to contact page and ensure scroll to top
      setIsLoading(true)
      setPageDirection('forward')
      
      setTimeout(() => {
        setCurrentPage('contact')
        setIsLoading(false)
        // Multiple scroll attempts to ensure it works
        setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50)
        setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 200)
        setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 500)
      }, 300)
    }
  }
  const navigateToStories = () => {
    console.log('📖 Navigating to Stories page')
    navigateWithTransition('stories', 'forward')
  }



  // Render the appropriate page based on current state
  const renderCurrentPage = () => {
    console.log('🔄 Current Page State:', currentPage)
    switch (currentPage) {
      case 'about':
        return (
          <AboutUsPage
            onNavigateToHome={navigateToHome}
            onNavigateToAbout={navigateToAbout}
            onNavigateToCruises={navigateToCruises}
            onNavigateToTravelOptions={navigateToTravelOptions}
            onNavigateToContact={handleFooterContactClick}
            onNavigateToStories={navigateToStories}
          />
        )
      
      case 'cruises':
        return (
          <CruisesPage
            onNavigateToHome={navigateToHome}
            onNavigateToAbout={navigateToAbout}
            onNavigateToCruises={navigateToCruises}
            onNavigateToTravelOptions={navigateToTravelOptions}
            onNavigateToContact={handleFooterContactClick}
            onNavigateToStories={navigateToStories}
          />
        )
      
      case 'travel-options':
        return (
          <TravelOptionsPage
            onNavigateToHome={navigateToHome}
            onNavigateToAbout={navigateToAbout}
            onNavigateToCruises={navigateToCruises}
            onNavigateToTravelOptions={navigateToTravelOptions}
            onNavigateToContact={handleFooterContactClick}
            onNavigateToStories={navigateToStories}
          />
        )
      
      case 'contact':
        return (
          <ContactPage
            onNavigateToHome={navigateToHome}
            onNavigateToAbout={navigateToAbout}
            onNavigateToCruises={navigateToCruises}
            onNavigateToTravelOptions={navigateToTravelOptions}
            onNavigateToStories={navigateToStories}
          />
        )
      
      case 'stories':
        return (
          <TravLinStoriesPage
            onNavigateBack={navigateToHome}
            onNavigateToHome={navigateToHome}
            onNavigateToAbout={navigateToAbout}
            onNavigateToCruises={navigateToCruises}
            onNavigateToTravelOptions={navigateToTravelOptions}
            onNavigateToContact={handleFooterContactClick}
          />
        )
      
      case 'home':
      default:
        return (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="min-h-screen bg-white"
          >
            <SEOHead page="home" />
            
            <Header 
              onNavigateToHome={navigateToHome}
              onNavigateToAbout={navigateToAbout}
              onNavigateToCruises={navigateToCruises}
              onNavigateToTravelOptions={navigateToTravelOptions}
              onNavigateToContact={navigateToContact}
              onNavigateToStories={navigateToStories}
            />
            
            {/* HOME PAGE CONTENT - Enhanced Structure with improved animations */}
            <main className="relative">
              
              {/* 1. HERO SECTION - Full height spectacular with cruise ships */}
              <motion.section 
                id="hero" 
                className="relative min-h-screen"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Hero />
              </motion.section>
              
              {/* 2. THE TRAVLIN ADVANTAGE SECTION - White background */}
              <motion.section 
                id="advantage" 
                className="section-spacing section-white"
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="content-separator"></div>
                <OurValues onNavigateToServices={navigateToAboutServices} />
              </motion.section>
              
              {/* 3. SLIDING IMAGE SEPARATOR - Visual break */}
              <motion.section 
                id="separator" 
                className="relative"
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <SlidingImageSeparator />
              </motion.section>
              
              {/* 4. OUR CREDENTIALS SECTION - White background */}
              <motion.section 
                id="credentials" 
                className="section-spacing section-white"
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="content-separator"></div>
                <Credentials />
              </motion.section>
              
              {/* 5. CRUISE AND TRAVEL OPTIONS SECTION - Enhanced with hover effects */}
              <motion.section 
                id="cruise-travel-prelude" 
                className="section-spacing section-light"
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="content-separator"></div>
                <div className="max-w-7xl mx-auto text-center">
                  <motion.h2 
                    className="section-heading"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    Cruise & Travel Options
                  </motion.h2>
                  <motion.p 
                    className="text-xl text-gray-600 mb-12 max-w-5xl mx-auto leading-relaxed"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    From luxury ocean cruises and intimate river voyages to escorted tours and independent adventures - we create extraordinary journeys tailored to your dreams. Whether you crave cultural immersion, relaxing retreats, or thrilling explorations, we've got you covered!
                  </motion.p>
                  
                  {/* Enhanced Two Button Layout with stagger animation */}
                  <motion.div 
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto"
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        size="lg" 
                        onClick={navigateToCruises}
                        className="py-5 px-10 text-lg font-semibold text-white w-full sm:w-auto transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wider min-h-[46px] lg:min-h-[50px]"
                        style={{ backgroundColor: 'var(--brand-blue)' }}
                      >
                        EXPLORE CRUISE OPTIONS
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        size="lg" 
                        onClick={navigateToTravelOptions}
                        className="py-5 px-10 text-lg font-semibold text-white w-full sm:w-auto transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wider min-h-[46px] lg:min-h-[50px]"
                        style={{ backgroundColor: 'var(--brand-orange)' }}
                      >
                        EXPLORE TRAVEL OPTIONS
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.section>
              
              {/* 6. TRAVLIN STORIES PRELUDE - Enhanced with animations */}
              <motion.section 
                id="stories-prelude" 
                className="section-spacing section-white"
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="content-separator"></div>
                <div className="max-w-7xl mx-auto text-center">
                  <motion.h2 
                    className="section-heading"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    TravLin Stories
                  </motion.h2>
                  <motion.p 
                    className="text-xl text-gray-600 mb-12 max-w-5xl mx-auto leading-relaxed"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    Get inspired with our curated travel stories, insider tips, and expert advice that transform ordinary trips into extraordinary adventures. Discover hidden gems, cultural insights, and destination secrets that feed your wanderlust. Got a great TravLin story or want to see something specific? We'd love to hear from you!
                  </motion.p>
                  <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      size="lg" 
                      onClick={navigateToStories}
                      className="py-5 px-10 text-lg font-semibold text-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wider min-h-[46px] lg:min-h-[50px]"
                      style={{ backgroundColor: 'var(--brand-yellow)' }}
                    >
                      READ OUR STORIES
                    </Button>
                  </motion.div>
                </div>
              </motion.section>
              
              {/* 7. TESTIMONIALS SECTION - Enhanced with animations */}
              <motion.section 
                id="testimonials" 
                className="section-spacing section-white"
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="content-separator"></div>
                <Testimonials />
              </motion.section>
              
            </main>
            
            {/* FOOTER - Professional dark background with entrance animation */}
            <motion.footer 
              className="relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Footer 
                onContactClick={handleFooterContactClick}
                onNavigateToHome={navigateToHome}
                onNavigateToAbout={navigateToAbout}
                onNavigateToCruises={navigateToCruises}
                onNavigateToTravelOptions={navigateToTravelOptions}
                onNavigateToContact={handleFooterContactClick}
                onNavigateToStories={navigateToStories}
              />
            </motion.footer>
            
          </motion.div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Toast notifications for better visibility */}
      <Toaster 
        position="top-center"
        expand={true}
        richColors={true}
        closeButton={true}
        duration={6000}
        toastOptions={{
          style: {
            backgroundColor: 'white',
            color: '#1f2937',
            border: '2px solid #e5e7eb',
            borderRadius: '12px',
            fontSize: '16px',
            fontWeight: '500',
            padding: '16px 20px',
            minHeight: '60px',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            backdropFilter: 'blur(8px)',
            maxWidth: '500px',
            width: '90vw'
          },
          className: 'toast-enhanced',
          duration: 6000
        }}
        theme="light"
      />
      
      {/* Loading overlay for page transitions */}
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-gradient-to-br from-blue-500/10 to-orange-500/10 backdrop-blur-sm z-50 flex items-center justify-center"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"
          />
        </motion.div>
      )}
      
      {/* Render the current page with enhanced transitions */}
      <motion.div
        key={currentPage}
        initial={{ 
          opacity: 0, 
          x: pageDirection === 'forward' ? 100 : -100 
        }}
        animate={{ 
          opacity: 1, 
          x: 0 
        }}
        exit={{ 
          opacity: 0, 
          x: pageDirection === 'forward' ? -100 : 100 
        }}
        transition={{ 
          duration: 0.4, 
          ease: "easeInOut" 
        }}
      >
        {renderCurrentPage()}
      </motion.div>
    </div>
  )
}