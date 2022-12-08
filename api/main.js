import express from "npm:express@4.18.2";
import data from "./data.json" assert { type: "json" };

const HOST = "localhost";
const PORT = 8000;

const app = express();

app.get("/", (req, res) => {
  res.sendStatus(200);
  res.send("Welcome to api");
});

app.get("/api", (req, res) => {
  res.send(data);
});

app.get("/api/:dinosaur", (req, res) => {
  if (req?.params?.dinosaur) {
    const found = data.find(
      (item) => item.name.toLowerCase() === req.params.dinosaur.toLowerCase()
    );
    if (found) {
    } else {
      res.send("not name found");
    }
  }
});

app.listen(8000);

console.log(`Server listening on port http://${HOST}:${PORT} 🚀🚀🚀`);
