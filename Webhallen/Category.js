let got = require('got');

let RegexForProductID = RegExp('[0-9]{6}');

async function asd(){


        let config = {
            responseType: 'json'
        }

        let url = "https://www.webhallen.com/se/product/330513-Pokemon-Sword-Shield-4-5-Shining-Fates-Tin-V"

        let prodID = RegexForProductID.exec(url)


        let endPointURL = `https://www.webhallen.com/api/product/${prodID[0]}`;


        let response = await got(endPointURL, config)


        let product = response.body.product
        console.log(product)


    }

    asd();


// RESPONSE FETCH(PRODUCTURL)


// let response = await fetch(url);
// var product = response.body



