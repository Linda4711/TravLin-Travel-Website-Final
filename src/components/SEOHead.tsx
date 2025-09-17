import React, { useEffect } from 'react'

interface SEOHeadProps {
  page?: 'home' | 'about' | 'cruises' | 'travel-options' | 'contact' | 'stories'
  title?: string
  description?: string
  keywords?: string
}

export default function SEOHead({ 
  page = 'home', 
  title, 
  description, 
  keywords 
}: SEOHeadProps) {
  
  const pageData = {
    home: {
      title: 'TravLin Travel - Expert Cruise Specialists & Travel Consultants',
      description: 'From luxury ocean cruises to intimate river voyages and escorted tours - we create extraordinary journeys tailored to your dreams. Expert cruise specialists since 2016.',
      keywords: 'cruise specialist, travel agent, luxury cruises, river cruises, escorted tours, travel consultant, vacation planning'
    },
    about: {
      title: 'About Us - TravLin Travel | You Dream, We Create',
      description: 'Established in June 2016, TravLin Travel has been creating extraordinary journeys with passion, expertise, and genuine care for every traveler.',
      keywords: 'about travlin travel, linda forster, travel agency, cruise specialists, travel consultants'
    },
    cruises: {
      title: 'Cruise Options - TravLin Travel | Ocean & River Cruises',
      description: 'Discover luxury ocean cruises, intimate river voyages, and specialty cruise experiences. Expert cruise planning with personalized service.',
      keywords: 'ocean cruises, river cruises, luxury cruises, cruise planning, cruise specialist, cruise travel'
    },
    'travel-options': {
      title: 'Travel Options - TravLin Travel | Tours & Adventures',
      description: 'Escorted tours, independent adventures, cultural immersion, and relaxing retreats. Personalized travel planning for every type of traveler.',
      keywords: 'escorted tours, independent travel, cultural tours, adventure travel, travel planning'
    },
    contact: {
      title: 'Contact Us - TravLin Travel | Plan Your Dream Journey',
      description: 'Ready to plan your next adventure? Contact our expert travel consultants for personalized cruise and travel planning services.',
      keywords: 'contact travel agent, cruise planning, travel consultation, travel booking'
    },
    stories: {
      title: 'TravLin Stories - Travel Blog & Inspiration',
      description: 'Get inspired with curated travel stories, insider tips, and expert advice. Discover hidden gems and destination secrets.',
      keywords: 'travel blog, travel stories, travel tips, destination guides, travel inspiration'
    }
  }

  const currentData = pageData[page]
  const finalTitle = title || currentData.title
  const finalDescription = description || currentData.description
  const finalKeywords = keywords || currentData.keywords

  useEffect(() => {
    // Update document title
    document.title = finalTitle

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.setAttribute('name', 'description')
      document.head.appendChild(metaDescription)
    }
    metaDescription.setAttribute('content', finalDescription)

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]')
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta')
      metaKeywords.setAttribute('name', 'keywords')
      document.head.appendChild(metaKeywords)
    }
    metaKeywords.setAttribute('content', finalKeywords)

    // Update Open Graph meta tags
    let ogTitle = document.querySelector('meta[property="og:title"]')
    if (!ogTitle) {
      ogTitle = document.createElement('meta')
      ogTitle.setAttribute('property', 'og:title')
      document.head.appendChild(ogTitle)
    }
    ogTitle.setAttribute('content', finalTitle)

    let ogDescription = document.querySelector('meta[property="og:description"]')
    if (!ogDescription) {
      ogDescription = document.createElement('meta')
      ogDescription.setAttribute('property', 'og:description')
      document.head.appendChild(ogDescription)
    }
    ogDescription.setAttribute('content', finalDescription)

  }, [finalTitle, finalDescription, finalKeywords])

  return null // This component doesn't render anything visible
}