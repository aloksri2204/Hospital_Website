import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  icon: string;
  iconColor: string;
  iconBg: string;
  services: string[];
  department: string;
}

export default function ServiceCard({ 
  title, 
  icon, 
  iconColor, 
  iconBg, 
  services, 
  department 
}: ServiceCardProps) {
  return (
    <Card className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <CardHeader>
        <div className="flex items-center mb-6">
          <div className={`${iconBg} p-4 rounded-full mr-4`}>
            <i className={`${icon} ${iconColor} text-2xl`}></i>
          </div>
          <h3 className="text-2xl font-bold care-dark">{title}</h3>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3 care-gray mb-6">
          {services.map((service, index) => (
            <li key={index} className="flex items-center">
              <i className="fas fa-check care-green mr-3"></i>
              {service}
            </li>
          ))}
        </ul>
        <Link href={`/services#${department}`}>
          <Button className="bg-care-blue hover:bg-blue-600 text-white font-semibold">
            Learn More <i className="fas fa-arrow-right ml-2"></i>
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
