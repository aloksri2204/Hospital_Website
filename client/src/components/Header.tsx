import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Our Doctors", href: "/doctors" },
    { name: "Health Resources", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="border-b border-gray-100 py-2">
          <div className="flex justify-between items-center text-xs sm:text-sm">
            <div className="flex items-center space-x-2 sm:space-x-6 care-gray">
              <span className="flex items-center"><i className="fas fa-phone mr-1 sm:mr-2"></i><span className="hidden sm:inline">Emergency: </span>+1 (555) 911-CARE</span>
              <span className="hidden md:inline"><i className="fas fa-clock mr-2"></i>24/7 Emergency Services</span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <a href="#" className="care-gray hover:care-blue p-1"><i className="fab fa-facebook"></i></a>
              <a href="#" className="care-gray hover:care-blue p-1"><i className="fab fa-twitter"></i></a>
              <a href="#" className="care-gray hover:care-blue p-1"><i className="fab fa-instagram"></i></a>
              <Button size="sm" className="bg-care-blue text-white hover:bg-blue-600 text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2">
                Portal
              </Button>
            </div>
          </div>
        </div>
        
        {/* Main Navigation */}
        <nav className="py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <i className="fas fa-heart care-blue text-xl sm:text-2xl mr-2 sm:mr-3"></i>
              <h1 className="text-lg sm:text-2xl font-bold care-dark">CarePlus Hospital</h1>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition ${
                    location === item.href
                      ? "care-blue"
                      : "care-dark hover:care-blue"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/appointments">
                <Button className="bg-care-green text-white hover:bg-green-600 font-medium">
                  Book Appointment
                </Button>
              </Link>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden care-dark"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
          
          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-100">
              <div className="flex flex-col space-y-4 pt-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`font-medium ${
                      location === item.href
                        ? "care-blue"
                        : "care-dark hover:care-blue"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link href="/appointments" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="bg-care-green text-white hover:bg-green-600 font-medium w-fit">
                    Book Appointment
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
