var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
var requestOptions = {
  method: "get",
  headers: myHeaders,
  redirect: "follow",
};

//Deres URL
fetch("https://v1.nocodeapi.com/aps/instagram/pjCNBSyiUmzTFIzO", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    // Parse the JSON response and extract the photo URLs
    const photoUrls = result.data.map((photo) => photo.media_url);

    // Create img elements for each photo
    const photoElements = photoUrls.map((url) => {
      const imgElement = document.createElement("img");
      imgElement.src = url;
      return imgElement;
    });

    // Append the img elements to the HTML element with the ID "test"
    const testElement = document.getElementById("test");
    photoElements.forEach((imgElement) => testElement.appendChild(imgElement));
  })
  .catch((error) => console.log("error", error));