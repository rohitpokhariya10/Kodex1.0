import dotenv from "dotenv";
import fs from "fs/promises";
import { PDFParse } from "pdf-parse";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { MistralAIEmbeddings } from "@langchain/mistralai";
import { Pinecone } from "@pinecone-database/pinecone";
dotenv.config();

//create a Pinecone client and authenticate it using  API key.
const pc = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });

//STEP 1: PDF TO TEXT
const fileBuffer = await fs.readFile("./data.pdf");
//console.log("fileBuffer-->" , fileBuffer);
const parser = new PDFParse({ data: fileBuffer });
//console.log("parser-->" , parser);
const result = await parser.getText();
//console.log("result-->" , result);
const pdfText = result.text;
//console.log("PDF Text--->", pdfText);

//STEP 2: TEXT TO small chunks of that text (beneficial for embedding model)
const splitter = new RecursiveCharacterTextSplitter({
  chunkSize: 200,
  chunkOverlap: 50,
});

//Split karke dega
const chunks = await splitter.createDocuments([pdfText]);

//console.log("Chunks--->" , chunks);

// STEP 3: chunks → embeddings/vectors.
if(!process.env.MISTRAL_API_KEY){
    throw new Error("MISTRAL_API_KEY is required");
}
// Embedding Model Configuration
const embeddings = new MistralAIEmbeddings({
  model: "mistral-embed",
  apiKey: process.env.MISTRAL_API_KEY,
});

//
const chunkTexts = chunks.map((chunk) => chunk.pageContent);

// chunks embedding model ko dedie
const vectors = await embeddings.embedDocuments(chunkTexts);
//console.log("Vectors-->", vectors);

//STEP 4: Store those vectors in Vector Database(pinecone)

// from your Pinecone account, select the index named kodexrag.
const index = pc.Index("kodexrag");
// console.log("index-->" , index)


//pair each embedding vector with its original text and prepare it in Pinecone's record format.
const records = vectors.map((vec, idx) => {
  return {
    id: `chunk-${idx}`,
    values: vec,
    metadata: {
      text: chunkTexts[idx],
    },
  };
});
console.log("records-->" , records)
await index.upsert({records});//pinecone db me save