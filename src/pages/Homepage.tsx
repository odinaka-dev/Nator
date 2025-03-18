import React from "react";
import { Link } from "react-router";
//icon asset
import { FaIoxhost } from "react-icons/fa";
import { FaInstalod } from "react-icons/fa6";
import { FaPaintbrush } from "react-icons/fa6";
import { SiFuturelearn } from "react-icons/si";
import { PiCurrencyDollarSimpleFill } from "react-icons/pi";

// image asset
import Image1 from "../assets/cyborg-head-artificial-intelligence-3d-rendering_117023-721.jpg";
import Image2 from "../assets/ai-chip-artificial-intelligence-future-technology-innovation_53876-129780.webp";
import Image3 from "../assets/futuristic-portrait-young-girl-with-high-tech_23-2151133516.webp";
import Image4 from "../assets/portrait-surreal-sea-creature_23-2151625941.jpg";
import Image5 from "../assets/robot-handshake-human-background-futuristic-digital-age_53876-129770.webp";
import Image6 from "../assets/there-is-digital-art-image-man-with-glasses-generative-ai_925897-90641.webp";

const Homepage = () => {
  return (
    <React.Fragment>
      <BannerComponent />
      <WelcomeComponents />
      <ThirdComponents />
      <AboutComponents />
      <PricingPlans />
      <Testimonials />
    </React.Fragment>
  );
};

