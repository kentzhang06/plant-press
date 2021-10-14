const express = require("express");
const router = express.Router();

// PHOTO UPLOAD START
const fs = require('fs');
const util = require('util');
const unlinkFile = util.promisify(fs.unlink);
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });

const { uploadFile, getFileStream } = require('../../s3');

router.get('/images/:key', (req, res) => {
  const key = req.params.key;
  const readStream = getFileStream(key);

  const result = readStream.pipe(res);

})

router.post('/images', upload.single('image'), async (req, res) => {
  const file = req.file;
  // can apply filters to image
  // can resize image
  const result = await uploadFile(file);
  await unlinkFile(file.path);

  const description = req.body.description;

  res.send({imagePath: `/images/${result.Key}`})
});
// PHOTO UPLOAD END

module.exports = router;