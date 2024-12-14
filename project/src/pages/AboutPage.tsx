import React from 'react';
import { Target, Users, Award } from 'lucide-react';

export function AboutPage() {
  const caseStudies = [
    {
      name: "John Smith",
      role: "Software Engineer",
      story: "Transformed from a marketing professional to a software engineer through structured guidance and continuous learning.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&h=300"
    },
    {
      name: "Lisa Chen",
      role: "Data Scientist",
      story: "Successfully transitioned from academia to industry with focused interview preparation and skill development.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&h=300"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Mission Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Our Mission</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            To empower individuals with the tools, knowledge, and guidance they need to build successful careers in an ever-evolving professional landscape.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Focused Guidance</h3>
              <p className="text-gray-600">Personalized career paths tailored to your goals and aspirations.</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community Support</h3>
              <p className="text-gray-600">A network of professionals helping each other grow.</p>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">Commitment to delivering the highest quality career resources.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:flex-shrink-0">
                    <img
                      className="h-48 w-full object-cover md:w-48"
                      src={study.image}
                      alt={study.name}
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-semibold mb-2">{study.name}</h3>
                    <p className="text-blue-600 mb-4">{study.role}</p>
                    <p className="text-gray-600">{study.story}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}