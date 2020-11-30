const express = require("express");

const app = express();

// This 'use' allows the web app being run on
// localhost to access resources from the back
// end on localhost
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.get("/quotes", async (req, res) => {
  const list = await require("./quotes/QuoteController").getQuotes();
  res.json(list);
});

app.get("/quote/:id", async (req, res) => {
  const quote = await require("./quotes/QuoteController").getQuote(
    req.params.id
  );
  res.json(quote);
});

app.listen(3333);
