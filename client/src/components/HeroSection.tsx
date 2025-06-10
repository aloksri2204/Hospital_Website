import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-care-blue to-blue-600 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800')`
        }}
      ></div>
      <div className="relative container mx-auto px-4 py-16 sm:py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Compassionate Care for<br className="hidden sm:block" />
            <span className="text-yellow-300">Women and Children</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 text-blue-100 max-w-3xl mx-auto px-4">
            Providing expert pediatric services and gynecological care with a patient-first approach. 
            Your family's health and well-being are our top priorities.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Link href="/appointments">
              <Button 
                size="lg" 
                className="bg-care-green hover:bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all transform hover:scale-105 shadow-lg w-full sm:w-auto touch-target"
              >
                <i className="fas fa-calendar-alt mr-2"></i>Book an Appointment
              </Button>
            </Link>
            <Link href="/doctors">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white hover:bg-gray-100 text-care-blue px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all transform hover:scale-105 shadow-lg w-full sm:w-auto touch-target"
              >
                <i className="fas fa-user-md mr-2"></i>Meet Our Doctors
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
