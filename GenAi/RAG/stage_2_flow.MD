# RAG — Stage 2 Flow

## Current STAGE 2 Flow

```text
User Question
      ↓
embedQuery()
      ↓
Question ko Vector me convert kiya
      ↓
Query Vector
      ↓
Pinecone Vector DB me search
      ↓
Top 5 most similar chunks
      ↓
Similarity Score Check
score >= 0.8
      ↓
Relevant Chunks
      ↓
metadata.text
      ↓
map()
      ↓
Har chunk ka text extract
      ↓
Array of Text
      ↓
join()
      ↓
One Context String
      ↓
SystemMessage(Context)
        +
HumanMessage(User Question)
      ↓
Mistral LLM
      ↓
Final Answer
```

---

# Memory Trick for STAGE 2

Stage 2 ko sirf **3 parts** me yaad rakho:

## 1. RETRIEVAL

```text
Question
   ↓
Embedding
   ↓
Vector DB Search
   ↓
Relevant Chunks
```

Meaning:

User ke question se related information **retrieve/search** karna.

---

## 2. CONTEXT PREPARATION

```text
Relevant Chunks
      ↓
Text Extract
      ↓
join()
      ↓
Context
```

Meaning:

Jo relevant chunks mile hain unka useful text nikal kar ek proper **context** banana.

Example:

```js
[
  "Rohit is a developer.",
  "He works with MERN Stack.",
  "He is learning RAG."
]
```

`join()` ke baad:

```text
Rohit is a developer.
He works with MERN Stack.
He is learning RAG.
```

Ye complete text LLM ko context ke roop me diya ja sakta hai.

---

## 3. GENERATION

```text
Context
   +
User Question
   ↓
LLM
   ↓
Answer
```

LLM ko relevant information + user's question diya jata hai.

Phir LLM us context ko use karke final answer **generate** karta hai.

---

# What is RAG?

**RAG = Retrieval-Augmented Generation**

Easy definition:

> Pehle relevant external information retrieve karo, phir woh information LLM ko context ke form me do, aur LLM uske basis par answer generate kare.

Simple flow:

```text
User Question
      ↓
Relevant Data Retrieve
      ↓
LLM ko Context do
      ↓
LLM Answer Generate kare
```

Isliye naam:

```text
Retrieval
   +
Augmented Context
   +
Generation
```

---

# RAG me data kahan se aa sakta hai?

RAG ka matlab sirf **Vector Database** nahi hota.

Relevant information different sources se aa sakti hai:

```text
PDF / Documents
Vector Database
SQL Database
MongoDB
APIs
Web Search
Internal Company Data
Knowledge Base
etc.
```

Main idea hai:

> **Relevant external knowledge retrieve karke LLM ko dena.**

---

# Why RAG Comes Into Picture?

RAG mainly kuch important problems solve karta hai.

## Problem 1: LLM Private Data Nahi Jaanta

Suppose company ke paas private data hai:

```text
Employee policies
Invoices
Internal reports
Customer documents
Company SOPs
Private knowledge base
```

Public LLM normally ye data nahi jaanta.

So:

```text
User Question
      ↓
Private Data Retrieve
      ↓
LLM ko Context
      ↓
Answer
```

---

# Problem 2: LLM ka Knowledge Outdated Ho Sakta Hai

LLM ka knowledge training ke time tak limited ho sakta hai.

Lekin real-world data frequently change hota hai.

Example:

```text
Today → Product Price = ₹500

Next Month → Product Price = ₹650
```

Model ke old knowledge par depend karne ke bajay latest source se data retrieve karke LLM ko diya ja sakta hai.

```text
Latest Data
   ↓
Retrieve
   ↓
LLM
```

---

# Problem 3: Hallucination Reduce Karna

Agar LLM ke paas relevant information nahi hai, woh kabhi-kabhi incorrect information generate kar sakta hai.

Isse **hallucination** kehte hain.

Without relevant context:

```text
Question
   ↓
LLM guesses
   ↓
Wrong answer possible
```

With RAG:

```text
Question
   ↓
Relevant Data Retrieve
   ↓
LLM ko Evidence / Context
   ↓
Better grounded answer
```

Important:

> RAG hallucination ko reduce kar sakta hai, completely eliminate nahi karta.

---

# Important Notes About RAG

## 1. RAG me Model Train Nahi Hota

RAG me normally hum LLM ko retrain nahi karte.

Hum sirf runtime par extra context provide karte hain.

```text
RAG

Existing LLM
    +
Retrieved Context
    +
Question
    ↓
Answer
```

Not:

```text
Private Data
   ↓
LLM Training
```

So:

> **RAG ≠ Model Training**

---

