
// Links in the gallery will be put into the table on page load
//TODO: We need to not load everything at once, and also make it able to go 3 on an X axis, then continue down like that evt.
const images = ["https://images.all-free-download.com/images/graphicwebp/cute_dog_pet_237595.webp",
    "https://images.all-free-download.com/images/graphicwebp/cute_dog_210049.webp",
    "https://images.all-free-download.com/images/graphicwebp/cute_dog_199763.webp",
    "https://images.all-free-download.com/images/graphicwebp/animal_canine_chair_curiosity_cute_dog_friendship_604320.webp",
    "https://images.all-free-download.com/images/graphicwebp/albino_animal_autumn_canine_cat_color_cute_dog_604243.webp",
    "https://images.all-free-download.com/images/graphicwebp/adorable_animal_breed_canine_cute_dog_doggy_603714.webp",
    "https://images.all-free-download.com/images/graphicwebp/adult_animal_baby_black_and_white_canine_cute_dog_602705.webp"
]

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
 

    function galleryStart() {
        insertImages()
    }
