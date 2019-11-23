  $("input[type='text']").hide();
// quando um li é clicado dentro de um ul , coloca a classe checked;
$("ul").on("click","li",function(){
  console.log("li clicked");
  // when a task is clicked, toggle the class checked
  $(this).toggleClass("checked");
});

// quando o item .delete é clicado dentro de uma ul, ele é removido
// click on x to delete
  $("ul").on("click",".delete", function(e){
    $(this).parent().fadeOut(500, function(){
      $(this).remove();
    });
    e.stopPropagation();
  });

// insert a new task
$("input[type='text']").on("keypress", function(event){
  console.log("keypressed");
  if (event.which===13){
    var task = $("input").val();
    console.log("enter clicked");
    $("ul").append("<li><span class=\"delete\"> <i class=\"far fa-trash-alt\"></i></span>" +task+ "</li>");
     $(this).val("");
  }
});

$(".fa-plus").click(function(){
  $("input[type='text']").slideToggle();
});
