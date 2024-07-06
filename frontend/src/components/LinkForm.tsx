import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LinkForm: React.FC = () => {
  const [name, setName] = useState('');
  const [customTitle, setTitle] = useState('');
  const [customUrl, setUrl] = useState('');
  const [twitter, setTwitter] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [github, setGithub] = useState('');
  const [medium, setMedium] = useState('');

  const navigate = useNavigate();


  const handleSocialSubmit =  async(e: React.FormEvent) => {
    e.preventDefault();
    try {
    const body = {
      body:{
        name: name,
        custom_title: customTitle,
        custom_link: customUrl,
        twitter_link: twitter,
        linkedln_link: linkedin,
        github_link: github,
        medium_link: medium,
      }};

     const response= await axios.post('https://swastika-dbos.cloud.dbos.dev/dbos/save', body);
     console.log(response.data)
     navigate(`${name}`);

    } catch (error) {
    console.error(error);
  }
  };

  return (
    <div className="mb-6 w-full max-w-sm">
      <form onSubmit={handleSocialSubmit}>
      <h2 className="text-xl font-bold mb-4">Name</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <h2 className="text-xl font-bold mb-4">Add Custom Link</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Title"
            value={customTitle}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <input
            type="url"
            placeholder="URL"
            value={customUrl}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          />
          </div>
        <h2 className="text-xl font-bold mb-4">Add Social Media Links</h2>
        <div className="mb-4">
          <input
            type="url"
            placeholder="Twitter URL"
            value={twitter}
            onChange={(e) => setTwitter(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <input
            type="url"
            placeholder="LinkedIn URL"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <input
            type="url"
            placeholder="GitHub URL"
            value={github}
            onChange={(e) => setGithub(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <input
            type="url"
            placeholder="Medium URL"
            value={medium}
            onChange={(e) => setMedium(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
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
