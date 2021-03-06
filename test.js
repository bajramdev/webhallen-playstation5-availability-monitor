


const fetch = require('node-fetch');

fetch("https://www.webhallen.com/api/cart", {
    "headers": {
        "accept": "*/*",
        "accept-language": "sv-SE,sv;q=0.9,en-US;q=0.8,en;q=0.7",
        "cache-control": "no-cache",
        "content-type": "application/json",
        "pragma": "no-cache",
        "sec-ch-ua": "\"Chromium\";v=\"88\", \"Google Chrome\";v=\"88\", \";Not A Brand\";v=\"99\"",
        "sec-ch-ua-mobile": "?0",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "cookie": "loop54-userid=MTI4ODM4OTMzMQ%3D; __cfduid=dde1bfb88325ec0af1209d2b95c5032bf1613245828; ref=212D1D1ABC; last_visit=1614863365; webhallen=dTpj7LsXu9doxSc7JIRY93CeVbE3BiwRUjegGZQu; cart_id=temp%3AMjk2NzEzMTI1Ni41MTY3; product_viewed=330514%2C313791%2C323035%2C330520%2C326175"
    },
    "referrer": "https://www.webhallen.com/se/product/330514-Pokemon-Tin-Spring-2021-V-Forces",
    "referrerPolicy": "origin-when-cross-origin",
    "body": "{\"events\":[{\"method\":\"relative\",\"extraData\":{\"isLoggedIn\":false,\"source\":\"product\"},\"productId\":330514,\"quantity\":1,\"unitPrice\":\"279.00\"}]}",
    "method": "POST",
    "mode": "cors"
});

/*
fetch("https://www.netonnet.se/Checkout/AddItem/", {
    "headers": {

        "accept-language": "sv-SE,sv;q=0.9,en-US;q=0.8,en;q=0.7",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        "sec-ch-ua": "\"Chromium\";v=\"88\", \"Google Chrome\";v=\"88\", \";Not A Brand\";v=\"99\"",
        "sec-ch-ua-mobile": "?0",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-requested-with": "XMLHttpRequest",
        "cookie": "netonnet.nonsession=Updated=637504084099958274&Id=ab31e00f574d4e2a989f78d5148c7e5c&key=A0108323687A81434771DF229FC3BF18E0FAD176&mac=6D96598B646C5A3420F012668E670935B6CA023E"
    },
    "referrer": "https://www.netonnet.se/art/gaming/spel-och-konsol/playstation/playstation-konsol/sony-playstation-5-digital-edition/1013477.14413/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": "itemId=1013477&isCheckout=false",
    "method": "POST",
    "mode": "cors"
}).then((res) => console.log(res.statusText));


*/