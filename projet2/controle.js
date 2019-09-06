function police()
{     
var bold=document.getElementById("text");

if(bold.style.fontWeight == "bold")
{
    bold.style.fontWeight = "normal" ;
}else
{    bold.style.fontWeight = "bold" ;
}
}
function line()
{     
var lin=document.getElementById("text");

if(lin.style.textDecoration == "underline")
{
    lin.style.textDecoration = "none" ;
}else
{    lin.style.textDecoration = "underline" ;
}
}
function itali()
{     
var ital=document.getElementById("text");

if(ital.style.fontStyle == "italic")
{
    ital.style.fontStyle= "normal" ;
}else
{    ital.style.fontStyle = "italic" ;
}
}
function sizes(selectTag) {
    var listValue = selectTag.value
    document.getElementById("text").style.fontSize = listValue;
  }
  function family(selectTag) {
    var listValue = selectTag.options[selectTag.selectedIndex].value;
    document.getElementById("text").style.fontFamily = listValue;
  }
  $("button").css("opacity","0");



  $(document).ready(function(){
    $(".photo button").mouseenter(function(){
      $(this).css("opacity", "0.5");
    });
    $(".photo button").mouseleave(function(){
      $(this).css("opacity", "0");
    });
  });








