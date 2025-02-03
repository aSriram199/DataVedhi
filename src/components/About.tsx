import React from 'react';
import { Trophy, Users, Target, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, value: '10,000+', label: 'Community Members' },
    { icon: Trophy, value: '500+', label: 'Events Hosted' },
    { icon: Target, value: '50+', label: 'Partner Companies' },
    { icon: Heart, value: '100%', label: 'Satisfaction Rate' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Our Story
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Founded in 2020, TechHub has grown from a small group of passionate developers 
              to a thriving community of tech enthusiasts. Our mission is to create an inclusive 
              space where innovation flourishes and knowledge is shared freely.
            </p>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80"
                alt="Team collaboration"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600 rounded-lg -z-10"></div>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Our Mission
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                To empower individuals through technology education and foster a collaborative 
                environment where innovation thrives.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Our Vision
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                To be the leading tech community platform that bridges the gap between learning 
                and opportunity in the technology sector.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center"
                >
                  <Icon className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {value}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;