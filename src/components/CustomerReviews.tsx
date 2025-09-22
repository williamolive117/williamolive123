import { Star, User } from "lucide-react";

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "James Wilson",
      rating: 5,
      review: "Amazing service! Crystal clear HD quality and never buffers. Best IPTV I've used!",
      location: "London, UK",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Sarah Mitchell",
      rating: 5,
      review: "Excellent value for money. Thousands of channels and great customer support. Highly recommended!",
      location: "Manchester, UK",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b043?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Michael Brown",
      rating: 5,
      review: "Works perfectly on all my devices. Setup was easy and streams are always stable. 5 stars!",
      location: "Birmingham, UK",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "Emma Thompson",
      rating: 5,
      review: "Best streaming service I've ever used. Great channel selection and reliable service. Love it!",
      location: "Glasgow, UK",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-black/90">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Customer <span className="text-red-600">Reviews</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it - see what our satisfied customers have to say about our IPTV service
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="group relative bg-gradient-to-br from-gray-900/80 to-black/60 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 hover:shadow-2xl hover:shadow-red-600/20 transition-all duration-500 hover:transform hover:scale-105"
            >
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Avatar & Name */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className="relative">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-gray-700 group-hover:border-red-600 transition-colors duration-300"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-900"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm">{review.name}</h3>
                    <p className="text-xs text-gray-400">{review.location}</p>
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-red-600 text-red-600" />
                  ))}
                  <span className="text-xs text-gray-400 ml-2">({review.rating}.0)</span>
                </div>

                {/* Review Text */}
                <blockquote className="text-gray-300 text-sm leading-relaxed italic">
                  "{review.review}"
                </blockquote>

                {/* Verified Badge */}
                <div className="mt-4 inline-flex items-center space-x-2 bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-xs">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Verified Purchase</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-full px-6 py-3">
            <div className="flex -space-x-2">
              {reviews.slice(0, 3).map((review) => (
                <img
                  key={review.id}
                  src={review.avatar}
                  alt={review.name}
                  className="w-8 h-8 rounded-full border-2 border-gray-800 object-cover"
                />
              ))}
            </div>
            <span className="text-white font-medium">Join 50,000+ Happy Customers</span>
          </div>
        </div>
      </div>


    </section>
  );
};

export default CustomerReviews;