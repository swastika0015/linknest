// @ts-ignor

import React from 'react';
import LinkForm from "../components/LinkForm";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  p-4 bg-gradient-to-r from-indigo-200 to-purple-100">
      <h1 className="text-3xl font-extrabold m-4 mt-4 text-indigo-700">LinkNest</h1>
      <LinkForm />
    </div>
  );
};



export default Home;
