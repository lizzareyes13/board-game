
var player1 = new Player($("#player1"))
var player2 = new Player($("#player2"))

// dice
var whoseTurn = 1;
$("#dado").click(function(){
  $("#dieroll").html("");
  $(this).attr("src", "Dodecahedron.gif");
  setTimeout(function(){
    let num = Math.floor(Math.random()*12)+1;
    $("#dado").attr("src", "Dodecahedron.png");
    $("#dieroll").html(num);
    if (whoseTurn == 1){

     player1.moveN(num);
     whoseTurn = 2;
   }
   else{
     whoseTurn = 1;
     player2.moveN(num);
   }
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
document.getElementById("board-container").appendChild(tbl);

// create players

// Const Player1 = New player(){
//   }


function Player (e){
  this.htmlElement = e;
  this.pos = 0;
  this.moveOne = function(){
    var wantedid = "cell" + (this.pos+1);
		var pos1 = $("#" + wantedid).offset(); //{top:__, left: __ }
		this.htmlElement.css("top", pos1.top);
		this.htmlElement.css("left", pos1.left);
    this.pos = this.pos + 1;
  }
  this.moveN = function(n) {
    let dest = this.pos + n;
    const runMove = () => {
      if (this.pos >= 27){
        alert("Game Over");
        return;
      }
      else if (this.pos >= dest) return;
      else {
        setTimeout (runMove, 500);
        this.moveOne();
      }
    }
    runMove();
  }

}
//


// move the players
// Player1.moveOne("cell")

// var finishLine = "cell" + 27{
//   alert("winner");
// }
