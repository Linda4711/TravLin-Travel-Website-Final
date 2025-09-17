import React, { useState } from 'react'
import SectionDivider from './SectionDivider'
import TravLinButton from './TravLinButton'
import { Input } from './ui/input'
import { Checkbox } from './ui/checkbox'
import { toast } from 'sonner@2.0.3'
import { Phone, Mail, MapPin, Clock, Send, Shield } from 'lucide-react'
import { motion } from 'motion/react'

interface ContactUsProps {
  onNavigateToCruises?: () => void
  onNavigateToTravelOptions?: () => void
  onNavigateToHome?: () => void
}

export default function ContactUs({ onNavigateToCruises, onNavigateToTravelOptions, onNavigateToHome }: ContactUsProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    travelType: 'general',
    agreedToPrivacy: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields')
      return
    }
    
    if (!formData.agreedToPrivacy) {
      toast.error('Please agree to the privacy policy')
      return
    }
    
    setIsSubmitting(true)
    
    try {
      // Mock form submission - would integrate with real service
      toast.success('Thank you for your message! We\'ll get back to you within 24 hours.')
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        travelType: 'general',
        agreedToPrivacy: false
      })
    } catch (error) {
      console.error('Contact form error:', error)
      toast.error('Something went wrong. Please try again or call us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="section-spacing section-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-56 h-56 watercolor-blob opacity-8 floating-element"></div>
      <div className="absolute bottom-32 right-20 w-40 h-40 watercolor-blob-coral opacity-12 floating-element" style={{animationDelay: '3s'}}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="content-separator"></div>
        
        <div className="text-center mb-16">
          <SectionDivider />
          <h2 className="section-heading">Get in Touch</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Ready to start planning your dream journey? Our travel specialists are here to help you every step of the way.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-800">Phone</p>
                    <a href="tel:+61415355851" className="text-gray-600 hover:text-blue-600 transition-colors">
                      +61 415 355 851
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-800">Email</p>
                    <a href="mailto:hello@travlintravel.com.au" className="text-gray-600 hover:text-orange-600 transition-colors">
                      hello@travlintravel.com.au
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-800">Address</p>
                    <p className="text-gray-600">
                      PO BOX 7303, Karingal Centre<br />
                      KARINGAL VIC 3199 AUSTRALIA
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-800">Office Hours</p>
                    <div className="text-gray-600">
                      <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                      <p>Emergency Support: 24/7</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h4 className="text-lg font-bold text-gray-800 mb-4">Quick Actions</h4>
              <div className="space-y-3">
                <button
                  onClick={onNavigateToCruises}
                  className="w-full text-left p-3 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300"
                >
                  🚢 Explore Cruise Options
                </button>
                <button
                  onClick={onNavigateToTravelOptions}
                  className="w-full text-left p-3 bg-white rounded-lg border border-gray-200 hover:border-orange-300 hover:shadow-md transition-all duration-300"
                >
                  ✈️ Browse Travel Options
                </button>
                <button
                  onClick={onNavigateToHome}
                  className="w-full text-left p-3 bg-white rounded-lg border border-gray-200 hover:border-yellow-300 hover:shadow-md transition-all duration-300"
                >
                  🏠 Return to Home
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <Input
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full"
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <Input
                      type="tel"
                      placeholder="Your phone number"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    placeholder="Your email address"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full"
                    disabled={isSubmitting}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Travel Interest
                  </label>
                  <select
                    value={formData.travelType}
                    onChange={(e) => handleInputChange('travelType', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    disabled={isSubmitting}
                  >
                    <option value="general">General Inquiry</option>
                    <option value="cruise">Cruise Planning</option>
                    <option value="travel">Travel Options</option>
                    <option value="group">Group Travel</option>
                    <option value="luxury">Luxury Travel</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    placeholder="Tell us about your travel dreams..."
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 min-h-32"
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="privacy-agreement-contact"
                    checked={formData.agreedToPrivacy}
                    onCheckedChange={(checked) => handleInputChange('agreedToPrivacy', checked as boolean)}
                    disabled={isSubmitting}
                  />
                  <label 
                    htmlFor="privacy-agreement-contact" 
                    className="text-xs text-gray-600 leading-tight cursor-pointer"
                  >
                    I agree to the privacy policy and consent to being contacted about my travel inquiry
                  </label>
                </div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button
                    type="submit"
                    className="w-full px-8 py-4 font-bold text-white transition-all duration-300 shadow-lg hover:shadow-xl rounded-lg flex items-center justify-center gap-2"
                    style={{ backgroundColor: 'var(--brand-blue)' }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        SENDING...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        SEND MESSAGE
                      </>
                    )}
                  </button>
                </motion.div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}