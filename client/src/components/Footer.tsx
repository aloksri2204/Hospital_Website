import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="bg-care-dark text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Hospital Info */}
          <div>
            <div className="flex items-center mb-6">
              <i className="fas fa-heart care-blue text-2xl mr-3"></i>
              <h3 className="text-2xl font-bold">CarePlus Hospital</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Providing compassionate healthcare for women and children with expert medical care, 
              modern facilities, and a patient-first approach.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-care-blue p-3 rounded-full hover:bg-blue-600 transition">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="bg-care-blue p-3 rounded-full hover:bg-blue-600 transition">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="bg-care-blue p-3 rounded-full hover:bg-blue-600 transition">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="bg-care-blue p-3 rounded-full hover:bg-blue-600 transition">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-300 hover:text-white transition">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition">About Us</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition">Our Services</Link></li>
              <li><Link href="/doctors" className="text-gray-300 hover:text-white transition">Our Doctors</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-white transition">Health Resources</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition">Contact Us</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-gray-300 hover:text-white transition">General Pediatrics</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition">Neonatal Care</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition">Prenatal Care</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition">Gynecologic Surgery</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition">Fertility Consultation</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition">Emergency Services</Link></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-bold mb-6">Stay Connected</h4>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for health tips and updates</p>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-gray-700 text-white border-gray-600 focus:border-care-blue"
              />
              <Button 
                type="submit" 
                className="w-full bg-care-blue hover:bg-blue-600 text-white font-semibold"
              >
                Subscribe <i className="fas fa-arrow-right ml-2"></i>
              </Button>
            </form>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="text-gray-300 mb-4 lg:mb-0">
              <p>&copy; 2023 CarePlus Hospital. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-white transition">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-white transition">Terms & Conditions</a>
              <a href="/patient-info" className="text-gray-300 hover:text-white transition">Patient Rights</a>
              <a href="#" className="text-gray-300 hover:text-white transition">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
