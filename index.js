let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newgame=document.querySelector("#new");
let mssg=document.querySelector(".mssg");
let msg=document.querySelector("#msg");

let turnO=true;

const win=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
//MAIN LOGIC
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true; 
        }
        box.disabled=true;

        checkwinner();
    });
});

const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
    }
};

//SHOW WINNER FUNCTION
const showwinner=(winner)=>{
    msg.innerText=`Congratulations ,Winner is ${winner}`;
    mssg.classList.remove("hide");
    disableboxes();
}
//CHECK WINNER FUNCTION
const checkwinner=()=>{
    for(let pattern of win){
     let pos1=boxes[pattern[0]].innerText;
     let pos2=boxes[pattern[1]].innerText;
     let pos3=boxes[pattern[2]].innerText;

     if(pos1!=""&&pos2!=""&&pos3!=""){
        if(pos1===pos2&&pos2===pos3){
            console.log("Winner!",pos1);

            showwinner(pos1);
        }
     }
     
    }
}
//RESET BUTTON
reset.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    turnO = true;
    mssg.classList.add("hide");
});

newgame.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    turnO = true;
    mssg.classList.add("hide");
});