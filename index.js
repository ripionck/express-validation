const express = require("express");
const usersRoute = require("./routes/users.route");
const app = express();
const port = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", usersRoute);

app.listen(port, () => {
  console.log(`Server is running http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.status(200).send("Testing API");
});
