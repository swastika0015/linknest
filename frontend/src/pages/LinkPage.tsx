import React from 'react';
import { Link } from 'react-router-dom';

interface Link {
  title: string;
  url: string;
}

interface SocialLinks {
  twitter: string;
  linkedin: string;
  github: string;
  medium: string;
}

const links: Link[] = JSON.parse(localStorage.getItem('links') || '[]');
const socialLinks: SocialLinks = JSON.parse(localStorage.getItem('socialLinks') || '{}');

const LinkPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Your Linknest</h1>
      <div className="w-full max-w-sm">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-4 p-4 bg-white border rounded-lg hover:bg-gray-100"
          >
            {link.title}
          </a>
        ))}
        <div className="mt-6">
          {socialLinks.twitter && (
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="block mb-4 p-4 bg-blue-400 text-white border rounded-lg hover:bg-blue-500"
            >
              Twitter
            </a>
          )}
          {socialLinks.linkedin && (
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="block mb-4 p-4 bg-blue-600 text-white border rounded-lg hover:bg-blue-700"
            >
              LinkedIn
            </a>
          )}
          {socialLinks.github && (
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block mb-4 p-4 bg-gray-800 text-white border rounded-lg hover:bg-gray-900"
            >
              GitHub
            </a>
          )}
          {socialLinks.medium && (
            <a
              href={socialLinks.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="block mb-4 p-4 bg-black text-white border rounded-lg hover:bg-gray-900"
            >
              Medium
            </a>
          )}
        </div>
      </div>
      <Link to="/" className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
        Go to your Linknest
      </Link>
    </div>
  );
};

export default LinkPage;