// main banner
const BannerComponent = () => {
  return (
    <section className="banner_main backdrop-brightness-75">
      <div className="max-w-[80%] mx-auto pr-[500px]">
        <div className="">
          <h1 className="text-[#00fcdb] capitalize text-xl">Nator's world</h1>
          <h1 className="text-4xl text-balance font-semibold">
            Unlock The amazing power of{" "}
            <span className="text-[#00fcdb] uppercase">Translational AI.</span>
          </h1>
          <p className="text-zinc-300 text-balance mt-4">
            Nator is a fully functional Artificial intelligence that handles and
            process translation of diverse languages to users. It has a
            different kind of prompt mechanism that users use to communicate
            with the AI. Check out Nator today.
          </p>
          <div className="">
            <button className="bg-[#3500FC] font-bold text-[#a8acb7] text-sm mt-6 py-2 px-8 rounded-sm cursor-pointer hover:bg-blue-800 transition-colors duration-300">
              <Link to={"/signup"}>Get started</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// first section
const WelcomeComponents = () => {
  const AllImages = [
    {
      src: Image1,
    },
    {
      src: Image2,
    },
    {
      src: Image3,
    },
    {
      src: Image4,
    },
    {
      src: Image5,
    },
    {
      src: Image6,
    },
  ];
  return (
    <section className="">
      <div className="components_text text-center">
        <h1 className="text-[#00fcdb] capitalize text-base">what Nator does</h1>
        <p className="text-2xl text-balance max-w-[54%] mx-auto font-semibold">
          Unleash the Potential of Nator Al Tools Crafted with Brilliance, Style
          and Quality that meets Translation and knowledge
        </p>
      </div>
      <div className="image_gallery grid grid-cols-6 gap-4 my-6">
        {AllImages.map((allimg) => (
          <img
            src={allimg.src}
            key={allimg.src}
            alt=""
            className="w-[100%] h-[80%]"
          />
        ))}
      </div>
    </section>
  );
};

// second section
const ThirdComponents = () => {
  const Features = [
    {
      featureIcon: <FaIoxhost />,
      featureName: "Intelligent",
      featureText:
        "Nator has an amazing translation intelligence and works faster.",
    },
    {
      featureIcon: <FaInstalod />,
      featureName: "Visualization",
      featureText:
        "Visualize the future with us, we are creating an amazing ground breaking AI.",
    },
    {
      featureIcon: <FaPaintbrush />,
      featureName: "Creativity",
      featureText: "We create the response and knowledge that user needs.",
    },
    {
      featureIcon: <SiFuturelearn />,
      featureName: "Flexible",
      featureText:
        "Flexible to use and easy to understand through with an amazing interative UI.",
    },
  ];
  return (
    <section className="max-w-[80%] mx-auto my-16 mb-26">
      <div>
        <h1 className="text-[#00fcdb] uppercase text-sm  text-center my-2">
          Nator Features
        </h1>
        <p className="text-2xl text-balance max-w-[100%] mx-auto font-semibold text-center mb-8">
          AI-POWERED DESIGN
        </p>
      </div>
      <div className="nator_features grid grid-cols-4 gap-2">
        {Features.map((featuring) => (
          <div
            className="bg-zinc-900 py-12 rounded-lg"
            key={featuring.featureName}
          >
            <div className="text-[#00fcdb] flex items-center justify-center text-3xl mb-2 ">
              {featuring.featureIcon}
            </div>
            <h1 className="text-[#00fcdb] text-center capitalize">
              {featuring.featureName}
            </h1>
            <p className="text-balance text-sm text-[#a8acb7] text-center">
              {featuring.featureText}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

// third section
const AboutComponents = () => {
  return (
    <section className="my-16 max-w-[64%] mx-auto grid grid-cols-2 items-center gap-12">
      <div>
        <img src={Image6} alt="" className="w-full" />
      </div>
      <div>
        <h1 className="text-[#00fcdb] uppercase text-sm my-2">About Us</h1>
        <p className="text-2xl capitalize text-balance max-w-[100%] mx-auto font-semibold mb-4">
          The future of Translational AI is here!
        </p>
        <p className="text-[#a8acb7] text-sm text-balance">
          The future of translational and knowledge based AI begins from Here.
          Know all about Nator, it's vision, mission, goals, and every other
          things that makes up the body Nator.
        </p>
        <button className="bg-[#3500FC] text-[#a8acb7] text-sm mt-6 py-2 px-8 rounded-sm cursor-pointer hover:bg-blue-800 transition-colors duration-300">
          <Link to={"/"}>About Us</Link>
        </button>
      </div>
    </section>
  );
};

// pricing section section
const PricingPlans = () => {
  const Pricing = [
    {
      planTag: "Business Plan",
      subTag: "Perfect for private individuals/students",
      Price: 8,
      Prompts: "10,000",
    },
    {
      planTag: "Premium Plan",
      subTag: "Perfect for private Companies/individuals",
      Price: 16,
      Prompts: "100,000",
    },
  ];

  return (
    <section className="pricing plans max-w-[80%] mx-auto my-16 mb-26">
      <div>
        <h1 className="text-[#00fcdb] uppercase text-sm  text-center my-2">
          Affordable plans for All
        </h1>
        <p className="text-2xl capitalize text-balance max-w-[100%] mx-auto font-semibold text-center mb-8">
          Pricing plans
        </p>
      </div>
      <div className="plans flex justify-center space-x-8">
        {Pricing.map((pricings) => (
          <div className="text-center bg-zinc-900 p-6 rounded-sm border-2 border-[#3500FC]">
            <h3 className="text-2xl font-semibold text-[#00fcdb] mb-2">
              {pricings.planTag}
            </h3>
            <p className="text-[#a8acb7] text-balance text-sm">
              {pricings.subTag}
            </p>
            <div className="price_tags flex justify-center my-8 text-[#00fcdb] text-5xl font-bold">
              <PiCurrencyDollarSimpleFill />
              <div>
                {pricings.Price}
                <span className="text-base text-white font-normal">/Month</span>
              </div>
            </div>
            <p className="text-[#a8acb7] text-balance text-sm">
              {pricings.Prompts} Prompts request per day
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

// testimonials section
const Testimonials = () => {
  // the testimonials array listed - name, testimonials, star ratings, nature of job.
  const userTestimonials = [
    {
      name: "Bola Ahmed",
      Job: "Historian",
      ratings: "5 star ratings",
      testimonial:
        "I very much appreciate this piece of technologyy so  far, it has greatly improved my job and my communication with other historian all over the globe.",
    },
    {
      name: "Nwosu Charles",
      Job: "Developer",
      ratings: "4 star ratings",
      testimonial:
        "I very much appreciate this piece of technologyy so  far, it has greatly improved my job and my communication with other historian all over the globe.",
    },
    {
      name: "Sarah Akintuyi",
      Job: "Content writer",
      ratings: "5 star ratings",
      testimonial:
        "I very much appreciate this piece of technologyy so  far, it has greatly improved my job and my communication with other historian all over the globe.",
    },
    {
      name: "Harley Abah",
      Job: "Archeologist",
      ratings: "4.5 star ratings",
      testimonial:
        "I very much appreciate this piece of technologyy so  far, it has greatly improved my job and my communication with other historian all over the globe.",
    },
    {
      name: "Success Emeka",
      Job: "Business",
      ratings: "4 star ratings",
      testimonial:
        "I very much appreciate this piece of technologyy so  far, it has greatly improved my job and my communication with other historian all over the globe.",
    },
  ];
  // the state functionality

  // the use effect

  return (
    <section className="pricing plans max-w-[80%] mx-auto my-16 mb-26">
      <div>
        <h1 className="text-[#00fcdb] uppercase text-sm  text-center my-2">
          what our users are saying
        </h1>
        <p className="text-2xl capitalize text-balance max-w-[100%] mx-auto font-semibold text-center mb-8">
          Testimonials
        </p>
      </div>
      <div className=""></div>
    </section>
  );
};

export default Homepage;
