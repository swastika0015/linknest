// @ts-ignor

import React from 'react';
import LinkForm from "../components/LinkForm";
import { CopilotKit } from "@copilotkit/react-core";
import { CopilotSidebar } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";


const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  p-4 bg-gradient-to-r from-indigo-200 to-purple-100">
      <h1 className="text-3xl font-extrabold m-4 mt-4 text-indigo-700">LinkNest</h1>
      <LinkForm />
      <CopilotKit publicApiKey="the api key or self host (see below)">
      <CopilotSidebar>
      </CopilotSidebar>
    </CopilotKit>
    </div>
  );
};



export default Home;
