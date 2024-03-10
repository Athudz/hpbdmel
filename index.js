const myTimeout = setTimeout(myGreeting, 3000);

function myGreeting() {
  document.getElementById("bd-question").innerHTML = ` <p>Do you think im da most handsome and wonderful alien?</p>
  <div class="bd-btn">
  <button class="yes-btn" style=" background-color: #23ce3a;" onclick="Thanks()"> Yes </button>
  <button class="no" onclick="Thanks()"> No <div class="yes"> Yes </div> </button>
 </div>`
}
var box=document.getElementById("main-content")
function Thanks(){
    box.innerHTML = `             
       <p>Thanks for your praise (〃＾▽＾〃)</p>
       <a href="troll.html"> <button class="click"> Click to continue </button></a>`
}
