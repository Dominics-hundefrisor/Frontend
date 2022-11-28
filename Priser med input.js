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
    document.getElementById("klip-1").innerHTML = klip_1 + " kr";
    document.getElementById("klip-2").innerHTML = klip_2 + " kr";
    document.getElementById("klip-3").innerHTML = klip_3 + " kr";
    document.getElementById("klip-4").innerHTML = klip_4 + " kr";

    document.getElementById("trimming-1").innerHTML = trimming_1 + " kr";

    document.getElementById("Touch-up-1").innerHTML = Touch_up_1 + " kr";
    document.getElementById("Touch-up-2").innerHTML = Touch_up_2 + " kr";

    document.getElementById("Tillæg-1").innerHTML = Tillæg_1 + " kr";






}