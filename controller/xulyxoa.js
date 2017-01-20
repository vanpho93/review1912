var {removeProduct} = require('../db.js');

module.exports = (req, res) => {
  var {id} = req.params;
  removeProduct(id, (err, result) => {
    if(err) return res.send('Loi: ' + err);
    if(result.rowCount === 1) return res.redirect('/admin');
    res.send('Khong the xoa duoc');
  });
};
