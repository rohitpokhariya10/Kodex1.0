# LangChain Chat Memory Notes

This project demonstrates two command-line chat applications built with
TypeScript, LangChain, and Mistral AI:

- `noMemory.ts` sends only the current prompt. Every request is independent.
- `memory.ts` stores the conversation in memory and sends the complete history
  with each request.

## Request flow

### Stateless chat

```text
User prompt
    ↓
ChatMistralAI
    ↓
Mistral API
    ↓
Streamed assistant response
```

The model receives no earlier messages, so it cannot answer questions that
depend on previous turns.

### Stateful chat

```text
HumanMessage → message history → ChatMistralAI → streamed response
                     ↑                              ↓
                     └────────── AIMessage ─────────┘
```

The application creates memory by maintaining an ordered `BaseMessage[]`.
Before each request, it adds a `HumanMessage`; after streaming completes, it
adds the full response as an `AIMessage`.

> The model itself is still stateless. The application creates conversational
> context by resending prior messages.

## Prerequisites

- Node.js 22.6 or later (for direct TypeScript execution)
- npm
- A Mistral API key

## Installation

```bash
npm install
```

For a new project, the equivalent dependency setup is:

```bash
npm init -y
npm install langchain @langchain/core @langchain/mistralai dotenv
npm install --save-dev typescript @types/node
npx tsc --init
```

## Environment configuration

Create a `.env` file in the project root:

```dotenv
MISTRAL_API=your_mistral_api_key
```

Do not commit `.env` or expose API keys in source code, logs, screenshots, or
client-side applications. A production application should use a managed secret
store and rotate any key that may have been exposed.

## Running the examples

Node.js 22.6 and later can run these erasable TypeScript files directly:

```bash
node noMemory.ts
node memory.ts
```

Enter `exit` to close either chat. Verify the TypeScript code without emitting
JavaScript by running:

```bash
npx tsc --noEmit
```

## Main components

### `ChatMistralAI`

`ChatMistralAI` is LangChain's adapter for hosted Mistral chat models. The
important configuration fields in this project are:

- `apiKey`: authorizes requests to the Mistral API.
- `model`: selects the hosted model.
- `temperature`: controls response variation. Lower values generally produce
  more consistent output.

The examples use `stream()` instead of `invoke()`. Streaming returns response
chunks as they become available, which improves perceived latency in an
interactive terminal.

### LangChain messages

- `HumanMessage` represents user input.
- `AIMessage` represents an assistant response.
- `BaseMessage` is the shared message type used for the history array.

Explicit message roles help the chat model distinguish instructions, user
prompts, and assistant replies.

### Node.js `readline`

`node:readline/promises` is built into Node.js and requires no separate package.

- `process.stdin` receives terminal input.
- `process.stdout` displays prompts and streamed output.
- `rl.question()` asynchronously waits for user input.
- `rl.close()` releases the terminal input handle.

### ANSI colours

The examples print the assistant response in green:

```text
\x1b[31m  Red
\x1b[32m  Green
\x1b[33m  Yellow
\x1b[34m  Blue
\x1b[35m  Magenta
\x1b[36m  Cyan
\x1b[0m   Reset
```

Always reset the colour after styled output so later terminal text is not
affected.

## Memory and token usage

For the stateful example, each request contains:

- all stored user messages;
- all stored assistant messages;
- the current user message; and
- any provider or system instructions added elsewhere.

As history grows, input token usage, latency, and cost also grow. Real
applications commonly control this with:

1. A sliding window that retains only recent turns.
2. A summary of older messages.
3. Retrieval of only history relevant to the current prompt.
4. A provider-specific context-window limit.

The array in `memory.ts` is process-local and temporary. Durable, multi-user
memory requires a database or external session store, plus a separate history
for each user or conversation ID.

## Production considerations

These files are intentionally small learning examples. Before using the same
pattern in production, consider:

- validating and limiting user input;
- handling rate limits with bounded retries and backoff;
- applying request timeouts and cancellation;
- limiting conversation history before the context window is exceeded;
- recording structured errors without logging secrets or sensitive prompts;
- isolating message history by authenticated user and conversation;
- persisting only data that complies with privacy and retention requirements;
- pinning and testing dependency updates; and
- adding automated tests with a mocked model client.

## Troubleshooting

### `MISTRAL_API is not defined`

Confirm that `.env` exists in the directory where the command is run and that
it contains a non-empty `MISTRAL_API` value.

### Authentication or authorization errors

Check that the API key is valid, active, and permitted to use the configured
model.

### The model forgets earlier messages

Run `memory.ts`. The stateless example deliberately sends only the latest
prompt.

### Responses become slower over time

The growing history in `memory.ts` increases the request size. Limit, summarize,
or selectively retrieve older messages.

### Terminal text remains green

Ensure every styled output path writes the reset sequence `\x1b[0m`, including
error and early-exit paths.
