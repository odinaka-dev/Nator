import { useState } from "react";
import { HiLightBulb } from "react-icons/hi";

const Options = () => {
  // State for user inputs
  const [text, setText] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [translation, setTranslation] = useState("");

  const Translate = async () => {
    try {
      const response = await fetch(
        "https://apis.omeife.ai/api/v1/user/developer/translate",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer SXwzMJiZA5DWMMfQH3AUyJ5bCh53Rq6guYUzbWJMvAUW7LGcZw`,
          },
          body: JSON.stringify({ text, from, to }),
        }
      );

      const data = await response.json();
      console.log(data.data.translated_text);

      if (response.ok) {
        setTranslation(data.data.translated_text);
      } else {
        console.error("Error:", data);
      }
    } catch (error) {
      console.error("Request failed:", error);
    }
  };

  return (
    <section className="bg-black h-screen p-4 py-8 text-white">
      <div className="max-w-[90%] mx-auto grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-4">
          <textarea
            name=""
            id=""
            cols={10}
            rows={4}
            className="p-2 border border-gray-500 bg-zinc-800 text-white rounded"
            placeholder="Enter text you are translating"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <div className="grid grid-cols-2 gap-8">
            <input
              type="text"
              className="p-2 border border-gray-500 bg-zinc-800 text-white rounded"
              placeholder="Source Language"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />
            <input
              type="text"
              className="p-2 border border-gray-500 bg-zinc-800 text-white rounded"
              placeholder="Target Language"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
          </div>
          <button
            className="bg-[#0fdbcd] text-white py-2 px-4 rounded hover:bg-emerald-600 transition-colors duration-300  cursor-pointer
            "
            onClick={Translate}
          >
            Nator
          </button>
          <div className="manual italic border-gray-500 bg-zinc-900 p-4 rounded-lg">
            <div className="flex gap-2">
              <HiLightBulb className="text-yellow-500 2 text-xl" />
              <p className="">Nator's translation Instruction</p>
            </div>
            <ol>
              <li className="">
                Type the contents you want to translate in the first prompt
              </li>
              <li className="">
                Make sure the content is english then set your source to English
              </li>
              <li className="">
                The last prompt set to the preferred language you wish to change
                to.
              </li>
            </ol>
          </div>
        </div>
        <div className="translate_outputs bg-zinc-900 p-4 rounded">
          <p className="text-lg italic font-mono">{translation}</p>
        </div>
      </div>
    </section>
  );
};

export default Options;
