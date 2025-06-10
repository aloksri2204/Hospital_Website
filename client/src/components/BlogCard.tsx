import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { BlogPost } from "@shared/schema";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'pediatrics':
        return 'bg-blue-100 text-care-blue';
      case 'gynecology':
        return 'bg-pink-100 text-pink-600';
      case 'nutrition':
        return 'bg-green-100 text-care-green';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <Card className="bg-care-bg rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <img 
        src={post.image} 
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <CardContent className="p-6">
        <div className="flex items-center mb-3">
          <Badge className={`font-semibold ${getCategoryColor(post.category)}`}>
            {post.category}
          </Badge>
          <span className="care-gray text-sm ml-4">
            {formatDate(post.publishedAt)}
          </span>
        </div>
        <h3 className="text-xl font-bold care-dark mb-3">{post.title}</h3>
        <p className="care-gray mb-4">{post.excerpt}</p>
        <Link href={`/blog/${post.id}`}>
          <span className="care-blue hover:text-blue-600 font-semibold cursor-pointer">
            Read More <i className="fas fa-arrow-right ml-1"></i>
          </span>
        </Link>
      </CardContent>
    </Card>
  );
}
