import { Card, CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
  rating: number;
  review: string;
  name: string;
  title: string;
  image: string;
}

export default function TestimonialCard({ rating, review, name, title, image }: TestimonialCardProps) {
  return (
    <Card className="bg-white rounded-2xl shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <div className="flex text-yellow-400 mr-2">
            {[...Array(5)].map((_, i) => (
              <i key={i} className={`fas fa-star ${i < rating ? '' : 'text-gray-300'}`}></i>
            ))}
          </div>
          <span className="care-gray text-sm">{rating}.0</span>
        </div>
        <p className="care-gray mb-6 italic">"{review}"</p>
        <div className="flex items-center">
          <img 
            src={image} 
            alt={name}
            className="w-12 h-12 rounded-full mr-4 object-cover"
          />
          <div>
            <h4 className="font-semibold care-dark">{name}</h4>
            <p className="care-gray text-sm">{title}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
