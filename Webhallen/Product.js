class Product {
    constructor(productUrl , name="", url = "", thumbnail = "", stock = {}) {
        this.productUrl = productUrl;
        this.name = name;
        this.url = url;
        this.thumbnail = thumbnail;
        this.stock = stock;
    }


    updateInfo = (id) => {

    this.name = id.name;
    this.url = id.url;

    this.thumbnail = id.thumbnail;

    let a = id.replace(new RegExp('api.*$'), this.thumbnail);




    }

}

module.exports = Product;