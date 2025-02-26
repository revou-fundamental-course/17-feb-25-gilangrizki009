// ini javascript eksternal

// bagian banner slide
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs((slideIndex += n))
}

function showDivs(n) {
    var i;
    var imgList = document.getElementsByClassName("gambar-banner");
    if (n > imgList.length) slideIndex = 1;
    else if (n < 1) slideIndex = imgList.length;

    for (i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none";
    }
    
    imgList[slideIndex - 1].style.display = "block"
}

setInterval(() => {
    plusDivs(1);
}, 2000)

// bagian untuk form validation
function validation () {
    const name = document.forms["message-form"]["full-name"].value;
    const email = document.forms["message-form"]["email"].value;
    const nomor = document.forms["message-form"]["nomor"].value;

    if (name == "" || email == "" || nomor == "") {
        alert("Tidak boleh ada yang kosong");
        return false;
    }

    setSenderUI(name, email, nomor);
    
    return false;
}
