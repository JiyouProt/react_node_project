const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/api", (req, res) => {
  try {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        res.json(response.data);
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
