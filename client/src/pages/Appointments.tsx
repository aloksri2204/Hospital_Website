import AppointmentForm from "@/components/AppointmentForm";

export default function Appointments() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-care-blue to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Book Your Appointment</h1>
            <p className="text-xl lg:text-2xl text-blue-100">
              Schedule your visit with our expert doctors. We're here to provide the best care for you and your family.
            </p>
          </div>
        </div>
      </section>

      {/* Appointment Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AppointmentForm />
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-care-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold care-dark mb-4">What to Expect</h2>
              <p className="text-lg care-gray max-w-2xl mx-auto">
                We've made the appointment process simple and convenient for you and your family.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="bg-care-blue p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-bold care-dark mb-3">Book Online</h3>
                <p className="care-gray">Fill out our simple appointment form with your preferred date and doctor.</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="bg-care-green p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-bold care-dark mb-3">Confirmation</h3>
                <p className="care-gray">We'll confirm your appointment within 2 hours via phone or email.</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="bg-purple-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-bold care-dark mb-3">Your Visit</h3>
                <p className="care-gray">Arrive 15 minutes early for check-in and enjoy personalized care.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold care-dark mb-4">Types of Appointments</h2>
              <p className="text-lg care-gray max-w-2xl mx-auto">
                We offer various appointment types to meet your healthcare needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-care-bg rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-4 rounded-full mr-4">
                    <i className="fas fa-baby care-blue text-2xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold care-dark">Pediatric Appointments</h3>
                </div>
                <ul className="space-y-3 care-gray mb-6">
                  <li className="flex items-center">
                    <i className="fas fa-check care-green mr-3"></i>
                    Well-child checkups
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check care-green mr-3"></i>
                    Immunizations
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check care-green mr-3"></i>
                    Sick visits
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check care-green mr-3"></i>
                    Sports physicals
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check care-green mr-3"></i>
                    Developmental assessments
                  </li>
                </ul>
                <p className="text-sm care-gray">
                  <strong>Typical Duration:</strong> 30-45 minutes<br />
                  <strong>Bring:</strong> Insurance card, vaccination records, list of current medications
                </p>
              </div>

              <div className="bg-care-bg rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-pink-100 p-4 rounded-full mr-4">
                    <i className="fas fa-female text-pink-600 text-2xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold care-dark">Gynecology Appointments</h3>
                </div>
                <ul className="space-y-3 care-gray mb-6">
                  <li className="flex items-center">
                    <i className="fas fa-check care-green mr-3"></i>
                    Annual wellness exams
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check care-green mr-3"></i>
                    Prenatal care visits
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check care-green mr-3"></i>
                    Fertility consultations
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check care-green mr-3"></i>
                    Problem-focused visits
                  </li>
                  <li className="flex items-center">
                    <i className="fas fa-check care-green mr-3"></i>
                    Surgical consultations
                  </li>
                </ul>
                <p className="text-sm care-gray">
                  <strong>Typical Duration:</strong> 30-60 minutes<br />
                  <strong>Bring:</strong> Insurance card, medication list, previous test results
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-red-50 border border-red-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <i className="fas fa-exclamation-triangle text-red-600 text-3xl mr-4"></i>
              <h2 className="text-3xl font-bold text-red-600">Emergency Services</h2>
            </div>
            <p className="text-lg text-red-600 mb-6">
              For life-threatening emergencies, call <strong>911</strong> immediately.
            </p>
            <p className="text-lg text-red-600 mb-8">
              For urgent pediatric or gynecological concerns, call our emergency line:
            </p>
            <a 
              href="tel:+1555911CARE" 
              className="inline-block bg-red-600 hover:bg-red-700 text-white text-2xl font-bold px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg"
            >
              <i className="fas fa-phone mr-3"></i>+1 (555) 911-CARE
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
