// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { useRouter } from "next/router";
// import { WHATSAPP_URL } from "@/lib/site";

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [activeSection, setActiveSection] = useState("home");
//   const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

//   const [isOpen, setIsOpen] = useState(false);

//   const router = useRouter(); // Access the current route

//   const servicesList = [
//     { name: "Digital Marketing", href: "/Services/Services-0" },
//     { name: "Website Development", href: "/Services/Services-1" },
//     { name: "Graphic Design & Branding", href: "/Services/Services-2" },
//     { name: "Event Management", href: "/Services/Services-3" },
//     { name: "Printing Solutions", href: "/Services/Services-4" },
//     { name: "Photography & Videography", href: "/Services/Services-5" },
//     { name: "SEO Services", href: "/Services/Services-6" },
//     { name: "Google Ads Management", href: "/Services/Services-7" },
//     { name: "E-Commerce Development", href: "/Services/Services-8" },
//     { name: "App Development", href: "/Services/Services-9" },
//     { name: "Corporate Branding", href: "/Services/Services-10" },
//     { name: "Outdoor Advertising", href: "/Services/Services-11" },
//   ];

//   const navLinks = [
//     { name: "Home", href: "/" },
//     { name: "About Us", href: "/#about" },
//     { name: "Services", href: "#", isDropdown: true },
//     // { name: "Team", href: "/#team" },
//     // { name: "Why Us", href: "/#whyus" },
//     { name: "Portfolio", href: "/portfolio" },
//     { name: "Testimonials", href: "/#testimonials" },
//   ];

//   // Handle Scroll Spy (Only run when on the home page)
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//       if (router.pathname === "/" && window.scrollY < 300) {
//         setActiveSection("home");
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     // Only set up intersection observer if we are on the homepage
//     if (router.pathname === "/") {
//       const observer = new IntersectionObserver(
//         (entries) => {
//           entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//               setActiveSection(entry.target.id);
//             }
//           });
//         },
//         { rootMargin: "-40% 0px -60% 0px" },
//       );

//       navLinks.forEach((link) => {
//         if (link.href.includes("#") && !link.isDropdown) {
//           const id = link.href.split("#")[1];
//           const element = document.getElementById(id);
//           if (element) observer.observe(element);
//         }
//       });

//       return () => {
//         window.removeEventListener("scroll", handleScroll);
//         observer.disconnect();
//       };
//     }

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [router.pathname]);

//   // FIXED ACTIVE TAB LOGIC
//   const checkIsActive = (link) => {
//     if (link.isDropdown) {
//       // Highlight "Services" if the current URL contains "/Services"
//       return router.pathname.startsWith("/Services");
//     }

//     if (router.pathname === "/") {
//       // If on home page, use the scroll spy
//       if (link.href === "/") return activeSection === "home";
//       const hash = link.href.split("#")[1];
//       return activeSection === hash;
//     } else {
//       // If on another page, just check if it exactly matches the URL
//       return router.pathname === link.href;
//     }
//   };

//   const handleNavClick = (e, href) => {
//     if (href === "/") {
//       if (router.pathname === "/") {
//         e.preventDefault();
//         window.scrollTo({ top: 0, behavior: "smooth" });
//       }
//     } else if (href.includes("#") && href !== "#") {
//       const targetId = href.split("#")[1];

//       // If we are already on the homepage, smoothly scroll to the section
//       if (router.pathname === "/") {
//         e.preventDefault();
//         const targetElement = document.getElementById(targetId);
//         if (targetElement) {
//           const offsetTop =
//             targetElement.getBoundingClientRect().top + window.scrollY - 80;
//           window.scrollTo({ top: offsetTop, behavior: "smooth" });
//         }
//       }
//       // If we are NOT on the homepage, let the standard Next.js Link handle the navigation to /#id
//     }
//     setIsOpen(false);
//   };

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//         scrolled
//           ? "bg-background shadow-[0_4px_20px_rgba(0,0,0,0.05)] border-b border-border/40 py-4"
//           : "bg-transparent border-b border-transparent py-6"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center">
//           {/* Logo Section */}
//           <div className="flex-shrink-0 flex items-center">
//             <Link href="/" onClick={(e) => handleNavClick(e, "/")}>
//               <Image
//                 src="/weblogo.png"
//                 alt="Visuura Logo"
//                 width={130}
//                 height={40}
//                 className="w-auto h-8 sm:h-10 hover:opacity-80 transition-opacity cursor-pointer object-contain"
//                 priority
//               />
//             </Link>
//           </div>

