const express = require("express");
const router = express.Router();
router.use(express.json());
const product = require("../data/product.json");

router.get('/list', (req, res) => {
    res.json({data: product})
})

router.post("/add", (req, res) => {
    const prodid = req.body.productId;
    const title = req.body.title;
    const price = req.body.price;
    const cat = req.body.category;
    const cid = req.body.companyId;
    const sid = req.body.sellerId;

    const pname = product.filter((p) => p.title === title);
    if (pname.length === 0) {
        return res.json({ data: "Product Added" });
    } else {
        return res.json({ data: "Something went wrong" });
    }
})

router.post("/update", (req, res) => {
    const prodid = req.body.productId;
    const pid = product.filter((p) => p.productId === prodid);
    if (pid.length === 0) {
        return res.json({ data: "Product not exists" });
    } else {
        return res.json({ data: "Product updated" });
    }
})

router.post("/delete", (req, res) => {
    const prodid = req.body.productId;
    const pid = product.filter((p) => p.productId === prodid);
    if (pid.length === 0) {
        return res.json({ data: "Product not exists" });
    } else {
        return res.json({ data: "Product updated" });
    }
})

module.exports = router;