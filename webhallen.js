const fetch = require('node-fetch');

setInterval(function Scrape(inStock) {

fetch('https://www.webhallen.com/api/product/320479')
    .then(res => res.json())
.then((el) => {
    inStock = el.product.stock.web; //Stock info from web       @TODO add support for each city


    if (inStock) {
         return inStock;
    }
})


}, 5000);