//           {/* Desktop Menu - Modern Clean Layout */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navLinks.map((link) => {
//               const isActive = checkIsActive(link);

//               if (link.isDropdown) {
//                 return (
//                   <div key={link.name} className="relative group h-full py-2">
//                     <button
//                       className={`flex items-center gap-1 text-[15px] font-bold transition-colors duration-300 ${
//                         isActive
//                           ? "text-primary"
//                           : "text-foreground hover:text-primary"
//                       }`}
//                     >
//                       {link.name}
//                       <svg
//                         className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2.5}
//                           d="M19 9l-7 7-7-7"
//                         />
//                       </svg>
//                     </button>

//                     {/* Active Underline Indicator */}
//                     {isActive && (
//                       <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-t-md"></div>
//                     )}

//                     {/* Mega Menu Dropdown */}
//                     <div className="absolute top-full left-1/2 -translate-x-1/2 pt-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
//                       <div className="w-[850px] bg-background border border-border shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] rounded-2xl p-8 grid grid-cols-3 gap-y-6 gap-x-8">
//                         {servicesList.map((service, idx) => {
//                           const isServiceActive =
//                             router.pathname === service.href;
//                           return (
//                             <Link
//                               key={idx}
//                               href={service.href}
//                               className={`group/link flex flex-col gap-1.5 p-3 -m-3 rounded-xl transition-colors duration-200 ${
//                                 isServiceActive
//                                   ? "bg-muted"
//                                   : "hover:bg-muted/50"
//                               }`}
//                             >
//                               <span
//                                 className={`text-[15px] font-bold transition-colors duration-200 ${
//                                   isServiceActive
//                                     ? "text-primary"
//                                     : "text-foreground group-hover/link:text-primary"
//                                 }`}
//                               >
//                                 {service.name}
//                               </span>
//                             </Link>
//                           );
//                         })}
//                       </div>
//                     </div>
//                   </div>
//                 );
//               }

//               return (
//                 <div key={link.name} className="relative py-2">
//                   <Link
//                     href={link.href}
//                     onClick={(e) => handleNavClick(e, link.href)}
//                     className={`text-[15px] font-bold transition-colors duration-300 ${
//                       isActive
//                         ? "text-primary"
//                         : "text-foreground hover:text-primary"
//                     }`}
//                   >
//                     {link.name}
//                   </Link>
//                   {/* Active Underline Indicator */}
//                   {isActive && (
//                     <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-t-md"></div>
//                   )}
//                 </div>
//               );
//             })}
//           </div>

//           {/* Call to Action Button */}
//           <div className="hidden md:flex items-center">
//             <a
//               href={WHATSAPP_URL}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-primary text-[#161616] px-7 py-3 rounded-xl text-[15px] font-black tracking-wide shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
//             >
//               Let's Talk
//             </a>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-foreground hover:text-primary focus:outline-none p-2 transition-colors"
//               aria-label="Toggle Menu"
//             >
//               <svg
//                 className="h-7 w-7"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 {isOpen ? (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2.5}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 ) : (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2.5}
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu Dropdown */}
//         <div
//           className={`md:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-2xl overflow-hidden transition-all duration-300 origin-top ${
//             isOpen
//               ? "opacity-100 max-h-[85vh] overflow-y-auto"
//               : "opacity-0 max-h-0 pointer-events-none"
//           }`}
//         >
//           <div className="px-6 py-6 space-y-4">
//             {navLinks.map((link) => {
//               const isActive = checkIsActive(link);

