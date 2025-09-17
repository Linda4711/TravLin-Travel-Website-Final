import React, { useState, useEffect } from 'react'
import TravLinButton from './TravLinButton'
import { ChevronDown, MapPin } from 'lucide-react'
import { motion } from 'motion/react'
import { ImageWithFallback } from './figma/ImageWithFallback'

const homeHeroImage = 'https://images.unsplash.com/photo-1560838532-cfe12c238f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnVpc2UlMjBzaGlwJTIwc3BlY3RhY3VsYXIlMjBvY2VhbiUyMHZpZXd8ZW58MXx8fHwxNzU4MDAxMjU0fDA&ixlib=rb-4.1.0&q=80&w=1080'
const travlinLogo = 'https://images.unsplash.com/photo-1710131879630-17e8427fea6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBkaXJlY3Rpb25hbCUyMHNpZ24lMjB3b29kZW58ZW58MXx8fHwxNzU4MDAxMjU3fDA&ixlib=rb-4.1.0&q=80&w=1080'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToNextSection = () => {
    // Scroll to The TravLin Advantage section
    const advantageSection = document.getElementById('advantage')
    if (advantageSection) {
      advantageSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return
    }
    
    // Fallback to OurValues section  
    const ourValuesSection = document.getElementById('ourvalues') || document.querySelector('[data-section="ourvalues"]')
    if (ourValuesSection) {
      ourValuesSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return
    }
    
    // Final fallback - just scroll down
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative travel-hero-spectacular min-h-screen min-h-[100svh] flex items-center justify-center overflow-hidden">
      
      {/* Enhanced Background with Parallax Effect */}
      <motion.div
        className="absolute inset-0 z-0 hero-bg-responsive"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0, 117, 204, 0.4) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.4) 100%), url(${homeHeroImage})`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          filter: 'brightness(0.95) contrast(1.1) saturate(1.2)',
          willChange: 'transform'
        }}
        animate={{
          x: mousePosition.x * 10,
          y: mousePosition.y * 5
        }}
        transition={{ type: "spring", stiffness: 50, damping: 50 }}
      />

      {/* Mobile-specific background layer - fixed size to prevent rescaling */}
      <div
        className="absolute inset-0 z-0 hero-bg-mobile sm:hidden"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0, 117, 204, 0.4) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.4) 100%), url(${homeHeroImage})`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'scroll',
          filter: 'brightness(0.95) contrast(1.1) saturate(1.2)',
          /* Prevent any scaling or transformation on mobile */
          transform: 'none',
          transition: 'none',
          willChange: 'auto'
        }}
      />



      {/* Main Hero Content - Enhanced with Motion */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-2 sm:pt-4 lg:pt-6">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-2 sm:mb-4"
        >
          
          {/* TravLin Logo and Branding - Enhanced with hover effect */}
          <div className="relative mb-1 sm:mb-2">
            {/* TravLin Logo with Directional Sign - Enhanced */}
            <motion.div 
              className="flex justify-center -mb-4"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <ImageWithFallback 
                  src={travlinLogo}
                  alt="TravLin Travel - Directional Travel Sign Logo" 
                  className="w-96 h-72 sm:w-[28rem] sm:h-84 md:w-[32rem] md:h-96 lg:w-[36rem] lg:h-[27rem] object-contain drop-shadow-2xl max-w-[90vw]"
                  style={{
                    filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.8)) drop-shadow(0 8px 16px rgba(0, 0, 0, 0.6))'
                  }}
                />
              </motion.div>
            </motion.div>
            
            {/* TravLin? Where next? - Enhanced with stagger animation */}
            <motion.div 
              className="text-center -mt-8 sm:-mt-10 lg:-mt-12"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div
                className="text-shadow-extra"
                style={{ 
                  fontSize: 'clamp(1.6rem, 4.5vw, 2.8rem)',
                  fontWeight: '600',
                  lineHeight: '1.1',
                  letterSpacing: '0.02em'
                }}
              >
                <motion.span 
                  style={{ color: 'var(--white)' }}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  TravLin?
                </motion.span>
                <span style={{ color: 'var(--white)', margin: '0 0.5rem' }}> </span>
                <motion.span 
                  style={{ color: 'var(--brand-yellow)' }}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  Where next?
                </motion.span>
              </div>
            </motion.div>
          </div>
          
          {/* Main Description - Enhanced */}
          <motion.div 
            className="mb-6 sm:mb-8"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <p className="text-white/90 max-w-4xl mx-auto leading-relaxed text-shadow" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}>
              Join us on unforgettable journeys—discover new wonders, forge meaningful connections, <br className="hidden sm:block" />
              and let every adventure enrich your soul with lasting memories.
            </p>
          </motion.div>
        </motion.div>
        
        {/* Call-to-Action Button - Enhanced with Motion */}
        <motion.div 
          className="mb-16 sm:mb-20"
          initial={{ y: 50, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <TravLinButton 
              variant="orange"
              size="lg" 
              onClick={scrollToNextSection}
              className="shadow-2xl"
              style={{
                border: '2px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '12px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(237, 125, 49, 0.5), 0 8px 20px rgba(0, 0, 0, 0.3)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.3)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              }}
            >
              START YOUR JOURNEY
            </TravLinButton>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Enhanced Location Chip */}
      <motion.div 
        className="absolute left-3 sm:left-4 bottom-18 sm:bottom-6 z-30"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="inline-flex items-center gap-2 bg-white/18 backdrop-blur-md border border-white/30 rounded-xl px-3 sm:px-4 py-2 sm:py-3 shadow-xl max-w-[calc(100vw-120px)] sm:max-w-none transition-all duration-300 hover:bg-white/25">
          <MapPin className="w-4 sm:w-5 h-4 sm:h-5 text-white flex-shrink-0" />
          <span className="text-white font-medium text-sm sm:text-base truncate">
            <span className="hidden sm:inline">Maldives, Aerial Paradise</span>
            <span className="sm:hidden">Maldives Paradise</span>
          </span>
        </div>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div 
        className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-30"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.7 }}
      >
        <motion.div 
          className="bg-white/22 backdrop-blur-md rounded-full p-3 sm:p-4 touch-manipulation cursor-pointer transition-all duration-300 hover:bg-white/30 shadow-lg"
          onClick={scrollToNextSection}
	 animate={{
  	  y: [0, -10, 0]
 	 }}
 	 transition={{
	    duration: 2,
 	   repeat: Infinity,
 	   ease: "easeInOut"
	  }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronDown className="w-6 sm:w-7 h-6 sm:h-7 text-white" />
        </motion.div>
      </motion.div>
    </section>
  )
}