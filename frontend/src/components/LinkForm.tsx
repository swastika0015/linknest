import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LinkForm: React.FC = () => {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
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
        bio: bio,
        custom_title: customTitle,
        custom_link: customUrl,
        twitter_link: twitter,
        linkedln_link: linkedin,
        github_link: github,
        medium_link: medium,
      }};

     await axios.post('https://swastika-dbos.cloud.dbos.dev/dbos/save', body);
     navigate(`${name}`);

    } catch (error) {
    console.error(error);
  }
  };

  return (
    <div className="mb-6 w-full max-w-sm text-indigo-600">
      <form onSubmit={handleSocialSubmit}>
      <h3 className="text-l font-bold mb-1">Name</h3>
        <div className="mb-5">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg placeholder-indigo-200"
            required
          />
        </div>

        <div className="mb-5">
          <textarea
            id="about"
            name="about"
            placeholder="Write a few sentences about yourself."
            rows={3}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg placeholder-indigo-200"
          />
        </div>

        <h3 className="text-l font-bold mb-1">Add Links</h3>
        <div className="mb-4">
          <input
            type="url"
            placeholder="Twitter"
            value={twitter}
            onChange={(e) => setTwitter(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg placeholder-indigo-200"
          />
        </div>
        <div className="mb-4">
          <input
            type="url"
            placeholder="LinkedIn"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg placeholder-indigo-200"
          />
        </div>
        <div className="mb-4">
          <input
            type="url"
            placeholder="GitHub"
            value={github}
            onChange={(e) => setGithub(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg placeholder-indigo-200"
          />
        </div>
        <div className="mb-4">
          <input
            type="url"
            placeholder="Portfolio"
            value={medium}
            onChange={(e) => setMedium(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg placeholder-indigo-200"
          />
        </div>
        <div className="mb-5">
        <h3 className="text-l font-bold mb-1">Add Custom Link</h3>
          <input
            type="text"
            placeholder="Title"
            value={customTitle}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg placeholder-indigo-200"
          />
        </div>
        <div className="mb-5">
          <input
            type="url"
            placeholder="URL"
            value={customUrl}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg placeholder-indigo-200"
          />
          </div>
          
        <button
          type="submit"
          className="w-full text-white py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-purple-500 hover:to-indigo-500 transition duration-500"
        >
          Add Links
        </button>
      </form>
    </div>
  );
};

export default LinkForm;
