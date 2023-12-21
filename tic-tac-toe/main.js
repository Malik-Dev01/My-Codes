let boxes = document.querySelectorAll(".box");

let turn = "X";
let isGameOver = false;

boxes.forEach(e =>{
    e.innerHTML = ""
    e.addEventListener("click",()=> {
        if(!isGameOver && e.innerHTML === "") {
            e.innerHTML = turn;
            checkwin();
            checkdraw();
            changeturn();
        }
    })
})

const checkwin = () => {
    let winCons = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    for (let i = 0; i < winCons.length; i++ ) {
        let v0 =boxes[winCons[i][0]].innerHTML;
        let v1 =boxes[winCons[i][1]].innerHTML;
        let v2 =boxes[winCons[i][2]].innerHTML;

        if (v0 != "" && v0 === v1 && v0 === v2) {
            isGameOver = true;
            document.querySelector("#out").innerHTML = turn + " Win";
            document.querySelector("#play-a").style.display = "inline";
            for (j = 0;j<3;j++) {
                boxes[winCons[i][j]].style.backgroundColor = "#08d9d6";
            }
        }
    }
}

const checkdraw = () => {
    if (!isGameOver) {
        let isDraw = true;
        boxes.forEach(e=>{
            if(e.innerHTML == "") isDraw = false;
        })

        if(isDraw) {
            isGameOver = true;
            document.querySelector("#out").innerHTML = "Draw";
            document.querySelector("#play-a").style.display = "inline";
        }
    }
}

const changeturn = () => {
    if (turn === "X") {
        turn = "O";
        document.querySelector(".bg").style.left = "85px";
    }
    else {
        turn = "X";
        document.querySelector(".bg").style.left = "0";
    }
}


document.querySelector("#play-a").addEventListener("click",()=>{
    isGameOver = false;
    turn = "X";
    document.querySelector(".bg").style.left = "0";
    document.querySelector("#out").innerHTML = "";
    document.querySelector("#play-a").style.display = "none";

    boxes.forEach(e => {
        e.innerHTML = "";
        e.style.removeProperty("background-color");
    })
})