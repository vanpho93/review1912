var {selectAll} = require('../db.js');
module.exports = (req, res) => {
  selectAll((err, result) => {
    if(err) return res.send('Loi: ' + err);
    res.render('admin', {mangSanPham: result.rows})
  });
};
