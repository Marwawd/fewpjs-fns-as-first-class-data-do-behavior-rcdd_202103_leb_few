/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value;
  displayMessage(greet(timeString));
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(tt){
//let tt=getElementById('time');

const t = tt.split(",");
const parsed = parseInt(t, 10);
if(parsed<12) {/*console.log("Good morning");*/return "Good Morning";}
else if (parsed>=17) {
 return "Good Evening";
  //console.log("Good Evening");
}
else  {
  //console.log("Good Afternoon");
  return "Good Afternoon";
}
}
/* Write your implementation of displayMessage() */


function displayMessage (str) {
/*
  let F=document.getElementById('greeting').innerText;
   F=`${str}`;
*/
//  console.log(f);


let content = document.getElementById("greeting").innerText;
content=`${str}`;
}
