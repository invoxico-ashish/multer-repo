const { json } = require("body-parser");
const sqlconnect = require("../DBconnect");

exports.imgController = async (req, res) => {
  try {
    let db = sqlconnect;
    let id = Math.floor(Math.random() * 9000000) + 10000000;

    console.log(req.file);
    console.log(req.file.path, "cnauohfuio");
    // return false;
    let data = {
      name: req.body.name,
      image: req.file.path,
    };
    console.log(req.file.path, "cnauohfuio");
    console.log(data);
    let results = await db.query(
      "Insert into multer_image set ?",
      [data],
      function (err, rows) {
        if (err) {
          res.send({
            message: "err occurred",
            err,
          });
        } else {
          res.send({
            message: "success" + id,
          });
        }
      }
    );
  } catch (err) {
    console.log(err);
  }
};

exports.getimage = async (req, res) => {
  const sql = "SELECT image from multer_image ";
  sqlconnect.query(sql, (err, result) => {
    if (err) {
      return res.json("err");
    }
    return res.json(result);
  });
};
