// ini javascript eksternal

// ini untuk banner autoslide
//for index identifier
let indexBanner = 0;

showBanner();

function nextBanner() {
    //incresent indexBanner
    indexBanner += 1;
    showBanner();
}

function showBanner() {
    let banner = document.getElementsByClassName('gambar-banner');

    //reset condition
    if (indexBanner > banner.length - 1) {
        indexBanner = 0;
    }

    // loop untuk hide semua
    for (let i = 0; i < banner.length; i++){
        banner[i].style.display = 'none'; 
    }

    //show banner
    banner[indexBanner].style.display = 'block';
}

// untuk gambar berubah per milidetik
setInterval(nextBanner, 3000);


// bagian untuk form validation
function validateForm() {
    let nameInput = document.getElementById ('formulir-isian');

//pilihan masalah yang terjadi jika form kosong
    if    (nameInput.value == '') {
                alert('form tidak boleh kosong')
    } else {
        alert('welcome ' + nameInput.value);
    }
}


// // bagian banner slide
// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//     showDivs((slideIndex += n))
// }

// function showDivs(n) {
//     var i;
//     var imgList = document.getElementsByClassName("gambar-banner");
//     if (n > imgList.length) slideIndex = 1;
//     else if (n < 1) slideIndex = imgList.length;

//     for (i = 0; i < imgList.length; i++) {
//         imgList[i].style.display = "none";
//     }
    
//     imgList[slideIndex - 1].style.display = "block"
// }

// setInterval(() => {
//     plusDivs(1);
// }, 1000) 