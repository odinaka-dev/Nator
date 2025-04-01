import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { LuLoaderCircle } from "react-icons/lu";
import ReactMarkdown from "react-markdown";

interface ChatMessage {
  question: string;
  answer: string;
}

const KnowledgeComponents = () => {
  const [question, setQuestion] = useState("");
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = () => {
    setIsLoading(true);
  };

  const knowledgeSearch = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!question.trim()) return;

    handleSearch();

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
        setChatHistory((prev) => [
          ...prev,
          {
            question,
            answer: data.choices[0].message.content,
          },
        ]);
      } else {
        setChatHistory((prev) => [
          ...prev,
          {
            question,
            answer: "Error: Unable to fetch response",
          },
        ]);
      }
    } catch (error) {
      console.error(error);
      setChatHistory((prev) => [
        ...prev,
        {
          question,
          answer: "An error occurred. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
      setQuestion("");
    }
  };

  return (
    <section className="pt-8 max-w-[90%] mx-auto">
      <div className="intelligence">
        <div className="relative py-0 px-2 w-full h-110 md:h-100 rounded-sm">
          <div className="overflow-auto max-h-[100%] p-2">
            <div className="break-words text-zinc-400 space-y-4">
              {chatHistory.length === 0 ? (
                <div className="text-center py-8 text-zinc-500">
                  Ask me anything
                </div>
              ) : (
                chatHistory.map((chat, index) => (
                  <div key={index} className="space-y-4">
                    <div className="inline-block p-4 rounded-sm bg-emerald-600 text-zinc-300">
                      <ReactMarkdown>{chat.question}</ReactMarkdown>
                    </div>
                    <div className="bg-zinc-900 py-2 px-4 rounded-sm max-w-[90%] mx-auto">
                      <ReactMarkdown>{chat.answer}</ReactMarkdown>
                    </div>
                  </div>
                ))
              )}
              {isLoading && (
                <div className="space-y-4">
                  <div className="inline-block p-4 rounded-sm bg-emerald-600 text-zinc-300">
                    {question}
                  </div>
                  <div className="bg-zinc-900 py-2 px-4 rounded-sm max-w-[90%] mx-auto flex items-center justify-center">
                    <LuLoaderCircle className="animate-spin text-xl" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <form
        onSubmit={knowledgeSearch}
        className="mt-8 flex items-center justify-center gap-2 rounded-sm w-full"
      >
        <div className="">
          <input
            type="search"
            className="px-4 py-4 rounded-md appearance-none bg-zinc-900 w-70 sm:w-100 md:w-150 lg:w-200 xl:250"
            placeholder="Ask your question..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>
        <div className="flex justify-center items-center">
          <button
            disabled={isLoading || !question.trim()}
            type="submit"
            className="text-zinc-200 font-normal text-lg bg-emerald-400 px-4 sm:px-8 py-4 rounded-sm cursor-pointer hover:bg-emerald-900 duration-300 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="flex space-x-2 items-center">
                <LuLoaderCircle className="animate-spin" />
                <span className="hidden sm:block">Searching</span>
              </div>
            ) : (
              <div className="flex space-x-2 items-center">
                <IoSearchSharp />
                <span className="hidden sm:block">Search</span>
              </div>
            )}
          </button>
        </div>
      </form>
    </section>
  );
};

export default KnowledgeComponents;
