import { useState } from "react";
import { IoTimeOutline, IoSearchSharp } from "react-icons/io5";

const Knowledge = () => {
  return (
    <section className="h-screen bg-black">
      <div className="max-w-[80%] mx-auto">
        <KnowledgeComponents />
      </div>
    </section>
  );
};

const KnowledgeComponents = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("Loading...");
  const [loading, setLoading] = useState(false);

  // Get API Key securely from environment variables
  const apiKey = import.meta.env.VITE_AZURE_API_KEY; // For Vite
  // const apiKey = process.env.REACT_APP_AZURE_API_KEY; // Uncomment for Create React App

  const knowledgeSearch = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!question.trim()) return;

    setLoading(true);
    setAnswer("Loading response...");

    try {
      const response = await fetch(
        "https://models.inference.ai.azure.com/chat/completions",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model: "gpt-4o",
            messages: [{ role: "user", content: question }],
            temperature: 1,
            max_tokens: 4096,
            top_p: 1,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${data?.error?.message}`);
      }

      setAnswer(data.choices?.[0]?.message?.content || "No response received.");
    } catch (error) {
      setAnswer(`An error occurred: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const date = new Date();
  return (
    <section className="pt-8">
      <div className="intelligence">
        <div className="relative py-6 px-2 bg-zinc-900 w-full h-90 rounded-sm border border-gray-500">
          <div className="overflow-auto max-h-80 p-2">
            <p className="break-words text-zinc-400">{answer}</p>
          </div>
          <div className="text-zinc-400 absolute bottom-2 flex space-x-3">
            <p className="text-sm">{date.toTimeString()}</p>
            <div className="flex space-x-2 items-center">
              <IoTimeOutline />
              <p className="text-sm"> {loading ? "Loading..." : "Ready"}</p>
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
          placeholder="Ask something..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <div className="flex justify-end">
          <button
            type="submit"
            className="flex space-x-2 items-center text-zinc-200 font-normal text-lg bg-emerald-400 px-8 py-2 rounded-sm mt-4 cursor-pointer hover:bg-emerald-700 duration-300 transition-all"
            disabled={loading}
          >
            <IoSearchSharp />
            <span className="block">{loading ? "Searching..." : "Search"}</span>
          </button>
        </div>
      </form>
    </section>
  );
};

export default Knowledge;
