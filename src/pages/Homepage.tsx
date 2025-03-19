import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { Link } from "react-router";
import TestimonialImg from "../assets/cyborg-head-artificial-intelligence-3d-rendering_117023-721.jpg";
//icon asset
import { FaIoxhost } from "react-icons/fa";
import { FaInstalod } from "react-icons/fa6";
import { FaPaintbrush } from "react-icons/fa6";
import { SiFuturelearn } from "react-icons/si";
import { PiCurrencyDollarSimpleFill } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { FaArrowRight } from "react-icons/fa6";
// image asset
import Image1 from "../assets/cyborg-head-artificial-intelligence-3d-rendering_117023-721.jpg";
import Image2 from "../assets/ai-chip-artificial-intelligence-future-technology-innovation_53876-129780.webp";
import Image3 from "../assets/futuristic-portrait-young-girl-with-high-tech_23-2151133516.webp";
import Image4 from "../assets/portrait-surreal-sea-creature_23-2151625941.jpg";
import Image5 from "../assets/robot-handshake-human-background-futuristic-digital-age_53876-129770.webp";
import Image6 from "../assets/there-is-digital-art-image-man-with-glasses-generative-ai_925897-90641.webp";
import Image7 from "../assets/headphones-used-learning-new-language_23-2148293475.webp";
const Homepage = () => {
  return (
    <React.Fragment>
      <BannerComponent />
      <WelcomeComponents />
      <ThirdComponents />
      <AboutComponents />
      <PricingPlans />
      <Testimonials />
      <FrequentlyAskedQuestions />
      <Footer />
    </React.Fragment>
  );
};

// main banner
const BannerComponent = () => {
  return (
    <section className="banner_main backdrop-brightness-75 text-center">
      <div className="max-w-[80%] mx-auto">
        <div className="">
          <h1 className="text-[#00fcdb] capitalize text-xl">Nator's world</h1>
          <h1 className="text-6xl text-balance font-semibold bg-gradient-to-r from-[#a1fff2] to-[#00727a] bg-clip-text text-transparent">
            Unlock The amazing power of{" "}
            <span className="">Translational AI.</span>
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
      <div>
        <svg
          width="100%"
          height="100%"
          id="svg"
          viewBox="0 0 1440 390"
          xmlns="http://www.w3.org/2000/svg"
          className="transition duration-300 ease-in-out delay-150"
        >
          <path
            d="M 0,400 L 0,100 C 92.60714285714286,104.14285714285714 185.21428571428572,108.28571428571429 317,105 C 448.7857142857143,101.71428571428571 619.75,90.99999999999999 760,98 C 900.25,105.00000000000001 1009.7857142857142,129.71428571428572 1118,133 C 1226.2142857142858,136.28571428571428 1333.107142857143,118.14285714285714 1440,100 L 1440,400 L 0,400 Z"
            stroke="none"
            stroke-width="0"
            fill="#00fcdb"
            fill-opacity="0.53"
            className="transition-all duration-300 ease-in-out delay-150 path-0"
          ></path>
          <path
            d="M 0,400 L 0,233 C 120.57142857142858,229.32142857142856 241.14285714285717,225.64285714285714 371,217 C 500.85714285714283,208.35714285714286 639.9999999999999,194.75 764,188 C 888.0000000000001,181.25 996.8571428571429,181.3571428571429 1107,190 C 1217.142857142857,198.6428571428571 1328.5714285714284,215.82142857142856 1440,233 L 1440,400 L 0,400 Z"
            stroke="none"
            stroke-width="0"
            fill="#00fcdb"
            fill-opacity="1"
            className="transition-all duration-300 ease-in-out delay-150 path-1"
          ></path>
        </svg>
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
      planTag: "Free Plan",
      subTag: "Perfect for private All individuals",
      Price: 0,
      Prompts: "700",
    },
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
              {pricings.Prompts} Prompts request per month
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

// testimonials section
const Testimonials = () => {
  const [itemsPerPage, setItemPerPage] = useState(3);
  const [index, setIndex] = useState(0);

  const updateItemPerPage = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 390) {
      setItemPerPage(1);
    } else if (screenWidth <= 760) {
      setItemPerPage(2);
    } else {
      setItemPerPage(3);
    }
  };

  useEffect(() => {
    updateItemPerPage();
    window.addEventListener("resize", updateItemPerPage);
    return () => window.removeEventListener("resize", updateItemPerPage);
  }, []);

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
    {
      name: "Tobechukwu Nathaniel",
      Job: "Tourist",
      ratings: "4 star ratings",
      testimonial:
        "I very much appreciate this piece of technologyy so  far, it has greatly improved my job and my communication with other historian all over the globe.",
    },
  ];

  const totalPages = Math.ceil(userTestimonials.length / itemsPerPage);

  const nextButton = () => {
    setIndex((next) => (next + 1 < totalPages ? next + 1 : 0));
  };

  const PreviousSlides = () => {
    setIndex((prev) => (prev + 1 > totalPages ? prev + 1 : 0));
  };
  // the state functionality

  // the use effect

  return (
    <section className="bg-black">
      <div className="max-w-[80%] mx-auto my-16 mb-26 py-16">
        <div>
          <h1 className="text-[#00fcdb] uppercase text-sm  text-center my-2">
            what our users are saying
          </h1>
          <p className="text-2xl capitalize text-balance max-w-[100%] mx-auto font-semibold text-center mb-8">
            Testimonials
          </p>
        </div>
        <section className="flex items-center">
          <div
            className="prev_button cursor-pointer bg-[#00fdbd] p-2 rounded-[50%] text-xl relative left-4 hover:bg-emerald-700 transition-colors duration-200"
            onClick={PreviousSlides}
          >
            <GrFormPrevious />
          </div>
          <main className="text-[#a8acb7] testimonials_clients grid grid-cols-3 space-x-4">
            {userTestimonials
              .slice(index * itemsPerPage, (index + 1) * itemsPerPage)
              .map((clientels) => (
                <div className="clients bg-zinc-900 py-8 rounded-sm">
                  <div className="client_info flex space-x-3 items-center justify-center">
                    <div className="client_img">
                      <img
                        src={TestimonialImg}
                        alt=""
                        className="w-15 h-15 rounded-[50%]"
                      />
                    </div>
                    <div className="">
                      <h1 className="text-[#00fcdb]">{clientels.name}</h1>
                      <h4 className="text-white text-sm">{clientels.Job}</h4>
                    </div>
                  </div>
                  <div className="text-center text-balance">
                    <p className="">{clientels.testimonial}</p>
                    <p className="text-yellow-500 flex justify-center items-center gap-2 mt-4 capitalize">
                      {clientels.ratings}{" "}
                      <span>
                        <FaStar />
                      </span>
                    </p>
                  </div>
                </div>
              ))}
          </main>
          <div
            className="next_prev cursor-pointer bg-[#00fdbd] p-2 rounded-[50%] text-xl relative right-4 hover:bg-emerald-700 transition-colors duration-200"
            onClick={nextButton}
          >
            <MdNavigateNext />
          </div>
        </section>
      </div>
    </section>
  );
};

