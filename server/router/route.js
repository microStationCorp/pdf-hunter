const router = require("express").Router();
const PdfLink = require("../model/dataModel");

router.get("/all", (req, res) => {
  PdfLink.find().then((data) => {
    res.json({
      total: data.length,
      links: data.map((d) => {
        const { title, dLink } = d;
        return {
          title,
          dLink,
        };
      }),
    });
  });
});

router.get("/q", (req, res) => {
  const regex = /[\s']/gi;
  const keyw = req.body.key.split(regex);
  let pat = "";
  keyw.forEach((val, ind, arr) => {
    if (ind == 0) {
      pat = "(" + val + "|";
    } else if (ind == arr.length - 1) {
      pat = pat + val + ")";
    } else {
      pat = pat + val + "|";
    }
  });
  PdfLink.find({ title: { $regex: pat, $options: "gi" } })
    .then((d) => {
      res.json(d);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
