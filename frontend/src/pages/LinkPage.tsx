import React, {useEffect, useState} from 'react';
import { Link, useParams  } from 'react-router-dom';
import axios from 'axios';

interface Link {
  title: string;
  url: string;
  twitter: string;
  linkedin: string;
  github: string;
  medium: string;
}

interface SocialLinks {
  customLink: string;
  customTitle: string;
  twitter: string;
  linkedin: string;
  github: string;
  medium: string;
}


const LinkPage: React.FC = () => {
  const [links, setLinks] = useState<Link[]>([]);
  const { user } = useParams<{ user: string }>();
  const [socialLinks, setSocialLinks] = useState<SocialLinks>({
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
        console.log(response.data)
        const data = response.data;
        
        setLinks(data.links);
        setSocialLinks({
          customLink: data.custom_link,
          customTitle: data.customTitle,
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Your Linknest</h1>
      <div className="w-full max-w-sm">
        {links?.map((link, index) => (
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
