import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router"; // NEW: Imported router to fix active states

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const router = useRouter(); // Access the current route

  const servicesList = [
    { name: "Digital Marketing", href: "/Services/Services-0" },
    { name: "Website Development", href: "/Services/Services-1" },
    { name: "Graphic Design & Branding", href: "/Services/Services-2" },
    { name: "Event Management", href: "/Services/Services-3" },
    { name: "Printing Solutions", href: "/Services/Services-4" },
    { name: "Photography & Videography", href: "/Services/Services-5" },
    { name: "SEO Services", href: "/Services/Services-6" },
    // { name: "Social Media Management", href: "/Services/Services-7" },
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
    { name: "Why Us", href: "/#whyus" },
    { name: "Team", href: "/#team" },
  ];

  // Handle Scroll Spy (Only run when on the home page)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      if (router.pathname === "/" && window.scrollY < 300) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Only set up intersection observer if we are on the homepage
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

  // FIXED ACTIVE TAB LOGIC
  const checkIsActive = (link) => {
    if (link.isDropdown) {
      // Highlight "Services" if the current URL contains "/Services"
      return router.pathname.startsWith("/Services");
    }

    if (router.pathname === "/") {
      // If on home page, use the scroll spy
      if (link.href === "/") return activeSection === "home";
      const hash = link.href.split("#")[1];
      return activeSection === hash;
    } else {
      // If on another page, just check if it exactly matches the URL
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

      // If we are already on the homepage, smoothly scroll to the section
      if (router.pathname === "/") {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const offsetTop =
            targetElement.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: offsetTop, behavior: "smooth" });
        }
      }
      // If we are NOT on the homepage, let the standard Next.js Link handle the navigation to /#id
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background shadow-[0_4px_20px_rgba(0,0,0,0.05)] border-b border-border/40 py-4"
          : "bg-transparent border-b border-transparent py-6"
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
                width={130}
                height={40}
                className="w-auto h-8 sm:h-10 hover:opacity-80 transition-opacity cursor-pointer object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Menu - Modern Clean Layout */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = checkIsActive(link);

              if (link.isDropdown) {
                return (
                  <div key={link.name} className="relative group h-full py-2">
                    <button
                      className={`flex items-center gap-1 text-[15px] font-bold transition-colors duration-300 ${
                        isActive
                          ? "text-primary"
                          : "text-foreground hover:text-primary"
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
                          strokeWidth={2.5}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {/* Active Underline Indicator */}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-t-md"></div>
                    )}

                    {/* Mega Menu Dropdown */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="w-[850px] bg-background border border-border shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] rounded-2xl p-8 grid grid-cols-3 gap-y-6 gap-x-8">
                        {servicesList.map((service, idx) => {
                          const isServiceActive =
                            router.pathname === service.href;
                          return (
                            <Link
                              key={idx}
                              href={service.href}
                              className={`group/link flex flex-col gap-1.5 p-3 -m-3 rounded-xl transition-colors duration-200 ${
                                isServiceActive
                                  ? "bg-muted"
                                  : "hover:bg-muted/50"
                              }`}
                            >
                              <span
                                className={`text-[15px] font-bold transition-colors duration-200 ${
                                  isServiceActive
                                    ? "text-primary"
                                    : "text-foreground group-hover/link:text-primary"
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
                    className={`text-[15px] font-bold transition-colors duration-300 ${
                      isActive
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </Link>
                  {/* Active Underline Indicator */}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-t-md"></div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Call to Action Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="/#contact"
              onClick={(e) => handleNavClick(e, "/#contact")}
              className="bg-primary text-[#161616] px-7 py-3 rounded-xl text-[15px] font-black tracking-wide shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              Let's Talk
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary focus:outline-none p-2 transition-colors"
              aria-label="Toggle Menu"
            >
              <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-2xl overflow-hidden transition-all duration-300 origin-top ${
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
                    className="flex flex-col border-b border-border/50 pb-4"
                  >
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className={`flex justify-between items-center w-full py-2 text-lg font-black transition-colors ${
                        isActive
                          ? "text-primary"
                          : "text-foreground hover:text-primary"
                      }`}
                    >
                      {link.name}
                      <svg
                        className={`w-6 h-6 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180 text-primary" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
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
                      <div className="flex flex-col space-y-2 pl-4 border-l-2 border-primary/20">
                        {servicesList.map((service, idx) => {
                          const isServiceActive =
                            router.pathname === service.href;
                          return (
                            <Link
                              key={idx}
                              href={service.href}
                              onClick={() => setIsOpen(false)}
                              className={`py-2 px-4 rounded-lg text-[15px] font-bold transition-colors ${
                                isServiceActive
                                  ? "bg-primary/10 text-primary"
                                  : "text-foreground/80 hover:text-primary hover:bg-muted"
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
                  className={`block py-2 text-lg font-black border-b border-border/50 transition-colors ${
                    isActive
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-6 pb-4">
              <Link
                href="/#contact"
                onClick={(e) => handleNavClick(e, "/#contact")}
                className="flex justify-center w-full bg-primary text-[#161616] px-4 py-4 rounded-xl text-lg font-black tracking-wide shadow-sm active:scale-95 transition-all"
              >
                Let's Talk
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
