// husk at commite til hf-backend-2

// url til api
    // remember to go back to http://localhost:8080 instead of webapp for testing locally
    // remember to go back to https://tobias-spring-projekt-service.azurewebsites.net instead of webapp for testing on server

const api_url = 'http://localhost:8080/api/v1/price/';

async function getPriceInfo (id,item) {
    const response = await fetch(api_url + id);
    const data = await response.json();
    console.log(data.item)
    console.log(data.price)
    document.getElementById(item).innerHTML = data.price + " kr";
}

getPriceInfo(1,"klip-1");
getPriceInfo(2,"klip-2");
getPriceInfo(4,"klip-3");
getPriceInfo(5,"klip-4");
getPriceInfo(6,"trimming-1");
getPriceInfo(7,"Touch-up-1");
getPriceInfo(8,"Touch-up-2");
getPriceInfo(9,"Tillæg-1");

// husk res.json skal skrives sådan her res.json()
// fetch(api_url)
// .then(res => res.json()).then(data => console.log(data))
