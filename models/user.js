// const express = require("express");
// const bodyParser = require("body-parser");
// const router = express.Router();
// const pool = require("../config/db");

// router.use(bodyParser.json());
// router.post("/post", (req, res) => {
//       const { id, email, gender, password, role } = req.body;
//       pool.query("INSERT INTO users (id, email, gender, password, role) VALUES($1, $2, $3, $4, $5)", [id, email, gender, password, role], (err, result) => {
//             if (err) {
//                   throw err;
//             }
//             res.send("data berhasil ditambahkan");
//       });
// });

// router.get("/get", (req, res) => {
//       pool.query("SELECT * FROM users ", (err, result) => {
//             if (err) {
//                   throw err;
//             }
//             res.send(result.rows);
//       });
// });

// router.put("/update/:id", (req, res) => {
//       const id = parseInt(req.params.id);
//       const { email, gender, password, role } = req.body;
//       pool.query("UPDATE users SET email=$1, gender=$2, password=$3, role=$4 WHERE id=$5", [email, gender, password, role, id], (err, result) => {
//             if (err) {
//                   throw err;
//             }
//             res.send(`data berhasil di ubah`);
//       });
// });

// router.delete("/delete/:id", (req, res) => {
//       const id = parseInt(req.params.id);
//       pool.query("DELETE FROM users WHERE id=$1", [id], (err, result) => {
//             if (err) {
//                   throw err;
//             }
//             res.send(`data berhasil di hapus`);
//       });
// });

// module.exports = router;
