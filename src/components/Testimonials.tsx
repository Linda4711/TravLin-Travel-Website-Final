import React, { useState, useEffect } from 'react'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { Quote, Star, ChevronLeft, ChevronRight, Camera, Heart, Plane, ExternalLink, ThumbsUp, Shield, Ship } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'
import SectionDivider from './SectionDivider'

const testimonials = [
  {
    id: 1,
    name: 'Darren W.',
    trip: 'Group Cruise Experience',
    rating: 5,
    text: 'We have just used Linda from TravLin Travel to organise a cruise with a group of friends. From the first consultation to the final arrangements, Linda was all over everything. She was exceptionally responsive to any queries and we will be utilising her services on our next adventure. You don\'t get this type of service often, but when you do, you need to tell everyone. So if you are are in the need for a Travel Agent look no further than Linda.',
    color: 'blue',
    image: 'https://images.unsplash.com/photo-1710263937631-a3a24c8811bf?w=600&h=400&fit=crop&q=80',
    tripType: 'Group Cruise'
  },
  {
    id: 2,
    name: 'Sally O.',
    trip: 'Koh Samui Adventure',
    rating: 5,
    text: 'Linda organised our flights to Koh Samui, we were happy with her service & knowledge on traveling to Thailand & the flight connections getting there. It was our first time traveling to Thailand and we were grateful for her advice & great customer service.',
    color: 'orange',
    image: 'https://images.unsplash.com/photo-1682502922918-fed575428e3c?w=600&h=400&fit=crop&q=80',
    tripType: 'Thailand Adventure'
  },
  {
    id: 3,
    name: 'Jodie F.',
    trip: 'First European Cruise',
    rating: 5,
    text: 'Having already booked our first trip to Europe directly with a cruise line, I remained nervous as we were visiting 8 different countries and aren\'t seasoned travellers. I was so relieved to find Linda through an online search and she was happy to take over as our agent. She gave us every confidence as she checked and double checked flights, transfers and accommodation. She was familiar with the cruise line we\'d chosen and was able to liaise with them to ensure everything was in order. Linda was professional, kind, friendly, easy to talk to, quick to respond and went above our expectations! We have had no hesitation in recommending her to family and friends already and are looking forward to making more travel arrangements with her!',
    color: 'yellow',
    image: 'https://images.unsplash.com/photo-1754927322665-bd87d960eedf?w=600&h=400&fit=crop&q=80',
    tripType: 'European Cruise'
  }
]

interface TestimonialsProps {
  hideHeader?: boolean
}

