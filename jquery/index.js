$(function(event){
  console.log("DOM is ready");

  var listItems = ["Go out","Come back" , "Buy food" , "Eat food"];

  addListItem(listItems);

  //append items to list
  function addListItem(value) {
    $(value).each(function(index, item){
      $("#list").append($("<li>" + item + "</li>"));
    });
    $("li:even").addClass("even");
    $("#count").html($("li").length);
  }
});



// $(function(event){
//   console.log("DOM is ready");
//
//   var listItems = ["Go out","Come back" , "Buy food" , "Eat food"];
//
//   addListItem(listItems);
//
//   //append items to list
//   function addListItem(value) {
//     $(value).each(function(index, item){
//       $("#list").append($("<li>" + item + "</li>"));
//     });
//   }
//
//   //add even to evens
//   $("li").each(function(index, li){
//     if(index%2 === 0){
//       $(li).addClass("even")
//     }
//   })
//
//   // write the class loop here
//   $("li").each(function(index){
//     $("#count").html($("li").length);
//   })
// });
