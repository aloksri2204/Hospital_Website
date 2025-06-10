export default function About() {
  const leadership = [
    {
      name: "Dr. Robert Mitchell",
      title: "Chief Medical Officer",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      bio: "Dr. Mitchell brings over 30 years of experience in healthcare administration and pediatric medicine."
    },
    {
      name: "Ms. Jennifer Adams",
      title: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      bio: "Ms. Adams has led CarePlus Hospital to become a premier healthcare institution in the region."
    },
    {
      name: "Dr. Patricia Wong",
      title: "Director of Nursing",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      bio: "Dr. Wong oversees our exceptional nursing staff and ensures the highest standards of patient care."
    }
  ];

  const values = [
    {
      icon: "fas fa-heart",
      title: "Compassion",
      description: "We treat every patient with empathy, kindness, and understanding, recognizing the trust placed in us during vulnerable moments."
    },
    {
      icon: "fas fa-shield-alt",
      title: "Excellence",
      description: "We strive for the highest standards in medical care, continuously improving our services and staying current with medical advances."
    },
    {
      icon: "fas fa-users",
      title: "Collaboration",
      description: "We work together as a unified team, fostering open communication and mutual respect among all staff members."
    },
    {
      icon: "fas fa-lightbulb",
      title: "Innovation",
      description: "We embrace new technologies and treatment methods to provide cutting-edge care for our patients."
    },
    {
      icon: "fas fa-balance-scale",
      title: "Integrity",
      description: "We maintain the highest ethical standards in all our interactions, ensuring transparency and honesty."
    },
    {
      icon: "fas fa-globe",
      title: "Community",
      description: "We are committed to serving our community and improving the health and well-being of all residents."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-care-blue to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">About CarePlus Hospital</h1>
            <p className="text-xl lg:text-2xl text-blue-100">
              Dedicated to providing exceptional healthcare for women and children with compassion, 
              innovation, and excellence for over 25 years.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12 mb-16">
              {/* Mission */}
              <div className="text-center">
                <div className="bg-care-blue p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <i className="fas fa-bullseye text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold care-dark mb-4">Our Mission</h3>
                <p className="care-gray">
                  To provide comprehensive, compassionate healthcare services for women and children, 
                  ensuring the highest quality medical care in a safe, welcoming environment.
                </p>
              </div>

              {/* Vision */}
              <div className="text-center">
                <div className="bg-care-green p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <i className="fas fa-eye text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold care-dark mb-4">Our Vision</h3>
                <p className="care-gray">
                  To be the leading healthcare institution for women and children, recognized for excellence 
                  in patient care, medical innovation, and community service.
                </p>
              </div>

              {/* Values */}
              <div className="text-center">
                <div className="bg-purple-500 p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <i className="fas fa-gem text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold care-dark mb-4">Our Values</h3>
                <p className="care-gray">
                  Guided by compassion, excellence, integrity, and innovation in everything we do, 
                  always putting our patients and their families first.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="py-16 bg-care-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold care-dark mb-4">Our Core Values</h2>
              <p className="text-lg care-gray max-w-2xl mx-auto">
                These fundamental principles guide our actions and decisions in providing exceptional healthcare.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="bg-care-blue p-4 rounded-full w-16 h-16 mb-4 flex items-center justify-center">
                    <i className={`${value.icon} text-white text-xl`}></i>
                  </div>
                  <h4 className="text-xl font-bold care-dark mb-3">{value.title}</h4>
                  <p className="care-gray">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold care-dark mb-6">Our History</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-care-blue text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 font-bold text-sm">
                      1998
                    </div>
                    <div>
                      <h4 className="font-semibold care-dark mb-1">Foundation</h4>
                      <p className="care-gray">CarePlus Hospital was founded with a vision to provide specialized care for women and children.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-care-blue text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 font-bold text-sm">
                      2005
                    </div>
                    <div>
                      <h4 className="font-semibold care-dark mb-1">Expansion</h4>
                      <p className="care-gray">Added state-of-the-art NICU and expanded pediatric services to serve more families.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-care-blue text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 font-bold text-sm">
                      2015
                    </div>
                    <div>
                      <h4 className="font-semibold care-dark mb-1">Accreditation</h4>
                      <p className="care-gray">Achieved JCI accreditation, recognizing our commitment to patient safety and quality care.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-care-blue text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 font-bold text-sm">
                      2023
                    </div>
                    <div>
                      <h4 className="font-semibold care-dark mb-1">Modern Era</h4>
                      <p className="care-gray">Continued growth and innovation, serving over 10,000 patients annually with cutting-edge technology.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Hospital history" 
                  className="rounded-2xl shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-care-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold care-dark mb-4">Our Leadership</h2>
              <p className="text-lg care-gray max-w-2xl mx-auto">
                Meet the experienced leaders who guide CarePlus Hospital's mission and vision.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {leadership.map((leader, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h4 className="text-xl font-bold care-dark mb-2">{leader.name}</h4>
                  <p className="care-blue font-semibold mb-3">{leader.title}</p>
                  <p className="care-gray text-sm">{leader.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold care-dark mb-4">Quality Assurance & Accreditation</h2>
              <p className="text-lg care-gray max-w-2xl mx-auto">
                We maintain the highest standards of quality and safety through rigorous accreditation and continuous improvement.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-yellow-100 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <i className="fas fa-certificate text-yellow-600 text-2xl"></i>
                </div>
                <h4 className="font-bold care-dark mb-2">JCI Accredited</h4>
                <p className="care-gray text-sm">International standards for patient safety</p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <i className="fas fa-star text-green-600 text-2xl"></i>
                </div>
                <h4 className="font-bold care-dark mb-2">5-Star Rating</h4>
                <p className="care-gray text-sm">Top patient satisfaction scores</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <i className="fas fa-microscope text-blue-600 text-2xl"></i>
                </div>
                <h4 className="font-bold care-dark mb-2">CAP Certified</h4>
                <p className="care-gray text-sm">Laboratory excellence standards</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <i className="fas fa-shield-alt text-purple-600 text-2xl"></i>
                </div>
                <h4 className="font-bold care-dark mb-2">HIPAA Compliant</h4>
                <p className="care-gray text-sm">Protected health information security</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
