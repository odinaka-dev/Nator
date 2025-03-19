import { useState } from "react";

const Options = () => {
  // State for user inputs
  const [text, setText] = useState("how are you");
  const [from, setFrom] = useState("English");
  const [to, setTo] = useState("Hausa");
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
            Authorization: `SyJjeH9mgJoCHqgxVLPezviavQekZSOZg1JuU31kBXkvj2VXxS`,
          },
          body: JSON.stringify({
            text,
            from,
            to,
          }),
        }
      );

      if (response.ok || response.status === 200) {
        const data = await response.json();
        setTranslation(data.translation);
      } else {
        console.error("Translation failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section className="bg-black h-screen p-4 py-8 text-white">
      <div className="max-w-[80%] mx-auto flex flex-col gap-4">
        {/* Input Fields */}
        <input
          type="text"
          className="p-2 border border-gray-500 bg-zinc-800 text-white rounded"
          placeholder="Enter text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
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

        {/* Translate Button */}
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          onClick={Translate}
        >
          Translate
        </button>

        {/* Output Section */}
        <div className="translate_outputs bg-zinc-900 p-4 rounded">
          <p className="text-lg">
            {translation || "Translation will appear here..."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Options;
