import React, { useState, useEffect, useRef } from "react";
import introBg from "../assets/images/hero1.jpg";
import historyBg2015 from "../assets/images/hero2.jpg";
import historyBg2017 from "../assets/images/hero3.jpg";
import historyBg2019 from "../assets/images/hero4.webp";
import historyBg2021 from "../assets/images/hero5.jpg";
import historyBg2023 from "../assets/images/hero6.jpg";
import leadershipBg from "../assets/images/hero7.jpg";
import stakeholdersBg from "../assets/images/hero8.jpg";
import visionBg from "../assets/images/hero9.jpg";
import ctaBg from "../assets/images/hero10.jpg";

// Define proper TypeScript interfaces
interface SlideData {
  id: number;
  type: string;
  title: string;
  subtitle?: string;
  description?: string;
  bgImage: string;
  content?: string;
  year?: string;
  icon?: string;
  stats?: string | Array<{ value: string; label: string; icon: string }>;
  leaders?: Array<{ role: string; focus: string; icon?: string }>;
  stakeholders?: Array<{ role: string; focus: string; icon?: string }>;
  services?: Array<{ icon: string; name: string; desc: string }>;
  values?: string[];
  buttonText?: string;
  journey?: Array<{ step: string; role: string; icon: string }>;
  strategies?: Array<{ name: string; icon: string; desc: string }>;
  channels?: Array<{ name: string; target: string; icon: string }>;
}

interface SlideshowData {
  slides: SlideData[];
}

const slideshowData: SlideshowData = {
  slides: [
    {
      id: 1,
      type: "intro",
      title: "MV's Journey",
      subtitle: "From Vision To Transformation",
      description: "We Began With A Mission To Simplify IT Infrastructure And Build Reliable Ecosystems.",
      bgImage: introBg,
      content: "Crafting Reliable IT Infrastructure Since Day One"
    },
    {
      id: 2,
      type: "history",
      year: "2015",
      title: "The Beginning",
      description: "Started Our Journey With Customer Centric Approach For Reliable, Scalable And Sustainable IT Infra.",
      bgImage: historyBg2015,
      stats: "Structured Cabling | Network Solutions | Small Team"
    },
    {
      id: 3,
      type: "history",
      year: "2017",
      title: "Expansion & Growth",
      description: "Restructured Our Services To Include Core IT Infra For Comprehensive End To End Solutions.",
      bgImage: historyBg2017,
      stats: "Data Security | Data Centre | Growing Team"
    },
    {
      id: 4,
      type: "history",
      year: "2019",
      title: "Data Center Excellence",
      description: "Established Ourselves As Strong Contender In Data Centre Design, Build & Migration.",
      icon: "🏭",
      bgImage: historyBg2019,
      stats: "Data Center | On Prem - Cloud - Hybrid | NOC & SOC | Installed 1 Lakh Drops"
    },
    {
      id: 5,
      type: "history",
      year: "2021",
      title: "Digital Transformation",
      description: "Evolved Our Offerings To Include End-To-End IT Ecosystems And Advanced Security Frameworks.",
      bgImage: historyBg2021,
      stats: "IT Infra | 100+ Projects | Security Solutions | AI Integration"
    },
    {
      id: 6,
      type: "history",
      year: "2023",
      title: "AI Solutions",
      description: "Delivered AI-Powered Automation And Analytics To Streamline Operations, Enhance Insights, And Drive Smarter Business Decisions.",
      bgImage: historyBg2023,
      stats: "AI Automation | Data Analytics | Smart Solutions"
    },
    {
      id: 7,
      type: "leadership",
      title: "Leadership Team",
      description: "Meet Our Core Leadership Driving Excellence",
      bgImage: leadershipBg,
      leaders: [
        { role: "Sales", focus: "Driving Revenue Growth & Client Acquisition", icon: "📈" },
        { role: "Operations", focus: "Streamlining Processes & Delivery Excellence", icon: "⚙️" },
        { role: "Services", focus: "IT Solutions & Customer Success", icon: "🛠️" },
        { role: "Project Management", focus: "On-Time Delivery & Resource Optimization", icon: "📊" }
      ]
    },
    {
      id: 8,
      type: "stakeholders",
      title: "Customer Verticals",
      bgImage: stakeholdersBg,
      stakeholders: [ 
        { role: "Brand Building", focus: "Build A Credible Brand Image In The Sector", icon: "🎯" }, 
        { role: "Brand Positioning", focus: "Customer Centricity With Peace Of Mind", icon: "🎯" }, 
        { role: "Customer Value Proposition", focus: "Our 8 Core Values", icon: "🎯" }, 
        { role: "Communication", focus: "Solution Based & Proactive", icon: "🎯" }
      ]
    },
    {
      id: 11,
      type: "vision",
      title: "Our Framework",
      subtitle: "Building Tomorrow's IT Infrastructure",
      description: "We Continue To Innovate And Lead IT Infrastructure Transformation, Delivering Seamless And Secure IT Ecosystems With Peace Of Mind.",
      bgImage: visionBg,
      values: ["Innovation First", "Customer Centricity", "Security Excellence", "Sustainable Growth"]
    },
    {
      id: 12,
      type: "cta",
      title: "Ready To Transform Your IT Infrastructure?",
      description: "Join Us In Building Reliable, Secure, And Future-Ready IT Ecosystems.",
      bgImage: ctaBg
    }
  ]
};

const StoryCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState("next");
  const [isInView, setIsInView] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);

  const totalSlides = slideshowData.slides.length;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => {
      if (carouselRef.current) {
        observer.unobserve(carouselRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying && isInView) {
      interval = setInterval(() => {
        nextSlide();
      }, 6000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentSlide, isInView]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (isInView) {
        if (e.key === "ArrowLeft") {
          prevSlide();
          pauseAutoPlay();
        } else if (e.key === "ArrowRight") {
          nextSlide();
          pauseAutoPlay();
        }
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isInView]);

  const pauseAutoPlay = () => {
    if (isAutoPlaying) {
      setIsAutoPlaying(false);
      setTimeout(() => {
        setIsAutoPlaying(true);
      }, 10000);
    }
  };

  const nextSlide = () => {
    setDirection("next");
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setDirection("prev");
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? "next" : "prev");
    setCurrentSlide(index);
    pauseAutoPlay();
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const currentSlideData = slideshowData.slides[currentSlide];

  const renderSlideContent = () => {
    switch (currentSlideData.type) {
      case "intro":
        return (
          <div className="slide-content intro-slide">
            <div className="floating-shapes">
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
              <div className="shape shape-3"></div>
              <div className="shape shape-4"></div>
            </div>
            <h1 className="slide-title large">{currentSlideData.title}</h1>
            <div className="glass-bg subtitle-wrapper">
              <p className="slide-subtitle">{currentSlideData.subtitle}</p>
            </div>
            <div className="glass-bg description-wrapper">
              <p className="slide-description">{currentSlideData.description}</p>
            </div>
            <div className="quote-highlight ">{currentSlideData.content}</div>
            <button className="slide-button" onClick={() => { nextSlide(); pauseAutoPlay(); }}>
              Begin Story <span>→</span>
            </button>
          </div>
        );

      case "history":
        return (
          <div className="slide-content history-slide">
            <h2 className="slide-title large">{currentSlideData.title}</h2>
            <div className="glass-bg description-wrapper">
              <p className="slide-description">{currentSlideData.description}</p>
            </div>
            <div className="history-stats">{currentSlideData.stats as string}</div>
          </div>
        );

      case "leadership":
        return (
          <div className="slide-content leadership-slide">
            <h2 className="slide-title large">{currentSlideData.title}</h2>
            <div className="glass-bg description-wrapper">
              <p className="slide-description">{currentSlideData.description}</p>
            </div>
            <div className="stakeholders-grid">
              {currentSlideData.leaders?.map((leader, idx) => (
                <div key={idx} className="leader-card">
                  {/* <div className="leader-icon">{leader.icon || "👤"}</div> */}
                  <div className="leader-role">{leader.role}</div>
                  <div className="leader-focus">{leader.focus}</div>
                </div>
              ))}
            </div>
          </div>
        );

      case "stakeholders":
        return (
          <div className="slide-content stakeholders-slide">
            <h2 className="slide-title large">{currentSlideData.title}</h2>
            <div className="stakeholders-grid">
              {currentSlideData.stakeholders?.map((stakeholder, idx) => (
                <div key={idx} className="stakeholder-card">
                  {/* <div className="stakeholder-icon">{stakeholder.icon || "🎯"}</div> */}
                  <div className="stakeholder-role">{stakeholder.role}</div>
                  <div className="stakeholder-focus">{stakeholder.focus}</div>
                </div>
              ))}
            </div>
          </div>
        );

      case "services":
        return (
          <div className="slide-content services-slide">
            <h2 className="slide-title large">{currentSlideData.title}</h2>
            <div className="services-grid">
              {currentSlideData.services?.map((service, idx) => (
                <div key={idx} className="service-item">
                  <div className="service-icon">{service.icon}</div>
                  <div className="service-name">{service.name}</div>
                  <div className="service-desc">{service.desc}</div>
                </div>
              ))}
            </div>
          </div>
        );

      case "achievements":
        return (
          <div className="slide-content achievements-slide">
            <h2 className="slide-title large">{currentSlideData.title}</h2>
            <div className="achievements-grid">
              {(currentSlideData.stats as Array<{ value: string; label: string; icon: string }>)?.map((stat, idx) => (
                <div key={idx} className="achievement-card">
                  <div className="achievement-icon">{stat.icon}</div>
                  <div className="achievement-value">{stat.value}</div>
                  <div className="achievement-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        );

      case "vision":
        return (
          <div className="slide-content vision-slide">
            <div className="vision-icon">{currentSlideData.icon}</div>
            <h2 className="slide-title large">{currentSlideData.title}</h2>
            <div className="glass-bg subtitle-wrapper">
              <p className="slide-subtitle">{currentSlideData.subtitle}</p>
            </div>
            <div className="quote-highlight">{currentSlideData.description}</div>
            <div className="values-list">
              {currentSlideData.values?.map((value, idx) => (
                <span key={idx} className="value-tag">{value}</span>
              ))}
            </div>
          </div>
        );

      case "cta":
        return (
          <div className="slide-content cta-slide">
            <h2 className="slide-title large">{currentSlideData.title}</h2>
            <div className="quote-highlight">{currentSlideData.description}</div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div ref={carouselRef} className="storytelling-slideshow">
      <style>{`
        /* Premium Font Imports */
        @import url('https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300;14..32,400;14..32,500;14..32,600;14..32,700;14..32,800&display=swap');

        @font-face {
          font-family: 'Neue Machina';
          src: url('https://fonts.cdnfonts.com/s/98647/NeueMachina-Regular.woff2') format('woff2');
          font-weight: 400;
        }

        @font-face {
          font-family: 'Neue Machina';
          src: url('https://fonts.cdnfonts.com/s/98647/NeueMachina-Ultrabold.woff2') format('woff2');
          font-weight: 800;
        }

        @font-face {
          font-family: 'PP Mori';
          src: url('https://fonts.cdnfonts.com/s/171772/PP Mori Regular.woff2') format('woff2');
          font-weight: 400;
        }

        @font-face {
          font-family: 'PP Mori';
          src: url('https://fonts.cdnfonts.com/s/171772/PP Mori Semibold.woff2') format('woff2');
          font-weight: 600;
        }

        @font-face {
          font-family: 'Clash Grotesk';
          src: url('https://fonts.cdnfonts.com/s/115052/ClashGrotesk-Variable.woff2') format('woff2');
          font-weight: 200 700;
        }

        @font-face {
          font-family: 'Satoshi';
          src: url('https://fonts.cdnfonts.com/s/115048/Satoshi-Variable.woff2') format('woff2');
          font-weight: 300 900;
        }

        @font-face {
          font-family: 'Zodiak';
          src: url('https://fonts.cdnfonts.com/s/115549/Zodiak-Variable.woff2') format('woff2');
          font-weight: 300 700;
        }

        .storytelling-slideshow {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
          font-family: 'PP Mori', 'Satoshi', 'Inter', sans-serif;
        }

        /* Progress Bar */
        .progress-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          height: 4px;
          background: rgba(0, 0, 0, 0.3);
          z-index: 1000;
          overflow: hidden;
        }

        .progress-bar-global {
          height: 100%;
          background: linear-gradient(90deg, #E11D48, #FACC15, #2563EB, #06B6D4);
          transition: width 0.3s ease;
          box-shadow: 0 0 10px rgba(225, 29, 72, 0.5);
        }

        /* Slideshow Container */
        .slideshow-container {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .slide-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .slide-content-wrapper {
          position: relative;
          z-index: 2;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 60px 80px;
          overflow-y: auto;
        }

        .slide-content {
          max-width: 1300px;
          width: 100%;
          margin: 0 auto;
          padding: 30px 40px;
          color: white;
          text-align: center;
          animation: fadeInUp 0.6s ease;
          background: transparent;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(8deg); }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.08); }
        }

        .slideshow-container.next .slide-content {
          animation: slideInRight 0.5s ease;
        }

        .slideshow-container.prev .slide-content {
          animation: slideInLeft 0.5s ease;
        }

        /* Glass Background Effect - Clean and Centered */
        .glass-bg {
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          margin: 0 auto 20px auto;
          width: fit-content;
          max-width: 90%;
        }

        .subtitle-wrapper {
          padding: 8px 28px;
        }

        .description-wrapper {
          padding: 16px 32px;
          max-width: 800px;
        }

        /* Typography */
        .slide-title {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 25px;
          letter-spacing: -0.04em;
          line-height: 1.1;
          font-family: 'Neue Machina', 'Clash Grotesk', sans-serif;
          background: linear-gradient(135deg, #FFFFFF, #F8FAFF, #E8EEFF, #FFFFFF);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          filter: drop-shadow(0px 2px 4px rgba(0,0,0,0.5));
        }

        .slide-title.large {
          font-size: 4rem;
          background: linear-gradient(
            135deg,
            #E11D48,
            #C026D3,
            #F97316,
            #FACC15,
            #2563EB
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          filter: drop-shadow(0px 2px 4px rgba(0,0,0,0.5));
          margin-bottom: 30px;
        }

        .slide-subtitle {
          font-size: 1.3rem;
          font-weight: 500;
          margin: 0;
          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
          color: #F0F4FF;
          letter-spacing: -0.02em;
          font-family: 'PP Mori', 'Satoshi', sans-serif;
        }

        .slide-description {
          font-size: 1.1rem;
          line-height: 1.6;
          margin: 0;
          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
          font-weight: 400;
          color: white;
          font-family: 'PP Mori', 'Inter', sans-serif;
        }

        .quote-highlight {
          font-size: 1.2rem;
          font-style: normal;
          margin: 25px auto;
          padding: 15px 28px;
          border-left: 4px solid #FAE251;
          max-width: 600px;
          font-weight: 500;
          background: rgba(0, 0, 0, 0.5);
          border-radius: 16px;
          backdrop-filter: blur(8px);
          color: #FAE251 !important;
          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
          font-family: 'Zodiak', 'Georgia', serif;
          width: fit-content;
        }

        .history-stats {
          margin-top: 25px;
          padding: 12px 28px;
          background: linear-gradient(
            135deg,
             #ffe4e6,
            #f5d0fe,
            #ffedd5,
            #fef9c3,
            #dcfce7,
            #cffafe,
            #dbeafe
          ) !important;
          border-radius: 50px;
          font-size: 0.85rem;
          display: inline-block;
          font-weight: 600;
          color: #1a2a3a !important;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
          font-family: 'Clash Grotesk', 'Satoshi', sans-serif;
          text-transform: uppercase;
        }

        /* Grid Layouts */
        .leadership-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-top: 30px;
        }

        .leader-card {
          background: rgba(255, 255, 255, 0.95) !important;
          padding: 24px 16px;
          border-radius: 24px;
          text-align: center;
          transition: all 0.3s ease;
          cursor: pointer;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
        }

        .leader-card:hover {
          transform: translateY(-5px);
          border-bottom: 3px solid #E11D48;
        }

        .leader-icon { font-size: 2.5rem; margin-bottom: 12px; }
        .leader-role { font-size: 1.2rem; font-weight: 700; margin-bottom: 8px; background: linear-gradient(135deg, #E11D48, #F97316); -webkit-background-clip: text; background-clip: text; color: transparent; }
        .leader-focus { font-size: 0.85rem; color: #2c3e50; font-weight: 500; line-height: 1.4; }

        /* Stakeholders Grid */
        .stakeholders-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-top: 30px;
        }

        .stakeholder-card {
          background: linear-gradient(
            135deg,
            #fff1f2,
            #faf5ff,
            #fff7ed,
            #fefce8,
            #f0fdf4,
            #ecfeff,
            #eff6ff
          ) !important;
          padding: 24px 16px;
          border-radius: 20px;
          text-align: center;
          transition: all 0.3s ease;
          cursor: pointer;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .stakeholder-card:hover { 
          transform: translateY(-5px); 
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
          border-color: #E11D48;
        }
        
        .stakeholder-icon { 
          font-size: 2.5rem; 
          margin-bottom: 12px; 
        }
        
        .stakeholder-role { 
          font-size: 1.1rem; 
          font-weight: 700; 
          margin-bottom: 10px; 
          background: linear-gradient(135deg, #E11D48, #F97316);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        .stakeholder-focus { 
          font-size: 0.85rem; 
          color: #4a5568 !important; 
          font-weight: 500;
          line-height: 1.4;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          margin-top: 15px;
        }

        .service-item {
          padding: 16px 12px;
          border-radius: 20px;
          text-align: center;
          transition: all 0.3s ease;
          cursor: pointer;
          background: rgba(255, 255, 255, 0.95) !important;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }

        .service-item:hover { transform: translateY(-4px); border-top: 3px solid #2563EB; }
        .service-icon { font-size: 2rem; margin-bottom: 10px; }
        .service-name { font-size: 1rem; font-weight: 700; margin-bottom: 6px; background: linear-gradient(135deg, #2563EB, #06B6D4); -webkit-background-clip: text; background-clip: text; color: transparent; text-transform: uppercase; }
        .service-desc { font-size: 0.75rem; color: #2c3e50; font-weight: 500; }

        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
          margin-top: 35px;
        }

        .achievement-card {
          padding: 25px 15px;
          border-radius: 24px;
          text-align: center;
          transition: all 0.3s ease;
          cursor: pointer;
          background: rgba(0, 0, 0, 0.7) !important;
          backdrop-filter: blur(10px);
        }

        .achievement-card:hover { transform: translateY(-5px); border-bottom: 3px solid #FACC15; }
        .achievement-icon { font-size: 2.2rem; margin-bottom: 12px; }
        .achievement-value { font-size: 1.8rem; font-weight: 800; margin-bottom: 6px; background: linear-gradient(135deg, #FACC15, #FAE251); -webkit-background-clip: text; background-clip: text; color: transparent; }
        .achievement-label { font-size: 0.7rem; color: #e0e0e0; font-weight: 500; text-transform: uppercase; }

        .vision-icon {
          font-size: 3.5rem;
          margin-bottom: 20px;
          display: inline-block;
          animation: pulse 2s infinite;
          background: rgba(0, 0, 0, 0.2);
          padding: 8px 18px;
          border-radius: 80px;
        }

        .values-list {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 15px;
          margin-top: 35px;
        }

        .value-tag {
          padding: 10px 24px;
          background: linear-gradient(
            135deg,
             #ffe4e6,
            #f5d0fe,
            #ffedd5,
            #fef9c3,
            #dcfce7,
            #cffafe,
            #dbeafe
          ) !important;
          border-radius: 50px;
          font-size: 0.8rem;
          transition: all 0.3s ease;
          cursor: pointer;
          font-weight: 600;
          color: #1a2a3a !important;
          text-transform: uppercase;
        }

        .value-tag:hover { transform: translateY(-2px); border-bottom: 2px solid #E11D48; }

        /* Buttons */
        .slide-button {
          padding: 14px 36px;
          font-size: 1rem;
          font-weight: 700;
          background: linear-gradient(135deg, #E11D48, #FACC15, #2563EB);
          color: white;
          border: none;
          border-radius: 60px;
          cursor: pointer;
          margin-top: 20px;
          transition: all 0.3s ease;
          font-family: 'Neue Machina', 'Clash Grotesk', sans-serif;
          text-transform: uppercase;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        }

        .slide-button:hover {
          transform: translateY(-3px);
          background: linear-gradient(135deg, #F97316, #FACC15, #06B6D4);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
        }

        /* Navigation */
        .nav-arrow {
          position: fixed;
          top: 50%;
          transform: translateY(-50%);
          width: 50px;
          height: 50px;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          cursor: pointer;
          z-index: 1000;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .nav-arrow:hover {
          background: linear-gradient(135deg, #E11D48, #F97316);
          transform: translateY(-50%) scale(1.1);
        }

        .nav-arrow span { font-size: 2rem; color: white; }
        .nav-arrow-left { left: 25px; }
        .nav-arrow-right { right: 25px; }

        .slide-indicators {
          position: fixed;
          bottom: 25px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
          z-index: 1000;
          padding: 8px 16px;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(10px);
          border-radius: 50px;
        }

        .indicator-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .indicator-dot.active {
          width: 28px;
          border-radius: 4px;
          background: linear-gradient(90deg, #E11D48, #FACC15, #2563EB);
        }

        .auto-play-toggle {
          position: fixed;
          bottom: 25px;
          right: 25px;
          width: 45px;
          height: 45px;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          cursor: pointer;
          z-index: 1000;
          font-size: 1.1rem;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .auto-play-toggle:hover {
          background: linear-gradient(135deg, #E11D48, #F97316);
          transform: scale(1.1);
        }

        .keyboard-hint {
          position: fixed;
          bottom: 25px;
          left: 25px;
          padding: 8px 15px;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          font-size: 0.7rem;
          color: rgba(255, 255, 255, 0.8);
          z-index: 1000;
          font-family: monospace;
          text-transform: uppercase;
        }

        .floating-shapes {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: -1;
        }

        .shape {
          position: absolute;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 50%;
          animation: float 20s infinite ease-in-out;
        }

        .shape-1 { width: 250px; height: 250px; top: 10%; left: -120px; }
        .shape-2 { width: 180px; height: 180px; bottom: 20%; right: -80px; animation-delay: 5s; }
        .shape-3 { width: 120px; height: 120px; top: 50%; left: 15%; animation-delay: 10s; }
        .shape-4 { width: 200px; height: 200px; bottom: 10%; left: 25%; animation-delay: 15s; }

        /* Responsive */
        @media (max-width: 992px) {
          .leadership-grid { grid-template-columns: repeat(2, 1fr); }
          .stakeholders-grid { grid-template-columns: repeat(2, 1fr); }
          .services-grid { grid-template-columns: repeat(2, 1fr); }
          .achievements-grid { grid-template-columns: repeat(3, 1fr); }
          .slide-title { font-size: 2.5rem; }
          .slide-title.large { font-size: 3rem; }
          .subtitle-wrapper { padding: 6px 20px; }
          .description-wrapper { padding: 12px 24px; }
          .slide-subtitle { font-size: 1.1rem; }
          .slide-description { font-size: 1rem; }
        }

        @media (max-width: 768px) {
          .leadership-grid { grid-template-columns: 1fr; }
          .stakeholders-grid { grid-template-columns: 1fr; }
          .services-grid { grid-template-columns: 1fr; }
          .achievements-grid { grid-template-columns: repeat(2, 1fr); }
          .slide-title { font-size: 2rem; }
          .slide-title.large { font-size: 2.2rem; }
          .slide-content-wrapper { padding: 30px 25px; }
          .nav-arrow { width: 40px; height: 40px; }
          .nav-arrow span { font-size: 1.5rem; }
          .keyboard-hint { display: none; }
          .subtitle-wrapper { padding: 5px 16px; }
          .description-wrapper { padding: 10px 20px; }
          .slide-subtitle { font-size: 1rem; }
          .slide-description { font-size: 0.9rem; }
          .quote-highlight { font-size: 1rem; padding: 10px 20px; }
        }

        @media (max-width: 576px) {
          .achievements-grid { grid-template-columns: 1fr; }
          .slide-title { font-size: 1.6rem; }
          .slide-title.large { font-size: 1.8rem; }
          .nav-arrow { width: 35px; height: 35px; }
          .nav-arrow span { font-size: 1.2rem; }
          .subtitle-wrapper { padding: 4px 12px; }
          .description-wrapper { padding: 8px 16px; }
          .slide-subtitle { font-size: 0.9rem; }
          .slide-description { font-size: 0.85rem; }
        }
      `}</style>

      {/* Progress Bar */}
      <div className="progress-container">
        <div 
          className="progress-bar-global" 
          style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
        />
      </div>

      {/* Main Slide Container */}
      <div className={`slideshow-container ${direction}`}>
        <div
          className="slide-wrapper"
          style={{
            backgroundImage: `url(${currentSlideData.bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed"
          }}
        >
          <div className="slide-content-wrapper">
            {renderSlideContent()}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      {isInView && (
        <>
          <button className="nav-arrow nav-arrow-left" onClick={() => { prevSlide(); pauseAutoPlay(); }}>
            <span>←</span>
          </button>
          <button className="nav-arrow nav-arrow-right" onClick={() => { nextSlide(); pauseAutoPlay(); }}>
            <span>→</span>
          </button>
        </>
      )}

      {/* Slide Indicators */}
      {isInView && (
        <div className="slide-indicators">
          {slideshowData.slides.map((_, idx) => (
            <button
              key={idx}
              className={`indicator-dot ${idx === currentSlide ? "active" : ""}`}
              onClick={() => goToSlide(idx)}
            />
          ))}
        </div>
      )}

      {/* Auto-play Toggle */}
      {isInView && (
        <button className="auto-play-toggle" onClick={toggleAutoPlay}>
          {isAutoPlaying ? "⏸" : "▶"}
        </button>
      )}

      {/* Keyboard Hint */}
      {isInView && (
        <div className="keyboard-hint">
          ← → Use Arrow Keys
        </div>
      )}
    </div>
  );
};

export default StoryCarousel;