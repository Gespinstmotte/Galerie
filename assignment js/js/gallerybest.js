function upDate(previewPic) {


    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";

    document.getElementById('image').innerHTML = previewPic.alt;

}

function unDo() {

    document.getElementById('image').style.backgroundImage = "url('')";

    document.getElementById('image').innerHTML = "Bewege die Maus über ein Bild.";
}
