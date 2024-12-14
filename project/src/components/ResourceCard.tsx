import React from 'react';
import { Download, ExternalLink } from 'lucide-react';

interface ResourceCardProps {
  title: string;
  description: string;
  type: 'download' | 'link';
  url: string;
  icon?: React.ReactNode;
}

export function ResourceCard({ title, description, type, url, icon }: ResourceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-start">
        {icon && <div className="flex-shrink-0 mr-4">{icon}</div>}
        <div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <a
            href={url}
            className="inline-flex items-center text-blue-600 hover:text-blue-700"
            target={type === 'link' ? '_blank' : undefined}
            rel={type === 'link' ? 'noopener noreferrer' : undefined}
          >
            {type === 'download' ? (
              <>
                <Download className="w-4 h-4 mr-2" />
                Download Resource
              </>
            ) : (
              <>
                <ExternalLink className="w-4 h-4 mr-2" />
                Learn More
              </>
            )}
          </a>
        </div>
      </div>
    </div>
  );
}