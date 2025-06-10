import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function PatientInfo() {
  const [activeTab, setActiveTab] = useState("first-visit");

  const insurancePartners = [
    "Aetna", "Blue Cross Blue Shield", "Cigna", "Humana", "UnitedHealthcare",
    "Medicare", "Medicaid", "Kaiser Permanente", "Anthem", "Molina Healthcare"
  ];

  const faqs = [
    {
      question: "What should I bring to my first appointment?",
      answer: "Please bring a valid photo ID, your insurance card, a list of current medications, any previous medical records relevant to your visit, and a completed medical history form (available on our website or at check-in)."
    },
    {
      question: "How early should I arrive for my appointment?",
      answer: "We recommend arriving 15-20 minutes before your scheduled appointment time to complete check-in procedures and update any necessary paperwork."
    },
    {
      question: "What if I need to cancel or reschedule my appointment?",
      answer: "Please call us at least 24 hours in advance to cancel or reschedule your appointment. This allows us to offer the time slot to other patients who may need care."
    },
    {
      question: "Do you accept my insurance?",
      answer: "We accept most major insurance plans. Please contact our billing department at (555) 123-4567 to verify coverage for your specific plan and procedure."
    },
    {
      question: "How can I access my medical records?",
      answer: "You can request copies of your medical records through our Patient Portal or by submitting a written request to our Medical Records department. Some records may be available immediately through the portal."
    },
    {
      question: "What is your policy on prescription refills?",
      answer: "Prescription refill requests should be submitted at least 48 hours in advance. You can request refills through our Patient Portal, by calling our pharmacy line, or asking your pharmacy to contact us directly."
    },
    {
      question: "Do you offer telehealth appointments?",
      answer: "Yes, we offer telehealth appointments for certain types of consultations and follow-up visits. Please ask when scheduling to see if your appointment is suitable for a virtual visit."
    },
    {
      question: "What should I do if I have an emergency after hours?",
      answer: "For life-threatening emergencies, call 911 immediately. For urgent medical concerns, call our emergency line at (555) 911-CARE. For non-urgent questions, leave a message and we'll respond the next business day."
    }
  ];

  const patientRights = [
    {
      title: "Right to Quality Care",
      description: "You have the right to receive safe, effective, and compassionate medical care regardless of your race, ethnicity, religion, gender, sexual orientation, or ability to pay."
    },
    {
      title: "Right to Information",
      description: "You have the right to receive clear, complete information about your diagnosis, treatment options, risks, and expected outcomes in a language you understand."
    },
    {
      title: "Right to Privacy",
      description: "You have the right to privacy and confidentiality regarding your medical information and personal health records in accordance with HIPAA regulations."
    },
    {
      title: "Right to Participate in Care",
      description: "You have the right to participate in decisions about your care, including the right to refuse treatment and to request a second opinion."
    },
    {
      title: "Right to Voice Concerns",
      description: "You have the right to voice complaints about your care without fear of discrimination or retaliation, and to receive a timely response to your concerns."
    },
    {
      title: "Right to Access Records",
      description: "You have the right to access your medical records and to request corrections if you believe information is inaccurate or incomplete."
    }
  ];

  const patientResponsibilities = [
    {
      title: "Provide Accurate Information",
      description: "Provide complete and accurate information about your health history, medications, allergies, and any changes in your condition."
    },
    {
      title: "Follow Treatment Plans",
      description: "Follow the treatment plans and instructions provided by your healthcare team, and ask questions if you don't understand something."
    },
    {
      title: "Keep Appointments",
      description: "Arrive on time for appointments or provide adequate notice if you need to cancel or reschedule."
    },
    {
      title: "Respect Staff and Other Patients",
      description: "Treat healthcare staff and other patients with courtesy and respect, maintaining appropriate behavior in all interactions."
    },
    {
      title: "Financial Responsibility",
      description: "Understand your financial obligations and work with our billing department to address any payment concerns or questions."
    },
    {
      title: "Communication",
      description: "Communicate openly with your healthcare team about your concerns, symptoms, and any changes in your condition."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-care-blue to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Patient Information</h1>
            <p className="text-xl lg:text-2xl text-blue-100">
              Everything you need to know for a smooth and comfortable healthcare experience at CarePlus Hospital.
            </p>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setActiveTab("first-visit")}
                className={`px-6 py-3 rounded-full font-semibold transition ${
                  activeTab === "first-visit"
                    ? "bg-care-blue text-white"
                    : "bg-care-bg care-gray hover:care-blue"
                }`}
              >
                First Visit Guide
              </button>
              <button
                onClick={() => setActiveTab("insurance")}
                className={`px-6 py-3 rounded-full font-semibold transition ${
                  activeTab === "insurance"
                    ? "bg-care-blue text-white"
                    : "bg-care-bg care-gray hover:care-blue"
                }`}
              >
                Insurance Partners
              </button>
              <button
                onClick={() => setActiveTab("faqs")}
                className={`px-6 py-3 rounded-full font-semibold transition ${
                  activeTab === "faqs"
                    ? "bg-care-blue text-white"
                    : "bg-care-bg care-gray hover:care-blue"
                }`}
              >
                FAQs
              </button>
              <button
                onClick={() => setActiveTab("rights")}
                className={`px-6 py-3 rounded-full font-semibold transition ${
                  activeTab === "rights"
                    ? "bg-care-blue text-white"
                    : "bg-care-bg care-gray hover:care-blue"
                }`}
              >
                Patient Rights
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 bg-care-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* First Visit Guide */}
            {activeTab === "first-visit" && (
              <div>
                <div className="text-center mb-12">
                  <h2 className="text-3xl lg:text-4xl font-bold care-dark mb-4">Your First Visit</h2>
                  <p className="text-lg care-gray max-w-2xl mx-auto">
                    We want to make your first visit as comfortable and efficient as possible.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="bg-white shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center care-dark">
                        <i className="fas fa-clipboard-list care-blue mr-3"></i>
                        What to Bring
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-center care-gray">
                          <i className="fas fa-check care-green mr-3"></i>
                          Valid photo identification (driver's license, passport, etc.)
                        </li>
                        <li className="flex items-center care-gray">
                          <i className="fas fa-check care-green mr-3"></i>
                          Current insurance card and any referral forms
                        </li>
                        <li className="flex items-center care-gray">
                          <i className="fas fa-check care-green mr-3"></i>
                          Complete list of current medications and dosages
                        </li>
                        <li className="flex items-center care-gray">
                          <i className="fas fa-check care-green mr-3"></i>
                          Previous medical records and test results
                        </li>
                        <li className="flex items-center care-gray">
                          <i className="fas fa-check care-green mr-3"></i>
                          Payment method for copays or deductibles
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-white shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center care-dark">
                        <i className="fas fa-clock care-blue mr-3"></i>
                        What to Expect
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-center care-gray">
                          <i className="fas fa-check care-green mr-3"></i>
                          Arrive 15-20 minutes early for check-in
                        </li>
                        <li className="flex items-center care-gray">
                          <i className="fas fa-check care-green mr-3"></i>
                          Complete medical history and consent forms
                        </li>
                        <li className="flex items-center care-gray">
                          <i className="fas fa-check care-green mr-3"></i>
                          Brief waiting period in our comfortable lobby
                        </li>
                        <li className="flex items-center care-gray">
                          <i className="fas fa-check care-green mr-3"></i>
                          Comprehensive consultation with your doctor
                        </li>
                        <li className="flex items-center care-gray">
                          <i className="fas fa-check care-green mr-3"></i>
                          Discussion of treatment plan and next steps
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-white shadow-lg mt-8">
                  <CardHeader>
                    <CardTitle className="flex items-center care-dark">
                      <i className="fas fa-info-circle care-blue mr-3"></i>
                      Before Your Visit
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold care-dark mb-2">Prepare Questions</h4>
                        <p className="care-gray text-sm">Write down any questions or concerns you want to discuss with your doctor.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold care-dark mb-2">Review Forms</h4>
                        <p className="care-gray text-sm">Complete any pre-visit forms available on our Patient Portal to save time.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold care-dark mb-2">Plan Your Visit</h4>
                        <p className="care-gray text-sm">Allow extra time for parking and consider bringing a support person if needed.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Insurance Partners */}
            {activeTab === "insurance" && (
              <div>
                <div className="text-center mb-12">
                  <h2 className="text-3xl lg:text-4xl font-bold care-dark mb-4">Insurance Partners</h2>
                  <p className="text-lg care-gray max-w-2xl mx-auto">
                    We work with most major insurance providers to make quality healthcare accessible and affordable.
                  </p>
                </div>

                <Card className="bg-white shadow-lg mb-8">
                  <CardHeader>
                    <CardTitle className="care-dark text-center">Accepted Insurance Plans</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {insurancePartners.map((insurance, index) => (
                        <div key={index} className="flex items-center p-3 bg-care-bg rounded-lg">
                          <i className="fas fa-shield-alt care-green mr-3"></i>
                          <span className="care-dark font-medium">{insurance}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="bg-blue-50 border border-blue-200">
                    <CardHeader>
                      <CardTitle className="flex items-center text-blue-700">
                        <i className="fas fa-phone mr-3"></i>
                        Verify Your Coverage
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-blue-600 mb-4">
                        Not sure if your insurance is accepted? Contact our billing department to verify your coverage.
                      </p>
                      <div className="space-y-2">
                        <p className="text-blue-700 font-medium">
                          <i className="fas fa-phone mr-2"></i>Phone: (555) 123-4567
                        </p>
                        <p className="text-blue-700 font-medium">
                          <i className="fas fa-envelope mr-2"></i>Email: billing@careplushospital.com
                        </p>
                        <p className="text-blue-700 font-medium">
                          <i className="fas fa-clock mr-2"></i>Hours: Mon-Fri 8AM-5PM
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-green-50 border border-green-200">
                    <CardHeader>
                      <CardTitle className="flex items-center text-green-700">
                        <i className="fas fa-credit-card mr-3"></i>
                        Payment Options
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-green-600 mb-4">
                        We offer flexible payment options to help make your care affordable.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center text-green-700">
                          <i className="fas fa-check mr-2"></i>Payment plans available
                        </li>
                        <li className="flex items-center text-green-700">
                          <i className="fas fa-check mr-2"></i>Cash, check, and credit cards accepted
                        </li>
                        <li className="flex items-center text-green-700">
                          <i className="fas fa-check mr-2"></i>Online bill payment portal
                        </li>
                        <li className="flex items-center text-green-700">
                          <i className="fas fa-check mr-2"></i>Financial assistance programs
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {/* FAQs */}
            {activeTab === "faqs" && (
              <div>
                <div className="text-center mb-12">
                  <h2 className="text-3xl lg:text-4xl font-bold care-dark mb-4">Frequently Asked Questions</h2>
                  <p className="text-lg care-gray max-w-2xl mx-auto">
                    Find answers to common questions about our services, policies, and procedures.
                  </p>
                </div>

                <Card className="bg-white shadow-lg">
                  <CardContent className="p-6">
                    <Accordion type="single" collapsible className="w-full">
                      {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger className="care-dark font-semibold text-left">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="care-gray">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Patient Rights */}
            {activeTab === "rights" && (
              <div>
                <div className="text-center mb-12">
                  <h2 className="text-3xl lg:text-4xl font-bold care-dark mb-4">Patient Rights & Responsibilities</h2>
                  <p className="text-lg care-gray max-w-2xl mx-auto">
                    Understanding your rights and responsibilities helps ensure the best possible healthcare experience.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div>
                    <h3 className="text-2xl font-bold care-dark mb-6 flex items-center">
                      <i className="fas fa-balance-scale care-blue mr-3"></i>
                      Your Rights as a Patient
                    </h3>
                    <div className="space-y-6">
                      {patientRights.map((right, index) => (
                        <Card key={index} className="bg-blue-50 border border-blue-200">
                          <CardContent className="p-4">
                            <h4 className="font-semibold text-blue-700 mb-2">{right.title}</h4>
                            <p className="text-blue-600 text-sm">{right.description}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold care-dark mb-6 flex items-center">
                      <i className="fas fa-handshake care-green mr-3"></i>
                      Your Responsibilities as a Patient
                    </h3>
                    <div className="space-y-6">
                      {patientResponsibilities.map((responsibility, index) => (
                        <Card key={index} className="bg-green-50 border border-green-200">
                          <CardContent className="p-4">
                            <h4 className="font-semibold text-green-700 mb-2">{responsibility.title}</h4>
                            <p className="text-green-600 text-sm">{responsibility.description}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Contact for Concerns */}
                <Card className="bg-yellow-50 border border-yellow-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-yellow-700">
                      <i className="fas fa-exclamation-triangle mr-3"></i>
                      Have a Concern or Complaint?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-yellow-600 mb-4">
                      We take all patient concerns seriously and are committed to resolving any issues promptly and fairly.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <h5 className="font-medium text-yellow-700 mb-2">Patient Advocate</h5>
                        <p className="text-yellow-600 text-sm">
                          <i className="fas fa-phone mr-2"></i>(555) 123-4567 ext. 200<br />
                          <i className="fas fa-envelope mr-2"></i>advocate@careplushospital.com
                        </p>
                      </div>
                      <div>
                        <h5 className="font-medium text-yellow-700 mb-2">Administration</h5>
                        <p className="text-yellow-600 text-sm">
                          <i className="fas fa-phone mr-2"></i>(555) 123-4567 ext. 100<br />
                          <i className="fas fa-envelope mr-2"></i>admin@careplushospital.com
                        </p>
                      </div>
                      <div>
                        <h5 className="font-medium text-yellow-700 mb-2">Online Form</h5>
                        <p className="text-yellow-600 text-sm">
                          Submit concerns through our secure patient portal or contact page.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
