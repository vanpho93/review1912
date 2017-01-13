var {getUpload} = require('../upload.js');
var SanPham = require('../SanPham.js');
var mangSanPham = require('../mang.js');

var upload = getUpload('image');

module.exports = (req, res) => {
  upload(req, res, err => {
    if(err) return res.send('Loi: ' + err);
    var {title, desc, video, index} = req.body;
    var image = req.file? req.file.filename: mangSanPham[index].image;
    var sp = new SanPham(title, desc, image, video);
    mangSanPham[index] = sp;
    res.send('Sua thanh cong');
  })
};
