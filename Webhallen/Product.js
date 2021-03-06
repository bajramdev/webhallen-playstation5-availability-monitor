class Product {
    constructor( thumbnail, name="", url = "", image = "", stock = {}) {
        this.thumbnail = thumbnail;
        this.name = name;
        this.url = url;
        this.image = image;
        this.stock = stock;
    }


    updateInfo = (id) => {

    this.thumbnail = id.thumbnail;
    this.name = id.name;
    this.url =

    }



}

module.exports = Product;