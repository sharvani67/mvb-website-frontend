import { Star } from 'lucide-react';
import SectionWrapper from '@/components/SectionWrapper';

const testimonials = [
  { name: 'Sarah Mitchell', role: 'CTO, TechCorp Inc.', quote: 'MV Branding Strategy transformed our entire IT infrastructure. Their attention to security and scalability is unmatched.', rating: 5 },
  { name: 'David Chen', role: 'VP Engineering, DataFlow', quote: 'The team delivered our data cabling project ahead of schedule with exceptional quality. Truly enterprise-grade.', rating: 5 },
  { name: 'Amira Hassan', role: 'CISO, SecureBank', quote: 'Their security-first approach gave us complete peace of mind. We couldn\'t ask for a better infrastructure partner.', rating: 5 },
];

export default function TestimonialsSection() {
  return (
    <section className="py-8 bg-muted/30 relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] rounded-full bg-mv-green/5 blur-[80px]" />
      <div className="container mx-auto px-4 lg:px-8">
        <SectionWrapper>
          <div className="text-center mb-20">
            <span className="text-xs uppercase tracking-widest text-mv-green font-semibold mb-4 block">Testimonials</span>
            <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Don't just take our word for it — hear from the leaders who trust us</p>
          </div>
        </SectionWrapper>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <SectionWrapper key={t.name} delay={i * 120}>
              <div className="p-8 rounded-2xl glass-premium premium-card h-full flex flex-col gradient-border">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={16} className="text-mv-green fill-mv-green" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed flex-1 mb-6 italic">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full gradient-brand flex items-center justify-center">
                    <span className="text-xs font-bold text-white">{t.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}