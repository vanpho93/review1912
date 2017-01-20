var {getProductById} = require('../db.js');
module.exports = (req, res) => {
  var {id} = req.params;
  getProductById(id, (err, result) => {
    if(err) return res.send('Loi: ' + err);
    res.render('update', {sanPham: result.rows[0]});
  });
}
