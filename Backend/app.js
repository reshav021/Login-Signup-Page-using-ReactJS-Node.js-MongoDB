// Hosting platform - render.com, cyclic.sh

const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

const cors = require("cors")
const app = express()

app.use(cors())
app.use(bodyParser.json())

mongoose.connect(
  "mongodb+srv://reshav:1234@cluster0.hfofzwf.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    ssl: true,
  }
)

mongoose.connection
  .once("open", () => {
    console.log("Connected to MongoDB")
  })
  .on("error", (error) => {
    console.error("MongoDB connection error:", error)
    process.exit(1)
  })

// Define a mongoose schema for the user
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
})

// Create a mongoose model based on the schema
const User = mongoose.model("User", userSchema)

app.post("/signup", async (req, res) => {
  try {
    const user = new User(req.body)    // Create a new user based on the request body
    await user.save()
    res.status(201).json({ message: "User registered successfully" })
  } catch (error) {
    console.error("Error: ", error)
    res.status(500).json({ error: "Error occurred while registering the user" })
  }
})

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });   // Find the user by email and password

    if (user) {
      res.status(200).json({ message: "Login successful" });
    } else {
      res.status(401).json({ error: "Login failed" });
    }
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "An error occurred during login" });
  }
});

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})