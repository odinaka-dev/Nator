import React, { useState } from "react";
import { FaRainbow } from "react-icons/fa";
// import the main page signup
import Intelligience from "../assets/ai-platform-unified-svgrepo-com.svg";
import Translation from "../assets/healthcare-nlp-api-svgrepo-com.svg";
import Knowledge from "../assets/cloud-optimization-ai-fleet-routing-api-svgrepo-com.svg";
import Creativity from "../assets/chip-intelligence-processor-svgrepo-com.svg";
import { href, Link } from "react-router";
const TranslateComponents = () => {
  return (
    <section className="h-[100vh] bg-black">
      <div className="flex justify-center pt-30">
        <PromptComponent />
      </div>
    </section>
  );
};

// the component of the search functionality
const PromptComponent = () => {
  // state that handles knowledge based API
  const [promptValue, setPromptValue] = useState("");

  // useEffect call for the ai - third party API.

  return (
    <section
      className="prompt max-w-[80%] mx-auto flex flex-col
     gap-2"
    >
      <div className="">
        <div className="flex space-x-2 items-center justify-center text-3xl font-medium">
          <FaRainbow className="text-[#0fdbcb]" />
          <h1>Nator AI</h1>
        </div>
        <p className="text-sm text-balance font-mono text-center py-2">
          Experience the joy in using Nator AI...
        </p>
      </div>
      <div className=" bg-zinc-900 p-4 rounded-md">
        <ChooseComponents />
      </div>
    </section>
  );
};

const ChooseComponents = () => {
  const Options = [
    {
      label: "Intelligence",
      imageLabel: Intelligience,
      href: "knowledge",
    },
    {
      label: "Translation",
      imageLabel: Translation,
      href: "options",
    },
    {
      label: "Creativity",
      imageLabel: Creativity,
      href: "Knowledge",
    },
    {
      label: "Knowledge",
      imageLabel: Knowledge,
      href: "knowledge",
    },
  ];

  return (
    <section className="">
      <div className="select_options grid grid-cols-4 gap-16">
        {Options.map((multi) => (
          <Link to={`/${multi.href}`}>
            <div
              className="intelligence flex gap-2 items-center hover:bg-[#0d0d0d] p-2 rounded-sm duration-300 transition-colors cursor-pointer"
              key={multi.label}
            >
              <div className="img">
                <img src={multi.imageLabel} alt="" className="w-12" />
              </div>
              <p className="font-mono">{multi.label}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
export default TranslateComponents;
