var {getUpload} = require('../upload.js');
var SanPham = require('../SanPham.js');
var mangSanPham = require('../mang.js');

var upload = getUpload('image');

module.exports = (req, res) => {
  upload(req, res, err => {
    if(err) return res.send('Loi: ' + err);
    var {title, desc, video} = req.body;
    var image = req.file.filename;

    var sp = new SanPham(title, desc, image, video);
    mangSanPham.push(sp);
    res.send('Them thanh cong');
  })
};
