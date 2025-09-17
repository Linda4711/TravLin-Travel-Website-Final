import React from 'react'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { Award, Trophy, Star, Users, Check, Ship, Globe, Shield } from 'lucide-react'
import SectionDivider from './SectionDivider'
// Replaced figma:asset imports with working URLs for deployment
const awardBanner1 = 'https://images.unsplash.com/photo-1715173679369-18006e84d6a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8ZW58MXx8fHwxNzU4MDA1NTkwfDA&ixlib=rb-4.1.0&q=80&w=200'
const awardBanner2 = 'https://images.unsplash.com/photo-1587567818566-3272be7d64c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8ZW58MXx8fHwxNzU3OTQ3Mzc4fDA&ixlib=rb-4.1.0&q=80&w=200'
const cliaBadge = 'https://images.unsplash.com/photo-1715173679369-18006e84d6a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8ZW58MXx8fHwxNzU4MDA1NTkwfDA&ixlib=rb-4.1.0&q=80&w=200'
const atiaLogo = 'https://images.unsplash.com/photo-1587567818566-3272be7d64c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8ZW58MXx8fHwxNzU3OTQ3Mzc4fDA&ixlib=rb-4.1.0&q=80&w=200'
const qualityAward = 'https://images.unsplash.com/photo-1715173679369-18006e84d6a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8ZW58MXx8fHwxNzU4MDA1NTkwfDA&ixlib=rb-4.1.0&q=80&w=200'
const cliaMember = 'https://images.unsplash.com/photo-1587567818566-3272be7d64c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8ZW58MXx8fHwxNzU3OTQ3Mzc4fDA&ixlib=rb-4.1.0&q=80&w=200'
const travelAgentFinder = 'https://images.unsplash.com/photo-1715173679369-18006e84d6a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8ZW58MXx8fHwxNzU4MDA1NTkwfDA&ixlib=rb-4.1.0&q=80&w=200'
const travellersChoice = 'https://images.unsplash.com/photo-1587567818566-3272be7d64c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8ZW58MXx8fHwxNzU3OTQ3Mzc4fDA&ixlib=rb-4.1.0&q=80&w=200'
const iataTids = 'https://images.unsplash.com/photo-1715173679369-18006e84d6a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8ZW58MXx8fHwxNzU4MDA1NTkwfDA&ixlib=rb-4.1.0&q=80&w=200'

const credentials = [
  {
    id: 1,
    title: 'ATIA Travel Tick Accredited',
    organization: 'Australian Travel Industry Association',
    year: '2025',
    description: 'ATIA accreditation ensures your travel bookings are protected with financial guarantees, professional standards compliance, and consumer protection, giving you complete peace of mind when booking your next adventure.',
    logo: atiaLogo,
    logoAlt: 'ATIA Accredited Member',
    icon: Shield,
    category: 'accreditation',
    featured: true
  },
  {
    id: 2,
    title: 'NTIA 2022 winner - People\'s Choice Best Agency',
    organization: 'National Travel Industry Association',
    year: '2022',
    description: 'Prestigious award recipient recognizing exceptional service excellence, customer satisfaction, and as one winning entry amongst 11,000+ votes from members of the public, so the people\'s choice.',
    logo: awardBanner2,
    logoAlt: 'Travel Industry Excellence Award',
    icon: Trophy,
    category: 'award',
    featured: true
  },
  {
    id: 3,
    title: 'CLIA Master Cruise Consultant',
    organization: 'CLIA Certification',
    year: '2025',
    description: 'Professional certification demonstrating expertise the highest accreditation level in cruise travel planning and customer service excellence. Agency positioned within the top 50 in Australia. Cruising is our passion.',
    logo: cliaBadge,
    logoAlt: 'CLIA Master Cruise Consultant 2025',
    icon: Trophy,
    category: 'certification',
    featured: false
  },
  {
    id: 4,
    title: 'CLIA Australasia Member',
    organization: 'CLIA Australasia',
    year: '2025',
    description: 'Active membership in Cruise Lines International Association Australasia for professional travel agents. We never miss their annual cruise conference.',
    logo: cliaMember,
    logoAlt: 'CLIA Australasia 2025 Travel Agent Member',
    icon: Ship,
    category: 'membership',
    featured: false
  },
  {
    id: 5,
    title: 'Travellers Choice Member',
    organization: 'Travellers Choice',
    year: '2025',
    description: 'Member of the exclusive Travellers Choice network of premium travel professionals and agencies. NTIA winner for the Best Non-Branded Agency Network four consecutive years 2021, 2022, 2023, 2024.',
    logo: travellersChoice,
    logoAlt: 'Travellers Choice Member',
    icon: Star,
    category: 'membership',
    featured: true
  },
  {
    id: 6,
    title: 'Quality Business Winner 2024',
    organization: 'Quality Business Awards',
    year: '2024',  
    description: 'Outstanding achievement with quality rating over 95%, recognizing exceptional business standards - satisfaction, standards, reputation, quality. The Best Travel Agent for the city of Frankston 2024.',
    logo: qualityAward,
    logoAlt: 'Quality Business Winner 2024',
    icon: Award,
    category: 'award',
    featured: true
  },
  {
    id: 7,
    title: 'IATA TIDS Agent',
    organization: 'International Air Transport Association',
    year: '2025',
    description: 'Accredited IATA Travel Industry Designator Service agent providing secure booking services and industry-standard travel solutions.',
    logo: iataTids,
    logoAlt: 'IATA TIDS Agent Accreditation',
    icon: Globe,
    category: 'accreditation',
    featured: false
  },
  {
    id: 8,
    title: 'Travel Agent Finder Member',
    organization: 'Travel Agent Finder',
    year: '2025',
    description: 'Valued member of the professional travel agent finder network connecting travelers Australia wide with trusted and accredited travel advisors.',
    logo: travelAgentFinder,
    logoAlt: 'Travel Agent Finder - Valued Member',
    icon: Users,
    category: 'membership',
    featured: false
  }
]

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'award':
      return {
        bg: 'var(--brand-orange)',
        text: 'white',
        glow: 'rgba(237, 125, 49, 0.3)'
      }
    case 'certification':
      return {
        bg: 'var(--brand-blue)',
        text: 'white',
        glow: 'rgba(0, 117, 204, 0.3)'
      }
    case 'accreditation':
      return {
        bg: 'var(--brand-yellow)',
        text: 'var(--gray-800)',
        glow: 'rgba(255, 192, 0, 0.3)'
      }
    case 'membership':
      return {
        bg: 'var(--gray-600)',
        text: 'white',
        glow: 'rgba(108, 117, 125, 0.3)'
      }
    default:
      return {
        bg: 'var(--brand-blue)',
        text: 'white',
        glow: 'rgba(0, 117, 204, 0.3)'
      }
  }
}

