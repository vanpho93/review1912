var {getUpload} = require('../upload.js');
var upload = getUpload('image');

module.exports = (req, res) => {
  upload(req, res, err => {
    res.send('Da vao day');
  })
};
