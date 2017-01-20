var {getUpload} = require('../upload.js');
var upload = getUpload('image');
var {addProduct} = require('../db.js');

module.exports = (req, res) => {
  upload(req, res, err => {
    if(err) return res.send('Loi: ' + err);
    var {title, desc, video} = req.body;
    var image = req.file.filename;

    addProduct(title, desc, image, video, (err, result) => {
      if(err) return res.send('Loi: ' + err);
      res.redirect('/');
    });
  })
};
