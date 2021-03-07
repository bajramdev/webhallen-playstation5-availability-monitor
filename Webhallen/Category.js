let got = require('got');
let Product = require('./Product')

let RegexForProductID = RegExp('[0-9]{6}');

async function asd(){


        let config = {
            responseType: 'json'
        }

        let url = "https://www.webhallen.com/se/product/321654-Dell-Inspiron-G3-15-3500-15-6-FHD-IPS-i5-10300H-8GB-512GB-GTX-1650-Win-10"

        let prodID = RegexForProductID.exec(url)

    let newProducts = [];

        let endPointURL = `https://www.webhallen.com/api/product/${prodID[0]}`;


        let response = await got(endPointURL, config)


        let product = response.body.product


        let el = Object.values(product.stock);

    el = el.filter(x => typeof x === 'number'); // remove all elements that are not numbers
    el.forEach(stock => {

        let product = new Product(stock, this.sellerUrl);
        product.updateInfo(product)
        newProducts = [...newProducts, product];
    })


    console.log()

    }

    asd();


// RESPONSE FETCH(PRODUCTURL)


// let response = await fetch(url);
// var product = response.body



