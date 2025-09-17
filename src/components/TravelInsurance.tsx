import React from 'react'
import SectionDivider from './SectionDivider'
import TravLinButton from './TravLinButton'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { Shield, Heart, Globe, CheckCircle } from 'lucide-react'

export default function TravelInsurance() {
  const insuranceFeatures = [
    {
      icon: Shield,
      title: "Medical Coverage",
      description: "Comprehensive medical and emergency coverage worldwide"
    },
    {
      icon: Globe,
      title: "Trip Cancellation",
      description: "Protection for unexpected trip cancellations and delays"
    },
    {
      icon: Heart,
      title: "Emergency Evacuation",
      description: "Emergency medical evacuation and repatriation services"
    },
    {
      icon: CheckCircle,
      title: "24/7 Assistance",
      description: "Round-the-clock emergency assistance and support"
    }
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-56 h-56 watercolor-blob opacity-8 floating-element"></div>
      <div className="absolute bottom-32 right-20 w-40 h-40 watercolor-blob-coral opacity-12 floating-element" style={{animationDelay: '3s'}}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <SectionDivider />
          <h2 className="section-heading">Travel Insurance</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Protect your investment and travel with confidence. We offer comprehensive travel insurance solutions to give you peace of mind on every journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Features */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {insuranceFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'var(--brand-blue)' }}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h4 className="text-lg font-bold text-gray-800 mb-3">Why Travel Insurance Matters</h4>
              <p className="text-gray-700 leading-relaxed">
                Travel insurance isn't just about covering medical emergencies. It protects your entire travel investment against unforeseen circumstances, weather delays, trip cancellations, and provides essential support when you need it most.
              </p>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="space-y-8">
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&q=80"
                alt="Travel insurance protection"
                className="w-full h-auto object-cover rounded-2xl shadow-lg"
              />
              
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-xl border border-gray-200">
                <div className="text-center">
                  <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm font-bold text-gray-800">Protected</p>
                  <p className="text-xs text-gray-600">Worldwide Coverage</p>
                </div>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="text-center bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <h4 className="text-lg font-bold text-gray-800 mb-3">Ready to Protect Your Journey?</h4>
              <p className="text-gray-600 mb-4">
                Contact our travel specialists to learn more about comprehensive travel insurance options.
              </p>
              <TravLinButton
                variant="blue"
                size="md"
              >
                GET INSURANCE QUOTE
              </TravLinButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}