// dice
$("#dado").click(function(){
  $("#dieroll").html("");
  $(this).attr("src", "Dodecahedron.gif");
  setTimeout(function(){
    $("#dado").attr("src", "Dodecahedron.png");
    $("#dieroll").html(Math.floor(Math.random()*12)+1);

  },3100)
})


// board

let tbl = document.createElement("table");
let cellCounter = 0;
for(let r = 0; r < 8; r++){
  let tr = document.createElement("tr");
  tbl.appendChild(tr);
  for(let c = 0; c < 8; c++){
    let td = document.createElement("td");
    if (r == 0 || r == 7 || c == 0 || c == 7)
    td.classList = ["board-cell"];
    if (r === 0){
      td.id = "cell" + c;
    }
    else if (c === 7 && r != 7){
      td.id = "cell" + (7 + r);
    }
    else if (c === 0 && r != 7){
      td.id = "cell" + (28 - r);
    }
    else if (r === 7){
      td.id = "cell" + (13 + (8 - c));
    }
    tr.appendChild(td);
  }
}
document.getElementById("board-container").appendChild("tbl");
