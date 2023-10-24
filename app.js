import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: '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'
});

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}

main();