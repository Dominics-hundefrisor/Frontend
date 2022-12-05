
// Links in the gallery will be put into the table on page load
//TODO: We need to not load everything at once, and also make it able to go 3 on an X axis, then continue down like that evt.
const images = []

const overlayImg = document.getElementById('active-overlay-image');
const overlay = document.getElementById('active-overlay');

function displayImage(object) {
    overlayImg.src = object.src
    overlay.style.display = "block";
}

function deactivateOverlay() {
    overlay.style.display = "none";
    overlayImg.src = ""
}

function insertImages() {
    let html = "";
    var maxVal = 3;
    var amount = 0;
    while(amount < images.length){
            html += `
        <tr>
        `
            for (j = 0; j < maxVal; j++) {
                html += `
                <td><img onclick="displayImage(this)"
                src="${images[amount]}"
                class="img rounded"></img>
                `
                amount++
                if(amount===images.length){
                    break
                }
            }
            html += `
        </tr>
        `
        }
        document.querySelector('.image-data').innerHTML = html;
    }

 
 

    function galleryStart(data) {
        counter = 0;
        while(counter < data.length){
            console.log(data[counter])
            images.push(data[counter])
            counter++
        }
        insertImages()
    }
