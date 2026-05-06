// import { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Menu, X, Moon, Sun } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// const navItems = [
//   { path: '/', label: 'Home' },
//   { path: '/about', label: 'About' },
//   { path: '/services', label: 'Services' },
//    { path: '/blog', label: 'Blog' },
//   { path: '/values', label: 'Values' },
//   { path: '/brand', label: 'Brand' },
//   { path: '/whyus', label: 'Why Us' },
//   { path: '/contact', label: 'Contact' },
// ];

// export default function Header() {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [dark, setDark] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener('scroll', onScroll, { passive: true });
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);

//   useEffect(() => {
//     document.documentElement.classList.toggle('dark', dark);
//   }, [dark]);

//   useEffect(() => {
//     setMobileOpen(false);
//   }, [location.pathname]);

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         scrolled ? 'glass-strong shadow-lg' : 'bg-transparent'
//       }`}
//     >
//       <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
//         <Link to="/" className="flex items-center gap-2">
//           <div className="w-8 h-8 rounded-lg gradient-brand flex items-center justify-center">
//             <span className="text-sm font-black text-white">MV</span>
//           </div>
//           <span className="font-bold text-lg text-foreground hidden sm:inline">MV Branding</span>
//         </Link>

//         <nav className="hidden md:flex items-center gap-1">
//           {navItems.map(item => (
//             <Link
//               key={item.path}
//               to={item.path}
//               className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
//                 location.pathname === item.path
//                   ? 'text-primary bg-primary/10'
//                   : 'text-muted-foreground hover:text-foreground hover:bg-muted'
//               }`}
//             >
//               {item.label}
//             </Link>
//           ))}
//         </nav>

//         <div className="flex items-center gap-2">
//           <button
//             onClick={() => setDark(!dark)}
//             className="p-2 rounded-lg hover:bg-muted transition-colors text-foreground"
//           >
//             {dark ? <Sun size={18} /> : <Moon size={18} />}
//           </button>
//           <Link to="/contact">
//             <Button size="sm" className="hidden sm:inline-flex gradient-brand text-white border-0 hover:opacity-90">
//               Get Consultation
//             </Button>
//           </Link>
//           <button
//             onClick={() => setMobileOpen(!mobileOpen)}
//             className="md:hidden p-2 text-foreground"
//           >
//             {mobileOpen ? <X size={22} /> : <Menu size={22} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       <div
//         className={`md:hidden overflow-hidden transition-all duration-300 glass-strong ${
//           mobileOpen ? 'max-h-96 border-t border-border' : 'max-h-0'
//         }`}
//       >
//         <nav className="flex flex-col p-4 gap-1">
//           {navItems.map(item => (
//             <Link
//               key={item.path}
//               to={item.path}
//               className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
//                 location.pathname === item.path
//                   ? 'text-primary bg-primary/10'
//                   : 'text-muted-foreground hover:text-foreground hover:bg-muted'
//               }`}
//             >
//               {item.label}
//             </Link>
//           ))}
//           <Link to="/contact" className="mt-2">
//             <Button className="w-full gradient-brand text-white border-0">Get Consultation</Button>
//           </Link>
//         </nav>
//       </div>
//     </header>
//   );
// }






import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logg.png';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/oursolution', label: 'Solutions' },
    { path: '/projectpage', label: 'Projects' },
  // { path: '/values', label: ' Values' },
  { path: '/whyus', label: 'Why Us' },
  { path: '/blogcomingsoon', label: 'Blog' },
  // { path: '/brand', label: 'Brand' },
  { path: '/careerscomingsoon', label: 'Careers' },
  { path: '/contact', label: 'Contact Us' },
  
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-xl bg-white/70 dark:bg-black/50 shadow-lg border-b border-white/20'
          : 'bg-transparent'
      }`}
    >
      {/* 🔥 Gradient Border Top */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500" />

      <div className="container mx-auto flex items-center justify-between h-20 px-4 lg:px-8">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="MV Branding"
            className="h-20 w-auto object-contain drop-shadow-[0_5px_10px_rgba(0,0,0,0.2)]"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-2">
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                location.pathname === item.path
                  ? 'text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white'
              }`}
            >
              {location.pathname === item.path && (
                <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 -z-10 blur-sm opacity-80" />
              )}
              {item.label}
            </Link>
          ))}
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">
          
          {/* DARK MODE */}
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* CTA BUTTON */}
          <Link to="/contact">
            <Button className="hidden sm:inline-flex bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 text-white border-0 shadow-lg hover:scale-105 transition">
              Get Consultation
            </Button>
          </Link>

          {/* MOBILE MENU */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-96 bg-white/90 backdrop-blur-xl' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col p-4 gap-2">
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-3 rounded-lg font-medium ${
                location.pathname === item.path
                  ? 'bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}