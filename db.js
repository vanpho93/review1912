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
    client.query(sql, cb);
  });
}

// query('SELECT * FROM "SanPham"', result => console.log(result.rows));

//Lay du lieu cua tat ca cac san pham
function selectAll(cb){
  query('SELECT * FROM "SanPham" ORDER BY id ASC', cb);
}

//Lay du lieu cua 1 san pham
function getProductById(id, cb){
  query('SELECT * FROM "SanPham" WHERE id = ' + id, cb);
}

function removeProduct(id, cb){
  query('DELETE FROM "SanPham" WHERE id = ' + id, cb);
}

function addProduct(title, desc, image, video, cb){
  var sql = `INSERT INTO public."SanPham" (title, "desc", image, video)
	VALUES ('${title}', '${desc}', '${image}', '${video}')`;
  console.log(sql);
  query(sql, cb);
}

function updateProduct(title, desc, image, video, id, cb){
  var sql = `UPDATE public."SanPham"
	SET title='${title}', "desc"='${desc}', image='${image}', video='${video}'
	WHERE id = ${id}`;
  query(sql, cb);
}

//Xoa 1 san pham

//Them 1 san pham

//Sua thong tin 1 san pham

module.exports = {selectAll, getProductById, removeProduct, addProduct, updateProduct};

// getProductById(1, result => console.log(result.rows[0]));

// removeProduct(1, (err, result) => {
//   console.log(result);
// })
