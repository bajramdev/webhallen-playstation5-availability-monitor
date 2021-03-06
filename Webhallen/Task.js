const Product = require('Product')
let got = require('got');

let RegexForProductID = RegExp('[0-9]{6}');


class Task {
    constructor(taskSetup) {

        this.sellerUrl = taskSetup.url;
        this.firstIter = true;
        this.sellerId = taskSetup._id
    }



    start = async () => {


        this.task = setInterval(async () => {

            let config = {
                responseType: 'json'
            }

            let url  = this.sellerUrl

            let prodID = RegexForProductID.exec(url)

            let endPointURL = `https://www.webhallen.com/api/product/${prodID[0]}`;

            let response =  await got(endPointURL, config)


            let product = response.body.product
            console.log(product)

        }, 1000 )


    }


}


// RESPONSE FETCH(PRODUCTURL)


// let response = await fetch(url);
// var product = response.body



module.exports = Task;