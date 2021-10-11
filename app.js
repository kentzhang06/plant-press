const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const express = require("express");
const app = express();
const passport = require('passport');
const bodyParser = require('body-parser');
const path = require('path');
// const Plant = require('./models/Plant');

//require routes
const users = require("./routes/api/users");
const plants = require("./routes/api/plants");

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

// app.get("/plant", (req, res) => {
//   const plant  = new Plant({
//     plantName: "testplant",
//     plantType: "testtype",
//     plantBio: "testbio",
//     plantSpecies: "testspecies"
//   })
//   plant.save()
//   res.send("plant test")
// })


// Routes
app.use("/api/users", users);
app.use("/api/plants", plants);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));