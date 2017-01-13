var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
app.listen(3000, ()=> console.log('Server started'));

//ide-terminal

class SanPham{
  constructor(title, desc, image, video){
    this.title = title;
    this.desc = desc;
    this.image = image;
    this.video = video;
  }
}

var sp1 = new SanPham('Yearbook', `Such a wonderful experience to watch this without knowing anything about it, enjoy it, and then slowly realise it's based on my fabvourite graphic novel.`,'1.png',84327247);
var sp2 = new SanPham('Christmas', `this is the best christmas video i have ever seen. fricken fantastic!`, '2.png', 196277011);
var sp3 = new SanPham('FLUSHED', `Ah this is awesome thanks so much for your kind words & featuring us, going through your previous weekend watching lists now! :)`, '3.png', 197047485);
var mangSanPham = [sp1, sp2, sp3];
app.get('/', (req, res) => res.render('home', {mangSanPham}));
app.get('/add', (req, res) => res.render('addProduct'));
