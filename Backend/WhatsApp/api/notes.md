#
process.exit(1) is a Node.js function that immediately stops the current program and returns an exit code to the operating system.
Syntax
process.exit(code);
0 → Program ended successfully.
Any non-zero value (like 1) → Program ended because of an error.

# data validation and senitization
Modern Projects (especially TypeScript)
✅ Zod
Kyuki ek hi library se:
Environment variables
Request body
Query params
Response validation
Config objects
sab validate ho jata hai.

# note : Some sanitizers available in express-validator (through the underlying validator library), such as:
normalizeEmail()
escape()
stripLow()
blacklist()
whitelist()
are not built into Zod.
If you need those kinds of specialized sanitization, you would:
use another library (like validator.js), or
write your own transformation inside Zod.

# index:true means?
Q) Why we use indexing in database?
sol) to avoid # collection scan.
B+ Tree
[10 20 30 40 50 60 70]
One node can hold many keys, so the tree has much less height.
Less height = fewer disk I/O operations = faster queries.
# An index is a special data structure that helps the database find rows quickly without scanning the entire table.
![ss](<Screenshot 2026-06-27 at 6.16.45 PM.png>)


# 📌 MongoDB Indexing - Short Notes
What is an Index?
An index is a separate data structure (B+ Tree) that stores indexed field values and pointers to the actual documents, allowing MongoDB to find data quickly without scanning the entire collection.
Why do we need an Index?
Without Index:
Query
   │
   ▼
Collection Scan
   │
Doc1 ❌
Doc2 ❌
Doc3 ❌
...
DocN ✅
Time Complexity: O(n)
With Index:
Query
   │
   ▼
B+ Tree Index
   │
   ▼
Pointer
   │
   ▼
Document
Time Complexity: O(log n)
Where are indexes stored?
MongoDB Database

├── Collection (Documents)
│
└── Indexes (B+ Tree)
✅ Stored separately from documents.
✅ Persisted on disk.
✅ Frequently used index pages are cached in RAM.
What does the index store?
Email Index

aman@gmail.com  ───► Pointer → Document A
rohit@gmail.com ───► Pointer → Document B
priya@gmail.com ───► Pointer → Document C
It stores:
Indexed value
Pointer/Reference to the document
❌ It does not store the full document.
What is index: true?
email: {
  type: String,
  index: true
}
Meaning:
Create an index on the email field.
MongoDB creates a separate B+ Tree index for that field.
Why B+ Tree?
Advantages:
Balanced Tree
Low Height
Fast Search
Few Disk Reads
Excellent for Range Queries
Time Complexity:
Search → O(log n)
Insert → O(log n)
Delete → O(log n)
Why not index every field?
Indexes have costs.
1. Extra Storage
Data = 5 GB

Email Index = 500 MB
Name Index = 400 MB

Total > 5 GB
2. Slower Writes
Every Insert/Update/Delete must update indexes.
Insert Document
      │
      ├── Save Document
      ├── Update Email Index
      ├── Update Name Index
      ├── Update City Index
More indexes = Slower writes.
3. More RAM Usage
Frequently used indexes stay in RAM.
More indexes ⇒ More RAM consumption.
When should we create an index?
✅ Frequently searched fields
Examples:
User.findOne({ email })
User.find({ username })
Product.find({ category })
❌ Don't index fields that are rarely queried.
Disk vs RAM
Disk
│
├── Collection
└── Indexes
        │
        ▼
Frequently Used
Cached in RAM
Disk → Permanent Storage
RAM → Temporary Cache for faster access
Analogy
Collection = Books 📚
Index = Book Index
React → Page 120
Node → Page 250
MongoDB → Page 400
Instead of reading the entire book, you jump directly to the required page.
Interview Answer
An index is a separate B+ Tree data structure that stores indexed field values and pointers to the actual documents. It improves query performance by avoiding full collection scans, reducing search time from O(n) to O(log n). However, indexes consume additional storage and make write operations slightly slower because they must be updated whenever indexed data changes.
⭐ One-line Revision
Index = Separate B+ Tree + Pointer to Documents = Faster Reads (O(log n)) + Extra Storage + Slower Writes.