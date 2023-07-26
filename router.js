const express = require("express");
const router = express.Router();
const multer = require("multer");
const controller = require("./controller/imgController");
const path = require("path");

const storage = multer.diskStorage({
  destination: "./src/img/",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});
const upload = multer({
  storage: storage,
});
router.post("/img", upload.single("image"), controller.imgController);
router.get("/get/img", controller.getimage);
// router.route("/img").post(imgController);
module.exports = router;
