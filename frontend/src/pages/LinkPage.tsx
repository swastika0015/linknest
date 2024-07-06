import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

interface SocialLinks {
  name: string;
  customLink: string;
  customTitle: string;
  twitter: string;
  linkedin: string;
  github: string;
  medium: string;
}

const LinkPage: React.FC = () => {
  const { user } = useParams<{ user: string }>();
  const [socialLinks, setSocialLinks] = useState<SocialLinks>({
    name: '',
    customLink: '',
    customTitle: '',
    twitter: '',
    linkedin: '',
    github: '',
    medium: ''
  });

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const response = await axios.get(`https://swastika-dbos.cloud.dbos.dev/dbos/${user}`);
        const data = response.data;
    
        setSocialLinks({
          name: data.name,
          customLink: data.custom_link,
          customTitle: data.custom_title,
          twitter: data.twitter_link,
          linkedin: data.linkedln_link,
          github: data.github_link,
          medium: data.medium_link
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchLinks();
  }, [user]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4 text-indigo-700">
      <h1 className="text-3xl font-bold mb-6">{socialLinks.name}'s LinkNest</h1>
      <div className="w-full max-w-sm text-center">
        <div className="mt-6">
          {socialLinks.customLink && (
            <a
              href={socialLinks.customLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block mb-4 p-4  text-white border rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500
   hover:from-purple-500 hover:to-indigo-500 transition duration-500"
            >
              {socialLinks.customTitle}
            </a>
          )}
          {socialLinks.twitter && (
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="block mb-4 p-4 text-white border rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500
   hover:from-purple-500 hover:to-indigo-500 transition duration-500"
            >
              Twitter
            </a>
          )}
          {socialLinks.linkedin && (
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="block mb-4 p-4 text-white border rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500
   hover:from-purple-500 hover:to-indigo-500 transition duration-500"
            >
              LinkedIn
            </a>
          )}
          {socialLinks.github && (
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block mb-4 p-4 text-white border rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500
   hover:from-purple-500 hover:to-indigo-500 transition duration-500"
            >
              GitHub
            </a>
          )}
          {socialLinks.medium && (
            <a
              href={socialLinks.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="block mb-4 p-4 text-white border rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500
   hover:from-purple-500 hover:to-indigo-500 transition duration-500"
            >
              Medium
            </a>
          )}
        </div>
      </div>
      <Link to="/" className="mt-8 bg-indigo-100 py-2 px-4 border rounded-lg text-indigo-800 border-solid hover:bg-indigo-200">
        Go to your Linknest
      </Link>
    </div>
  );
};

export default LinkPage;
