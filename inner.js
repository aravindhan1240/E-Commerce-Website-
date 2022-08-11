searchFilter("Home")
function searchFilter(c) {
  var x, i;
  x = document.getElementsByClassName("filterPro");
  if (c == "Home") c = "";
  for (i = 0; i < x.length; i++) {
    araRemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) araAddClass(x[i], "show");
  }
}

// Show filtered elements
function araAddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function araRemoveClass(element, name) {
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
var btnContainer = document.getElementById("mybutton");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

document.querySelector('#input_search').
addEventListener('input',filterList);

function filterList(){
    const searchInput = document.querySelector
    ('#input_search');
    const filter = searchInput.value.toLowerCase();
    const listItem = document.querySelectorAll
    ('.filterPro');

    listItem.forEach((item) =>{
        let text=item.textContent;
        if(text.toLowerCase().includes
        (filter.toLowerCase())){
            item.style.display='';
        }
        else{
            item.style.display='none';
        }
    });
}

function myData(){
  alert("Sorry..! Thank You")
}