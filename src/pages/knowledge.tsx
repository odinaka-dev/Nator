import { useState } from "react";
import { IoTimeOutline } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";

const knowledge = () => {
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
  const [answer, setAnswer] = useState("");

  const knowledgeSearch = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://apis.omeife.ai/api/v1/user/developer/knowledge-assistance",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer sHof7Op2C2OjNv2J1Fd9fNTolvwjPkEF4iSO6EHETh5YMPEeio`,
          },
          body: JSON.stringify({ question }),
        }
      );

      const data = await response.json();

      if (response.ok || response.status === 200) {
        setAnswer(data.data.text.response);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const date = new Date();
  return (
    <section className="pt-8">
      <div className="intelligence">
        <div className="relative py-6 px-2 bg-zinc-900 w-full h-90 rounded-sm border border-gray-500">
          <div className="overflow-auto max-h-80 p-2">
            <p className="break-words text-zinc-400">
              {answer || "An error occurred please  make your request again"}
            </p>
          </div>
          <div className="text-zinc-400 absolute bottom-2 flex space-x-3">
            <p className="text-sm">{date.toTimeString()}</p>{" "}
            <div className="flex space-x-2 items-center">
              <IoTimeOutline />
              <p className="text-sm"> 2 seconds sago</p>
            </div>
          </div>
        </div>
      </div>
      <form
        action=""
        onSubmit={knowledgeSearch}
        className="mt-8 flex flex-col rounded-sm"
      >
        <input
          type="search"
          name=""
          className="px-4 py-2 pb-6 rounded-md appearance-none bg-zinc-900"
          placeholder="Ask and experience the endless possibilities of NatorAI"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <div className="flex justify-end">
          <button
            onClick={knowledgeSearch}
            className="flex space-x-2 items-center text-zinc-200 font-normal text-lg bg-emerald-400 px-8 py-2 rounded-sm mt-4 cursor-pointer hover:bg-emerald-700 duration-300 transition-all"
          >
            <IoSearchSharp />
            <span className="block">Search</span>
          </button>
        </div>
      </form>
    </section>
  );
};

export default knowledge;
