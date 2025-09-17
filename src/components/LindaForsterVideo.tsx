import React, { useRef, useEffect, useState } from 'react'
import { Play, ExternalLink, Volume2, VolumeX } from 'lucide-react'

export default function LindaForsterVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [isMuted, setIsMuted] = useState(false)

  // SIMPLE SOLUTION: Just put your video URL here (like footer YouTube URL)
  // Linda's welcome video - NEW high quality version
  const videoUrl = "https://youtu.be/jWIxH8L74Xk" // Linda's YouTube welcome video
  
  // For YouTube URLs, we'll use iframe like footer does
  const isYouTubeUrl = videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be')
  
  // Convert YouTube URL to embed format with autoplay and proper fill
  const getEmbedUrl = (url: string) => {
    if (url.includes('youtube.com/watch?v=')) {
      const videoId = url.split('v=')[1]?.split('&')[0]
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&loop=1&playlist=${videoId}&enablejsapi=1&iv_load_policy=3&fs=0&disablekb=1`
    }
    if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1]?.split('?')[0]
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&loop=1&playlist=${videoId}&enablejsapi=1&iv_load_policy=3&fs=0&disablekb=1`
    }
    return url
  }



  // Auto-play video when loaded (like Footer)
  useEffect(() => {
    if (videoUrl && !isYouTubeUrl && videoRef.current) {
      const video = videoRef.current
      const playVideo = async () => {
        try {
          await video.play()
          console.log('▶️ Linda video auto-playing')
        } catch (error) {
          console.log('⚠️ Auto-play blocked by browser')
        }
      }
      setTimeout(playVideo, 200)
    }
  }, [videoUrl, isYouTubeUrl])

  // Volume control handler for Linda's video
  const handleVolumeToggle = () => {
    if (iframeRef.current) {
      const iframe = iframeRef.current
      const currentSrc = iframe.src
      
      if (isMuted) {
        // Unmute by removing mute parameter
        const newSrc = currentSrc.replace(/&mute=1/g, '').replace(/\?mute=1&/g, '?').replace(/\?mute=1$/g, '')
        iframe.src = newSrc
        setIsMuted(false)
      } else {
        // Mute by adding mute parameter
        const separator = currentSrc.includes('?') ? '&' : '?'
        iframe.src = currentSrc + separator + 'mute=1'
        setIsMuted(true)
      }
    }
  }

  return (
    <section className="py-16 relative overflow-hidden" style={{ backgroundColor: 'var(--white)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* LEFT COLUMN - Linda's Welcome Message/Video */}
          <div className="space-y-8">
            {/* Video Section - EXACTLY like Footer video container */}
            <div className="relative">
              <div className="w-full rounded-lg overflow-hidden border border-blue-500 shadow-lg bg-black relative aspect-video">
                
                {/* Volume Control Overlay - Always visible on top of video */}
                {videoUrl && (
                  <button
                    onClick={handleVolumeToggle}
                    className="absolute top-3 right-3 z-50 bg-black/60 hover:bg-black/80 rounded-full p-2 transition-all duration-300 border border-white/20 shadow-lg"
                    title={isMuted ? 'Unmute video' : 'Mute video'}
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4 text-white" />
                    ) : (
                      <Volume2 className="w-4 h-4 text-white" />
                    )}
                  </button>
                )}
                
                {videoUrl ? (
                  /* Video is set - Clean autoplay version without controls or overlays */
                  <>
                    {isYouTubeUrl ? (
                      /* YouTube iframe - Clean autoplay version */
                      <iframe
                        ref={iframeRef}
                        className="absolute inset-0 w-full h-full"
                        src={getEmbedUrl(videoUrl)}
                        title="Linda's Welcome Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        style={{ 
                          width: '110%',
                          height: '110%',
                          top: '-5%',
                          left: '-5%',
                          border: 'none',
                          objectFit: 'cover'
                        }}
                      />
                    ) : (
                      /* Direct video file - Clean autoplay version */
                      <video
                        ref={videoRef}
                        className="absolute inset-0 w-full h-full object-cover"
                        src={videoUrl}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        controls={false}
                        style={{ 
                          width: '100%',
                          height: '100%',
                          filter: 'brightness(0.95) contrast(1.05)' 
                        }}
                      />
                    )}
                  </>
                ) : (
                  /* No Video Set - Simple Instructions */
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                    <div className="text-center p-8 max-w-md">
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                        <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6">
                          <Play className="w-10 h-10 text-white ml-1" />
                        </div>
                        
                        <h3 className="text-white font-bold text-xl mb-4">Linda's Welcome Video</h3>
                        
                        <p className="text-white/90 text-sm mb-6 leading-relaxed">
                          Experience a personal welcome from Linda, your dedicated cruise and travel specialist.
                        </p>
                        
                        <div className="text-white/80 text-xs text-left bg-black/20 rounded-lg p-4 space-y-3">
                          <p className="font-semibold text-white text-center mb-3">📋 Super Simple Setup:</p>
                          
                          <div className="space-y-2">
                            <p><strong>1.</strong> Upload your video to YouTube (easiest)</p>
                            <p><strong>2.</strong> Copy the YouTube URL</p>
                            <p><strong>3.</strong> Paste it in the code where it says:</p>
                            <div className="bg-black/30 p-2 rounded font-mono text-xs">
                              const videoUrl = "PASTE_HERE"
                            </div>
                            <p><strong>4.</strong> Video appears instantly! ✨</p>
                          </div>
                          
                          <div className="border-t border-white/20 pt-3 mt-3">
                            <p className="text-white/60 text-xs">
                              💡 <strong>Works exactly like footer video!</strong><br />
                              📺 Supports YouTube, Vimeo, or direct video files<br />
                              🔄 Auto-plays and loops like footer video
                            </p>
                          </div>
                          
                          <div className="bg-white/10 p-3 rounded mt-3">
                            <p className="text-white text-xs font-semibold mb-2">✨ Example URLs that work:</p>
                            <div className="text-white/80 text-xs space-y-1">
                              <p>• https://youtube.com/watch?v=ABC123</p>
                              <p>• https://youtu.be/ABC123</p>
                              <p>• https://example.com/linda-video.mp4</p>
                            </div>
                          </div>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                )}
              </div>

            </div>

            {/* About Us - Welcome Message */}
            <div className="bg-gradient-to-br from-blue-50 to-orange-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--brand-blue)' }}>
                About Us
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                TravLin Travel has been established since June 2016. We have a wealth of retail travel experience. We have travelled near and far. We have camped, stayed in luxurious 5 star accommodations and everything in between. We love it all. We treat you as one of the family and enjoy putting together trips that will bring smiles upon smiles and those delicious memories to cherish for the rest of your life.
              </p>
              <div className="text-center py-4">
                <p className="font-bold text-lg mb-4" style={{ color: 'var(--brand-orange)' }}>
                  WE LOVE AND BREATHE TRAVEL ... OUR 'FOREVER JOURNEY'
                </p>
                <div className="border-t border-orange-200 pt-4 mt-4">
                  <p className="text-gray-700 leading-relaxed text-center mb-3">
                    You can trust Linda with all your travel needs. She remains committed to delivering professional service from start to finish. Contact her today, and let's plan your next adventure.
                  </p>
                  <p className="font-bold text-xl text-center" style={{ color: 'var(--brand-blue)' }}>
                    TravLin... Where To Next?
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Linda's Professional Details */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <h3 className="text-3xl font-bold mb-2" style={{ color: 'var(--brand-orange)' }}>
                LINDA FORSTER
              </h3>
              <p className="text-lg font-semibold mb-2" style={{ color: 'var(--brand-blue)' }}>
                BUSINESS OWNER/TRAVEL AND CRUISE SPECIALIST
              </p>
              <div className="w-24 h-1 rounded-full" style={{ backgroundColor: 'var(--brand-orange)' }}></div>
            </div>

            {/* Professional Background */}
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                Linda Forster is a seasoned Travel Advisor and Cruise Specialist. She operates TravLin Travel from her home on the Mornington Peninsula and has been in the travel industry since 2006. With over 30 years of customer service experience, Linda holds ATAS accreditation and is recognized as a CLIA Cruise Master. Additionally, she proudly belongs to both ATIA (Australian Travel Industry Association) and Travellers Choice Independent Agency Group.
              </p>

              {/* Key Service Highlights */}
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-start gap-4 p-4 rounded-lg" style={{ backgroundColor: 'var(--gray-50)' }}>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--brand-blue)' }}>
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Personalized Service at Your Fingertips</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Linda focuses on creating unforgettable travel experiences. Her mobile service allows her to meet clients locally, for the more complex of itineraries and large document delivery, saving them both time and money. Furthermore, she offers assistance outside regular hours, ensuring peace of mind during your travels.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg" style={{ backgroundColor: 'var(--gray-50)' }}>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--brand-orange)' }}>
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">A Passion for Travel</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      With a natural talent for organising and a passion for cruising, Linda genuinely enjoys hearing about her clients' adventures when they return. Her extensive travel background includes working as a hotel concierge in Edinburgh and serving as an overseas travel representative on the beautiful Greek Island of Kos. Consequently, these experiences equip her to share valuable insights and recommendations.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        
        {/* Professional Credentials - Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <svg className="w-4 h-4" style={{ color: 'var(--brand-blue)' }} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-medium text-gray-700">ATAS Accredited</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <svg className="w-4 h-4" style={{ color: 'var(--brand-orange)' }} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-medium text-gray-700">CLIA Cruise Master</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <svg className="w-4 h-4" style={{ color: 'var(--brand-blue)' }} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-gray-700">Mornington Peninsula</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <svg className="w-4 h-4" style={{ color: 'var(--brand-orange)' }} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-gray-700">Since 2006</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}