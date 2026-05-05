// Import express library
const express = require("express");

// Create express app (this acts as our server)
const app = express();

// Middleware: JSON data ko JS object me convert karta hai
app.use(express.json());

// Temporary storage (RAM me store hota hai, restart pe data delete ho jayega)
let users = [];


// CREATE User
// POST → http://localhost:3000/getUsers
app.post("/getUsers", (req, res) => {
    users.push(req.body);

    return res.status(201).json({
        message: "User created successfully",
        usersKaData: users
    });
});


// READ Users
// GET → http://localhost:3000/users
app.get("/users", (req, res) => {
    return res.status(200).json({
        message: "Users fetched successfully",
        usersKaData: users
    });
});


// UPDATE User (Partial)
// PATCH → http://localhost:3000/users/update/:index
app.patch("/users/update/:index", (req, res) => {
    let { index } = req.params;
    let { age } = req.body;

    users[index].age = age;

    return res.status(200).json({
        message: "User age updated successfully"
    });
});


// DELETE User
// DELETE → http://localhost:3000/users/delete/:index
app.delete("/users/delete/:index", (req, res) => {
    let { index } = req.params;

    users.splice(index, 1);

    return res.status(200).json({
        message: "User deleted successfully"
    });
});


// Export app
module.exports = app; 