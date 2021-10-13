const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const express = require("express");
const app = express();
const passport = require('passport');
const bodyParser = require('body-parser');
const path = require('path');

//require routes
const users = require("./routes/api/users");
const plants = require("./routes/api/plants");
<<<<<<< HEAD
const posts = require("./routes/api/posts")
const uploads = require("./routes/api/uploads");
=======
const reminders = require("./routes/api/reminders")
>>>>>>> plant-care

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}

app.use(passport.initialize());
require('./config/passport')(passport);

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Routes
app.use("/api/users", users);
app.use("/api/plants", plants);
<<<<<<< HEAD
app.use("/api/uploads", uploads);
=======
app.use("/api/reminders", reminders);
>>>>>>> plant-care

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));