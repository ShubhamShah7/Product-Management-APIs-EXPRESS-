const express = require("express");
const sellerData = require('../data/seller.json');
const router = express.Router();
router.use(express.json());

router.get("/list", (req, res) => {
    return res.json({ data: sellerData });  
});

router.post("/add", (req, res) => {
    const id = req.body.sellerId;
    const name = req.body.name;
    const productId = req.body.productId;

    const c = sellerData.filter((c) => c.name === name);
    if (c.length === 0) {
        c.push({ sellerId: id, name: name, productId: productId });
        return res.json({ data: "Company Added" });
    } else {
        return res.json({ data: "Company already exists" });
    }    
});

router.post('/update', (req, res) => {
    const sid = req.body.sellerId;
    const C = sellerData.filter((c) => c.sellerId === sid);
    if (C.length === 0) {
        return res.json({ data: "seller is not exists" });
    } else {
        return res.json({ data: "Updated successfully" });
    }
})

router.post('/delete', (req, res) => {
    const sid = req.body.sellerId;
    const C = sellerData.filter((c) => c.sellerId === sid);
    if (C.length === 0) {
        return res.json({ data: "seller is not exists" });
    } else {
        return res.json({ data: "Deleted successfully" });
    }
})

module.exports = router;