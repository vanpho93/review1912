var pg = require('pg');

var config = {
  user: 'postgres',
  database: 'Node1912',
  password: 'khoapham',
  host: 'localhost',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 1000
};

var pool = new pg.Pool(config);

function query(sql, cb){
  pool.connect((err, client, done) => {
    if(err) return console.log('Loi: ' + err);
    done();
    client.query(sql,(err, result) => {
      if(err) return console.log('Loi ' + err);
      //console.log(result.rows);
      cb(result);
    });
  });
}

// query('SELECT * FROM "SanPham"', result => console.log(result.rows));

function selectAll(cb){
  query('SELECT * FROM "SanPham"', cb);
}

//Lay du lieu cua tat ca cac san pham

//Lay du lieu cua 1 san pham

//Xoa 1 san pham

//Them 1 san pham

//Sua thong tin 1 san pham

module.exports = {selectAll};
