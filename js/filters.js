filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("cards__item");
  if (c == "all") c = "";
  // Додати клас "show" (display:block) елементам, які є відфільтрованими та видалити "show" елементам, які не обрані
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Показати відфільтровані елементи
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Сховати елементи, які не обрані
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Додати активний клас поточній кнопці керування (виділіть її)
var btnContainer = document.getElementById("filtersBtnList");
var btns = btnContainer.getElementsByClassName("projects__filters-button");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("projects__filters-button--current");
    current[0].className = current[0].className.replace(" projects__filters-button--current", "");
    this.className += " projects__filters-button--current";
  });
}