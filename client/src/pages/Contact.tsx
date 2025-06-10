import ContactForm from "@/components/ContactForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Contact() {
  const contactInfo = [
    {
      icon: "fas fa-map-marker-alt",
      title: "Address",
      details: ["1234 Healthcare Drive", "Medical City, MC 12345"]
    },
    {
      icon: "fas fa-phone",
      title: "Phone Numbers",
      details: [
        "Appointments: +1 (555) 123-4567",
        "Emergency: +1 (555) 911-CARE"
      ]
    },
    {
      icon: "fas fa-envelope",
      title: "Email",
      details: [
        "info@careplushospital.com",
        "appointments@careplushospital.com"
      ]
    },
    {
      icon: "fas fa-clock",
      title: "Hours",
      details: [
        "Mon - Fri: 8:00 AM - 8:00 PM",
        "Saturday: 9:00 AM - 5:00 PM",
        "Sunday: 10:00 AM - 4:00 PM",
        "Emergency: 24/7"
      ]
    }
  ];

  const departments = [
    {
      name: "Pediatrics Department",
      phone: "+1 (555) 123-KIDS",
      email: "pediatrics@careplushospital.com",
      head: "Dr. Sarah Johnson"
    },
    {
      name: "Gynecology Department", 
      phone: "+1 (555) 123-WOMEN",
      email: "gynecology@careplushospital.com",
      head: "Dr. Maria Rodriguez"
    },
    {
      name: "Emergency Department",
      phone: "+1 (555) 911-CARE",
      email: "emergency@careplushospital.com",
      head: "Dr. James Wilson"
    },
    {
      name: "Administration",
      phone: "+1 (555) 123-4567",
      email: "admin@careplushospital.com",
      head: "Ms. Jennifer Adams"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-care-blue to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl lg:text-2xl text-blue-100">
              Get in touch with us for appointments, inquiries, or emergency services. We're here to help 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 bg-care-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Contact Information */}
              <div>
                <Card className="bg-white shadow-lg mb-8">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold care-dark">Get In Touch</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {contactInfo.map((info, index) => (
                        <div key={index} className="flex items-start">
                          <div className="bg-care-blue p-3 rounded-full mr-4 flex-shrink-0">
                            <i className={`${info.icon} text-white`}></i>
                          </div>
                          <div>
                            <h4 className="font-semibold care-dark mb-1">{info.title}</h4>
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="care-gray">
                                {info.title === "Phone Numbers" && detail.includes("Emergency") ? (
                                  <span className="text-red-600 font-semibold">{detail}</span>
                                ) : info.title === "Phone Numbers" ? (
                                  <a href={`tel:${detail.split(': ')[1]}`} className="care-blue hover:underline">
                                    {detail}
                                  </a>
                                ) : info.title === "Email" ? (
                                  <a href={`mailto:${detail}`} className="care-blue hover:underline">
                                    {detail}
                                  </a>
                                ) : (
                                  detail
                                )}
                              </p>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Emergency Notice */}
                <Card className="bg-red-50 border border-red-200">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <i className="fas fa-exclamation-triangle text-red-600 text-xl mr-3"></i>
                      <h4 className="font-bold text-red-600">Emergency Services</h4>
                    </div>
                    <p className="text-red-600 mb-3">
                      For life-threatening emergencies, call <strong>911</strong> immediately.
                    </p>
                    <p className="text-red-600">
                      For urgent pediatric or gynecological concerns, call our emergency line:{" "}
                      <a href="tel:+1555911CARE" className="font-bold hover:underline">
                        +1 (555) 911-CARE
                      </a>
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold care-dark mb-4">Department Contacts</h2>
              <p className="text-lg care-gray max-w-2xl mx-auto">
                Need to reach a specific department? Here are direct contact details for our main services.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {departments.map((dept, index) => (
                <Card key={index} className="bg-care-bg shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="care-dark flex items-center">
                      <i className={`fas ${
                        dept.name.includes('Pediatrics') ? 'fa-baby' :
                        dept.name.includes('Gynecology') ? 'fa-female' :
                        dept.name.includes('Emergency') ? 'fa-ambulance' :
                        'fa-building'
                      } care-blue mr-3`}></i>
                      {dept.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <p className="care-gray">
                        <i className="fas fa-user-md mr-2"></i>
                        <strong>Department Head:</strong> {dept.head}
                      </p>
                      <p className="care-gray">
                        <i className="fas fa-phone mr-2"></i>
                        <a href={`tel:${dept.phone}`} className="care-blue hover:underline">
                          {dept.phone}
                        </a>
                      </p>
                      <p className="care-gray">
                        <i className="fas fa-envelope mr-2"></i>
                        <a href={`mailto:${dept.email}`} className="care-blue hover:underline">
                          {dept.email}
                        </a>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location & Directions */}
      <section className="py-16 bg-care-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold care-dark mb-4">Location & Directions</h2>
              <p className="text-lg care-gray max-w-2xl mx-auto">
                Find us easily with these directions and parking information.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Google Map */}
              <Card className="bg-white shadow-lg">
                <CardContent className="p-0">
                  <div className="h-48 sm:h-64 lg:h-80 rounded-t-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.4068715482785!2d-122.41941148461573!3d37.77492997975787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c5b5e3e5b%3A0x9b3f5b5b5e3e5b5b!2sSan%20Francisco%20General%20Hospital!5e0!3m2!1sen!2sus!4v1635789012345"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="CarePlus Hospital Location"
                    ></iframe>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-bold care-dark">Getting Here</h4>
                      <a 
                        href="https://www.google.com/maps/dir//1234+Healthcare+Drive,+Medical+City,+MC+12345"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-care-blue hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all"
                      >
                        <i className="fas fa-directions mr-2"></i>Get Directions
                      </a>
                    </div>
                    <ul className="space-y-2 care-gray text-sm">
                      <li className="flex items-center">
                        <i className="fas fa-car mr-2 care-blue"></i>
                        Free parking available in our main lot
                      </li>
                      <li className="flex items-center">
                        <i className="fas fa-bus mr-2 care-blue"></i>
                        Public transit: Bus lines 12, 34, and 56
                      </li>
                      <li className="flex items-center">
                        <i className="fas fa-wheelchair mr-2 care-blue"></i>
                        Fully accessible facilities and parking
                      </li>
                      <li className="flex items-center">
                        <i className="fas fa-clock mr-2 care-blue"></i>
                        Valet parking available during peak hours
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Directions */}
              <div className="space-y-6">
                <Card className="bg-white shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center care-dark">
                      <i className="fas fa-route care-blue mr-3"></i>
                      Driving Directions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold care-dark mb-2">From Downtown</h5>
                        <p className="care-gray text-sm">Take Highway 101 North for 8 miles, exit at Medical Center Drive, turn right and continue for 2 miles.</p>
                      </div>
                      <div>
                        <h5 className="font-semibold care-dark mb-2">From Airport</h5>
                        <p className="care-gray text-sm">Take Airport Blvd to I-85 South, exit at Healthcare Way, turn left and follow signs to hospital.</p>
                      </div>
                      <div>
                        <h5 className="font-semibold care-dark mb-2">Public Transportation</h5>
                        <p className="care-gray text-sm">Metro bus lines stop directly in front of the main entrance. Check schedules at metro.gov.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-blue-50 border border-blue-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-blue-700">
                      <i className="fas fa-info-circle mr-3"></i>
                      Visitor Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-blue-600">
                      <li className="flex items-center">
                        <i className="fas fa-clock mr-2"></i>
                        Visiting hours: 8:00 AM - 8:00 PM daily
                      </li>
                      <li className="flex items-center">
                        <i className="fas fa-users mr-2"></i>
                        Maximum 2 visitors per patient
                      </li>
                      <li className="flex items-center">
                        <i className="fas fa-shield-virus mr-2"></i>
                        Health screening required at entrance
                      </li>
                      <li className="flex items-center">
                        <i className="fas fa-utensils mr-2"></i>
                        Cafeteria open 6:00 AM - 10:00 PM
                      </li>
                      <li className="flex items-center">
                        <i className="fas fa-wifi mr-2"></i>
                        Free WiFi available throughout facility
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
