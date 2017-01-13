var multer = require('multer');
var storage = multer.diskStorage({
  destination(req, file, cb){
    cb(null, './public/images/background');
  },
  filename(req, file, cb){
    cb(null, Date.now() + file.originalname)
  }
});

function fileFilter(req, file, cb){
  if(file.mimetype == 'image/png' || file.mimetype == 'image/jpeg'){
    return cb(null, true);
  }
  cb(new Error('Khong dung dinh dang file'));
}
var limits = {
  fileSize: 10000
}

function getUpload(fieldname){
  return multer({storage, fileFilter, limits}).single(fieldname);
}

function getArrayUpload (fieldname){
  return multer({storage, fileFilter, limits}).array(fieldname);
}
module.exports = {getUpload ,getArrayUpload};
