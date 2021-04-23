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

module.exports = router;
