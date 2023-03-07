import axios from "axios";

export const chatBot = async (data: string) => {
  console.log(data);
  const res = await axios.post(
    "https://api.openai.com/v1/completions",
    {
      model: "text-davinci-003",
      prompt: `${data}`,
      temperature: 0.9,
      max_tokens: 500,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0.6,
      stop: [" Human:", " AI:"],
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + String(process.env.NEXT_PUBLIC_OPENAI_API_KEY),
      },
    }
  );
  console.log(res.data.choices[0].text);
  return res.data.choices[0].text;
};
