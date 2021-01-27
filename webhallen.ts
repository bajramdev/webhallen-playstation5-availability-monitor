import  fetch from 'node-fetch';

interface IProduct{
    name: string,
    price: number,
    currency: string,
    image: string,
    stock: number,
    productLink : string
}

let url : string = 'https://www.webhallen.com/api/product/320479'

setInterval(function Scrape() {

    fetch(url)
        .then(res => res.json())
        .then((el) => {




            let url = "https://www.webhallen.com/api/product/320479"


            let semi = "/images/product/320479?trim&h=80"

            let a = url.replace(new RegExp('api.*$'), semi);
            console.log(a)

            const product : IProduct = {
                productLink : "https://www.webhallen.com/se/product/320479-Playstation-5-Digital-Edition",
                name : el.product.name,
                image : url.replace(new RegExp('api.*$'), el.product.thumbnail,),
                price :  el.product.price.price,
                currency :  el.product.price.currency,
                stock : el.product.stock.web //Stock info from web

            }
            console.log(  product.image ,)

        })


}, );


