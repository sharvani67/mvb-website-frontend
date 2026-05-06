// components/ContactCompo/SupportFeatures.tsx
import { Users, Shield, Globe, Headphones } from 'lucide-react';
import SectionWrapper from '@/components/SectionWrapper';

const supportFeatures = [
  { 
    icon: Users, 
    title: 'Client-Centric Approach', 
    desc: 'We tailor every solution to match your unique business goals and growth plans.', 
    color: 'green' as const 
  },
  { 
    icon: Shield, 
    title: 'Secure Communication', 
    desc: 'All communications are encrypted and confidential.', 
    color: 'magenta' as const 
  },
  { 
    icon: Globe, 
    title: 'Global Reach', 
    desc: 'Supporting clients across 15+ countries.', 
    color: 'green' as const 
  },
  { 
    icon: Headphones, 
    title: 'Dedicated Support', 
    desc: 'Personalized account manager for every client.', 
    color: 'blue' as const 
  },
];

const bgMap = { blue: 'bg-mv-blue/10', magenta: 'bg-mv-magenta/10', green: 'bg-mv-green/10' };
const textMap = { blue: 'text-mv-blue', magenta: 'text-mv-magenta', green: 'text-mv-green' };
const borderMap = { blue: 'border-mv-blue/20', magenta: 'border-mv-magenta/20', green: 'border-mv-green/20' };

export default function SupportFeatures() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionWrapper>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-foreground mb-4">World-Class Support</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">We're committed to being there when you need us most</p>
          </div>
        </SectionWrapper>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportFeatures.map((item, i) => (
            <SectionWrapper key={item.title} delay={i * 80}>
              <div className={`p-8 rounded-2xl glass-premium premium-card text-center h-full border-t-2 ${borderMap[item.color]}`}>
                <div className={`w-12 h-12 rounded-xl ${bgMap[item.color]} flex items-center justify-center mx-auto mb-4`}>
                  <item.icon size={22} className={textMap[item.color]} />
                </div>
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}