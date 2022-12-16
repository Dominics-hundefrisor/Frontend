// url for api
    // remember to go back to http://localhost:8080 instead of webapp for testing locally
    // remember to go back to https://hf-jpa.azurewebsites.net instead of local for testing on server

const api_url = 'https://hf-jpa.azurewebsites.net/api/v1/price/';

async function getPriceInfo (id,item) {
    const response = await fetch(api_url + id);
    const data = await response.json();
    console.log(data.item)
    console.log(data.price)
    document.getElementById(item).innerHTML = data.price + " kr";
}

getPriceInfo(1,"klip-1");
getPriceInfo(2,"klip-2");
getPriceInfo(3,"klip-3");
getPriceInfo(4,"klip-4");
getPriceInfo(5,"trimming-1");
getPriceInfo(6,"Touch-up-1");
getPriceInfo(7,"Touch-up-2");
getPriceInfo(8,"Tillæg-1");
