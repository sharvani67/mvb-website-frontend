import { Calendar, User, Clock, ArrowRight, Search, Tag, ChevronRight, Heart, MessageCircle, Share2, Bookmark, Eye, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SectionWrapper from '@/components/SectionWrapper';
import NetworkBackground from '@/components/NetworkBackground';
import React from 'react';

// Placeholder images using Unsplash (these will definitely work)
const blogHeroImg = 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&auto=format';
const blogCablingImg = 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format';
const blogSecurityImg = 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&auto=format';
const blogFutureImg = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format';
const blogInfrastructureImg = 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format';
const authorImg1 = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format';
const authorImg2 = 'https://images.unsplash.com/photo-1494790108777-766d5e5ed1d9?w=100&auto=format';
const authorImg3 = 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format';

interface Post {
  id: number;
  title: string;
  excerpt: string;
  image?: string;
  author: string;
  authorImg?: string;
  role?: string;
  date: string;
  readTime: string;
  category: string;
  categoryColor: 'blue' | 'magenta' | 'green';
  likes?: number;
  comments?: number;
  featured?: boolean;
}

interface Category {
  name: string;
  count: number;
  color: 'blue' | 'magenta' | 'green';
}

const featuredPosts: Post[] = [
  {
    id: 1,
    title: 'The Future of Structured Cabling: What Enterprise Leaders Need to Know in 2024',
    excerpt: 'As businesses prepare for the next wave of digital transformation, structured cabling infrastructure becomes more critical than ever. We explore emerging trends, bandwidth requirements, and future-proofing strategies.',
    image: blogCablingImg,
    author: 'Michael Chen',
    authorImg: authorImg1,
    role: 'Director of Infrastructure',
    date: 'Mar 15, 2024',
    readTime: '8 min read',
    category: 'Infrastructure',
    categoryColor: 'blue',
    likes: 234,
    comments: 42,
    featured: true,
  },
  {
    id: 2,
    title: 'Zero Trust Architecture: Redefining Network Security in the Age of Remote Work',
    excerpt: 'With distributed workforces becoming the norm, traditional perimeter-based security is no longer sufficient. Learn how Zero Trust principles can protect your organization from modern threats.',
    image: blogSecurityImg,
    author: 'Sarah Rodriguez',
    authorImg: authorImg2,
    role: 'Security Architect',
    date: 'Mar 10, 2024',
    readTime: '12 min read',
    category: 'Security',
    categoryColor: 'magenta',
    likes: 456,
    comments: 78,
    featured: true,
  },
  {
    id: 3,
    title: 'Edge Computing: Reshaping IT Infrastructure for Real-Time Processing',
    excerpt: 'As IoT devices proliferate and latency requirements tighten, edge computing emerges as the critical architecture for modern applications. Discover implementation strategies and use cases.',
    image: blogFutureImg,
    author: 'David Okonkwo',
    authorImg: authorImg3,
    role: 'Cloud Solutions Lead',
    date: 'Mar 5, 2024',
    readTime: '10 min read',
    category: 'Technology',
    categoryColor: 'green',
    likes: 312,
    comments: 56,
    featured: true,
  },
];

const recentPosts: Post[] = [
  {
    id: 4,
    title: 'Data Center Cooling Innovations: Reducing PUE Without Breaking the Bank',
    excerpt: 'New cooling technologies and strategies that can dramatically improve your data center\'s energy efficiency while maintaining optimal operating temperatures.',
    image: blogInfrastructureImg,
    author: 'Michael Chen',
    date: 'Feb 28, 2024',
    readTime: '6 min read',
    category: 'Infrastructure',
    categoryColor: 'blue',
  },
  {
    id: 5,
    title: 'Ransomware Defense: A Practical Guide for Mid-Sized Enterprises',
    excerpt: 'Comprehensive strategies to protect your organization from ransomware attacks, including backup strategies, employee training, and incident response planning.',
    author: 'Sarah Rodriguez',
    date: 'Feb 22, 2024',
    readTime: '9 min read',
    category: 'Security',
    categoryColor: 'magenta',
  },
  {
    id: 6,
    title: 'Hybrid Cloud Success: Lessons from Enterprise Migrations',
    excerpt: 'Key considerations and best practices from organizations that have successfully implemented hybrid cloud architectures.',
    author: 'David Okonkwo',
    date: 'Feb 18, 2024',
    readTime: '7 min read',
    category: 'Cloud',
    categoryColor: 'green',
  },
  {
    id: 7,
    title: 'Network Monitoring Evolution: From Reactive to Predictive',
    excerpt: 'How AI and machine learning are transforming network monitoring from simple alerting to predictive analytics and automated remediation.',
    image: blogInfrastructureImg,
    author: 'Michael Chen',
    date: 'Feb 12, 2024',
    readTime: '8 min read',
    category: 'Networking',
    categoryColor: 'blue',
  },
  {
    id: 8,
    title: 'Compliance in the Digital Age: Navigating GDPR, HIPAA, and Beyond',
    excerpt: 'Understanding the intersection of infrastructure architecture and regulatory compliance requirements.',
    author: 'Sarah Rodriguez',
    date: 'Feb 8, 2024',
    readTime: '11 min read',
    category: 'Compliance',
    categoryColor: 'magenta',
  },
  {
    id: 9,
    title: 'Sustainable IT: Building Green Data Centers',
    excerpt: 'Environmental responsibility meets business efficiency in the modern data center. Learn about sustainable practices that also reduce costs.',
    author: 'David Okonkwo',
    date: 'Feb 3, 2024',
    readTime: '7 min read',
    category: 'Sustainability',
    categoryColor: 'green',
  },
];

const categories: Category[] = [
  { name: 'Infrastructure', count: 18, color: 'blue' },
  { name: 'Security', count: 24, color: 'magenta' },
  { name: 'Cloud Computing', count: 15, color: 'green' },
  { name: 'Networking', count: 12, color: 'blue' },
  { name: 'Compliance', count: 9, color: 'magenta' },
  { name: 'Sustainability', count: 7, color: 'green' },
  { name: 'AI & Machine Learning', count: 11, color: 'blue' },
  { name: 'Case Studies', count: 14, color: 'magenta' },
];

const popularTags: string[] = [
  'Structured Cabling', 'Cybersecurity', 'Cloud Migration', 'Data Centers',
  'Zero Trust', 'IoT', '5G', 'Edge Computing', 'Digital Transformation',
  'Network Architecture', 'Compliance', 'Green IT', 'Disaster Recovery',
  'AI Infrastructure', 'Remote Work'
];

const mostReadPosts = [
  {
    id: 101,
    title: 'Understanding Modern Network Architecture Patterns',
    date: 'Mar 12, 2024',
    color: 'blue' as const,
  },
  {
    id: 102,
    title: 'The Rise of AI-Powered Security Operations',
    date: 'Mar 11, 2024',
    color: 'magenta' as const,
  },
  {
    id: 103,
    title: 'Cloud Cost Optimization Strategies That Work',
    date: 'Mar 10, 2024',
    color: 'green' as const,
  },
  {
    id: 104,
    title: 'Building Resilient Network Infrastructures',
    date: 'Mar 9, 2024',
    color: 'blue' as const,
  },
];

const bgMap = {
  blue: 'bg-mv-blue/10',
  magenta: 'bg-mv-magenta/10',
  green: 'bg-mv-green/10'
};

const textMap = {
  blue: 'text-mv-blue',
  magenta: 'text-mv-magenta',
  green: 'text-mv-green'
};

const borderMap = {
  blue: 'border-mv-blue/20',
  magenta: 'border-mv-magenta/20',
  green: 'border-mv-green/20'
};

export default function Blog() {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <>
      {/* Hero Section */}
      {/* <section className="relative pt-32 pb-20 overflow-hidden">
        <NetworkBackground />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-mv-blue/10 blur-[120px] animate-mesh-float" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-mv-magenta/10 blur-[120px] animate-mesh-float" style={{ animationDelay: '3s' }} />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <SectionWrapper>
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-mv-blue/10 border border-mv-blue/20 mb-8">
                <TrendingUp size={16} className="text-mv-blue" />
                <span className="text-xs uppercase tracking-widest text-mv-blue font-semibold">Insights & Perspectives</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-foreground mb-6 leading-[0.95]">
                Where <span className="gradient-text-animate">Infrastructure</span><br />
                Meets Intelligence
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
                Expert insights, industry trends, and practical guidance from the frontlines of 
                <span className="text-mv-blue font-semibold"> IT infrastructure</span>, 
                <span className="text-mv-magenta font-semibold"> security</span>, and 
                <span className="text-mv-green font-semibold"> innovation</span>.
              </p>

              
              <div className="max-w-2xl mx-auto relative">
                <input 
                  type="text" 
                  placeholder="Search articles, tutorials, case studies..." 
                  className="w-full px-6 py-4 pl-14 rounded-2xl glass-premium border border-border focus:border-mv-magenta/50 outline-none transition-all text-foreground"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                <Button className="absolute right-2 top-1/2 -translate-y-1/2 bg-mv-magenta hover:bg-mv-magenta/90 text-white h-10 px-6">
                  Search
                </Button>
              </div>

              
              <div className="flex flex-wrap items-center justify-center gap-3 mt-10">
                <span className="text-sm text-muted-foreground">Trending:</span>
                {['Zero Trust', 'Edge Computing', 'AI Infrastructure', 'Green Data Centers'].map(topic => (
                  <Link 
                    key={topic} 
                    to={`/blog/tag/${topic.toLowerCase().replace(' ', '-')}`}
                    className="px-4 py-2 rounded-full bg-muted/50 hover:bg-mv-blue/10 border border-border hover:border-mv-blue/30 text-sm text-foreground transition-all"
                  >
                    {topic}
                  </Link>
                ))}
              </div>
            </div>
          </SectionWrapper>
        </div>
      </section> */}

      {/* <section className="relative pt-32 pb-20 overflow-hidden">

  <div className="absolute inset-0 -z-10">
    <img
      src="https://images.unsplash.com/photo-1518770660439-4636190af475"
      alt="Infrastructure Background"
      className="w-full h-full object-cover"
    />
   
    <div className="absolute inset-0 bg-black/60"></div>
  </div>

  <NetworkBackground />

  
  <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-mv-blue/10 blur-[120px] animate-mesh-float" />
  <div
    className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-mv-magenta/10 blur-[120px] animate-mesh-float"
    style={{ animationDelay: "3s" }}
  />

  <div className="container mx-auto px-4 lg:px-8 relative z-10">
    <SectionWrapper>
      <div className="max-w-4xl mx-auto text-center">

    
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8">
          <TrendingUp size={16} className="text-white" />
          <span className="text-xs uppercase tracking-widest text-white font-semibold">
            Insights & Perspectives
          </span>
        </div>

      
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-[0.95]">
          Where <span className="gradient-text-animate">Infrastructure</span><br />
          Meets Intelligence
        </h1>

     
        <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed mb-10">
          Expert insights, industry trends, and practical guidance from the frontlines of
          <span className="text-mv-blue font-semibold"> IT infrastructure</span>,
          <span className="text-mv-magenta font-semibold"> security</span>, and
          <span className="text-mv-green font-semibold"> innovation</span>.
        </p>

   
        <div className="max-w-2xl mx-auto relative">
          <input
            type="text"
            placeholder="Search articles, tutorials, case studies..."
            className="w-full px-6 py-4 pl-14 rounded-2xl glass-premium border border-white/20 focus:border-mv-magenta/50 outline-none transition-all text-white bg-white/10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-white" size={20} />

          <Button className="absolute right-2 top-1/2 -translate-y-1/2 bg-mv-magenta hover:bg-mv-magenta/90 text-white h-10 px-6">
            Search
          </Button>
        </div>

       
        <div className="flex flex-wrap items-center justify-center gap-3 mt-10">
          <span className="text-sm text-white/70">Trending:</span>

          {["Zero Trust", "Edge Computing", "AI Infrastructure", "Green Data Centers"].map(
            (topic) => (
              <Link
                key={topic}
                to={`/blog/tag/${topic.toLowerCase().replace(" ", "-")}`}
                className="px-4 py-2 rounded-full bg-white/10 hover:bg-mv-blue/20 border border-white/20 text-sm text-white transition-all"
              >
                {topic}
              </Link>
            )
          )}
        </div>

      </div>
    </SectionWrapper>
  </div>
      </section> */}

      <section className="relative pt-32 pb-20 overflow-hidden mt-4">

  {/* Background Image */}
  <div className="absolute inset-0 -z-10">
    <img
      src="https://images.unsplash.com/photo-1518770660439-4636190af475"
      alt="Infrastructure Background"
      className="w-full h-full object-cover"
    />

    {/* Bright Gradient Overlay (UPDATED) */}
    <div className="absolute inset-0 bg-gradient-to-r from-pink-600/80 via-yellow-400/70 to-blue-600/80"></div>
  </div>

  <NetworkBackground />

  {/* Animated blobs (match gradient theme) */}
  <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-pink-500/20 blur-[120px] animate-mesh-float" />
  <div
    className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-blue-500/20 blur-[120px] animate-mesh-float"
    style={{ animationDelay: "3s" }}
  />

  <div className="container mx-auto px-4 lg:px-8 relative z-10">
    <SectionWrapper>
      <div className="max-w-4xl mx-auto text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/30 mb-8 backdrop-blur-md">
          <TrendingUp size={16} className="text-white" />
          <span className="text-xs uppercase tracking-widest text-white font-semibold">
            Insights & Perspectives
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-[0.95]">
          Where <span className="text-yellow-300">Infrastructure</span><br />
          Meets Intelligence
        </h1>

        {/* Description */}
        <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-10">
          Expert insights, industry trends, and practical guidance from the frontlines of
          <span className="text-yellow-200 font-semibold"> IT infrastructure</span>,
          <span className="text-pink-200 font-semibold"> security</span>, and
          <span className="text-blue-200 font-semibold"> innovation</span>.
        </p>

  

      </div>
    </SectionWrapper>
  </div>
</section>

      {/* Featured Posts */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionWrapper>
            <div className="flex items-center justify-between mb-12">
              <div>
                <span className="text-xs uppercase tracking-widest text-mv-magenta font-semibold mb-3 block">Featured</span>
                <h2 className="text-3xl sm:text-4xl font-black text-foreground">Editor's Picks</h2>
              </div>
              <Link to="/blog/all" className="text-mv-magenta hover:text-mv-magenta/80 font-medium flex items-center gap-2">
                View All <ChevronRight size={16} />
              </Link>
            </div>
          </SectionWrapper>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <SectionWrapper key={post.id} delay={index * 150}>
                <div className="group rounded-2xl glass-premium premium-card gradient-border overflow-hidden h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    {post.image && (
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format';
                        }}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className={`absolute top-4 left-4 px-3 py-1.5 rounded-full ${bgMap[post.categoryColor]} backdrop-blur-sm text-xs font-semibold ${textMap[post.categoryColor]}`}>
                      {post.category}
                    </div>
                    <div className="absolute bottom-4 right-4 flex items-center gap-3 text-white/90 text-sm">
                      <span className="flex items-center gap-1"><Eye size={14} /> 2.3k</span>
                      <span className="flex items-center gap-1"><Heart size={14} /> {post.likes}</span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                      <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-mv-blue transition-colors line-clamp-2">
                      <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="mt-auto">
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex items-center gap-3">
                          {post.authorImg && (
                            <img src={post.authorImg} alt={post.author} className="w-8 h-8 rounded-full object-cover" />
                          )}
                          <div>
                            <div className="text-sm font-semibold text-foreground">{post.author}</div>
                            <div className="text-xs text-muted-foreground">{post.role}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button className="p-2 rounded-full hover:bg-muted/50 transition-colors">
                            <Bookmark size={16} className="text-muted-foreground" />
                          </button>
                          <button className="p-2 rounded-full hover:bg-muted/50 transition-colors">
                            <Share2 size={16} className="text-muted-foreground" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Area with Sidebar */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content - Recent Posts */}
            <div className="lg:col-span-2">
              <SectionWrapper>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-black text-foreground">Recent Articles</h2>
                  <select className="px-4 py-2 rounded-xl bg-muted/50 border border-border text-foreground text-sm">
                    <option>Most Recent</option>
                    <option>Most Popular</option>
                    <option>Most Discussed</option>
                  </select>
                </div>
              </SectionWrapper>

              <div className="space-y-8">
                {recentPosts.map((post, index) => (
                  <SectionWrapper key={post.id} delay={index * 100}>
                    <div className="group rounded-2xl glass-premium premium-card gradient-border overflow-hidden">
                      <div className="flex flex-col md:flex-row">
                        {post.image && (
                          <div className="md:w-48 h-48 md:h-auto overflow-hidden">
                            <img 
                              src={post.image} 
                              alt={post.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format';
                              }}
                            />
                          </div>
                        )}
                        <div className="flex-1 p-6">
                          <div className="flex items-center gap-3 mb-3 flex-wrap">
                            <span className={`px-3 py-1 rounded-full ${bgMap[post.categoryColor]} text-xs font-semibold ${textMap[post.categoryColor]}`}>
                              {post.category}
                            </span>
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                              <Calendar size={12} /> {post.date}
                            </span>
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                              <Clock size={12} /> {post.readTime}
                            </span>
                          </div>
                          
                          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-mv-blue transition-colors">
                            <Link to={`/blog/${post.id}`}>{post.title}</Link>
                          </h3>
                          
                          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <User size={14} />
                              <span>{post.author}</span>
                            </div>
                            
                            <div className="flex items-center gap-4">
                              <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-mv-magenta transition-colors">
                                <MessageCircle size={14} /> 12
                              </button>
                              <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-mv-blue transition-colors">
                                <Heart size={14} /> 45
                              </button>
                              <Link to={`/blog/${post.id}`} className="text-mv-green hover:text-mv-green/80 font-medium flex items-center gap-1 text-sm">
                                Read More <ArrowRight size={14} />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SectionWrapper>
                ))}
              </div>

              {/* Pagination */}
              <SectionWrapper delay={600}>
                <div className="flex items-center justify-center gap-2 mt-12">
                  <Button variant="outline" className="w-10 h-10 p-0 rounded-xl border-border">1</Button>
                  <Button variant="outline" className="w-10 h-10 p-0 rounded-xl border-border bg-mv-blue/10 text-mv-blue">2</Button>
                  <Button variant="outline" className="w-10 h-10 p-0 rounded-xl border-border">3</Button>
                  <Button variant="outline" className="w-10 h-10 p-0 rounded-xl border-border">4</Button>
                  <span className="text-muted-foreground">...</span>
                  <Button variant="outline" className="w-10 h-10 p-0 rounded-xl border-border">12</Button>
                </div>
              </SectionWrapper>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Categories */}
              <SectionWrapper>
                <div className="rounded-2xl glass-premium premium-card gradient-border p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                    <Tag size={18} className="text-mv-magenta" />
                    Categories
                  </h3>
                  <div className="space-y-3">
                    {categories.map((cat) => (
                      <Link 
                        key={cat.name} 
                        to={`/blog/category/${cat.name.toLowerCase().replace(/ /g, '-')}`}
                        className="flex items-center justify-between group hover:bg-muted/30 p-2 rounded-lg transition-colors"
                      >
                        <span className="text-foreground group-hover:text-mv-blue transition-colors">{cat.name}</span>
                        <span className={`px-2 py-1 rounded-full ${bgMap[cat.color]} text-xs font-semibold ${textMap[cat.color]}`}>
                          {cat.count}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </SectionWrapper>

              {/* Popular Tags */}
              <SectionWrapper delay={150}>
                <div className="rounded-2xl glass-premium premium-card gradient-border p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map(tag => (
                      <Link
                        key={tag}
                        to={`/blog/tag/${tag.toLowerCase().replace(/ /g, '-')}`}
                        className="px-3 py-1.5 rounded-full bg-muted/50 hover:bg-mv-blue/10 border border-border hover:border-mv-blue/30 text-xs text-foreground transition-all"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
              </SectionWrapper>

              {/* Newsletter */}
             <SectionWrapper delay={300}>
  <div className="rounded-2xl bg-gradient-to-r from-[#E11D48] via-[#FACC15] to-[#2563EB] p-6 text-white relative overflow-hidden">
    
    {/* Optional multi-layer gradient effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#C026D3]/30 via-[#F97316]/30 to-[#06B6D4]/30" />

    {/* Dark overlay for readability */}
    <div className="absolute inset-0 bg-black/30" />

    <div className="relative z-10">
      <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
      <p className="text-white/80 text-sm mb-4">
        Get the latest insights delivered to your inbox
      </p>

      <input 
        type="email" 
        placeholder="Your email" 
        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 mb-3 focus:outline-none focus:border-white/40"
      />

      <Button className="w-full bg-white text-foreground hover:bg-white/90 font-semibold">
        Subscribe
      </Button>
    </div>
  </div>
      </SectionWrapper>

              {/* Most Read This Week */}
              <SectionWrapper delay={450}>
                <div className="rounded-2xl glass-premium premium-card gradient-border p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                    <TrendingUp size={18} className="text-mv-green" />
                    Most Read This Week
                  </h3>
                  <div className="space-y-4">
                    {mostReadPosts.map((post) => (
                      <Link key={post.id} to={`/blog/${post.id}`} className="flex gap-3 group">
                        <div className={`w-16 h-16 rounded-xl ${bgMap[post.color]} flex-shrink-0 overflow-hidden flex items-center justify-center`}>
                          <span className={`text-2xl font-bold ${textMap[post.color]}`}>#{post.id}</span>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-foreground group-hover:text-mv-blue transition-colors line-clamp-2">
                            {post.title}
                          </h4>
                          <span className="text-xs text-muted-foreground">{post.date}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </SectionWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionWrapper>
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-xs uppercase tracking-widest text-mv-green font-semibold mb-4 block">Never Miss an Update</span>
              <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-muted-foreground mb-8">
                Join 5,000+ infrastructure professionals who get our weekly insights
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-6 py-4 rounded-xl glass-premium border border-border focus:border-mv-magenta/50 outline-none transition-all"
                />
                <Button className="bg-gradient-to-r from-[#E11D48] via-[#FACC15] to-[#2563EB] text-white font-semibold h-auto py-4 px-8 flex items-center gap-2 hover:scale-105 transition-all duration-300 shadow-lg">
          Subscribe <ArrowRight size={16} />
        </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </SectionWrapper>
        </div>
      </section>
    </>
  );
}