let boxes=document.querySelectorAll("#gbut");
let  newgamebtn= document.querySelector("#new")
let game=document.querySelectorAll("#game");
let  msgContainer= document.querySelector(".msg-container hide")
let msg=document.querySelector("#msg")
let msg2=document.querySelector("#msg2")
let audio= document.querySelector("audio")
let on= document.querySelector("#on")
let of= document.querySelector("#of")
let Counter =document.querySelector("#Counter");
let counterX =document.querySelector("#counter");
let counterO =document.querySelector("#counterX");
let counter2 = 0;
let turnO=true;

let count=0;
const win =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3,4,5],
[6,7,8],
[1,4,7],
[2,4,6],
[2,5,8],
]
//function for draw
const draw = () =>{
  msg.innerText= "draw"
}

boxes.forEach((gbut)=> {
    gbut.addEventListener("click",function(event)
    {
                   console.log("box was clicked");
                if(turnO)
                {
                  
                    gbut.innerText="O";
                    msg.innerText="Turn of player  X now";
                    turnO=false
                
                }
                else
                {

                  
                  gbut.innerText="X";
                  msg.innerText="Turn of player O now";
                    
                  turnO=true
                }
                count += 1;
                if (count ==9){
                  draw()
                }
   gbut.disabled=true;
   msg2.innerText="";
   
   checkwinner()             
                })
              
   
});

const reseter = ()=>{
turnO=true;
count=0;
msg2.innerText="LET'S MAKE THE GLORY"
boxes.forEach((gbut) =>  {
    gbut.innerText="";
    gbut.disabled=false;
 

})

msg.innerText="";
}

function checkwinner(){
    for(pattern of win){
        let pos1=boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
         let pos3 =boxes[pattern[2]].innerText; 
         

 if(pos1 != "" && pos2 != ""  && pos3!="")
    {
        if(pos1===pos2&&pos2===pos3)
{    
  
  boxes.forEach((gbut) =>  {
    gbut.disabled=true;
  }
)


function showwinner(winner)
  {
      msg.innerHTML=`BOOYAH! the winner is ${winner}` ;
  }
  showwinner(pos1)

  }


  
  
}
  }   


}

function audioon(){
  audio.play()
}

function audiooff(){
  audio.pause()
}
on.addEventListener("click",audioon);
of.addEventListener("click",audiooff);


newgamebtn.addEventListener("click",reseter);

audio.play();
