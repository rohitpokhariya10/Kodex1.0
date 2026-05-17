<!-- 127.0.0.1 = your own computer/localhost
27017 = default MongoDB port
day88_at_n_rt = database name -->


##
<!-- connection.connection.host gets the MongoDB server host name after Mongoose connects.

In your code:

const connection = await mongoose.connect(process.env.MONGO_URI);

console.log(`MongoDB connected: ${connection.connection.host}`);
Meaning:

mongoose.connect(...) returns the mongoose object after connection
connection.connection is the actual MongoDB connection object
connection.connection.host gives the host, like:
127.0.0.1
So this line:

console.log(`MongoDB connected: ${connection.connection.host}`);
will print something like:

MongoDB connected: 127.0.0.1
It is only for showing a success message in terminal. You can also write:

console.log("MongoDB connected successfully"); -->



##
Mongoose’s pre method is already designed to work like middleware. When you use pre("save"), Mongoose automatically passes the next parameter internally. It is part of the syntax, and you typically use it with the name next.