var adImages = document.getElementById('images-advert');
var adCaption = document.getElementById('advert-caption');
var previousBtn = document.getElementById('prev-btn');
var nextBtn = document.getElementById('next-btn');

var cartTimer;


fetch('assets/cart.json').then(function(output) {
    output.json().then(function(json) {
        json.forEach(function( element, idx) {

            var adImage = document.createElement('img');
            adImage.setAttribute('src', element.url);
            adImage.setAttribute('alt', element.caption);
            adImage.setAttribute('title', element.caption);

            adImages.appendChild(adImage);
        })
        setupadverts(json);
    })
});

function setupadverts(json) {
    var adCount = adImages.childElementCount;
    var firstImage = 1;
    var adWidth = 450;

    function prevCartImage() {
        if (firstImage !== 1) {
            --firstImage;

            adImages.style.left = adWidth - (firstImage * adWidth) + 'px';
        }
        adCaption.innerText = json[firstImage - 1].caption;
    }  

    previousBtn.addEventListener('click', prevCartImage)

    function nextCartImage() {
        if (firstImage != adCount) {
            ++firstImage;

            adImages.style.left = adWidth - (firstImage * adWidth) + 'px';
        } else {
            adImages.style.left = 0;
            firstImage = 1;
        }
        adCaption.innerText = json[firstImage - 1].caption;
    }
    
    nextBtn.addEventListener('click', nextCartImage);

    cartTimer = setInterval(nextCartImage, 3000);

    adCaption.innerText = json[firstImage - 1].caption;
}

 









