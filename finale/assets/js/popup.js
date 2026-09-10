let popup = document.getElementById("popup");
let close = document.getElementById("close");
let popupBody = document.getElementById("popup-body");


function chamarPOPeAdicionar(html) {

    popup.style.display = "block";

    popupBody.innerHTML = "";
    popupBody.innerHTML = html;

}

close.addEventListener("click", function () {

    popup.style.display = "none";

});