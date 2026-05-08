// components/ContactCompo/ContactHero.tsx
import SectionWrapper from '@/components/SectionWrapper';
import NetworkBackground from '@/components/NetworkBackground';

export default function ContactHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden text-white mt-4">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url("https://i.pinimg.com/1200x/bd/4e/19/bd4e190799cc452420811bfeab994ea4.jpg")`,
        }}
      />

      {/* Bright Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-600/80 via-yellow-400/70 to-blue-600/80" />

      <NetworkBackground />

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <SectionWrapper>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-white font-semibold mb-6 block">
              Contact Us
            </span>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-8 leading-[0.95]">
              Let's Build{" "}
              <span className="bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
                Together
              </span>
            </h1>

            <p className="text-xl text-white/90 leading-relaxed">
              Ready to transform your IT infrastructure? Get in touch.
            </p>
            
            <br></br>

               <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
         Let us tailor a service package that meets your needs.
              Tell us a little about your business, and we will get back to you
              with some ideas as soon as possible. 
          </p>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}