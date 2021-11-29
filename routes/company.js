const express = require("express");
const company = require("../data/company");
const router = express.Router();
router.use(express.json());     

router.get("/list",(req,res) => {
    res.json({data:company});
});

router.post("/add", (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const productId = req.body.prodId;

    const c = company.filter((c) => c.id === id);
    if (c.length === 0) {
        c.push({ id: id, name: name, prodId: productId });
        return res.json({ data: "Company Added" });
    } else {
        return res.json({ data: "Company already exists" });
    }    
});

router.post('/update', (req, res) => {
    const cid = req.body.id;
    const companyId = company.filter((c) => c.id === cid);
    if (companyId.length === 0) {
        return res.json({ data: "company is not exists" });
    } else {
        return res.json({ data: "Updated successfully" });
    }
})

router.post('/delete', (req, res) => {
    const cid = req.body.id;
    const companyId = company.filter((c) => c.id === cid);
    if (companyId.length === 0) {
        return res.json({ data: "company is not exists" });
    } else {
        return res.json({ data: "Deleted successfully" });
    }
})

// router.get("/com/:title", (req, res) => {
//     const prodName = req.params.title;
//     const p = product.filter((p) => p.title === prodName);

//     if (p.length === 0) {
//         return res.json({ data: "Not found" });
//     } else {
//         const pid = p.productId;
//         const com = company.filter((c) => c.prodId === pid);
//         return res.json({ data: p });
//     }
// });

module.exports = router;