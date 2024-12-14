import React from 'react';
import { BookOpen, Download, MessageCircle, Video } from 'lucide-react';

export function InterviewPage() {
  const interviewTips = [
    {
      title: "Research the Company",
      description: "Thoroughly research the company's history, values, products, and recent news.",
      icon: BookOpen
    },
    {
      title: "Practice Common Questions",
      description: "Prepare answers for frequently asked behavioral and technical questions.",
      icon: MessageCircle
    },
    {
      title: "Virtual Interview Tips",
      description: "Ensure good lighting, stable internet, and professional background for video interviews.",
      icon: Video
    }
  ];

  const resources = [
    {
      title: "Interview Question Bank",
      description: "300+ commonly asked interview questions with sample answers",
      downloadLink: "#"
    },
    {
      title: "Technical Interview Guide",
      description: "Comprehensive guide for technical interviews",
      downloadLink: "#"
    },
    {
      title: "Interview Etiquette Guide",
      description: "Professional behavior and communication tips",
      downloadLink: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-12">Interview Preparation</h1>

        {/* Tips Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">Essential Interview Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {interviewTips.map((tip, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <tip.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
                <p className="text-gray-600">{tip.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Resources Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-8">Preparation Materials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <a
                  href={resource.downloadLink}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-8">Frequently Asked Questions</h2>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">How should I prepare for behavioral questions?</h3>
                <p className="text-gray-600">Use the STAR method (Situation, Task, Action, Result) to structure your answers. Prepare specific examples from your experience.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">What should I wear to the interview?</h3>
                <p className="text-gray-600">Dress professionally and slightly more formal than the company's daily dress code. When in doubt, business professional is always safe.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">How early should I arrive?</h3>
                <p className="text-gray-600">Aim to arrive 10-15 minutes early. This shows punctuality while not being too early to inconvenience the interviewer.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}