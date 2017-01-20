var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
app.listen(3000, ()=> console.log('Server started'));

var {selectAll, getProductById, removeProduct} = require('./db.js');//require function
var mangSanPham = require('./mang.js');
app.get('/', require('./controller/getIndex.js'));
app.get('/admin', require('./controller/getAdmin.js'));
app.get('/add', (req, res) => res.render('addProduct'));
app.post('/xulythem', require('./controller/xulythem.js'));
app.get('/xoa/:id', require('./controller/xulyxoa.js'));
app.get('/sua/:id', require('./controller/sua.js'));
app.post('/xulysua', require('./controller/xulysua.js'));
