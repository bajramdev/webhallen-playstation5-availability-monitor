let fetch = require('node-fetch');
let got = require('got');


(async () => {

    let config = {
        responseType: 'json'
    }

    let url  = 'https://www.webhallen.com/api/product/320479';

    let response =  await got(url, config)


    let product = response.body.product
    console.log()


})();
