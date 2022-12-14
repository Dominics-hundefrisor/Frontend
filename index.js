const api_url = 'http://localhost:8080/api/v1/openinghours/';

async function getOpeninghoursInfo (id) {
    const response = await fetch(api_url + id);
    const data = await response.json();
    console.log(data.field1)
    console.log(data.field2)
    console.log(data.field3)
    console.log(data.time1)
    console.log(data.time2)
    console.log(data.time3)
    document.getElementById("field_1").innerHTML = data.field1;
    document.getElementById("field_2").innerHTML = data.field2;
    document.getElementById("field_3").innerHTML = data.field3;
    document.getElementById("time_1").innerHTML = data.time1;
    document.getElementById("time_2").innerHTML = data.time2;
    document.getElementById("time_3").innerHTML = data.time3;
}

getOpeninghoursInfo(1)