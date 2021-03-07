const Product = require('Product')
let got = require('got');

let RegexForProductID = RegExp('[0-9]{6}');


class Task {
    constructor(taskSetup) {

        this.sellerUrl = taskSetup.url;
        this.firstIteration = true;
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


            let products = response.body.product

            if (this.firstIteration){

                let newProducts = [];

               let productStockArray = Object.values(products.stock);

               productStockArray = productStockArray.filter(x => typeof x === 'number'); // remove all elements that are not numbers
               productStockArray.forEach(x => {

                   let product = new Product(x, this.sellerUrl);
                   newProducts = [...newProducts, product];
               })

                /**
                 *
                 * @todo add mongodb here
                 */
                this.firstIteration = false;


            }

            console.log(product)

        }, 1000 )


    }


}


// RESPONSE FETCH(PRODUCTURL)


// let response = await fetch(url);
// var product = response.body



module.exports = Task;