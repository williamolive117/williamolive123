import { Calendar, Clock, ArrowRight, BookOpen, Tv, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const LatestBlogPosts = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Complete Guide to 4K IPTV Streaming in 2024",
      excerpt: "Discover everything you need to know about 4K IPTV streaming, from choosing the right device to optimizing your internet connection for the best experience.",
      category: "Guide",
      categoryColor: "bg-blue-600",
      categoryIcon: BookOpen,
      author: "David Smith",
      date: "January 15, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=600&h=400&fit=crop&crop=center",
      featured: true
    },
    {
      id: 2,
      title: "Top 10 Sports Channels Every UK Fan Should Watch",
      excerpt: "From Premier League football to Wimbledon tennis, explore the essential sports channels that keep UK fans entertained year-round.",
      category: "Sports",
      categoryColor: "bg-green-600",
      categoryIcon: Tv,
      author: "Sarah Johnson",
      date: "January 12, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=400&fit=crop&crop=center",
      featured: false
    },
    {
      id: 3,
      title: "How to Set Up IPTV on Fire Stick in Under 5 Minutes",
      excerpt: "Step-by-step tutorial for installing and configuring your IPTV service on Amazon Fire Stick with troubleshooting tips and optimization tricks.",
      category: "Tutorial",
      categoryColor: "bg-purple-600",
      categoryIcon: Zap,
      author: "Michael Brown",
      date: "January 10, 2024",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&h=400&fit=crop&crop=center",
      featured: false
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900/90 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-32 right-32 w-64 h-64 bg-red-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-32 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-red-600/10 backdrop-blur-sm border border-red-600/20 rounded-full px-6 py-3 mb-6">
            <BookOpen className="w-5 h-5 text-red-600" />
            <span className="text-red-600 font-medium">Latest Updates</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Latest <span className="text-red-600">Blog Posts</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest IPTV news, guides, and tips to get the most out of your streaming experience.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className={`group relative bg-gradient-to-br from-gray-900/60 to-black/40 backdrop-blur-sm border border-gray-800/50 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-red-600/10 transition-all duration-500 hover:transform hover:-translate-y-2 ${
                post.featured ? 'lg:row-span-2' : ''
              }`}
            >
              {/* Featured Badge */}
              {post.featured && (
                <div className="absolute top-4 left-4 z-20">
                  <div className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    Featured
                  </div>
                </div>
              )}

              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Image */}
              <div className={`relative overflow-hidden ${post.featured ? 'h-64' : 'h-48'}`}>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <div className={`${post.categoryColor} text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg flex items-center space-x-1`}>
                    <post.categoryIcon className="w-3 h-3" />
                    <span>{post.category}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative z-10">
                {/* Meta Information */}
                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-red-400 transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>
                
                {/* Excerpt */}
                <p className={`text-gray-300 leading-relaxed ${post.featured ? 'mb-6' : 'mb-4'} ${post.featured ? 'line-clamp-4' : 'line-clamp-3'}`}>
                  {post.excerpt}
                </p>

                {/* Author & Read More */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-medium">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <span className="text-gray-400 text-sm">{post.author}</span>
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-red-400 hover:text-white hover:bg-red-600/20 p-2 h-auto group-hover:translate-x-1 transition-transform duration-300"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-gray-900/80 to-black/60 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-white mb-4">
              Want More IPTV Tips & Guides?
            </h3>
            <p className="text-gray-300 mb-6">
              Explore our comprehensive blog with setup guides, troubleshooting tips, and the latest IPTV industry news.
            </p>
            <Button 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-red-600/30 hover:shadow-xl hover:shadow-red-600/40 transition-all duration-300 hover:scale-105 group"
            >
              <BookOpen className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              View All Articles
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="mt-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-red-600/20 to-blue-600/20 backdrop-blur-sm border border-gray-800/50 rounded-3xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Never Miss an Update
            </h3>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter for the latest IPTV guides, tips, and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors duration-300"
                />
              </div>
              <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-medium shadow-lg">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestBlogPosts;