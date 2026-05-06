import SectionWrapper from '@/components/SectionWrapper';

const processSteps = [
  { step: '01', title: 'Discovery', desc: 'Deep-dive into your infrastructure needs and business objectives', color: 'blue' as const },
  { step: '02', title: 'Design', desc: 'Architect tailored solutions with security and scalability built-in', color: 'magenta' as const },
  { step: '03', title: 'Deploy', desc: 'Execute with precision using certified engineers and premium products', color: 'green' as const },
  { step: '04', title: 'Support', desc: 'Ongoing monitoring, optimization, and 24/7 dedicated support', color: 'blue' as const },
];

const iconBgMap = { blue: 'bg-mv-blue/10', magenta: 'bg-mv-magenta/10', green: 'bg-mv-green/10' };
const iconTextMap = { blue: 'text-mv-blue', magenta: 'text-mv-magenta', green: 'text-mv-green' };
const borderColorMap = { blue: 'border-mv-blue/20', magenta: 'border-mv-magenta/20', green: 'border-mv-green/20' };

export default function ProcessSection() {
  return (
    <section className="py-8 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionWrapper>
          <div className="text-center mb-20">
            <span className="text-xs uppercase tracking-widest text-mv-blue font-semibold mb-4 block">How We Work</span>
            <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">Our Process</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">A proven methodology that ensures success at every stage</p>
          </div>
        </SectionWrapper>
        
        <div className="grid md:grid-cols-4 gap-6 relative">
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-border" />
          {processSteps.map((item, i) => (
            <SectionWrapper key={item.step} delay={i * 150}>
              <div className="text-center relative">
                <div className={`w-24 h-24 rounded-2xl ${iconBgMap[item.color]} border-2 ${borderColorMap[item.color]} flex items-center justify-center mx-auto mb-6 relative z-10 shadow-lg premium-card`}>
                  <span className={`text-2xl font-black ${iconTextMap[item.color]}`}>{item.step}</span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}