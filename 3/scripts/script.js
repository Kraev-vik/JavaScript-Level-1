var items = document.querySelector(".items");
var imgBig = document.createElement("img");
var next = document.querySelector(".next img");
var back = document.querySelector(".back img");
var colPhoto = 3;

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
    var wrap = document.querySelector(".wrap");
    imgBig.className = "imgBig";
    switch (e.target) {
        case mas[0]:
            imgBig.setAttribute("src", "img/big/1.jpg");
            wrap.insertBefore(imgBig, wrap.children[1]);
            break;
        case mas[1]:
            imgBig.setAttribute("src", "img/big/2.jpg");
            wrap.insertBefore(imgBig, wrap.children[1]);
            break;
        case mas[2]:
            imgBig.setAttribute("src", "img/big/3.jpg");
            wrap.insertBefore(imgBig, wrap.children[1]);
            break;
    }
    imgBig.onerror = function () {
        // alert("Картинки не существует");
        // imgBig.remove();
        // popup.style.display = "none";
        imgBig.setAttribute("src", "img/icon/no-foto.jpg");
    }
    popup.style.display = "block";

    document.querySelector(".close").onclick = function () {
        popup.style.display = "none";
    }
    return imgBig;
}

for (var i = 1; i <= colPhoto; i++) {
    items.appendChild(newitem(i));
}

var mas = document.querySelectorAll(".item img");
for (var photo of mas) {
    photo.onclick = zoomPhoto;
}

function nextPhoto(e) {
    var path = document.querySelector(".imgBig").getAttribute("src");
    if (e.target == back) {
        var imgNum = +path[path.length - 5] - 1;
        if (isNaN(imgNum)) {
            imgNum = colPhoto - 1;
        }
    }
    else {
        imgNum = +path[path.length - 5] + 1;
    }
    if (imgNum > colPhoto || isNaN(imgNum)) {
        imgNum = 1;
    }
    else if (imgNum == 0) {
        imgNum = colPhoto;
    }
    imgBig.setAttribute("src", "img/big/" + imgNum + ".jpg")
}

imgBig.onclick = nextPhoto;
next.onclick = nextPhoto;
back.onclick = nextPhoto;