//               if (link.isDropdown) {
//                 return (
//                   <div
//                     key={link.name}
//                     className="flex flex-col border-b border-border/50 pb-4"
//                   >
//                     <button
//                       onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
//                       className={`flex justify-between items-center w-full py-2 text-lg font-black transition-colors ${
//                         isActive
//                           ? "text-primary"
//                           : "text-foreground hover:text-primary"
//                       }`}
//                     >
//                       {link.name}
//                       <svg
//                         className={`w-6 h-6 transition-transform duration-300 ${
//                           mobileServicesOpen ? "rotate-180 text-primary" : ""
//                         }`}
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2.5}
//                           d="M19 9l-7 7-7-7"
//                         />
//                       </svg>
//                     </button>
//                     <div
//                       className={`overflow-hidden transition-all duration-300 ease-in-out ${
//                         mobileServicesOpen
//                           ? "max-h-[1000px] mt-4 opacity-100"
//                           : "max-h-0 opacity-0"
//                       }`}
//                     >
//                       <div className="flex flex-col space-y-2 pl-4 border-l-2 border-primary/20">
//                         {servicesList.map((service, idx) => {
//                           const isServiceActive =
//                             router.pathname === service.href;
//                           return (
//                             <Link
//                               key={idx}
//                               href={service.href}
//                               onClick={() => setIsOpen(false)}
//                               className={`py-2 px-4 rounded-lg text-[15px] font-bold transition-colors ${
//                                 isServiceActive
//                                   ? "bg-primary/10 text-primary"
//                                   : "text-foreground/80 hover:text-primary hover:bg-muted"
//                               }`}
//                             >
//                               {service.name}
//                             </Link>
//                           );
//                         })}
//                       </div>
//                     </div>
//                   </div>
//                 );
//               }

//               return (
//                 <Link
//                   key={link.name}
//                   href={link.href}
//                   onClick={(e) => handleNavClick(e, link.href)}
//                   className={`block py-2 text-lg font-black border-b border-border/50 transition-colors ${
//                     isActive
//                       ? "text-primary"
//                       : "text-foreground hover:text-primary"
//                   }`}
//                 >
//                   {link.name}
//                 </Link>
//               );
//             })}

//             {/* UPDATED: Mobile Menu Call to Action Button */}
//             <div className="pt-6 pb-4">
//               <a
//                 href={WHATSAPP_URL}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 onClick={() => setIsOpen(false)}
//                 className="flex justify-center w-full bg-primary text-[#161616] px-4 py-4 rounded-xl text-lg font-black tracking-wide shadow-sm active:scale-95 transition-all"
//               >
//                 Let's Talk
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// /
//
//
//
//
//
//
//

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { useRouter } from "next/router";
// import { WHATSAPP_URL } from "@/lib/site";
// import { Mail, Phone, Globe, Sparkles } from "lucide-react";

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [activeSection, setActiveSection] = useState("home");
//   const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);

//   const router = useRouter(); // Access the current route

//   const servicesList = [
//     { name: "Digital Marketing", href: "/Services/Services-0" },
//     { name: "Website Development", href: "/Services/Services-1" },
//     { name: "Graphic Design & Branding", href: "/Services/Services-2" },
//     { name: "Event Management", href: "/Services/Services-3" },
//     { name: "Printing Solutions", href: "/Services/Services-4" },
//     { name: "Photography & Videography", href: "/Services/Services-5" },
//     { name: "SEO Services", href: "/Services/Services-6" },
//     { name: "Google Ads Management", href: "/Services/Services-7" },
//     { name: "E-Commerce Development", href: "/Services/Services-8" },
//     { name: "App Development", href: "/Services/Services-9" },
//     { name: "Corporate Branding", href: "/Services/Services-10" },
//     { name: "Outdoor Advertising", href: "/Services/Services-11" },
//   ];

//   const navLinks = [
//     { name: "Home", href: "/" },
//     { name: "About Us", href: "/#about" },
//     { name: "Services", href: "#", isDropdown: true },
//     { name: "Portfolio", href: "/portfolio" },
//     { name: "Testimonials", href: "/#testimonials" },
//   ];

//   // Handle Scroll Spy (Only run when on the home page)
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//       if (router.pathname === "/" && window.scrollY < 300) {
//         setActiveSection("home");
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     if (router.pathname === "/") {
//       const observer = new IntersectionObserver(
//         (entries) => {
//           entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//               setActiveSection(entry.target.id);
//             }
//           });
//         },
//         { rootMargin: "-40% 0px -60% 0px" },
//       );

//       navLinks.forEach((link) => {
//         if (link.href.includes("#") && !link.isDropdown) {
//           const id = link.href.split("#")[1];
//           const element = document.getElementById(id);
//           if (element) observer.observe(element);
//         }
//       });

//       return () => {
//         window.removeEventListener("scroll", handleScroll);
//         observer.disconnect();
//       };
//     }

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [router.pathname]);

