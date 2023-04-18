var adImages2 = document.getElementById('images-advert2');
var adCaption2 = document.getElementById('advert-caption2');
var previousBtn2 = document.getElementById('prev-btn2');
var nextBtn2 = document.getElementById('next-btn2');

var cartTimer2;



fetch('assets/cart2.json').then(function(output2) {
    output2.json().then(function(json) {
        json.forEach(function( element2, idx2) {

            var adImage2 = document.createElement('img');
            adImage2.setAttribute('src', element2.url);
            adImage2.setAttribute('alt', element2.caption);
            adImage2.setAttribute('title', element2.caption);

            adImages2.appendChild(adImage2);
        })
        setupadverts2(json);
    })
});

function setupadverts2(json) {
    var adCount2 = adImages2.childElementCount;
    var firstImage2 = 1;
    var adWidth2 = 450;


    function prevCartImage2() {
        if (firstImage2 !== 1) {
            --firstImage2;

            adImages2.style.left = adWidth2 - (firstImage2 * adWidth2) + 'px';
        }
        adCaption2.innerText = json[firstImage2 - 1].caption;
    }


    previousBtn2.addEventListener('click', prevCartImage2)
    
    function nextCartImage2() {
        if (firstImage2 != adCount2) {
            ++firstImage2;

            adImages2.style.left = adWidth2 - (firstImage2 * adWidth2) + 'px';
        } else {
            adImages2.style.left = 0;
            firstImage2 = 1;
        }
        adCaption2.innerText = json[firstImage2 - 1].caption;
    }


    nextBtn2.addEventListener('click', nextCartImage2);

    cartTimer2 = setInterval(nextCartImage2, 4000);

    adCaption2.innerText = json[firstImage2 - 1].caption;
}






