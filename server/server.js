var express = require("express");
var app = express();
var cors = require("cors");
var { v4 } = require("uuid");
require("dotenv").config();
var port = process.env.PORT || 9000;
const uri =
  "mongodb+srv://garfield:1234@cluster0.eessgyl.mongodb.net/?retryWrites=true&w=majority";

app.use(express.json());
app.use(cors());
var MongoClient = require("mongodb").MongoClient;

MongoClient.connect(uri, (err, client) => {
  if (err) {
    console.log("connection failed");
  } else {
    database = client.db("app-data");
    console.log("connection made");
    app.listen(port, () => {
      console.log(`Server is runing on ${port}`);
    });
  }
});

app.post("/adduser", async (req, res) => {
  console.log("in add user");
  const user = req.body;
  console.log(user.email);
  user.id = v4();
  const collection = database.collection("employees");
  const check = await collection.findOne({ email: user.email });
  if (check) {
    res.status(403).json({ error: "user already exists with this email" });
  } else {
    const response = collection.insertOne(user);
    res.status(200).send("done");
  }
});
app.get("/getemployees", async (req, res) => {
  console.log("get employees");
  const collection = database.collection("employees");

  const response = await collection.find({}).toArray();
  res.send(response);
  console.log(response);
});

app.put("/update", async (req, res) => {
  console.log("update");
  const user = req.body;
  console.log(user);
  const collection = database.collection("employees");
  const response = await collection.updateOne(
    { id: user.id },
    {
      $set: {
        email: user.email,
        contact: user.contact,
        first_name: user.first_name,
        last_name: user.last_name,
      },
    }
  );
  res.json({ res: "done" });
});
app.delete("/delete", async (req, res) => {
  console.log("delete");
  const user = req.body;
  console.log(user);
  const collection = database.collection("employees");
  const response = await collection.remove({ id: user.id });
  res.json({ res: "done" });
});
