import React, { useState } from 'react';
import axios from 'axios';
interface LinkFormProps {
  addLink: (link: { title: string; url: string }) => void;
  addSocialLink: (socialLinks: SocialLinks) => void;
}

interface SocialLinks {
  twitter: string;
  linkedin: string;
  github: string;
  medium: string;
}

const LinkForm: React.FC<LinkFormProps> = ({ addLink, addSocialLink }) => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [twitter, setTwitter] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [github, setGithub] = useState('');
  const [medium, setMedium] = useState('');

  const handleLinkSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addLink({ title, url });
    setTitle('');
    setUrl('');
  };

  const handleSocialSubmit =  async(e: React.FormEvent) => {
    e.preventDefault();
    addSocialLink({ twitter, linkedin, github, medium });
    try {
    const body = {
        name: title,
        custom_link: url,
        twitter_link: twitter,
        linkedln_link: linkedin,
        github_link: github,
        medium_link: medium,
      };

    const response = await axios.post('/dbos/saveLinks', body);
    console.log(response.data);

    setTwitter('');
    setLinkedin('');
    setGithub('');
    setMedium('');
    } catch (error) {
    console.error(error);
  }
  };

  return (
    <div className="mb-6 w-full max-w-sm">
      <form onSubmit={handleLinkSubmit} className="mb-6">
        <h2 className="text-xl font-bold mb-4">Add Custom Link</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="url"
            placeholder="URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Add Link
        </button>
      </form>

      <form onSubmit={handleSocialSubmit}>
        <h2 className="text-xl font-bold mb-4">Add Social Media Links</h2>
        <div className="mb-4">
          <input
            type="url"
            placeholder="Twitter URL"
            value={twitter}
            onChange={(e) => setTwitter(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="url"
            placeholder="LinkedIn URL"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="url"
            placeholder="GitHub URL"
            value={github}
            onChange={(e) => setGithub(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="url"
            placeholder="Medium URL"
            value={medium}
            onChange={(e) => setMedium(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
        >
          Add Social Links
        </button>
      </form>
    </div>
  );
};

export default LinkForm;
