var {selectAll} = require('../db.js');
module.exports = (req, res) => {
  selectAll((err, result) => {
    if(err) return res.send(err + '');
    res.render('home', {mangSanPham: result.rows})
  })
};