//   const checkIsActive = (link) => {
//     if (link.isDropdown) {
//       return router.pathname.startsWith("/Services");
//     }
//     if (router.pathname === "/") {
//       if (link.href === "/") return activeSection === "home";
//       const hash = link.href.split("#")[1];
//       return activeSection === hash;
//     } else {
//       return router.pathname === link.href;
//     }
//   };

//   const handleNavClick = (e, href) => {
//     if (href === "/") {
//       if (router.pathname === "/") {
//         e.preventDefault();
//         window.scrollTo({ top: 0, behavior: "smooth" });
//       }
//     } else if (href.includes("#") && href !== "#") {
//       const targetId = href.split("#")[1];

//       if (router.pathname === "/") {
//         e.preventDefault();
//         const targetElement = document.getElementById(targetId);
//         if (targetElement) {
//           const offsetTop =
//             targetElement.getBoundingClientRect().top + window.scrollY - 80;
//           window.scrollTo({ top: offsetTop, behavior: "smooth" });
//         }
//       }
//     }
//     setIsOpen(false);
//   };

//   return (
//     <header className="fixed top-0 left-0 w-full z-50 flex flex-col">
//       {/* --- TOP CONTACT BAR (Bolder & Larger) --- */}
//       <div
//         className={`w-full bg-[#161616] text-white transition-all duration-500 ease-in-out overflow-hidden flex items-center border-b border-[var(--primary)]/30 ${
//           scrolled ? "h-0 opacity-0" : "h-12 opacity-100" // Increased height to h-12
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-between items-center text-xs sm:text-sm font-bold tracking-wide">
//           {/* Attractive Line */}
//           <div className="hidden md:flex items-center gap-2.5">
//             <Sparkles size={16} className="text-[var(--primary)]" />
//             <span>
//               Elevate your brand with Visuura. Let's build the future together.
//             </span>
//           </div>

//           {/* Contact Details (Bolder, clearer spacing, larger icons) */}
//           <div className="flex items-center justify-center md:justify-end w-full md:w-auto gap-5 sm:gap-8">
//             <a
//               href="mailto:visuura@gmail.com"
//               className="flex items-center gap-2 hover:text-[var(--primary)] transition-colors"
//             >
//               <Mail size={16} className="text-[var(--primary)]" />
//               <span className="hidden sm:inline">visuura@gmail.com</span>
//               <span className="sm:hidden">Email Us</span>
//             </a>
//             <a
//               href="tel:+923312227697"
//               className="flex items-center gap-2 hover:text-[var(--primary)] transition-colors"
//             >
//               <Phone size={16} className="text-[var(--primary)]" />
//               +92 331 2227697
//             </a>
//             <a
//               href="https://www.visuura.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-2 hover:text-[var(--primary)] transition-colors"
//             >
//               <Globe size={16} className="text-[var(--primary)]" />
//               <span className="hidden sm:inline">www.visuura.com</span>
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* --- MAIN NAVIGATION --- */}
//       <nav
//         className={`w-full transition-all duration-300 ${
//           scrolled
//             ? "bg-[var(--background)] shadow-[0_4px_20px_rgba(0,0,0,0.05)] border-b border-[var(--border-color)] py-4"
//             : "bg-[var(--background)] lg:bg-transparent border-b border-transparent py-4 lg:py-6"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center">
//             {/* Logo Section */}
//             <div className="flex-shrink-0 flex items-center">
//               <Link href="/" onClick={(e) => handleNavClick(e, "/")}>
//                 <Image
//                   src="/weblogo.png"
//                   alt="Visuura Logo"
//                   width={140}
//                   height={45}
//                   className="w-auto h-9 sm:h-11 hover:opacity-80 transition-opacity cursor-pointer object-contain"
//                   priority
//                 />
//               </Link>
//             </div>

//             {/* Desktop Menu */}
//             <div className="hidden md:flex items-center space-x-9">
//               {navLinks.map((link) => {
//                 const isActive = checkIsActive(link);

