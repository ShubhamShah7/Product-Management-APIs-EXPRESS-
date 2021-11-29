const express = require("express");
const app = express();
app.use(express.json());
const port = 5000;

const productRoute = require("./routes/product");
const companyRoute = require("./routes/company");
const sellerRoute = require("./routes/seller");

app.get("/", (req, res) => {
    res.send("Hello World!!!");
});

app.use("/product", productRoute);
app.use("/company", companyRoute);
app.use("/seller", sellerRoute);

app.listen(port, () => {
    console.log(`app listening on port ${port}!`);
})