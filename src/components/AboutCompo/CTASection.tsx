import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, MapPin, Phone, Play, Award } from 'lucide-react';
import { TiltCard } from './TiltCard';
import { useState } from 'react';

export function CTASection() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section className="relative py-16 lg:py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.pinimg.com/736x/74/2b/bf/742bbfb875cce0703ed33111fdd0ed3d.jpg"
          alt="Technology Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/80" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <Award className="w-4 h-4 text-blue-300" />
            <span className="text-sm font-medium text-white">Trusted by 200+ Enterprises</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
              IT Infrastructure?
            </span>
          </h2>
          
          {/* Description */}
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss your infrastructure needs. No pressure. Just possibilities.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <TiltCard intensity={1.05}>
              <Link to="/contact">
                <Button className="group bg-white text-blue-900 hover:bg-gray-100 rounded-full px-8 py-4 text-base font-medium shadow-lg hover:shadow-xl transition-all">
                  Start the Conversation
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </TiltCard>
            
            <TiltCard intensity={1.05}>
              <Button 
                onClick={() => setIsVideoModalOpen(true)}
                variant="outline"
                className="group rounded-full px-8 py-4 text-base font-medium border-2 border-white/30 text-black hover:bg-white/10 backdrop-blur-sm transition-all"
              >
                <Play className="mr-2 w-4 h-4" />
                Watch Story
              </Button>
            </TiltCard>
          </div>

          {/* Contact Information */}
          <div className="flex flex-wrap justify-center gap-6 text-white/90 text-sm">
            <a href="mailto:sales@mvbsolutions.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-4 h-4" />
              <span>sales@mvbsolutions.com</span>
            </a>
            <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="w-4 h-4" />
              <span>+91 98765 43210</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Bangalore, India</span>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={() => setIsVideoModalOpen(false)}>
          <div className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-900">Our Story</h3>
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <span className="text-2xl">&times;</span>
              </button>
            </div>
            <div className="relative">
              <video
                className="w-full"
                autoPlay
                controls
                poster="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=675&fit=crop"
              >
                <source src="https://assets.mixkit.co/videos/preview/mixkit-business-team-meeting-in-office-40421-large.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}