//                 if (link.isDropdown) {
//                   return (
//                     <div key={link.name} className="relative group h-full py-2">
//                       <button
//                         className={`flex items-center gap-1.5 text-base font-bold tracking-wide transition-colors duration-300 ${
//                           isActive
//                             ? "text-[var(--primary)]"
//                             : "text-[var(--foreground)] hover:text-[var(--primary)]"
//                         }`}
//                       >
//                         {link.name}
//                         <svg
//                           className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={3}
//                             d="M19 9l-7 7-7-7"
//                           />
//                         </svg>
//                       </button>

//                       {/* Active Underline Indicator */}
//                       {isActive && (
//                         <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[var(--primary)] rounded-t-md"></div>
//                       )}

//                       {/* Mega Menu Dropdown */}
//                       <div className="absolute top-full left-1/2 -translate-x-1/2 pt-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
//                         <div className="w-[900px] bg-[var(--background)] border-2 border-[var(--border-color)] shadow-2xl rounded-2xl p-8 grid grid-cols-3 gap-y-6 gap-x-8">
//                           {servicesList.map((service, idx) => {
//                             const isServiceActive =
//                               router.pathname === service.href;
//                             return (
//                               <Link
//                                 key={idx}
//                                 href={service.href}
//                                 className={`group/link flex flex-col gap-1.5 p-3 -m-3 rounded-xl transition-colors duration-200 ${
//                                   isServiceActive
//                                     ? "bg-black/5"
//                                     : "hover:bg-black/5"
//                                 }`}
//                               >
//                                 <span
//                                   className={`text-[15px] font-bold transition-colors duration-200 ${
//                                     isServiceActive
//                                       ? "text-[var(--primary)]"
//                                       : "text-[var(--foreground)] group-hover/link:text-[var(--primary)]"
//                                   }`}
//                                 >
//                                   {service.name}
//                                 </span>
//                               </Link>
//                             );
//                           })}
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 }

//                 return (
//                   <div key={link.name} className="relative py-2">
//                     <Link
//                       href={link.href}
//                       onClick={(e) => handleNavClick(e, link.href)}
//                       className={`text-base font-bold tracking-wide transition-colors duration-300 ${
//                         isActive
//                           ? "text-[var(--primary)]"
//                           : "text-[var(--foreground)] hover:text-[var(--primary)]"
//                       }`}
//                     >
//                       {link.name}
//                     </Link>
//                     {/* Active Underline Indicator */}
//                     {isActive && (
//                       <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[var(--primary)] rounded-t-md"></div>
//                     )}
//                   </div>
//                 );
//               })}
//             </div>

//             {/* Call to Action Button */}
//             <div className="hidden md:flex items-center">
//               <a
//                 href={WHATSAPP_URL}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-[var(--primary)] text-[#161616] px-8 py-3.5 rounded-xl text-base font-black tracking-wide shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
//               >
//                 Let's Talk
//               </a>
//             </div>