const FrequentlyAskedQuestions = () => {
  const FaqSection = [
    {
      id: 1,
      question: "Whats is Nator all about?",
      answer:
        "Nator is a translational AI that translate multiple languages for users readability",
    },
    {
      id: 2,
      question: "How do I get started on Nator?",
      answer:
        "Get started by login in to Nator's application system, create an account, choose your plans and consume our API.",
    },
    {
      id: 3,
      question: "Who are the team  behind Nator?",
      answer:
        "Nator's team are sets of professionals that created an AI that handles both knowledge and translation functions for our users.",
    },
    {
      id: 4,
      question: "How does Nator's plan works?",
      answer:
        "Nator has 3 main plans free, business and premium plans. Whatever purpose you aim to achieve choose the best plan that meets with it.",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="max-w-[80%] mx-auto my-16 mb-26 grid grid-cols-2 gap-8 items-center place-center">
      <div>
        <div>
          <h1 className="text-[#00fcdb] uppercase text-sm my-2">Faq</h1>
          <p className="text-2xl capitalize text-balance max-w-[100%] mx-auto font-semibold mb-2">
            Frequetly Asked Questions
          </p>
        </div>
        <section className="mt-4 capitalize">
          {FaqSection.map((faqs) => (
            <div className="mb-8" key={faqs.id}>
              <div className="flex justify-between items-center text-[#00fcdb]">
                <h1 className="cursor-pointer">{faqs.question}</h1>
                <FaArrowRight className="cursor-pointer" />
              </div>
              <p className="bg-zinc-800 rounded-sm p-4 text-balance text-sm hidden">
                {faqs.answer}
              </p>
            </div>
          ))}
        </section>
      </div>
      <div>
        <img src={Image7} alt="" />
      </div>
    </section>
  );
};

export default Homepage;
