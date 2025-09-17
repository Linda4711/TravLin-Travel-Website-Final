import React, { useState } from 'react'
import TravLinButton from './TravLinButton'
import { Input } from './ui/input'
import { Checkbox } from './ui/checkbox'
import { Bot, Star, Sparkles } from 'lucide-react'
import { toast } from 'sonner@2.0.3'
import { motion } from 'motion/react'

interface AITravelPlannerWidgetExpandedProps {
  onNavigateToContact?: () => void
}

export default function AITravelPlannerWidgetExpanded({ onNavigateToContact }: AITravelPlannerWidgetExpandedProps) {
  const [email, setEmail] = useState('')
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

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
      // Mock subscription - would integrate with real service
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

  return (
    <section id="aibookingsystem" className="section-spacing section-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-56 h-56 watercolor-blob opacity-8 floating-element"></div>
      <div className="absolute bottom-32 right-20 w-40 h-40 watercolor-blob-coral opacity-12 floating-element" style={{animationDelay: '3s'}}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="content-separator"></div>
        
        {/* AI Travel Planner Section */}
        <div className="max-w-4xl mx-auto">
          <div 
            className="relative overflow-hidden bg-gray-50 rounded-lg p-8"
          >
            {/* Coming Soon Banner */}
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

            {/* AI Content */}
            <div className="relative z-10 pt-16">
              <div className="text-center mb-6">
                <div className="relative mb-4 mx-auto">
                  <div 
                    className="w-14 h-14 rounded-full flex items-center justify-center relative mx-auto"
                    style={{ 
                      background: `linear-gradient(135deg, var(--brand-yellow) 0%, #ffcd33 50%, var(--brand-yellow) 100%)`,
                      boxShadow: '0 6px 20px rgba(255, 192, 0, 0.4)'
                    }}
                  >
                    <Bot className="w-7 h-7 text-gray-800 animate-soft-flash" />
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
                    We're developing an AI travel experience to enhance your planning for all types of travel - cruises, tours, independent adventures, and more.
                  </p>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    Whether you're planning your first cruise, looking for unique destinations, or need help with complex itineraries, our AI will work alongside our human expertise to create the perfect travel experience.
                  </p>

                  <div className="bg-white rounded-lg p-3 border border-gray-200">
                    <p className="text-sm text-gray-800 mb-2">
                      <strong>Be the First to Experience It</strong>
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
                        id="privacy-agreement"
                        checked={agreedToPrivacy}
                        onCheckedChange={(checked) => setAgreedToPrivacy(checked as boolean)}
                        disabled={isSubmitting}
                      />
                      <label 
                        htmlFor="privacy-agreement" 
                        className="text-xs text-gray-600 leading-tight cursor-pointer"
                      >
                        I agree to the privacy policy
                      </label>
                    </div>
                    
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <button
                        type="submit"
                        className="px-8 py-4 font-bold text-gray-800 w-full transition-all duration-300 shadow-lg hover:shadow-xl rounded-lg"
                        style={{ backgroundColor: 'var(--brand-yellow)' }}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'NOTIFYING...' : 'NOTIFY ME WHEN LAUNCHED'}
                      </button>
                    </motion.div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action for Current Services */}
          <div className="text-center mt-12">
            <div className="bg-blue-50 rounded-lg p-8 border border-blue-200">
              <h4 className="text-xl font-bold text-gray-800 mb-4">
                Need Travel Planning Now?
              </h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                While we're developing our AI features, our experienced travel specialists are ready to help you plan your perfect journey today.
              </p>
              <TravLinButton
                onClick={onNavigateToContact}
                variant="blue"
                size="reduced"
              >
                SPEAK WITH OUR EXPERTS
              </TravLinButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}