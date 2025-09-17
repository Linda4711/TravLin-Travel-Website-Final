import React from 'react'
import SectionDivider from './SectionDivider'
import TravLinButton from './TravLinButton'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { TrendingUp, MapPin, Calendar, Users } from 'lucide-react'

interface WhatsTrendingProps {
  onNavigateToContact?: () => void
}

export default function WhatsTrending({ onNavigateToContact }: WhatsTrendingProps) {
  const trendingDestinations = [
    {
      title: "Mediterranean Cruises",
      location: "Mediterranean Sea",
      trend: "Popular",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop&q=80",
      description: "Discover ancient cultures and stunning coastlines"
    },
    {
      title: "Northern European Capitals",
      location: "Scandinavia & Baltic",
      trend: "Rising",
      image: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=400&h=300&fit=crop&q=80",
      description: "Explore Viking heritage and pristine landscapes"
    },
    {
      title: "Japan & Cherry Blossoms",
      location: "Japan",
      trend: "Seasonal",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=300&fit=crop&q=80",
      description: "Experience authentic Japanese culture in spring"
    }
  ]

  const getTrendBadgeColor = (trend: string) => {
    switch (trend) {
      case 'Popular':
        return 'var(--brand-blue)'
      case 'Rising':
        return 'var(--brand-orange)'
      case 'Seasonal':
        return 'var(--brand-yellow)'
      default:
        return 'var(--gray-600)'
    }
  }

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-56 h-56 watercolor-blob opacity-8 floating-element"></div>
      <div className="absolute bottom-32 right-20 w-40 h-40 watercolor-blob-coral opacity-12 floating-element" style={{animationDelay: '3s'}}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <SectionDivider />
          <h2 className="section-heading">What's Trending</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the most sought-after destinations and travel experiences that are capturing travelers' hearts this season.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {trendingDestinations.map((destination, index) => (
            <div 
              key={index} 
              className="travel-card overflow-hidden group hover:scale-105 transition-all duration-500"
            >
              <div className="relative">
                <ImageWithFallback
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-48 object-cover"
                />
                
                {/* Trend Badge */}
                <div 
                  className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-white"
                  style={{ backgroundColor: getTrendBadgeColor(destination.trend) }}
                >
                  <div className="flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    {destination.trend}
                  </div>
                </div>
                
                {/* Location */}
                <div className="absolute bottom-4 left-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <MapPin className="w-3 h-3 text-gray-600" />
                  <span className="text-xs font-medium text-gray-700">{destination.location}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{destination.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{destination.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <TravLinButton
            onClick={onNavigateToContact}
            variant="blue"
            size="reduced"
          >
            EXPLORE TRENDING DESTINATIONS
          </TravLinButton>
        </div>
      </div>
    </section>
  )
}