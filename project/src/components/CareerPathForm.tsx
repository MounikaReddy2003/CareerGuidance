import React, { useState } from 'react';
import { BookOpen, BriefcaseIcon, GraduationCap } from 'lucide-react';

export function CareerPathForm() {
  const [formData, setFormData] = useState({
    education: '',
    interests: '',
    skills: '',
    experience: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-6">Career Path Assessment</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Educational Background
          </label>
          <textarea
            name="education"
            value={formData.education}
            onChange={(e) => setFormData({ ...formData, education: e.target.value })}
            className="w-full p-3 border rounded-md"
            rows={3}
            placeholder="List your educational qualifications..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Professional Interests
          </label>
          <textarea
            name="interests"
            value={formData.interests}
            onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
            className="w-full p-3 border rounded-md"
            rows={3}
            placeholder="What areas of work interest you the most?"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Skills & Competencies
          </label>
          <textarea
            name="skills"
            value={formData.skills}
            onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
            className="w-full p-3 border rounded-md"
            rows={3}
            placeholder="List your technical and soft skills..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Work Experience
          </label>
          <textarea
            name="experience"
            value={formData.experience}
            onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
            className="w-full p-3 border rounded-md"
            rows={3}
            placeholder="Describe your work experience..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors"
        >
          Generate Career Path
        </button>
      </form>
    </div>
  );
}