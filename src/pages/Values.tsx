import {
  Heart,
  Shield,
  Lightbulb,
  Users,
  BookOpen,
  Eye,
  Handshake,
  Rocket,
  Target,
  ArrowRight,
  Quote,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionWrapper from "@/components/SectionWrapper";
import NetworkBackground from "@/components/NetworkBackground";
import PrinciplePerformance from "@/components/ValuesCompo/PrinciplePerformance";
import CorePhilosophy from "@/components/ValuesCompo/corephilosphy";
import CultureExcellence from "@/components/ValuesCompo/CultureExcellence";
import Valuess from "@/components/ValuesCompo/Values";


const values = [
  {
    icon: Heart,
    title: "Customer Centricity",
    desc: "Placing customer needs at the heart of every decision.",
    longDesc:
      "We listen deeply, understand thoroughly, and act decisively to ensure every solution creates measurable business value.",
    color: "blue" as const,
  },
  {
    icon: Shield,
    title: "Peace of Mind",
    desc: "Reliability and trust in every engagement.",
    longDesc:
      "Through rigorous quality standards and proactive support, we create complete operational confidence.",
    color: "blue" as const,
  },
  {
    icon: Lightbulb,
    title: "Innovative & Simplified",
    desc: "Turning complexity into clarity.",
    longDesc:
      "The best technology is invisible — powerful enough to scale, yet simple enough to manage.",
    color: "magenta" as const,
  },
  {
    icon: Users,
    title: "Growth for Talents",
    desc: "Investing in people, not just projects.",
    longDesc:
      "We cultivate leadership, certifications, and mastery that directly translate into client excellence.",
    color: "magenta" as const,
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    desc: "Staying ahead of the curve.",
    longDesc:
      "Our culture of learning ensures that we remain adaptive, innovative, and future-ready.",
    color: "magenta" as const,
  },
  {
    icon: Eye,
    title: "Accountability",
    desc: "Ownership at every level.",
    longDesc:
      "We operate with transparent communication, clear milestones, and measurable KPIs.",
    color: "green" as const,
  },
  {
    icon: Handshake,
    title: "Commitment",
    desc: "We deliver what we promise.",
    longDesc:
      "Our reputation is built on consistency, precision, and exceeding expectations.",
    color: "green" as const,
  },
  {
    icon: Rocket,
    title: "Future Ready",
    desc: "Solutions built for tomorrow.",
    longDesc:
      "We design infrastructure that scales, adapts, and evolves with emerging technologies.",
    color: "green" as const,
  },
  {
    icon: Target,
    title: "Result Oriented",
    desc: "Impact over activity.",
    longDesc:
      "We measure success by tangible outcomes, not just completed deliverables.",
    color: "blue" as const,
  },
];

const bgMap = {
  blue: "bg-mv-blue/10",
  magenta: "bg-mv-magenta/10",
  green: "bg-mv-green/10",
};

const textMap = {
  blue: "text-mv-blue",
  magenta: "text-mv-magenta",
  green: "text-mv-green",
};

const borderMap = {
  blue: "border-mv-blue/20",
  magenta: "border-mv-magenta/20",
  green: "border-mv-green/20",
};

const cultureItems = [
  "We celebrate curiosity and encourage experimentation",
  "We foster diversity of thought and inclusive collaboration",
  "We prioritize work-life balance and personal well-being",
  "We recognize and reward excellence at every level",
];

export default function Values() {
  return (
    <>
      {/* ================= HERO ================= */}
      {/* <section className="relative py-32 overflow-hidden">
        <NetworkBackground />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <SectionWrapper>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase tracking-widest text-mv-green font-semibold mb-6 block">
                Our Core Philosophy
              </span>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-foreground mb-8 leading-[0.95]">
                We Don't Just Deliver Projects —
                <span className="gradient-text-animate block mt-2">
                  We Build Trust at Scale
                </span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed mb-10">
                Our values define how we think, build, and collaborate.
                Every engagement is rooted in clarity, accountability, and long-term impact.
              </p>

              <Link to="/contact">
                <Button
                  size="lg"
                  className="magnetic-btn gradient-brand text-white font-bold h-14 px-10"
                >
                  Work With Us <ArrowRight size={18} />
                </Button>
              </Link>
            </div>
          </SectionWrapper>
        </div>
      </section> */}

      < CorePhilosophy />

      {/* ================= VALUES INTRO ================= */}
      {/* <section className="py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-6">
              The Standards That Shape Every Decision
            </h2>
            <p className="text-lg text-muted-foreground">
              These are not slogans. They are operational principles embedded into
              our workflows, leadership, and delivery model.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <SectionWrapper key={v.title} delay={i * 60}>
                <div
                  className={`group relative p-8 rounded-3xl glass-premium 
                  hover:-translate-y-2 transition-all duration-500 
                  hover:shadow-2xl h-full border ${borderMap[v.color]}`}
                >
                  
                  <div
                    className={`absolute top-0 left-0 h-1 w-full ${bgMap[v.color]} rounded-t-3xl`}
                  />

                  <div
                    className={`w-14 h-14 rounded-xl ${bgMap[v.color]} flex items-center justify-center mb-6`}
                  >
                    <v.icon size={24} className={textMap[v.color]} />
                  </div>

                  <h3 className="text-xl font-extrabold text-foreground mb-3">
                    {v.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-3">
                    {v.desc}
                  </p>

                  <p className="text-xs text-muted-foreground/70 leading-relaxed">
                    {v.longDesc}
                  </p>

                  <div
                    className={`mt-6 text-sm font-semibold ${textMap[v.color]} opacity-0 group-hover:opacity-100 transition-all duration-300`}
                  >
                    Our Commitment →
                  </div>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section> */}

      <Valuess />

    
      {/* ================= EXECUTION SECTION ================= */}
      {/* <section className="py-28 bg-muted/40">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionWrapper>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-6">
                From Principle to Performance
              </h2>
              <p className="text-lg text-muted-foreground">
                Values without execution are just statements.
                Here’s how we turn philosophy into measurable impact.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl glass-premium text-center">
                <h3 className="font-bold text-mv-blue mb-3">Discovery</h3>
                <p className="text-muted-foreground text-sm">
                  Understanding business realities before writing a single line of code.
                </p>
              </div>

              <div className="p-8 rounded-2xl glass-premium text-center">
                <h3 className="font-bold text-mv-magenta mb-3">Execution</h3>
                <p className="text-muted-foreground text-sm">
                  Transparent processes, defined milestones, measurable KPIs.
                </p>
              </div>

              <div className="p-8 rounded-2xl glass-premium text-center">
                <h3 className="font-bold text-mv-green mb-3">Optimization</h3>
                <p className="text-muted-foreground text-sm">
                  Continuous refinement and future-proof architecture.
                </p>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section> */}

      <PrinciplePerformance />

      {/* ================= QUOTE ================= */}
      {/* <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionWrapper>
            <div className="max-w-3xl mx-auto text-center">
              <Quote size={48} className="text-mv-magenta/30 mx-auto mb-6" />

              <blockquote className="text-3xl sm:text-4xl font-black text-foreground leading-relaxed mb-6 italic">
                "Integrity in strategy. Precision in execution.
                Excellence in every outcome."
              </blockquote>
            </div>
          </SectionWrapper>
        </div>
      </section> */}

      <section className="relative py-24 overflow-hidden">

  {/* Soft Gradient Background Glow */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-r from-pink-600/10 via-yellow-400/10 to-blue-600/10" />
    <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 opacity-20 blur-[120px] rounded-full" />
  </div>

  <div className="container mx-auto px-4 lg:px-8">
    <SectionWrapper>
      <div className="max-w-3xl mx-auto text-center">

        {/* Quote Icon */}
        <Quote size={48} className="mx-auto mb-6 text-pink-600/40" />

        {/* Quote Text */}
        <blockquote className="text-3xl sm:text-4xl font-black leading-relaxed mb-6 italic">
          <span className="bg-gradient-to-r from-pink-600 via-yellow-400 to-blue-600 bg-clip-text text-transparent">
            "Integrity in strategy. Precision in execution.
            Excellence in every outcome."
          </span>
        </blockquote>

      </div>
    </SectionWrapper>
  </div>
</section>

      {/* ================= CULTURE ================= */}
      {/* <section className="py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionWrapper>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-xs uppercase tracking-widest text-mv-blue font-semibold mb-4 block">
                  Our Culture
                </span>

                <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-6 leading-tight">
                  Culture That Drives
                  <span className="block gradient-text-animate mt-2">
                    Sustainable Excellence
                  </span>
                </h2>

                <div className="space-y-4">
                  {cultureItems.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full gradient-brand flex items-center justify-center mt-1">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "100%", label: "Values Alignment", color: "blue" },
                  { value: "95%", label: "Employee Satisfaction", color: "magenta" },
                  { value: "4.8/5", label: "Client Ratings", color: "green" },
                  { value: "<5%", label: "Annual Turnover", color: "blue" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className={`p-6 rounded-2xl ${bgMap[stat.color]} border ${borderMap[stat.color]} 
                    text-center hover:-translate-y-2 transition-all duration-300 hover:shadow-xl`}
                  >
                    <div className={`text-3xl font-black ${textMap[stat.color]}`}>
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section> */}

      <CultureExcellence />

      {/* ================= FINAL CTA ================= */}
      {/* <section className="py-28 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionWrapper>
            <div className="rounded-3xl gradient-brand p-16 md:p-24 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20" />
              <div className="relative z-10">
                <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
                  Experience the Difference
                </h2>

                <p className="text-white/80 mb-10 max-w-lg mx-auto text-lg">
                  Partner with a team that aligns strategy, technology,
                  and values to accelerate your growth.
                </p>

                <Link to="/contact">
                  <Button
                    size="lg"
                    className="magnetic-btn bg-white text-foreground hover:bg-white/90 font-bold h-14 px-10"
                  >
                    Start Your Journey <ArrowRight size={18} />
                  </Button>
                </Link>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section> */}

      <section className="py-28 bg-muted/30">
  <div className="container mx-auto px-4 lg:px-8">
    <SectionWrapper>
      <div
        className="rounded-3xl p-16 md:p-24 text-center relative overflow-hidden
        bg-gradient-to-r 
        from-[#E11D48] 
        via-[#FACC15] 
        to-[#2563EB]"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-28 h-28 rounded-full border border-white/10 animate-pulse" />
        <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full border border-white/10 animate-spin-slow" />

        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Experience the Difference
          </h2>

          <p className="text-white/80 mb-10 max-w-lg mx-auto text-lg">
            Partner with a team that aligns strategy, technology,
            and values to accelerate your growth.
          </p>

          <Link to="/contact">
            <Button
              size="lg"
              className="magnetic-btn bg-white text-black hover:bg-white/90 font-bold h-14 px-10 shadow-xl hover:scale-105 transition-all duration-300"
            >
              Start Your Journey <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </SectionWrapper>
  </div>
</section>
    </>
  );
}