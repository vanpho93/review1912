var {getUpload} = require('../upload.js');
var {updateProduct} = require('../db.js');
var upload = getUpload('image');

module.exports = (req, res) => {
  upload(req, res, err => {
    if(err) return res.send('Loi: ' + err);
    var {title, desc, video, index, oldImage} = req.body;
    var image = req.file? req.file.filename: oldImage;

    updateProduct(title, desc, image, video, index, (err, result) => {
        if(err) return res.send('Loi ' + err);
        res.redirect('/admin');
    });
  })
};
