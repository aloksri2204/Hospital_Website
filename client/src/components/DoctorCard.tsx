import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Doctor } from "@shared/schema";

interface DoctorCardProps {
  doctor: Doctor;
}

export default function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <Card className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <CardContent className="p-6">
        <img 
          src={doctor.image} 
          alt={doctor.name}
          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
        />
        <div className="text-center">
          <h3 className="text-xl font-bold care-dark mb-2">{doctor.name}</h3>
          <p className="care-blue font-semibold mb-2">{doctor.specialty}</p>
          <p className="care-gray text-sm mb-4">{doctor.qualifications} - {doctor.experience} years experience</p>
          
          <div className="flex justify-center flex-wrap gap-2 mb-4">
            {doctor.specialties.map((specialty, index) => (
              <Badge 
                key={index}
                variant="secondary" 
                className={`text-xs ${
                  doctor.department === 'pediatrics' 
                    ? 'bg-blue-100 text-care-blue' 
                    : 'bg-pink-100 text-pink-600'
                }`}
              >
                {specialty}
              </Badge>
            ))}
          </div>
          
          <div className="flex justify-center space-x-4 text-sm care-gray mb-4">
            <span>
              <i className="fas fa-star text-yellow-400"></i> {doctor.rating}/5
            </span>
            <span>
              <i className="fas fa-clock"></i> {doctor.availability}
            </span>
          </div>
          
          <Link href="/appointments">
            <Button className="bg-care-green hover:bg-green-600 text-white font-semibold w-full">
              Book Appointment
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
