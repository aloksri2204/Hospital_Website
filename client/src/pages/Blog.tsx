import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { BlogPost } from "@shared/schema";

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const { data: blogPosts = [], isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog"],
  });

  const categories = [
    { id: "all", name: "All Articles", count: blogPosts.length },
    { id: "pediatrics", name: "Pediatrics", count: blogPosts.filter(p => p.category.toLowerCase() === "pediatrics").length },
    { id: "gynecology", name: "Gynecology", count: blogPosts.filter(p => p.category.toLowerCase() === "gynecology").length },
    { id: "nutrition", name: "Nutrition", count: blogPosts.filter(p => p.category.toLowerCase() === "nutrition").length },
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "all" || post.category.toLowerCase() === selectedCategory;
    const matchesSearch = searchTerm === "" || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1, 4);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <i className="fas fa-spinner fa-spin text-4xl care-blue mb-4"></i>
          <p className="text-lg care-gray">Loading health resources...</p>
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
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Health Resources & Blog</h1>
            <p className="text-xl lg:text-2xl text-blue-100">
              Expert advice and information on women's health, child care, and wellness from our medical professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold care-dark mb-4">Featured Article</h2>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-80 object-cover rounded-2xl shadow-lg"
                  />
                </div>
                <div>
                  <div className="mb-4">
                    <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
                      featuredPost.category.toLowerCase() === 'pediatrics' ? 'bg-blue-100 care-blue' :
                      featuredPost.category.toLowerCase() === 'gynecology' ? 'bg-pink-100 text-pink-600' :
                      'bg-green-100 care-green'
                    }`}>
                      {featuredPost.category}
                    </span>
                    <span className="care-gray text-sm ml-4">
                      {new Date(featuredPost.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold care-dark mb-4">{featuredPost.title}</h3>
                  <p className="care-gray text-lg mb-6">{featuredPost.excerpt}</p>
                  <Button className="bg-care-blue hover:bg-blue-600 text-white">
                    Read Full Article <i className="fas fa-arrow-right ml-2"></i>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Search and Filter */}
      <section className="py-8 bg-care-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 focus:border-care-blue"
                  />
                  <i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 care-gray"></i>
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "ghost"}
                    size="sm"
                    className={`rounded-full font-semibold ${
                      selectedCategory === category.id
                        ? "bg-care-blue text-white"
                        : "bg-white care-gray hover:care-blue"
                    }`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {category.name} ({category.count})
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {searchTerm && (
              <div className="mb-8">
                <p className="care-gray">
                  {filteredPosts.length > 0 
                    ? `Found ${filteredPosts.length} article${filteredPosts.length !== 1 ? 's' : ''} for "${searchTerm}"`
                    : `No articles found for "${searchTerm}"`
                  }
                </p>
              </div>
            )}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>

            {filteredPosts.length === 0 && !searchTerm && (
              <div className="text-center py-12">
                <i className="fas fa-newspaper text-6xl care-gray mb-4"></i>
                <h3 className="text-xl font-semibold care-dark mb-2">No articles found</h3>
                <p className="care-gray">No articles available in the selected category.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Recent Articles Sidebar */}
      {recentPosts.length > 0 && (
        <section className="py-16 bg-care-bg">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold care-dark mb-8 text-center">Latest Health Tips</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {recentPosts.map((post) => (
                  <div key={post.id} className="bg-white rounded-xl p-6 shadow-lg">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-32 object-cover rounded-lg mb-4"
                    />
                    <div className="mb-3">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        post.category.toLowerCase() === 'pediatrics' ? 'bg-blue-100 care-blue' :
                        post.category.toLowerCase() === 'gynecology' ? 'bg-pink-100 text-pink-600' :
                        'bg-green-100 care-green'
                      }`}>
                        {post.category}
                      </span>
                    </div>
                    <h4 className="font-bold care-dark mb-2 line-clamp-2">{post.title}</h4>
                    <p className="care-gray text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                    <Button size="sm" variant="outline" className="border-care-blue care-blue hover:bg-care-blue hover:text-white">
                      Read More
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Newsletter Signup */}
      <section className="py-16 bg-care-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Informed About Your Health</h2>
            <p className="text-lg text-gray-300 mb-8">
              Subscribe to our newsletter for the latest health tips, medical insights, and updates from CarePlus Hospital.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <Input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 bg-white text-black"
              />
              <Button type="submit" className="bg-care-blue hover:bg-blue-600 text-white">
                Subscribe <i className="fas fa-paper-plane ml-2"></i>
              </Button>
            </form>
            <p className="text-gray-400 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
