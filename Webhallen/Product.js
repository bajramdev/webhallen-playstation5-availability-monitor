class Product {

    constructor(stock, name="", url = "", thumbnail = "") {
        this.stock = stock;
        this.name = name;
        this.url = url;
        this.thumbnail = thumbnail;
    }


    updateInfo = (id) => {

    this.name = id.name;
    this.url = id.url;

    this.thumbnail = id.thumbnail;

    console.log(this)



    }

}

module.exports = Product;