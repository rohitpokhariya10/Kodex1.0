import { ChatMistralAI } from "@langchain/mistralai";
import {
  HumanMessage,
  AIMessage,
  type BaseMessage,
} from "@langchain/core/messages";
import dotenv from "dotenv";
dotenv.config();
import * as readline from "node:readline/promises";

// Validate required configuration at startup instead of failing during a request.
if (!process.env.MISTRAL_API) {
  throw new Error("MISTRAL_API is not defined in the environment variables.");
}

// A temperature of zero favours consistent, focused responses for this demo.
const llm = new ChatMistralAI({
  apiKey: process.env.MISTRAL_API,
  model: "mistral-medium-latest",
  temperature: 0,
});

// Use Node's promise-based terminal interface for an asynchronous chat loop.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// LangChain message objects preserve roles when history is sent back to the model.
// This is in-memory session state; it is lost when the process exits.
const messages: BaseMessage[] = [];

console.log('Chat started. Type "exit" to stop.\n');

try {
  while (true) {
    const question = await rl.question("You: ");
    const cleanQuestion = question.trim();

    if (!cleanQuestion) continue;

    if (cleanQuestion.toLowerCase() === "exit") {
      console.log("Chat ended.");
      break;
    }

    // Add the current prompt before invoking the model so it receives full context.
    messages.push(new HumanMessage(cleanQuestion));

    process.stdout.write("\x1b[32mAI: ");
    const streamResponse = await llm.stream(messages);
    let completeResponse = "";

    // Stream for responsiveness while accumulating the exact answer for history.
    for await (const chunk of streamResponse) {
      process.stdout.write(chunk.text);
      completeResponse += chunk.text;
    }

    // Restore the terminal's default colour before showing the next prompt.
    process.stdout.write("\x1b[0m\n\n");

    // Store the assistant reply so it is included in the next model request.
    messages.push(
      new AIMessage({
        content: completeResponse,
      }),
    );
  }
} catch (error) {
  console.error("\nChat failed:", error);
} finally {
  // Ensure the terminal input handle is closed on both success and failure.
  rl.close();
}
