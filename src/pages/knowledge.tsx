import { useState } from "react";
import { IoTimeOutline, IoSearchSharp } from "react-icons/io5";
import OpenAI from "openai";

const Knowledge = () => {
  return (
    <section className="h-screen bg-black">
      <div className="max-w-[92%] md:max-w-[80%] mx-auto">
        <KnowledgeComponents />
      </div>
    </section>
  );
};

const KnowledgeComponents = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const knowledgeSearch = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const apiKey = import.meta.env.VITE_GITHUB_TOKEN;

    if (!apiKey) {
      setAnswer("API key is missing. can't communicate with Nator");
      return;
    }

    try {
      const openai = new OpenAI({
        baseURL: "https://models.inference.ai.azure.com",
        apiKey,
        dangerouslyAllowBrowser: true,
      });

      const response = await openai.chat.completions.create({
        messages: [
          { role: "system", content: "You are so helpful Nator." },
          { role: "user", content: question },
        ],
        model: "gpt-4o",
        temperature: 1,
        max_tokens: 4096,
        top_p: 1,
      });

      setAnswer(response.choices[0].message.content || "No response.");
    } catch (error) {
      console.error(error);
      setAnswer("come again pls Nator AI");
    }
  };

  return (
    <section className="pt-8">
      <div className="intelligence">
        <div className="relative px-2 bg-zinc-900 w-full h-90 rounded-sm border border-gray-500">
          <div className="overflow-auto max-h-90 p-2 py-6">
            <p className="break-words text-zinc-400">
              {answer || "Ask a question!"}
            </p>
          </div>
          <div className="text-zinc-400 absolute bottom-2 flex space-x-3">
            <p className="text-sm hidden sm:flex">
              {new Date().toTimeString()}
            </p>
            <div className="flex space-x-2 items-center">
              <IoTimeOutline />
              <p className="text-sm">Updated now</p>
            </div>
          </div>
        </div>
      </div>

      <form
        onSubmit={knowledgeSearch}
        className="mt-8 flex flex-col rounded-sm"
      >
        <input
          type="search"
          className="px-4 py-2 pb-6 rounded-md appearance-none bg-zinc-900 text-white"
          placeholder="Ask OpenAI anything..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <div className="flex justify-end">
          <button
            type="submit"
            className="flex space-x-2 items-center text-white font-normal text-lg bg-emerald-400 px-8 py-2 rounded-sm mt-4 cursor-pointer hover:bg-emerald-700 duration-300 transition-all"
          >
            <IoSearchSharp />
            <span>Search</span>
          </button>
        </div>
      </form>
    </section>
  );
};

export default Knowledge;
