const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const express = require("express");
const app = express();
const passport = require('passport');
const users = require("./routes/api/users");
const uploads = require("./routes/api/uploads");
const bodyParser = require('body-parser');
const path = require('path');

// // PHOTO UPLOAD START
// const fs = require('fs');
// const util = require('util');
// const unlinkFile = util.promisify(fs.unlink);
// const multer  = require('multer');
// const upload = multer({ dest: 'uploads/' });

// const { uploadFile, getFileStream } = require('./s3');

// app.get('/images/:key', (req, res) => {
//   const key = req.params.key;
//   const readStream = getFileStream(key);

//   const result = readStream.pipe(res);

// })

// app.post('/images', upload.single('image'), async (req, res) => {
//   const file = req.file;
//   // can apply filters to image
//   // can resize image
//   const result = await uploadFile(file);
//   await unlinkFile(file.path);
//   console.log(result);

//   const description = req.body.description;

//   res.send({imagePath: `/images/${result.Key}`})
// });
// // PHOTO UPLOAD END

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
app.use("/api/uploads", uploads);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));