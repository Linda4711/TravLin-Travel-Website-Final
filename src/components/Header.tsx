import React, { useState, useEffect } from 'react'
import TravLinButton from './TravLinButton'
import { Menu, X, Phone } from 'lucide-react'
import { toast } from 'sonner@2.0.3'
// Replaced figma:asset with working URL for deployment
const signpostIcon = 'https://images.unsplash.com/photo-1702478001496-e08620d8ad58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWducG9zdCUyMGRpcmVjdGlvbiUyMHRyYXZlbCUyMGljb258ZW58MXx8fHwxNzU4MDA0ODc5fDA&ixlib=rb-4.1.0&q=80&w=200'

interface HeaderProps {
  onNavigateToServices?: () => void
  onNavigateToCruises?: () => void
  onNavigateToTravelOptions?: () => void
  onNavigateToContact?: () => void
  onNavigateToStories?: () => void
  onNavigateToAbout?: () => void
  onNavigateToAI?: () => void
  onNavigateToHome?: () => void
  forceBlue?: boolean
}

export default function Header({ onNavigateToServices, onNavigateToCruises, onNavigateToTravelOptions, onNavigateToContact, onNavigateToStories, onNavigateToAbout, onNavigateToAI, onNavigateToHome, forceBlue = false }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  
  const handlePhoneClick = () => {
    const phoneNumber = '61 415 355 851'
    // Copy to clipboard
    navigator.clipboard.writeText(phoneNumber).then(() => {
      toast.success(`Phone number copied: ${phoneNumber}`, {
        description: 'Click to call or paste anywhere',
        duration: 4000,
      })
    }).catch(() => {
      // Fallback for older browsers
      toast.success(`Call us: ${phoneNumber}`, {
        description: 'Phone number ready to dial',
        duration: 4000,
      })
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollPosition / documentHeight) * 100
      
      setIsScrolled(scrollPosition > 100)
      setScrollProgress(Math.min(progress, 100))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleNavClick = (href: string) => {
    if (href === '#home') {
      if (onNavigateToHome) {
        onNavigateToHome()
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
      toggleMobileMenu()
      return
    }
    
    if (href === '/cruises') {
      if (onNavigateToCruises) {
        onNavigateToCruises()
      }
      toggleMobileMenu()
      return
    }
    
    if (href === '/travel-options') {
      if (onNavigateToTravelOptions) {
        onNavigateToTravelOptions()
      }
      toggleMobileMenu()
      return
    }
    
    if (href === '/contact') {
      if (onNavigateToContact) {
        onNavigateToContact()
      }
      toggleMobileMenu()
      return
    }
    
    if (href === '/stories') {
      if (onNavigateToStories) {
        onNavigateToStories()
      }
      toggleMobileMenu()
      return
    }
    
    if (href === '/about') {
      if (onNavigateToAbout) {
        onNavigateToAbout()
      }
      toggleMobileMenu()
      return
    }
    
    if (href === '/ai-planner') {
      if (onNavigateToAI) {
        onNavigateToAI()
      }
      toggleMobileMenu()
      return
    }

    // Handle cross-page anchor navigation (services#travelinsurance)
    if (href.includes('#') && href.startsWith('/')) {
      const [page, anchor] = href.split('#')
      
      // If we're already on the target page, just scroll to anchor
      const element = document.querySelector(`#${anchor}`)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        toggleMobileMenu()
        return
      }
      
      // If we're on a different page, navigate and then scroll
      if (page === '/cruises' && onNavigateToCruises) {
        onNavigateToCruises()
        setTimeout(() => {
          const element = document.querySelector(`#${anchor}`)
          if (element) {
            // Account for fixed header height
            const headerHeight = 80
            const elementPosition = element.offsetTop - headerHeight
            window.scrollTo({
              top: elementPosition,
              behavior: 'smooth'
            })
          }
        }, 100)
      } else if (page === '/travel-options' && onNavigateToTravelOptions) {
        onNavigateToTravelOptions()
        setTimeout(() => {
          const element = document.querySelector(`#${anchor}`)
          if (element) {
            // Account for fixed header height
            const headerHeight = 80
            const elementPosition = element.offsetTop - headerHeight
            window.scrollTo({
              top: elementPosition,
              behavior: 'smooth'
            })
          }
        }, 100)
      } else if (page === '/stories' && onNavigateToStories) {
        onNavigateToStories()
        setTimeout(() => {
          const element = document.querySelector(`#${anchor}`)
          if (element) {
            // Account for fixed header height
            const headerHeight = 80
            const elementPosition = element.offsetTop - headerHeight
            window.scrollTo({
              top: elementPosition,
              behavior: 'smooth'
            })
          }
        }, 100)
      } else if (page === '/about' && onNavigateToAbout) {
        onNavigateToAbout()
        setTimeout(() => {
          const element = document.querySelector(`#${anchor}`)
          if (element) {
            // Account for fixed header height
            const headerHeight = 80
            const elementPosition = element.offsetTop - headerHeight
            window.scrollTo({
              top: elementPosition,
              behavior: 'smooth'
            })
          }
        }, 100)
      }
      toggleMobileMenu()
      return
    }
    
    // Handle same-page anchor navigation
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        // Account for fixed header height
        const headerHeight = 80
        const elementPosition = element.offsetTop - headerHeight
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        })
      }
      toggleMobileMenu()
    }
  }

  // FIXED navigation structure for 5-page TravLin Travel website
  const navigationItems = [
    { 
      name: 'Home', 
      href: '#home'
    },
    { 
      name: 'About Us', 
      href: '/about'
    },
    { 
      name: 'Cruises', 
      href: '/cruises'
    },
    { 
      name: 'Travel Options', 
      href: '/travel-options'
    },
    { 
      name: 'TravLin Stories', 
      href: '/stories'
    },
    { 
      name: 'Contact Us', 
      href: '/contact'
    }
  ]

  return (
    <header 
      className={`fixed top-0 left-0 right-0 transition-all duration-300 ${
        isScrolled || forceBlue ? 'header-scrolled' : 'header-transparent'
      }`}
      style={{ zIndex: 9999 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16 sm:h-18 lg:h-20">
          {/* Brand - Signpost Icon Only */}
          <div className="flex items-center flex-shrink-0">
            <button 
              className="flex items-center" 
              onClick={() => {
                if (onNavigateToHome) {
                  onNavigateToHome()
                } else {
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }
              }}
            >
              <img 
                src={signpostIcon}
                alt="TravLin Travel"
                className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 hover:scale-110 transition-transform duration-300 drop-shadow-lg cursor-pointer"
              />
            </button>
          </div>

          {/* Center Title - Explore Dream Discover */}
          <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block pointer-events-none">
            <div className="text-center">
              <p 
                className="text-sm lg:text-lg font-bold tracking-wider uppercase drop-shadow-md transition-colors duration-300 whitespace-nowrap"
                style={{ color: 'var(--brand-yellow)' }}
              >
                Explore • Dream • Discover
              </p>
            </div>
          </div>
          
          {/* CTA and Menu Button - ALL SCREEN SIZES */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              className="px-2 py-2 sm:px-3 sm:py-2 lg:px-4 lg:py-3 xl:px-6 xl:py-3 rounded-lg font-bold uppercase tracking-wide text-xs lg:text-sm transition-all duration-300 shadow-lg min-h-[40px] lg:min-h-[44px] touch-manipulation"
              style={{
                backgroundColor: 'var(--brand-orange)',
                color: 'white',
                border: 'none'
              }}
              onClick={handlePhoneClick}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--brand-orange-dark)';
                if (window.innerWidth >= 1024) {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(237, 125, 49, 0.4)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--brand-orange)';
                if (window.innerWidth >= 1024) {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(237, 125, 49, 0.3)';
                }
              }}
            >
              <Phone className="w-4 h-4 lg:w-5 lg:h-5 text-white" style={{ fill: 'white', stroke: 'white', strokeWidth: '2px' }} />
            </button>
            
            <button 
              className={`
                p-2 lg:p-3 rounded-md transition-all duration-300 min-h-[40px] min-w-[40px] lg:min-h-[44px] lg:min-w-[44px] 
                touch-manipulation flex items-center justify-center border-2
                ${isMobileMenuOpen 
                  ? 'bg-yellow-400/30 border-yellow-400 text-yellow-400 shadow-lg shadow-yellow-400/50' 
                  : 'hover:bg-white/10 border-transparent text-white hover:border-white/20'
                }
              `}
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <X 
                  className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 text-yellow-400 drop-shadow-lg" 
                  strokeWidth={4}
                  style={{ 
                    filter: 'drop-shadow(0 0 15px #FFC000) drop-shadow(0 0 8px #FFC000)'
                  }} 
                />
              ) : (
                <Menu 
                  className={`w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 drop-shadow-md ${
                    (isScrolled || forceBlue) ? 'text-white' : 'text-yellow-400'
                  }`} 
                />
              )}
            </button>
          </div>
        </div>

        {/* Hamburger Menu - Compact Right-Aligned Dropdown */}
        {isMobileMenuOpen && (
          <>
            {/* Backdrop - click to close */}
            <div 
              className="fixed inset-0 bg-black/20 backdrop-blur-sm"
              style={{ zIndex: 40 }}
              onClick={toggleMobileMenu}
            />
            
            {/* Compact Menu Dropdown - Always Right-Aligned */}
            <div 
              className="mobile-menu-dropdown absolute top-full right-4 bg-gray-900/95 backdrop-blur-md border border-white/10 shadow-2xl max-h-[calc(100vh-6rem)] overflow-y-auto rounded-lg mt-2 ml-auto"
              style={{ 
                width: '280px', 
                maxWidth: 'calc(100vw - 2rem)',
                right: '1rem', // Ensure consistent right alignment
                zIndex: 50 // Below close button but above backdrop
              }}

            >
              <nav className="flex flex-col p-4 space-y-1">
                {navigationItems.map((item) => (
                  <div key={item.name} className="border-b border-white/10 last:border-b-0">
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className="font-medium uppercase tracking-wide text-sm transition-all duration-300 py-3 text-left touch-manipulation w-full text-white"
                      style={{ 
                        color: '#FFFFFF',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--brand-yellow)'
                        e.currentTarget.style.textShadow = '0 0 8px rgba(255, 192, 0, 0.5)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#FFFFFF'
                        e.currentTarget.style.textShadow = 'none'
                      }}
                    >
                      {item.name}
                    </button>
                  </div>
                ))}
              </nav>
            </div>
          </>
        )}
      </div>
      
      {/* Scroll Progress Indicator */}
      <div 
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-orange-500 via-yellow-500 to-blue-500 transition-all duration-300 ease-out" 
        style={{ width: `${scrollProgress}%` }} 
      />
    </header>
  )
}