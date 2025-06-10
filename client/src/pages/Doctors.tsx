import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import DoctorCard from "@/components/DoctorCard";
import { Button } from "@/components/ui/button";
import type { Doctor } from "@shared/schema";

export default function Doctors() {
  const [selectedDepartment, setSelectedDepartment] = useState<string>("all");

  const { data: doctors = [], isLoading } = useQuery<Doctor[]>({
    queryKey: ["/api/doctors"],
  });

  const filteredDoctors = selectedDepartment === "all" 
    ? doctors 
    : doctors.filter(doctor => doctor.department === selectedDepartment);

  const departments = [
    { id: "all", name: "All Doctors", count: doctors.length },
    { id: "pediatrics", name: "Pediatrics", count: doctors.filter(d => d.department === "pediatrics").length },
    { id: "gynecology", name: "Gynecology", count: doctors.filter(d => d.department === "gynecology").length },
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <i className="fas fa-spinner fa-spin text-4xl care-blue mb-4"></i>
          <p className="text-lg care-gray">Loading our expert doctors...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-care-blue to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Meet Our Expert Doctors</h1>
            <p className="text-xl lg:text-2xl text-blue-100">
              Our team of highly qualified specialists are dedicated to providing the best care for you and your family.
            </p>
          </div>
        </div>
      </section>

      {/* Department Filter */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-center mb-12">
              <div className="bg-care-bg rounded-full p-1 shadow-md">
                {departments.map((dept) => (
                  <Button
                    key={dept.id}
                    variant={selectedDepartment === dept.id ? "default" : "ghost"}
                    className={`px-6 py-2 rounded-full font-semibold ${
                      selectedDepartment === dept.id
                        ? "bg-care-blue text-white"
                        : "care-gray hover:care-blue"
                    }`}
                    onClick={() => setSelectedDepartment(dept.id)}
                  >
                    {dept.name} ({dept.count})
                  </Button>
                ))}
              </div>
            </div>

            {/* Doctors Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDoctors.map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))}
            </div>

            {filteredDoctors.length === 0 && (
              <div className="text-center py-12">
                <i className="fas fa-user-md text-6xl care-gray mb-4"></i>
                <h3 className="text-xl font-semibold care-dark mb-2">No doctors found</h3>
                <p className="care-gray">No doctors available in the selected department.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Why Our Doctors Are Special */}
      <section className="py-16 bg-care-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold care-dark mb-4">Why Our Doctors Are Special</h2>
              <p className="text-lg care-gray max-w-2xl mx-auto">
                Our physicians are not just highly qualified - they're passionate about providing exceptional care.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                <div className="bg-care-blue p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <i className="fas fa-graduation-cap text-white text-xl"></i>
                </div>
                <h4 className="font-bold care-dark mb-2">Board Certified</h4>
                <p className="care-gray text-sm">All our doctors are board-certified in their specialties</p>
              </div>

              <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                <div className="bg-care-green p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <i className="fas fa-award text-white text-xl"></i>
                </div>
                <h4 className="font-bold care-dark mb-2">Award Winning</h4>
                <p className="care-gray text-sm">Recognition for excellence in patient care and outcomes</p>
              </div>

              <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                <div className="bg-purple-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <i className="fas fa-heart text-white text-xl"></i>
                </div>
                <h4 className="font-bold care-dark mb-2">Compassionate</h4>
                <p className="care-gray text-sm">Dedicated to treating patients with empathy and understanding</p>
              </div>

              <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                <div className="bg-orange-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <i className="fas fa-clock text-white text-xl"></i>
                </div>
                <h4 className="font-bold care-dark mb-2">Available</h4>
                <p className="care-gray text-sm">Flexible scheduling and emergency availability when needed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold care-dark mb-6">Ready to Meet Your Doctor?</h2>
            <p className="text-lg care-gray mb-8">
              Schedule an appointment with one of our expert physicians today. We're here to provide the best care for you and your family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-care-green hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold"
                onClick={() => window.location.href = '/appointments'}
              >
                <i className="fas fa-calendar-alt mr-2"></i>Book an Appointment
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-care-blue care-blue hover:bg-care-blue hover:text-white px-8 py-4 text-lg font-semibold"
                onClick={() => window.location.href = '/contact'}
              >
                <i className="fas fa-phone mr-2"></i>Call Us Today
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
