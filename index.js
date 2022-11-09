const express = require('express');

const app = express();

app.get('/', async (_req, res) => {
  try {
    // counter.inc();
    // res.set('Content-Type', register.contentType);
    // res.end(await register.metrics());
    res.send("Well hello there!");
  } catch (err) {
    res.status(500).end(err);
  }
});

app.listen(8080, () => {
    console.log("Index.js is running at port 3000");
});
