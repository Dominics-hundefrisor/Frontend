function UpdatePrice(id,newPrice,html_tag) {
    let url = "http://localhost:8080/api/v1/price/updatePriceById/" + id;

    let payload = {
            price_id: id,
            item: html_tag,
            price: newPrice,
            id: id
    }

    let options = {
        headers: {
            'Accept': "application/json",
            'Content-Type': "application/json;charset=utf-8"
        },
        method: "PUT",
        body: JSON.stringify(payload)
    }

    fetch(url, options).then(response => console.log(response.status))
}

document.getElementById("myButton").onclick = function(){

    // getting element values
    klip_1 = document.getElementById("klip-1-change").value;
    klip_2 = document.getElementById("klip-2-change").value;
    klip_3 = document.getElementById("klip-3-change").value;
    klip_4 = document.getElementById("klip-4-change").value;

    trimming_1 = document.getElementById("trimming-1-change").value;

    Touch_up_1 = document.getElementById("Touch-up-1-change").value;
    Touch_up_2 = document.getElementById("Touch-up-2-change").value;

    Tillæg_1 = document.getElementById("Tillæg-1-change").value;

    // changing HTML element contents
    // document.getElementById("klip-1").innerHTML = klip_1 + " kr";
    // document.getElementById("klip-2").innerHTML = klip_2 + " kr";
    // document.getElementById("klip-3").innerHTML = klip_3 + " kr";
    // document.getElementById("klip-4").innerHTML = klip_4 + " kr";
    UpdatePrice(1,klip_1,"klip-1");
    UpdatePrice(2,klip_2,"klip-2");
    UpdatePrice(4,klip_3,"klip-3");
    UpdatePrice(5,klip_4,"klip-4");

    // document.getElementById("trimming-1").innerHTML = trimming_1 + " kr";
    UpdatePrice(6,trimming_1,"trimming-1");

    // document.getElementById("Touch-up-1").innerHTML = Touch_up_1 + " kr";
    // document.getElementById("Touch-up-2").innerHTML = Touch_up_2 + " kr";
    UpdatePrice(7,Touch_up_1,"Touch-up-1");
    UpdatePrice(8,Touch_up_2,"Touch-up-2");

    // document.getElementById("Tillæg-1").innerHTML = Tillæg_1 + " kr";
    UpdatePrice(9,Tillæg_1,"Tillæg-1");
}

