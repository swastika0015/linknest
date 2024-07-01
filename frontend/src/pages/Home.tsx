import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LinkForm from "../components/LinkForm";

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

const Home: React.FC = () => {
  const [links, setLinks] = useState<Link[]>(() => {
    const savedLinks = localStorage.getItem('links');
    return savedLinks ? JSON.parse(savedLinks) : [];
  });

  const [socialLinks, setSocialLinks] = useState<SocialLinks>(() => {
    const savedSocialLinks = localStorage.getItem('socialLinks');
    return savedSocialLinks ? JSON.parse(savedSocialLinks) : {
      twitter: '',
      linkedin: '',
      github: '',
      medium: ''
    };
  });

  const navigate = useNavigate();

  const addLink = (link: Link) => {
    const newLinks = [...links, link];
    setLinks(newLinks);
    localStorage.setItem('links', JSON.stringify(newLinks));
    navigate('/links');
  };

  const addSocialLink = (newSocialLinks: SocialLinks) => {
    setSocialLinks(newSocialLinks);
    localStorage.setItem('socialLinks', JSON.stringify(newSocialLinks));
    navigate('/links');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">My Linktree</h1>
      <LinkForm addLink={addLink} addSocialLink={addSocialLink} />
    </div>
  );
};

export default Home;
