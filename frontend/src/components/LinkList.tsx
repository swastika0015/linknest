import React from 'react';

interface Link {
  title: string;
  url: string;
}

interface SocialLinks {
  customLink: string;
  customTitle: string;
  twitter: string;
  linkedin: string;
  github: string;
  portfolio: string;
}

interface LinkListProps {
  links: Link[];
  socialLinks: SocialLinks;
}

const LinkList: React.FC<LinkListProps> = ({ links, socialLinks }) => {
  return (
    <div className="w-full max-w-sm">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block mb-4 p-4 bg-white border rounded-lg hover:bg-gray-100 text-blue-900"
        >
          {link.title}
        </a>
      ))}
      <div className="mt-6">
        {socialLinks.customLink && (
          <a
            href={socialLinks.customLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-4 p-4 bg-blue-400 text-white border rounded-lg hover:bg-blue-500"
          >
            {socialLinks.customTitle}
          </a>
        )}
        {socialLinks.twitter && (
          <a
            href={socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-4 p-4 bg-blue-600 text-white border rounded-lg hover:bg-blue-700"
          >
            Twitter
          </a>
        )}
        {socialLinks.linkedin && (
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-4 p-4 bg-blue-700 text-white border rounded-lg hover:bg-blue-800"
          >
            LinkedIn
          </a>
        )}
        {socialLinks.github && (
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-4 p-4 bg-gray-900 text-white border rounded-lg hover:bg-gray-800"
          >
            GitHub
          </a>
        )}
        {socialLinks.portfolio && (
          <a
            href={socialLinks.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-4 p-4 bg-gray-800 text-white border rounded-lg hover:bg-gray-700"
          >
            Portfolio
          </a>
        )}
      </div>
    </div>
  );
};

export default LinkList;
