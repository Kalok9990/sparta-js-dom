var listItems = ["Go out","Come back" , "Buy food" , "Eat food"];
var list = document.getElementById("list");
var lis = document.getElementsByTagName("li");
var count = document.getElementById("count");

var test = addListItem(listItems);
var test1 = setEven(test);
var test2 = counts();

// write append loop here
function addListItem(value) {
  for (var i = 0; i < value.length; i++) {
    var li = document.createElement("li");
    li.innerHTML = value[i];
    list.appendChild(li);
  }
}

// write the class loop here
function setEven(value){
  var liss = document.querySelectorAll("li");
  for (var i = 0; i < liss.length; i++) {
    var className = i % 2 ? "even" : "";
    var li = liss[i];
    li.className = className;
  }
}

//Count span increases
function counts(){
  for (var i = 0; i < lis.length; i++) {
    count.innerHTML = i + 1;
  }
}
