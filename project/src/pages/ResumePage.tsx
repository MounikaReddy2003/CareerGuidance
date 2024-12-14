import React, { useState } from 'react';
import { Download, Edit2 } from 'lucide-react';

export function ResumePage() {
  const [selectedTemplate, setSelectedTemplate] = useState('professional');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    summary: '',
    experience: '',
    education: '',
    skills: ''
  });

  const templates = [
    {
      id: 'professional',
      name: 'Professional',
      preview: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=300&h=400'
    },
    {
      id: 'creative',
      name: 'Creative',
      preview: 'https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?auto=format&fit=crop&w=300&h=400'
    },
    {
      id: 'minimalist',
      name: 'Minimalist',
      preview: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=300&h=400'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleDownload = () => {
    // Implement PDF download functionality
    console.log('Downloading resume...');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-12">Resume Builder</h1>
        
        {/* Template Selection */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-4">Choose a Template</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {templates.map((template) => (
              <div
                key={template.id}
                className={`cursor-pointer rounded-lg overflow-hidden border-2 ${
                  selectedTemplate === template.id ? 'border-blue-600' : 'border-transparent'
                }`}
                onClick={() => setSelectedTemplate(template.id)}
              >
                <img
                  src={template.preview}
                  alt={template.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 bg-white">
                  <h3 className="font-semibold">{template.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resume Form */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Professional Summary
            </label>
            <textarea
              name="summary"
              value={formData.summary}
              onChange={handleInputChange}
              rows={4}
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Work Experience
            </label>
            <textarea
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
              rows={6}
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Education
            </label>
            <textarea
              name="education"
              value={formData.education}
              onChange={handleInputChange}
              rows={4}
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Skills
            </label>
            <textarea
              name="skills"
              value={formData.skills}
              onChange={handleInputChange}
              rows={4}
              className="w-full p-2 border rounded-md"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleDownload}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center hover:bg-blue-700 transition-colors"
          >
            <Download className="mr-2" /> Download Resume
          </button>
        </div>
      </div>
    </div>
  );
}