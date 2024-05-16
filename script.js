let sum=0
document.getElementById("#score").textContent=1


function score1(){
   
let score=document.getElementById("score")

score.textContent=parseInt(score.textContent) +1

}
function score2(){
   
    let score=document.getElementById("score")
    
    score.textContent=parseInt(score.textContent) +2
    
    }
function score3(){

let score=document.getElementById("score")

score.textContent=parseInt(score.textContent) +3

}
function guest1(){

    let score=document.getElementById("score1")
    
    score.textContent=parseInt(score.textContent) +1
    
    }
function guest2(){

    let score=document.getElementById("score1")
    
    score.textContent=parseInt(score.textContent) +2
    
    }
function guest3(){

    let score=document.getElementById("score1")
    
    score.textContent=parseInt(score.textContent) +3
    
    }
    function reset1(){

        let score=document.getElementById("score")
        
        score.textContent=0
        
        }
        function reset2(){

            let score=document.getElementById("score1")
            
            score.textContent=0
            
            }