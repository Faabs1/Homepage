const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

// Set up Handlebars as the view engine
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// Define a route
app.get('/', (req, res) => {
  res.render('home', {
    welcomeMessage: "Welcome to the Homepage!",
    description: "We’re excited to have you here. Explore our site and enjoy your stay."
  });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
