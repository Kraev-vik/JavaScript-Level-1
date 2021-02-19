var items = document.querySelector(".items");
var basket = document.querySelector(".basket ol");
var str = document.querySelector(".allPrice")
var allPrice = 0;

function newObj(id, title, path, price) {
    this.id = id;
    this.title = title;
    this.path = path;
    this.price = price;
    this.col = 0;
}
var good_1 = new newObj(1, "Телевизор", "img/television.jpg", 18500);
var good_2 = new newObj(2, "Телефон", "img/phone.jpg", 11200);
var good_3 = new newObj(3, "Планшет", "img/tablet.jpg", 14050);
var good_4 = new newObj(4, "Ноутбук", "img/notebook.jpg", 25420);
var good_5 = new newObj(5, "Кресло", "img/chair.jpg", 11200);

var goods = [good_1, good_2, good_3, good_4, good_5];

function createNewItem(good) {
    var item = document.createElement("div");
    item.className = "item";
    item.insertAdjacentHTML("beforeend", "<h3>" + good.title + "</h3>");
    item.insertAdjacentHTML("beforeend", "<img src='" + good.path + "'>");
    item.insertAdjacentHTML("beforeend", "<h4>" + good.price + " &#8381</h4>");
    item.insertAdjacentHTML("beforeend", "<button id='" + good.id + "'>В корзину</button>");
    return item;
}

function inBasket(e) {
    for (elem of goods) {
        if (elem.id == e.target.id) {
            elem.col += 1;
            document.getElementById(e.target.id).innerText = "Уже в корзине " + elem.col + " шт.";
            document.getElementById(e.target.id).style.backgroundColor = "#fb622a";
            allPrice += elem.price;
            if (elem.col == 1) {
                var itemBasket = document.createElement("li");
                itemBasket.className = "good_" + elem.id;
                itemBasket.insertAdjacentHTML("beforeend", elem.title + "    " + elem.price + "    " + elem.col + " шт.");
                basket.appendChild(itemBasket);
            }
            else {
                document.querySelector(".good_" + elem.id).innerText = elem.title + "    " + elem.price + "    " + elem.col + " шт.";
            }
            str.innerHTML = "Общая стоимость товаров: <h4>" + allPrice + " &#8381</h4>";
            document.querySelector(".basket").style.display = "block";

        }

    }

}

for (elem of goods) {
    items.appendChild(createNewItem(elem));
}

var button = document.querySelectorAll(".item button");
for (btn of button) {
    btn.onclick = inBasket;
}