import dotenv from "dotenv";
dotenv.config();
import { ChatMistralAI } from "@langchain/mistralai";
import * as readline from "node:readline/promises";

// Fail fast so configuration problems are reported before the chat loop starts.
if (!process.env.MISTRAL_API) {
  throw new Error("MISTRAL_API is not defined in the environment variables.");
}

// This client is reused for every turn to avoid unnecessary reconfiguration.
const llm = new ChatMistralAI({
  apiKey: process.env.MISTRAL_API,
  model: "mistral-medium-latest",
});

// The promise-based readline API keeps terminal input compatible with async/await.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Stateless chat started. Type "exit" to stop.\n');

try {
  // Keep accepting prompts until the user explicitly ends the session.
  while (true) {
    const question = await rl.question("You: ");
    const cleanQuestion = question.trim();

    if (!cleanQuestion) continue;
    if (cleanQuestion.toLowerCase() === "exit") break;

    // Passing only the latest prompt makes every request independent (stateless).
    const streamResponse = await llm.stream(cleanQuestion);

    process.stdout.write("\x1b[32mAI: ");

    // Write chunks immediately to reduce the perceived response latency.
    for await (const chunk of streamResponse) {
      process.stdout.write(chunk.text);
    }

    // Reset terminal styling so subsequent user input uses the default colour.
    process.stdout.write("\x1b[0m\n\n");
  }
} catch (error) {
  console.error("\nChat failed:", error);
} finally {
  // Always release the input stream, including when an API request fails.
  rl.close();
}
