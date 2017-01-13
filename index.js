var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
app.listen(3000, ()=> console.log('Server started'));

var mangSanPham = require('./mang.js');
//ide-terminal

app.get('/', (req, res) => res.render('home', {mangSanPham}));
app.get('/add', (req, res) => res.render('addProduct'));
app.post('/xulythem', require('./controller/xulythem.js'));

app.get('/admin', (req, res) => res.render('admin', {mangSanPham}))