//             {/* Mobile Menu Button */}
//             <div className="md:hidden flex items-center">
//               <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="text-[var(--foreground)] hover:text-[var(--primary)] focus:outline-none p-2 transition-colors"
//                 aria-label="Toggle Menu"
//               >
//                 <svg
//                   className="h-8 w-8"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   {isOpen ? (
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={3}
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   ) : (
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={3}
//                       d="M4 6h16M4 12h16M4 18h16"
//                     />
//                   )}
//                 </svg>
//               </button>
//             </div>
//           </div>

//           {/* Mobile Menu Dropdown */}
//           <div
//             className={`md:hidden absolute top-full left-0 w-full bg-[var(--background)] border-b-2 border-[var(--border-color)] shadow-2xl overflow-hidden transition-all duration-300 origin-top ${
//               isOpen
//                 ? "opacity-100 max-h-[85vh] overflow-y-auto"
//                 : "opacity-0 max-h-0 pointer-events-none"
//             }`}
//           >
//             <div className="px-6 py-6 space-y-4">
//               {navLinks.map((link) => {
//                 const isActive = checkIsActive(link);

//                 if (link.isDropdown) {
//                   return (
//                     <div
//                       key={link.name}
//                       className="flex flex-col border-b border-[var(--border-color)] pb-4"
//                     >
//                       <button
//                         onClick={() =>
//                           setMobileServicesOpen(!mobileServicesOpen)
//                         }
//                         className={`flex justify-between items-center w-full py-2 text-xl font-black transition-colors ${
//                           isActive
//                             ? "text-[var(--primary)]"
//                             : "text-[var(--foreground)] hover:text-[var(--primary)]"
//                         }`}
//                       >
//                         {link.name}
//                         <svg
//                           className={`w-7 h-7 transition-transform duration-300 ${
//                             mobileServicesOpen
//                               ? "rotate-180 text-[var(--primary)]"
//                               : ""
//                           }`}
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={3}
//                             d="M19 9l-7 7-7-7"
//                           />
//                         </svg>
//                       </button>
//                       <div
//                         className={`overflow-hidden transition-all duration-300 ease-in-out ${
//                           mobileServicesOpen
//                             ? "max-h-[1000px] mt-4 opacity-100"
//                             : "max-h-0 opacity-0"
//                         }`}
//                       >
//                         <div className="flex flex-col space-y-2 pl-4 border-l-[3px] border-[var(--primary)]/30">
//                           {servicesList.map((service, idx) => {
//                             const isServiceActive =
//                               router.pathname === service.href;
//                             return (
//                               <Link
//                                 key={idx}
//                                 href={service.href}
//                                 onClick={() => setIsOpen(false)}
//                                 className={`py-2 px-4 rounded-lg text-base font-bold transition-colors ${
//                                   isServiceActive
//                                     ? "bg-[var(--primary)]/10 text-[var(--primary)]"
//                                     : "text-[var(--foreground)]/80 hover:text-[var(--primary)] hover:bg-black/5"
//                                 }`}
//                               >
//                                 {service.name}
//                               </Link>
//                             );
//                           })}
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 }

//                 return (
//                   <Link
//                     key={link.name}
//                     href={link.href}
//                     onClick={(e) => handleNavClick(e, link.href)}
//                     className={`block py-3 text-xl font-black border-b border-[var(--border-color)] transition-colors ${
//                       isActive
//                         ? "text-[var(--primary)]"
//                         : "text-[var(--foreground)] hover:text-[var(--primary)]"
//                     }`}
//                   >
//                     {link.name}
//                   </Link>
//                 );
//               })}

//               {/* Mobile Menu Call to Action Button */}
//               <div className="pt-6 pb-4">
//                 <a
//                   href={WHATSAPP_URL}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   onClick={() => setIsOpen(false)}
//                   className="flex justify-center w-full bg-[var(--primary)] text-[#161616] px-4 py-4 rounded-xl text-xl font-black tracking-wide shadow-md active:scale-95 transition-all"
//                 >
//                   Let's Talk
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

