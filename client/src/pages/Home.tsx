import { useQuery } from "@tanstack/react-query";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import DoctorCard from "@/components/DoctorCard";
import TestimonialCard from "@/components/TestimonialCard";
import BlogCard from "@/components/BlogCard";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import type { Doctor, BlogPost } from "@shared/schema";
import sarahMImg from "@/assets/testimonials/sarah-m.svg";
import emilyRImg from "@/assets/testimonials/emily-r.svg";
import jamesTImg from "@/assets/testimonials/james-t.svg";

export default function Home() {
  const { data: doctors = [] } = useQuery<Doctor[]>({
    queryKey: ["/api/doctors"],
  });

  const { data: blogPosts = [] } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog"],
  });

  const pediatricServices = [
    "General Pediatrics",
    "Neonatal Care (NICU)",
    "Immunization & Vaccination",
    "Pediatric Surgery",
    "Growth & Development Monitoring"
  ];

  const gynecologyServices = [
    "Prenatal & Antenatal Care",
    "Menstrual Disorders",
    "Fertility Consultation",
    "Gynecologic Surgeries",
    "Menopause Management"
  ];

  const testimonials = [
    {
      rating: 5,
      review: "Dr. Johnson was incredible with my 3-year-old. She made him feel comfortable and explained everything to us clearly. The entire staff was so caring and professional.",
      name: "Sarah M.",
      title: "Mother of 2",
      image: sarahMImg
    },
    {
      rating: 5,
      review: "The prenatal care I received from Dr. Rodriguez was exceptional. She guided me through my entire pregnancy with such expertise and compassion.",
      name: "Emily R.",
      title: "New Mother",
      image: emilyRImg
    },
    {
      rating: 5,
      review: "Dr. Chen performed my daughter's surgery with such skill and care. The recovery was smooth and the follow-up care was outstanding.",
      name: "James T.",
      title: "Father",
      image: jamesTImg
    }
  ];

  const featuredDoctors = doctors.slice(0, 3);
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <>
      <HeroSection />

      {/* Quick Services Overview */}
      <section className="py-16 bg-care-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold care-dark mb-4">Our Specialized Services</h2>
            <p className="text-lg care-gray max-w-2xl mx-auto">
              Comprehensive healthcare solutions tailored for women and children at every stage of life
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <ServiceCard 
              title="Pediatric Services"
              icon="fas fa-baby"
              iconColor="care-blue"
              iconBg="bg-blue-100"
              services={pediatricServices}
              department="pediatrics"
            />
            <ServiceCard 
              title="Gynecology Services"
              icon="fas fa-female"
              iconColor="text-pink-600"
              iconBg="bg-pink-100"
              services={gynecologyServices}
              department="gynecology"
            />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Modern medical facility" 
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold care-dark mb-6">About CarePlus Hospital</h2>
              <p className="text-lg care-gray mb-6">
                For over 25 years, CarePlus Hospital has been a beacon of hope and healing in our community. 
                We specialize in providing exceptional pediatric and gynecological care with a commitment to 
                innovation, compassion, and excellence.
              </p>
              
              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold care-blue mb-2">25+</div>
                  <div className="care-gray">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold care-blue mb-2">50+</div>
                  <div className="care-gray">Expert Doctors</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold care-blue mb-2">10k+</div>
                  <div className="care-gray">Patients Served</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <i className="fas fa-award care-green text-xl mr-4 mt-1"></i>
                  <div>
                    <h4 className="font-semibold care-dark mb-1">JCI Accredited</h4>
                    <p className="care-gray">International standards for patient safety and quality care</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-shield-alt care-green text-xl mr-4 mt-1"></i>
                  <div>
                    <h4 className="font-semibold care-dark mb-1">State-of-the-Art Technology</h4>
                    <p className="care-gray">Advanced medical equipment and modern facilities</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-heart care-green text-xl mr-4 mt-1"></i>
                  <div>
                    <h4 className="font-semibold care-dark mb-1">Patient-Centered Care</h4>
                    <p className="care-gray">Personalized treatment plans and compassionate service</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link href="/about">
                  <Button className="bg-care-blue hover:bg-blue-600 text-white">
                    Learn More About Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Doctors */}
      <section className="py-16 bg-care-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold care-dark mb-4">Meet Our Expert Doctors</h2>
            <p className="text-lg care-gray max-w-2xl mx-auto">
              Our team of highly qualified specialists are dedicated to providing the best care for you and your family
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {featuredDoctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/doctors">
              <Button className="bg-care-blue hover:bg-blue-600 text-white">
                View All Doctors <i className="fas fa-arrow-right ml-2"></i>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold care-dark mb-4">What Our Patients Say</h2>
            <p className="text-lg care-gray max-w-2xl mx-auto">
              Real stories from families who have experienced our compassionate care
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Health Resources Blog */}
      <section className="py-16 bg-care-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold care-dark mb-4">Health Resources & Blog</h2>
            <p className="text-lg care-gray max-w-2xl mx-auto">
              Expert advice and information on women's health, child care, and wellness
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {latestPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/blog">
              <Button className="bg-care-blue hover:bg-blue-600 text-white">
                View All Articles <i className="fas fa-arrow-right ml-2"></i>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
