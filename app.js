const express = require('express');
const app = express();
const port = 3000;

// // Middleware
// app.use(express.static('public'));

// Routes
const indexRouter = require('./routes/router');
app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
// 