import { useState, useEffect } from "react";
import { IoTimeOutline, IoSearchSharp } from "react-icons/io5";

const KnowledgeComponents = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("Loading...");
  const [scriptLoaded, setScriptLoaded] = useState(false);

  // Load the external script dynamically
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.puter.com/v2/";
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    document.body.appendChild(script);
  }, []);

  const knowledgeSearch = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!scriptLoaded) {
      setAnswer("Nator AI is still loading, ask again");
      return;
    }

    setAnswer("Processing...");

    try {
      const chatResp = await window.puter.ai.chat(question, {
        model: "o3-mini",
        stream: true,
      });
      setAnswer(""); // Clear previous response

      for await (const part of chatResp) {
        setAnswer(
          (prev) => prev + (part?.text?.replaceAll("\n", "<br>") || "")
        );
      }
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setAnswer("An error occurred. Please try again.");
    }
  };

  const date = new Date();
  return (
    <section className="pt-8 max-w-[80%] mx-auto">
      <div className="intelligence">
        <div className="relative py-6 px-2 bg-zinc-900 w-full h-96 rounded-sm border border-gray-500">
          <div className="overflow-auto max-h-80 p-2">
            <p
              className="break-words text-zinc-400"
              dangerouslySetInnerHTML={{ __html: answer }}
            />
          </div>
          <div className="text-zinc-400 absolute bottom-2 flex space-x-3">
            <p className="text-sm">{date.toTimeString()}</p>
            <div className="flex space-x-2 items-center">
              <IoTimeOutline />
              <p className="text-sm">2 seconds ago</p>
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
          placeholder="What would you love to know!"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <div className="flex justify-end">
          <button className="flex space-x-2 items-center text-zinc-200 font-normal text-lg bg-emerald-400 px-8 py-2 rounded-sm mt-4 cursor-pointer hover:bg-emerald-700 duration-300 transition-all">
            <IoSearchSharp />
            <span className="block">Search</span>
          </button>
        </div>
      </form>
    </section>
  );
};

export default KnowledgeComponents;
