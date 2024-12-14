import React from 'react';
import { ArrowRight, Briefcase, DollarSign, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HomePage() {
  const trendingJobs = [
    { title: 'AI Engineer', growth: '+45%', icon: Code },
    { title: 'Data Scientist', growth: '+35%', icon: Code },
    { title: 'Cloud Architect', growth: '+28%', icon: Code }
  ];

  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Career Coach',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200'
    },
    {
      name: 'Michael Chen',
      role: 'Technical Advisor',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200'
    },
    {
      name: 'Emily Rodriguez',
      role: 'HR Specialist',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&h=200'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1920&q=80"
        >
          <source src="https://player.vimeo.com/external/370467553.hd.mp4?s=ce49c8c6d8e28a89298ffb4c53a2e842bdb11546&profile_id=174&oauth2_token_id=57447761" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Path to Future</h1>
          <p className="text-xl md:text-2xl mb-8">Unlock Your Career Potential</p>
          <Link
            to="/career-path"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors duration-300 flex items-center"
          >
            Want to Know Your Career Path? <ArrowRight className="ml-2" />
          </Link>
        </div>
      </div>

      {/* Trending Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Trending in Tech</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trendingJobs.map((job, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <job.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                <p className="text-green-600 font-semibold">{job.growth} YoY Growth</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}