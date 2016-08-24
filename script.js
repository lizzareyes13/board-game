$("#dado").click(function(){
  $("#dieroll").html("");
  $(this).attr("src", "Dodecahedron.gif");
  setTimeout(function(){
    $("#dado").attr("src", "Dodecahedron.png");
    $("#dieroll").html(Math.floor(Math.random()*12)+1);

  },3100)
})
