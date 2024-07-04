// @ts-ignor

import React from 'react';
import LinkForm from "../components/LinkForm";


const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">My Linktree</h1>
      <LinkForm />
    </div>
  );
};



export default Home;