export default function Credentials() {
  return (
    <section id="credentials" className="pt-12 pb-24 relative overflow-hidden" style={{ backgroundColor: 'var(--gray-50)' }}>
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 right-20 w-96 h-96 opacity-5" style={{
          background: 'radial-gradient(circle, var(--brand-blue) 0%, transparent 70%)'
        }}></div>
        <div className="absolute bottom-32 left-20 w-80 h-80 opacity-5" style={{
          background: 'radial-gradient(circle, var(--brand-orange) 0%, transparent 70%)'
        }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-5" style={{
          background: 'radial-gradient(circle, var(--brand-yellow) 0%, transparent 70%)'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center mb-20">
          <SectionDivider />
          <h2 className="section-heading">
            Our Credentials
          </h2>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed" style={{ color: 'var(--gray-600)' }}>
            Recognized through industry awards, professional memberships,<br />
            and certifications for delivering exceptional travel service.
          </p>
        </div>

        {/* Unified Grid - All Credentials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {credentials.map((credential, index) => {
            const categoryStyle = getCategoryColor(credential.category)
            return (
              <Card 
                key={credential.id}
                className="bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 relative overflow-hidden group"
              >
                {/* Category Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <Badge 
                    className="text-xs font-bold px-3 py-1"
                    style={{ 
                      backgroundColor: categoryStyle.bg,
                      color: categoryStyle.text,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}
                  >
                    {credential.category}
                  </Badge>
                </div>

                {/* Glow Effect on Hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${categoryStyle.glow} 0%, transparent 50%)`
                  }}
                ></div>
                
                <CardContent className="p-8 relative">
                  {/* Logo and Icon Section - Side by Side */}
                  <div className="flex items-center justify-center mb-6 space-x-4">
                    {/* Logo Container */}
                    <div className="relative">
                      {/* Glow background */}
                      <div 
                        className="absolute inset-0 blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                        style={{ backgroundColor: categoryStyle.bg }}
                      ></div>
                      
                      {/* Logo container - Variable sizes for specific credentials */}
                      <div className="relative bg-white p-2 shadow-lg border-2" style={{ 
                        borderColor: 'var(--gray-200)',
                        width: credential.id === 3 ? '140px' : credential.id === 4 ? '100px' : '120px',  // Bigger for CLIA Master (id:3), smaller for CLIA Member (id:4)
                        height: credential.id === 3 ? '95px' : credential.id === 4 ? '65px' : '80px',   // Adjusted heights accordingly
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <img 
                          src={credential.logo} 
                          alt={credential.logoAlt}
                          className="object-contain"
                          style={{
                            width: credential.id === 3 ? '130px' : credential.id === 4 ? '90px' : '110px',   // CLIA Master bigger, CLIA Member smaller
                            height: credential.id === 3 ? '85px' : credential.id === 4 ? '55px' : '70px',   // Proportional heights
                            maxWidth: credential.id === 3 ? '130px' : credential.id === 4 ? '90px' : '110px',
                            maxHeight: credential.id === 3 ? '85px' : credential.id === 4 ? '55px' : '70px'
                          }}
                        />
                      </div>
                    </div>
                    
                    {/* Icon alongside logo */}
                    <div 
                      className="w-12 h-12 flex items-center justify-center shadow-lg flex-shrink-0"
                      style={{ backgroundColor: categoryStyle.bg }}
                    >
                      <credential.icon className="w-6 h-6" style={{ color: categoryStyle.text }} />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <h4 className="text-lg font-bold mb-3 leading-tight" style={{ color: 'var(--gray-800)' }}>
                      {credential.title}
                    </h4>
                    
                    <div className="flex items-center justify-center mb-4 text-sm" style={{ color: 'var(--gray-500)' }}>
                      <span>{credential.organization}</span>
                    </div>
                    
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--gray-600)' }}>
                      {credential.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>


      </div>
    </section>
  )
}