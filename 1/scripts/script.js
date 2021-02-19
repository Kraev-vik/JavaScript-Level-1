var items = document.querySelector(".items");
var imgBig = document.createElement("img");

function newitem(i) {
    var item = document.createElement("div");
    var img = document.createElement("img");
    img.setAttribute("src", "img/small/" + i + ".jpg");
    item.className = "item";
    item.append(img);
    return item;
}

function zoomPhoto(e) {
    var popup = document.querySelector(".popup");
    switch (e.target) {
        case mas[0]:
            imgBig.setAttribute("src", "img/big/1.jpg");
            popup.append(imgBig);
            break;
        case mas[1]:
            imgBig.setAttribute("src", "img/big/2.jpg");
            popup.append(imgBig);
            break;
        case mas[2]:
            imgBig.setAttribute("src", "img/big/3.jpg");
            popup.append(imgBig);
            break;
    }
    imgBig.onerror = function () {
        alert("Картинки не существует");
        imgBig.remove();
        popup.style.display = "none";
    }
    popup.style.display = "block";

    document.querySelector(".close").onclick = function () {
        popup.style.display = "none";
    }
}

for (var i = 1; i <= 3; i++) {
    items.appendChild(newitem(i));
}

var mas = document.querySelectorAll(".item img");
for (var photo of mas) {
    photo.onclick = zoomPhoto;
}

