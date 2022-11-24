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

function displayImage(object){
    overlayImg.src = object.src
    overlay.style.display = "block";
}

function deactivateOverlay(){
    overlay.style.display = "none";
    overlayImg.src = ""
}

function insertImages() {
    let html = "";
    images.forEach((images) => {
        html += `
        <tbody>
        <tr>
        <td><img onclick="displayImage(this)"
        src="${images}"
        class="img rounded float-start">
        </tr>
        </tbody>`
    });
    document.querySelector('.image-data').innerHTML = html;
}

function galleryStart(){
    insertImages()
}
