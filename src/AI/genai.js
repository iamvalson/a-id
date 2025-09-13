import { GoogleGenAI } from "@google/genai";

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({});
const apikey = import.meta.env.VITE_GEMINI_API_KEY;
//AIzaSyAjmVEK0HYspqtPre3rXy3PjcLpG-kKTiw
async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Explain how AI works in a few words",
  });
  console.log(response.text);
}

main();

export default messageChatbot = async (messages) => {
//   const response = await ai.models.generateContent({
//     model: "gemini-2.5-flash",
//     messages: messages,
//   });
//   return response.text;
}