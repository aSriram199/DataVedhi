import React from 'react';
import { Clock, User } from 'lucide-react';

const BLOG_POSTS = [
  {
    id: 1,
    title: 'The Future of Web Development',
    category: 'Technology',
    author: {
      name: 'John Doe',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80'
    },
    date: '2024-03-20',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80',
    excerpt: 'Exploring the latest trends and technologies shaping the future of web development.'
  },
  // Add more blog posts
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Latest Articles
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Post */}
          <div className="lg:col-span-2">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative pb-[56.25%]">
                <img
                  src={BLOG_POSTS[0].image}
                  alt={BLOG_POSTS[0].title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  Featured
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={BLOG_POSTS[0].author.avatar}
                    alt={BLOG_POSTS[0].author.name}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="text-gray-900 dark:text-white font-medium">
                      {BLOG_POSTS[0].author.name}
                    </p>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {new Date(BLOG_POSTS[0].date).toLocaleDateString()}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {BLOG_POSTS[0].title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {BLOG_POSTS[0].excerpt}
                </p>
                
                <button className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
                  Read More →
                </button>
              </div>
            </div>
          </div>

          {/* Regular Posts */}
          <div className="lg:col-span-1 space-y-8">
            {BLOG_POSTS.slice(1, 4).map(post => (
              <div
                key={post.id}
                className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow"
              >
                <div className="relative pb-[56.25%]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center mb-2 text-sm text-gray-600 dark:text-gray-400">
                    <User className="w-4 h-4 mr-1" />
                    {post.author.name}
                    <span className="mx-2">•</span>
                    <Clock className="w-4 h-4 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <button className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;