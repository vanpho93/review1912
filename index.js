var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
app.listen(3000, ()=> console.log('Server started'));

var {selectAll, getProductById, removeProduct} = require('./db.js');//require function
var mangSanPham = require('./mang.js');
//ide-terminal

app.get('/', (req, res) => {
  selectAll((err, result) => {
    if(err) return res.send(err + '');
    res.render('home', {mangSanPham: result.rows})
  })
});

app.get('/admin', (req, res) => {
  selectAll((err, result) => {
    if(err) return res.send('Loi: ' + err);
    res.render('admin', {mangSanPham: result.rows})
  });
});

app.get('/add', (req, res) => res.render('addProduct'));
app.post('/xulythem', require('./controller/xulythem.js'));

app.get('/xoa/:id', (req, res) => {
  var {id} = req.params;
  removeProduct(id, (err, result) => {
    if(err) return res.send('Loi: ' + err);
    if(result.rowCount === 1) return res.redirect('/admin');
    res.send('Khong the xoa duoc');
  });
});

app.get('/sua/:id', (req, res) => {
  var {id} = req.params;
  getProductById(id, (err, result) => {
    if(err) return res.send('Loi: ' + err);
    res.render('update', {sanPham: result.rows[0]});
  });
});

app.post('/xulysua', require('./controller/xulysua.js'));
