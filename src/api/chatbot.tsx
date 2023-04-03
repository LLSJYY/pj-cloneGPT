import axios from "axios";

export const chatBot = async (data: string) => {
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
  return res.data.choices[0].text;
};

export const GPTTURBO = async (data: string) => {
  const res = await axios.post(
    "https://api.openai.com/v1/chat/completions",
    {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content:
            "If I ask you something related to computer language, please answer in <code> ",
        },
        {
          role: "user",
          content:
            "If the questions I asked have priority or order, please return them to <ol><li></li></ol> format ",
        },
        { role: "user", content: data },
      ],
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer " + String(process.env.NEXT_PUBLIC_OPENAI_API_KEY),
      },
    }
  );
  const text = res.data.choices[0].message.content;

  if (text === undefined) {
    throw new Error("Failed to generate response");
  }
  return text;
};
