import  fetch from 'node-fetch';
import { IProduct } from './Product';

let url : string = 'https://www.webhallen.com/api/product/320479'

setInterval(function Scrape() {

        fetch(url)
        .then(res => res.json())
        .then((el) => {

            let url : string = "https://www.webhallen.com/api/product/320479"

            let semi : string = "/images/product/320479?trim&h=80"

            let a = url.replace(new RegExp('api.*$'), semi);


            const product : IProduct = {
                productLink : "https://www.webhallen.com/se/product/320479-Playstation-5-Digital-Edition",
                name : el.product.name,
                image : url.replace(new RegExp('api.*$'), el.product.thumbnail,),
                price :  el.product.price.price,
                currency :  el.product.price.currency,
                stock : el.product.stock.web //Stock info from web
            }

            if (product.stock > 1) {
                console.log(product)

                //sendwebhook(product)
            }
        })


}, 4000);


