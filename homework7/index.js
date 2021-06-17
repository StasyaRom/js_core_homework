//task2
function changeCSS() {
       text.style.color = "orange";
       text.style.fontSize = "20pt";
       text.style.fontFamily = "Comic Sans MS";
   }



//task3
function change_to_blue() {
        document.body.style.backgroundColor="blue";
    }
    function change_to_pink() {
        document.body.style.backgroundColor="pink";
    }
    function change_to_brown() {
        document.body.style.backgroundColor="brown";
    }
    function change_to_yellow() {
        document.body.style.backgroundColor="yellow";
    } 



//task4 /напевно має бути якась така логіка, але воно далі не пішло.../
function Press(){
    const arr = [...document.querySelectorAll('.select option')];
    for(i=0;i<arr.length;i++) {
        if(document.body.select.children[1]===true) {
            array.remove(number);
        }
        return;
    }
  
  
  
  //task5
  document.body.children[0].onclick = function() { document.getElementById('mouse_move').innerHTML ="I was pressed!";}
  document.body.children[0].onmouseenter = function() { document.getElementById('mouse_move').innerHTML ="Mouse on me!";}
  document.body.children[0].onmouseleave = function() { document.getElementById('mouse_move').innerHTML ="Mouse is not on me!";}
  
  
  //task6
  let w = window.innerWidth;
  let h = window.innerHeight;
  document.getElementById("edit").innerHTML = "Width: " + w + ", Height: " + h + ".";
