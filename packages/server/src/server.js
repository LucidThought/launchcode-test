const express = require("express");

const app = express();

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