# 2. Retrieval Wrong → Answer Wrong Ho Sakta Hai

RAG me retrieval bahut important hai.

Suppose user asks:

```text
What is Rohit's salary?
```

Correct chunk:

```text
Rohit's salary is ₹50,000.
```

But retrieval accidentally gives:

```text
Rahul's salary is ₹80,000.
```

To LLM ko wrong context mila.

```text
Wrong Retrieval
      ↓
Wrong Context
      ↓
Wrong Answer Possible
```

Therefore:

> **Good RAG depends heavily on good retrieval.**

---

# Structured vs Unstructured Data

Private/company data ko broadly different forms me samajh sakte hain.

## 1. Structured Data

Structured data usually fixed schema/table format me hota hai.

Example:

```text
Customers Table

ID | Name  | Amount
1  | Rohit | 5000
2  | Rahul | 7000
3  | Aman  | 3000
```

Examples:

```text
SQL Database
PostgreSQL
MySQL
MongoDB collections
Transaction data
Orders
Invoices
Users
Products
```

Agar question hai:

```text
Total sales kitni hui?
```

Ya:

```text
Last 30 days me kitne orders aaye?
```

Ya:

```text
Top 5 customers by revenue kaun hain?
```

To direct **database query / aggregation** zyada useful hoti hai.

Example:

```sql
SELECT SUM(amount)
FROM orders;
```

Because database:

```text
SUM
COUNT
AVG
FILTER
SORT
GROUP BY
JOIN
```

jaise exact operations efficiently perform kar sakta hai.

---

# 2. Unstructured Data

Unstructured data natural text/document format me hota hai.

Examples:

```text
PDF
Word Documents
Policies
Manuals
Reports
Articles
Emails
Knowledge-base documents
Text extracted from images
```

Example PDF:

```text
Company Leave Policy

Employees receive 24 paid leaves every year.
Unused leaves can be carried forward...
```

Question:

```text
How many paid leaves do employees receive?
```

Yahan semantic search useful hai.

```text
Question
   ↓
Embedding
   ↓
Vector Search
   ↓
Relevant Paragraph
   ↓
LLM
   ↓
Answer
```

Is type ke data ke liye **Vector Search + RAG** bahut useful hota hai.

---

# Easy Rule

```text
Structured Data
     ↓
Exact Calculation / Filtering / Aggregation
     ↓
Database Query Better
```

Example:

```text
Total revenue?
Number of customers?
Orders this month?
```

---

```text
Unstructured Data
     ↓
Meaning / Semantic Search
     ↓
Vector Search / RAG Better
```

Example:

```text
Company refund policy kya hai?
Contract me termination clause kya hai?
PDF me React ke baare me kya likha hai?
```

---

# But Real Applications Can Use BOTH

Ye important hai.

Real-world AI application me:

```text
Database
   +
RAG / Vector DB
   +
APIs
   +
LLM
```

sab combine ho sakte hain.

Example:

User asks:

```text
Last month meri total sales kitni thi
aur company sales policy ke according
performance kaisi hai?
```

System:

```text
Database
   ↓
Total Sales = ₹5,00,000

+

Policy PDF
   ↓
RAG retrieves sales target policy

↓

LLM

↓

"Your sales were ₹5,00,000.
According to company policy,
you exceeded the monthly target."
```

So:

> **Structured data ke liye database query and unstructured knowledge ke liye RAG/vector search — dono ko combine bhi kiya ja sakta hai.**

---

# Final RAG Mental Model

RAG ko bas itna yaad rakho:

```text
USER QUESTION
      ↓
RETRIEVE RELEVANT KNOWLEDGE
      ↓
CREATE CONTEXT
      ↓
CONTEXT + QUESTION
      ↓
LLM
      ↓
FINAL ANSWER
```

## One-Line Definition

> **RAG is a technique where we retrieve relevant external knowledge and provide it to an LLM as context so it can generate a more relevant and grounded answer.**

---

# Ultra-Short Memory Notes

```text
RAG = Retrieve → Context → Generate
```

```text
Stage 2:

1. Retrieval
Question → Embedding → Search → Relevant Chunks

2. Context Preparation
Chunks → Text → Join → Context

3. Generation
Context + Question → LLM → Answer
```

```text
Why RAG?

1. LLM private data nahi jaanta
2. LLM knowledge outdated ho sakta hai
3. Relevant context dekar hallucination reduce kar sakte hain
```

```text
Important:

RAG ≠ Training

Wrong Retrieval
      ↓
Wrong Context
      ↓
Wrong Answer Possible
```

```text
Structured Data
→ DB Query better for exact operations

Unstructured Data
→ Vector Search / RAG better for semantic knowledge

Real Applications
→ DB + RAG + APIs + LLM
```
