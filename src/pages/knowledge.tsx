import { useState } from "react";
import { IoTimeOutline } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { LuLoaderCircle } from "react-icons/lu";
import ReactMarkdown from "react-markdown";

const KnowledgeComponents = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  };

  const knowledgeSearch = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_AZURE_API_KEY}`,
          },
          body: JSON.stringify({
            model: "deepseek/deepseek-chat-v3-0324:free",
            messages: [{ role: "user", content: question }],
          }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        setAnswer(data.choices[0].message.content);
      } else {
        setAnswer("Error: Unable to fetch response");
      }
    } catch (error) {
      console.error(error);
      setAnswer("An error occurred. Please try again.");
    }
  };

  const date = new Date();
  return (
    <section className="pt-8 max-w-[90%] mx-auto">
      <div className="intelligence">
        <div className="relative py-6 px-2 bg-zinc-900 w-full h-110 md:h-100 rounded-sm border border-gray-500">
          <div className="overflow-auto max-h-[100%] p-2">
            <div className="break-words text-zinc-400">
              {answer ? (
                <ReactMarkdown>{answer}</ReactMarkdown>
              ) : (
                "Ask me anything"
              )}
            </div>
          </div>
          <div className="text-zinc-400 absolute bottom-2 flex items-center space-x-3 pt-8">
            <p className="text-sm hidden md:flex">{date.toTimeString()}</p>
            <div className="flex space-x-2 items-center">
              <IoTimeOutline />
              <p className="text-sm"> 2 seconds ago</p>
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
          className="px-4 py-2 pb-6 rounded-md appearance-none bg-zinc-900"
          placeholder="Ask your question..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <div className="flex justify-end">
          <button
            onClick={handleSearch}
            // disabled={isLoading}
            type="submit"
            className="text-zinc-200 font-normal text-lg bg-emerald-400 px-8 py-2 rounded-sm mt-4 cursor-pointer hover:bg-emerald-900 duration-300 transition-all"
          >
            {isLoading ? (
              <div className="flex space-x-2 items-center">
                <LoadComponents />
                <span className="block">Searching</span>
              </div>
            ) : (
              <div className="flex space-x-2 items-center">
                <IoSearchSharp />
                <span className="block">Search</span>
              </div>
            )}
          </button>
        </div>
      </form>
    </section>
  );
};

const LoadComponents = () => {
  return (
    <section className="knowledge_load">
      <div className="flex justify-center items-center text-xl">
        <LuLoaderCircle className="animate-spin" />
      </div>
    </section>
  );
};

export default KnowledgeComponents;
