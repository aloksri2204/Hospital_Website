import ServiceCard from "@/components/ServiceCard";

export default function Services() {
  const pediatricServices = [
    {
      title: "General Pediatrics",
      description: "Comprehensive healthcare for children from infancy through adolescence, including routine checkups, immunizations, and treatment of common childhood illnesses.",
      icon: "fas fa-baby",
      features: ["Well-child visits", "Sick visits", "School physicals", "Sports physicals", "Behavioral assessments"]
    },
    {
      title: "Neonatal Care (NICU)",
      description: "Specialized intensive care for premature babies and newborns with medical complications, providing 24/7 monitoring and advanced life support.",
      icon: "fas fa-heart-pulse",
      features: ["Level III NICU", "Ventilator support", "Nutritional support", "Developmental care", "Family-centered care"]
    },
    {
      title: "Immunization & Vaccination",
      description: "Complete vaccination services following CDC guidelines to protect children from preventable diseases and maintain community health.",
      icon: "fas fa-syringe",
      features: ["Routine immunizations", "Travel vaccines", "Catch-up vaccinations", "Vaccine counseling", "Immunization records"]
    },
    {
      title: "Pediatric Surgery",
      description: "Minimally invasive surgical procedures for children, performed by board-certified pediatric surgeons with specialized training.",
      icon: "fas fa-procedures",
      features: ["Laparoscopic surgery", "Hernia repair", "Appendectomy", "Minor procedures", "Same-day surgery"]
    },
    {
      title: "Growth & Development Monitoring",
      description: "Comprehensive assessment of physical, cognitive, and emotional development to ensure children reach their full potential.",
      icon: "fas fa-chart-line",
      features: ["Growth charts", "Developmental screenings", "Learning assessments", "Nutritional counseling", "Milestone tracking"]
    },
    {
      title: "Emergency Pediatric Care",
      description: "24/7 emergency services specifically designed for children, with pediatric-trained staff and child-friendly equipment.",
      icon: "fas fa-ambulance",
      features: ["Pediatric ER", "Trauma care", "Poison control", "Urgent care", "Emergency procedures"]
    }
  ];

  const gynecologyServices = [
    {
      title: "Prenatal & Antenatal Care",
      description: "Comprehensive pregnancy care from conception through delivery, ensuring the health of both mother and baby throughout the journey.",
      icon: "fas fa-baby-carriage",
      features: ["Regular checkups", "Ultrasounds", "Genetic screening", "Birth planning", "High-risk pregnancy care"]
    },
    {
      title: "Menstrual Disorders",
      description: "Diagnosis and treatment of menstrual irregularities, helping women manage conditions that affect their quality of life.",
      icon: "fas fa-calendar-days",
      features: ["Heavy bleeding treatment", "Irregular periods", "PCOS management", "Endometriosis care", "Hormonal therapy"]
    },
    {
      title: "Fertility Consultation",
      description: "Comprehensive fertility evaluation and treatment options for couples trying to conceive, with personalized care plans.",
      icon: "fas fa-seedling",
      features: ["Fertility testing", "Ovulation induction", "IUI procedures", "IVF consultation", "Male factor evaluation"]
    },
    {
      title: "Gynecologic Surgeries",
      description: "Advanced surgical procedures using minimally invasive techniques whenever possible, ensuring faster recovery times.",
      icon: "fas fa-scalpel",
      features: ["Laparoscopic surgery", "Hysterectomy", "Fibroid removal", "Ovarian cysts", "Endometrial ablation"]
    },
    {
      title: "Menopause Management",
      description: "Personalized care to help women navigate the physical and emotional changes of menopause with comfort and confidence.",
      icon: "fas fa-leaf",
      features: ["Hormone therapy", "Symptom management", "Bone health", "Cardiovascular health", "Lifestyle counseling"]
    },
    {
      title: "Annual Wellness Exams",
      description: "Comprehensive annual examinations to maintain women's health and detect potential issues early for better outcomes.",
      icon: "fas fa-stethoscope",
      features: ["Pap smears", "Breast exams", "STD screening", "Contraceptive counseling", "Health education"]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-care-blue to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Medical Services</h1>
            <p className="text-xl lg:text-2xl text-blue-100">
              Comprehensive healthcare services for women and children, delivered with compassion and expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Pediatric Services */}
      <section id="pediatrics" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="bg-blue-100 p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <i className="fas fa-baby care-blue text-3xl"></i>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold care-dark mb-4">Pediatric Services</h2>
              <p className="text-lg care-gray max-w-2xl mx-auto">
                Specialized medical care for children from birth through adolescence, ensuring healthy growth and development.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pediatricServices.map((service, index) => (
                <div key={index} className="bg-care-bg rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mb-4 flex items-center justify-center">
                    <i className={`${service.icon} care-blue text-xl`}></i>
                  </div>
                  <h3 className="text-xl font-bold care-dark mb-3">{service.title}</h3>
                  <p className="care-gray mb-4 text-sm">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm care-gray">
                        <i className="fas fa-check care-green mr-2 text-xs"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gynecology Services */}
      <section id="gynecology" className="py-16 bg-care-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="bg-pink-100 p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <i className="fas fa-female text-pink-600 text-3xl"></i>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold care-dark mb-4">Gynecology Services</h2>
              <p className="text-lg care-gray max-w-2xl mx-auto">
                Comprehensive women's healthcare services addressing all aspects of reproductive and sexual health.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gynecologyServices.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="bg-pink-100 p-4 rounded-full w-16 h-16 mb-4 flex items-center justify-center">
                    <i className={`${service.icon} text-pink-600 text-xl`}></i>
                  </div>
                  <h3 className="text-xl font-bold care-dark mb-3">{service.title}</h3>
                  <p className="care-gray mb-4 text-sm">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm care-gray">
                        <i className="fas fa-check care-green mr-2 text-xs"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold care-dark mb-4">Why Choose CarePlus Hospital?</h2>
              <p className="text-lg care-gray max-w-2xl mx-auto">
                We're committed to providing exceptional care with the latest technology and most compassionate approach.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-care-blue p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <i className="fas fa-user-md text-white text-2xl"></i>
                </div>
                <h4 className="text-xl font-bold care-dark mb-3">Expert Specialists</h4>
                <p className="care-gray">Board-certified doctors with years of specialized training and experience.</p>
              </div>

              <div className="text-center">
                <div className="bg-care-green p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <i className="fas fa-cogs text-white text-2xl"></i>
                </div>
                <h4 className="text-xl font-bold care-dark mb-3">Advanced Technology</h4>
                <p className="care-gray">State-of-the-art medical equipment and minimally invasive procedures.</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-500 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <i className="fas fa-heart text-white text-2xl"></i>
                </div>
                <h4 className="text-xl font-bold care-dark mb-3">Compassionate Care</h4>
                <p className="care-gray">Patient-centered approach with emphasis on comfort and understanding.</p>
              </div>

              <div className="text-center">
                <div className="bg-orange-500 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <i className="fas fa-clock text-white text-2xl"></i>
                </div>
                <h4 className="text-xl font-bold care-dark mb-3">24/7 Availability</h4>
                <p className="care-gray">Round-the-clock emergency services and urgent care when you need it.</p>
              </div>

              <div className="text-center">
                <div className="bg-teal-500 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <i className="fas fa-home text-white text-2xl"></i>
                </div>
                <h4 className="text-xl font-bold care-dark mb-3">Family-Centered</h4>
                <p className="care-gray">Welcoming environment designed for the comfort of entire families.</p>
              </div>

              <div className="text-center">
                <div className="bg-indigo-500 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <i className="fas fa-award text-white text-2xl"></i>
                </div>
                <h4 className="text-xl font-bold care-dark mb-3">Accredited Quality</h4>
                <p className="care-gray">JCI accredited facility maintaining highest standards of safety and quality.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