export default function Testimonials({ hideHeader = false }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, 6000)

    return () => clearInterval(interval)
  }, [autoPlay])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  const currentTestimonial = testimonials[currentIndex]

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          accent: '#0075CC',
          bg: 'bg-blue-50',
          text: 'text-blue-600',
          icon: 'text-blue-500',
          gradient: 'from-blue-500 to-blue-600'
        }
      case 'orange':
        return {
          accent: '#ED7D31',
          bg: 'bg-orange-50',
          text: 'text-orange-600',
          icon: 'text-orange-500',
          gradient: 'from-orange-500 to-orange-600'
        }
      case 'yellow':
        return {
          accent: '#FFC000',
          bg: 'bg-yellow-50',
          text: 'text-yellow-600',
          icon: 'text-yellow-600',
          gradient: 'from-yellow-500 to-yellow-600'
        }
      default:
        return {
          accent: '#0075CC',
          bg: 'bg-blue-50',
          text: 'text-blue-600',
          icon: 'text-blue-500',
          gradient: 'from-blue-500 to-blue-600'
        }
    }
  }

  const colorClasses = getColorClasses(currentTestimonial.color)

  return (
    <section id="testimonials" className="bg-gradient-to-br from-gray-50 via-white to-blue-50 py-16" style={{ position: 'relative', zIndex: 1, isolation: 'isolate' }}>
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        {!hideHeader && (
          <div className="text-center mb-16">
            <SectionDivider />
            <h2 className="section-heading">
              TravLin Testimonials
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Every journey we craft becomes a treasured chapter in our travelers' lives. These heartfelt words from our travel family remind us why we're passionate about creating extraordinary, meaningful experiences that touch the soul and create memories that last forever.
            </p>
            
            {/* Stats Row */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mb-8">
              <div className="text-center min-w-0 flex-shrink-0">
                <div className="text-xl sm:text-2xl font-bold" style={{ color: 'var(--brand-blue)' }}>Hundreds+</div>
                <div className="text-xs sm:text-sm" style={{ color: 'var(--gray-600)' }}>Happy Travelers</div>
              </div>
              <div className="text-center min-w-0 flex-shrink-0">
                <div className="flex items-center justify-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-xs sm:text-sm" style={{ color: 'var(--gray-600)' }}>5.0 Rating</div>
              </div>
              <div className="text-center min-w-0 flex-shrink-0">
                <div className="text-xl sm:text-2xl font-bold" style={{ color: 'var(--brand-orange)' }}>Many+</div>
                <div className="text-xs sm:text-sm" style={{ color: 'var(--gray-600)' }}>Destinations</div>
              </div>
            </div>
          </div>
        )}

        {/* Main Testimonial Display */}
        <div className="relative mb-12 max-w-6xl mx-auto"
             onMouseEnter={() => setAutoPlay(false)}
             onMouseLeave={() => setAutoPlay(true)}>
          
          <Card className="travel-card overflow-hidden">
            {/* Background Pattern - FORCED BEHIND with inline z-index */}
            <div className="absolute inset-0 overflow-hidden" style={{ zIndex: -30, pointerEvents: 'none' }}>
              <div className="absolute top-8 right-8 w-32 h-32 rounded-full opacity-5" style={{ backgroundColor: colorClasses.accent, zIndex: -30, pointerEvents: 'none' }}></div>
              <div className="absolute bottom-8 left-8 w-24 h-24 rounded-full opacity-5" style={{ backgroundColor: colorClasses.accent, zIndex: -30, pointerEvents: 'none' }}></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] relative">
              {/* Image Side - Postcard Style */}
              <div className="relative overflow-hidden flex items-center justify-center p-8">
                <div className="relative">
                  <div className="w-80 h-52 bg-white p-3 shadow-xl transform rotate-2 hover:rotate-0 transition-all duration-500 relative">
                    <ImageWithFallback
                      src={currentTestimonial.image}
                      alt={currentTestimonial.trip}
                      className="w-full h-full object-cover rounded-sm"
                    />
                    <div className="absolute inset-2 border border-gray-200 pointer-events-none rounded-sm"></div>
                  </div>
                  
                  <div 
                    className="absolute -top-2 -right-2 w-8 h-8 transform rotate-12 flex items-center justify-center text-white text-xs font-bold z-0"
                    style={{ backgroundColor: colorClasses.accent }}
                  >
                    <Star className="w-4 h-4" />
                  </div>
                  
                  <div className="absolute -bottom-1 -left-1 w-12 h-12 border-2 border-gray-400 rounded-full bg-white/80 flex items-center justify-center transform -rotate-12 z-0">
                    <div className="text-gray-600 text-xs font-bold">5★</div>
                  </div>
                </div>
              </div>
              
              {/* Content Side */}
              <CardContent className="p-8 lg:p-12 relative z-10 flex flex-col justify-center">
                <div className="flex items-center mb-6">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white mr-4 shadow-lg"
                    style={{ backgroundColor: colorClasses.accent }}
                  >
                    <Quote className="w-6 h-6" />
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-6 h-6 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                    <span className="ml-2 text-gray-600 font-medium">5.0</span>
                  </div>
                </div>
                
                <blockquote className="text-lg text-gray-700 leading-relaxed mb-8 italic">
                  {currentTestimonial.text}
                </blockquote>
                
                <div className="space-y-4">
                  <div className="font-bold text-gray-800 text-xl">
                    {currentTestimonial.name}
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>

          {/* Navigation Buttons */}
          <Button
            onClick={prevTestimonial}
            size="lg"
            variant="outline"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full border-2 border-white bg-white/90 backdrop-blur-sm hover:bg-white hover:scale-110 transition-all duration-300 shadow-xl"
            style={{ zIndex: 999, position: 'absolute' }}
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </Button>
          
          <Button
            onClick={nextTestimonial}
            size="lg"
            variant="outline"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full border-2 border-white bg-white/90 backdrop-blur-sm hover:bg-white hover:scale-110 transition-all duration-300 shadow-xl"
            style={{ zIndex: 999, position: 'absolute' }}
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </Button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-3 mb-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${ 
                index === currentIndex 
                  ? 'scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              style={{
                backgroundColor: index === currentIndex ? colorClasses.accent : undefined
              }}
            />
          ))}
        </div>

        {/* Write a Review Section */}
        <div className="text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Share Your TravLin Experience
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Your feedback helps us continue delivering exceptional travel experiences. 
              Share your journey with us and help other travelers discover the TravLin Travel difference. We would love that!
            </p>
            
            {/* Review Platform Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto relative" style={{ zIndex: 500 }}>
              
              {/* Google Reviews */}
              <a 
                href="https://g.page/r/CR0JNwfL2-9iEAI/review"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white border-2 border-gray-200 hover:border-red-500 rounded-lg p-6 transition-all duration-300 hover:shadow-xl hover:scale-105"
                style={{ zIndex: 500, position: 'relative' }}
              >
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-gray-800 group-hover:text-red-600 transition-colors duration-300">
                      Google Reviews
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      Write a Google review
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}