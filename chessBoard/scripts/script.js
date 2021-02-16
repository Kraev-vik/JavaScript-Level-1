var chessBoard = document.querySelector(".chessBoard");
var arrLetters = ["H", "G", "F", "E", "D", "C", "B", "A"];
var arrNum = ["1", "2", "3", "4", "5", "6", "7", "8"];
var arrChess = ["&#9820;", "&#9822;", "&#9821;", "&#9818;", "&#9819;", "&#9821;", "&#9822;", "&#9820;"];
var blockHeight = "60px";
var blockWight = "60px";
var topBoard = document.querySelector(".topBoard");
var leftBoard = document.querySelector(".leftBoard");
var rightBoard = document.querySelector(".rightBoard");
var mainBoard = document.querySelector(".mainBoard");
var bottomBoard = document.querySelector(".bottomBoard");

if (screen.width <= 667) {
    blockHeight = "35px";
    blockWight = "35px";
}

chessBoard.insertAdjacentHTML("afterbegin", "<h1>Играем в шахматы</h1>");


function addClass(cls, color, i, j) {
    var Item = document.createElement("div");
    Item.className = cls + " " + color;
    if (cls == "topItem" || cls == "bottomItem") {
        Item.innerText = arrLetters[i];
    }
    else if (cls == "leftItem" || cls == "rightItem") {
        Item.innerText = arrNum[i];
    }
    else if (cls == "mainItem") {
        Item.classList.add(arrLetters[j] + arrNum[i]);
        switch (i) {
            case 0: Item.innerHTML = "<span class='bl chess'>" + arrChess[j] + "</span>";
                break;
            case 1: Item.innerHTML = "<span class='bl chess'>&#9823;</span>";
                break;
            case 6: Item.innerHTML = "<span class='wt chess'>&#9823;</span>";
                break;
            case 7: Item.innerHTML = "<span class='wt chess'>" + arrChess[j] + "</span>";
                break;
        }
    }
    Item.style.height = blockHeight;
    Item.style.width = blockWight;
    return Item;
}
for (var i = 0; i < arrLetters.length; i++) {
    topBoard.appendChild(addClass("topItem", "yellow", i));
    leftBoard.appendChild(addClass("leftItem", "yellow", i));
    for (var j = 0; j < arrLetters.length; j++) {
        if ((i % 2 == 0 && j % 2 == 1) || (i % 2 == 1 && j % 2 == 0)) {
            mainBoard.appendChild(addClass("mainItem", "black", i, j));
        }
        else {
            mainBoard.appendChild(addClass("mainItem", "white", i, j));
        }
    }

    rightBoard.appendChild(addClass("rightItem", "yellow", i));
    bottomBoard.appendChild(addClass("bottomItem", "yellow", i));

}