//
//
//
//
//
//
//
//
//
//
//

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { WHATSAPP_URL } from "@/lib/site";
import { Mail, Phone, Globe, Sparkles } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter(); // Access the current route

  const servicesList = [
    { name: "Digital Marketing", href: "/Services/Services-0" },
    { name: "Website Development", href: "/Services/Services-1" },
    { name: "Graphic Design & Branding", href: "/Services/Services-2" },
    { name: "Event Management", href: "/Services/Services-3" },
    { name: "Printing Solutions", href: "/Services/Services-4" },
    { name: "Photography & Videography", href: "/Services/Services-5" },
    { name: "SEO Services", href: "/Services/Services-6" },
    { name: "Google Ads Management", href: "/Services/Services-7" },
    { name: "E-Commerce Development", href: "/Services/Services-8" },
    { name: "App Development", href: "/Services/Services-9" },
    { name: "Corporate Branding", href: "/Services/Services-10" },
    { name: "Outdoor Advertising", href: "/Services/Services-11" },
  ];

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/#about" },
    { name: "Services", href: "#", isDropdown: true },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Testimonials", href: "/#testimonials" },
  ];

  // Handle Scroll Spy
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      if (router.pathname === "/" && window.scrollY < 300) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);

    if (router.pathname === "/") {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        { rootMargin: "-40% 0px -60% 0px" },
      );

      navLinks.forEach((link) => {
        if (link.href.includes("#") && !link.isDropdown) {
          const id = link.href.split("#")[1];
          const element = document.getElementById(id);
          if (element) observer.observe(element);
        }
      });

      return () => {
        window.removeEventListener("scroll", handleScroll);
        observer.disconnect();
      };
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [router.pathname]);

  const checkIsActive = (link) => {
    if (link.isDropdown) {
      return router.pathname.startsWith("/Services");
    }
    if (router.pathname === "/") {
      if (link.href === "/") return activeSection === "home";
      const hash = link.href.split("#")[1];
      return activeSection === hash;
    } else {
      return router.pathname === link.href;
    }
  };

  const handleNavClick = (e, href) => {
    if (href === "/") {
      if (router.pathname === "/") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else if (href.includes("#") && href !== "#") {
      const targetId = href.split("#")[1];

      if (router.pathname === "/") {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          // Increased offset to 120px to account for the permanently fixed top bar
          const offsetTop =
            targetElement.getBoundingClientRect().top + window.scrollY - 120;
          window.scrollTo({ top: offsetTop, behavior: "smooth" });
        }
      }
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex flex-col shadow-sm">
      {/* --- TOP CONTACT BAR (Permanently Fixed & Mobile Responsive) --- */}
      <div
        className={`w-full bg-[#111111] text-gray-200 transition-all duration-300 ease-in-out border-b border-[var(--primary)]/30 ${
          scrolled ? "py-1.5" : "py-2.5" // Subtle padding shrink on scroll
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-between items-center text-[11px] sm:text-xs md:text-sm font-bold tracking-wide">
          {/* Attractive Line (Hidden on tablets and mobile to save space) */}
          <div className="hidden lg:flex items-center gap-2.5">
            <Sparkles
              size={16}
              className="text-[var(--primary)] animate-pulse"
            />
            <span className="text-gray-300">
              Elevate your brand with Visuura. Let's build the future together.
            </span>
          </div>

          {/* Contact Details (Fully responsive: Icons + Short text on mobile) */}
          <div className="flex items-center justify-between lg:justify-end w-full lg:w-auto sm:gap-6">
            <a
              href="mailto:visuura@gmail.com"
              className="flex items-center gap-1.5 hover:text-[var(--primary)] transition-colors"
            >
              <Mail size={14} className="text-[var(--primary)]" />
              <span className="hidden sm:inline">visuura@gmail.com</span>
              <span className="sm:hidden">Email</span>
            </a>

            <div className="w-px h-3 bg-gray-700 hidden sm:block"></div>

            <a
              href="tel:+923312227697"
              className="flex items-center gap-1.5 hover:text-[var(--primary)] transition-colors"
            >
              <Phone size={14} className="text-[var(--primary)]" />
              <span className="hidden sm:inline">+92 331 2227697</span>
              <span className="sm:hidden">Call Us</span>
            </a>

            <div className="w-px h-3 bg-gray-700 hidden sm:block"></div>

            <a
              href="https://www.visuura.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[var(--primary)] transition-colors"
            >
              <Globe size={14} className="text-[var(--primary)]" />
              <span className="hidden sm:inline">www.visuura.com</span>
              <span className="sm:hidden">Web</span>
            </a>
          </div>
        </div>
      </div>

      {/* --- MAIN NAVIGATION --- */}
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "bg-[var(--background)] shadow-[0_10px_30px_rgba(0,0,0,0.08)] border-b border-[var(--border-color)] py-3"
            : "bg-[var(--background)] lg:bg-transparent border-b border-transparent py-4 lg:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" onClick={(e) => handleNavClick(e, "/")}>
                <Image
                  src="/weblogo.png"
                  alt="Visuura Logo"
                  width={140}
                  height={45}
                  className="w-auto h-9 sm:h-11 hover:opacity-80 transition-opacity cursor-pointer object-contain"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-9">
              {navLinks.map((link) => {
                const isActive = checkIsActive(link);

                if (link.isDropdown) {
                  return (
                    <div key={link.name} className="relative group h-full py-2">
                      <button
                        className={`flex items-center gap-1.5 text-base font-bold tracking-wide transition-colors duration-300 ${
                          isActive
                            ? "text-[var(--primary)]"
                            : "text-[var(--foreground)] hover:text-[var(--primary)]"
                        }`}
                      >
                        {link.name}
                        <svg
                          className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {/* Active Underline Indicator */}
                      {isActive && (
                        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[var(--primary)] rounded-t-md"></div>
                      )}

                      {/* Mega Menu Dropdown */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                        <div className="w-[900px] bg-[var(--background)] border-2 border-[var(--border-color)] shadow-2xl rounded-2xl p-8 grid grid-cols-3 gap-y-6 gap-x-8">
                          {servicesList.map((service, idx) => {
                            const isServiceActive =
                              router.pathname === service.href;
                            return (
                              <Link
                                key={idx}
                                href={service.href}
                                className={`group/link flex flex-col gap-1.5 p-3 -m-3 rounded-xl transition-colors duration-200 ${
                                  isServiceActive
                                    ? "bg-black/5"
                                    : "hover:bg-black/5"
                                }`}
                              >
                                <span
                                  className={`text-[15px] font-bold transition-colors duration-200 ${
                                    isServiceActive
                                      ? "text-[var(--primary)]"
                                      : "text-[var(--foreground)] group-hover/link:text-[var(--primary)]"
                                  }`}
                                >
                                  {service.name}
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <div key={link.name} className="relative py-2">
                    <Link
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`text-base font-bold tracking-wide transition-colors duration-300 ${
                        isActive
                          ? "text-[var(--primary)]"
                          : "text-[var(--foreground)] hover:text-[var(--primary)]"
                      }`}
                    >
                      {link.name}
                    </Link>
                    {/* Active Underline Indicator */}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[var(--primary)] rounded-t-md"></div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Call to Action Button */}
            <div className="hidden md:flex items-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--primary)] text-[#161616] px-8 py-3.5 rounded-xl text-base font-black tracking-wide shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                Let's Talk
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-[var(--foreground)] hover:text-[var(--primary)] focus:outline-none p-2 transition-colors"
                aria-label="Toggle Menu"
              >
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          <div
            className={`md:hidden absolute top-full left-0 w-full bg-[var(--background)] border-b-2 border-[var(--border-color)] shadow-2xl overflow-hidden transition-all duration-300 origin-top ${
              isOpen
                ? "opacity-100 max-h-[85vh] overflow-y-auto"
                : "opacity-0 max-h-0 pointer-events-none"
            }`}
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link) => {
                const isActive = checkIsActive(link);

                if (link.isDropdown) {
                  return (
                    <div
                      key={link.name}
                      className="flex flex-col border-b border-[var(--border-color)] pb-4"
                    >
                      <button
                        onClick={() =>
                          setMobileServicesOpen(!mobileServicesOpen)
                        }
                        className={`flex justify-between items-center w-full py-2 text-xl font-black transition-colors ${
                          isActive
                            ? "text-[var(--primary)]"
                            : "text-[var(--foreground)] hover:text-[var(--primary)]"
                        }`}
                      >
                        {link.name}
                        <svg
                          className={`w-7 h-7 transition-transform duration-300 ${
                            mobileServicesOpen
                              ? "rotate-180 text-[var(--primary)]"
                              : ""
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          mobileServicesOpen
                            ? "max-h-[1000px] mt-4 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="flex flex-col space-y-2 pl-4 border-l-[3px] border-[var(--primary)]/30">
                          {servicesList.map((service, idx) => {
                            const isServiceActive =
                              router.pathname === service.href;
                            return (
                              <Link
                                key={idx}
                                href={service.href}
                                onClick={() => setIsOpen(false)}
                                className={`py-2 px-4 rounded-lg text-base font-bold transition-colors ${
                                  isServiceActive
                                    ? "bg-[var(--primary)]/10 text-[var(--primary)]"
                                    : "text-[var(--foreground)]/80 hover:text-[var(--primary)] hover:bg-black/5"
                                }`}
                              >
                                {service.name}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`block py-3 text-xl font-black border-b border-[var(--border-color)] transition-colors ${
                      isActive
                        ? "text-[var(--primary)]"
                        : "text-[var(--foreground)] hover:text-[var(--primary)]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              {/* Mobile Menu Call to Action Button */}
              <div className="pt-6 pb-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex justify-center w-full bg-[var(--primary)] text-[#161616] px-4 py-4 rounded-xl text-xl font-black tracking-wide shadow-md active:scale-95 transition-all"
                >
                  Let's Talk
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
