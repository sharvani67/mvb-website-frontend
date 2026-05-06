

import Aboutlogosection from "@/components/AboutCompo/Aboutlogosection";
import CertificationsMarquee from "@/components/AboutCompo/CertificationsMarquee";
import { CoreValuesSection } from "@/components/AboutCompo/CoreValuesSection";
import { CTASection } from "@/components/AboutCompo/CTASection";
import { ExpertiseSection } from "@/components/AboutCompo/ExpertiseSection";
import { HeroSection } from "@/components/AboutCompo/HeroSection";
import { IndustriesSection } from "@/components/AboutCompo/IndustriesSection";
import InfographicSection from "@/components/AboutCompo/InfographicSection";
import { LeadershipSection } from "@/components/AboutCompo/LeadershipSection";
import { ParticleBackground } from "@/components/AboutCompo/ParticleBackground";
import ProcessFlow from "@/components/AboutCompo/ProcessFlow";
import { StorySection } from "@/components/AboutCompo/StorySection";
import TimelineSection from "@/components/AboutCompo/TimelineSection";

import VisionMissionSection from "@/components/AboutCompo/VisionMissionSection";
import CoreValues from "./CoreValues";
import VisionMission from "@/components/AboutCompo/VisionMission";



export default function About() {
  return (
    <div className="relative bg-white overflow-hidden mt-4">
      <ParticleBackground />
      <HeroSection />
      {/* < Aboutlogosection /> */}
      {/* <StorySection /> */}
      {/* <VisionMissionSection /> */}
     
      <VisionMission />
       <CoreValuesSection />
      {/* <CoreValues />  */}
      <LeadershipSection />
      {/* <ProcessFlow /> */}
      {/* <TimelineSection /> */}
      {/* <ExpertiseSection /> */}
      {/* <InfographicSection /> */}
      {/* <IndustriesSection /> */}
      <CertificationsMarquee />
      {/* <CTASection /> */}
    </div>
  );
}