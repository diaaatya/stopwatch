
window.onload = function () {
  var lap = 1;
  var seconds = 00; 
  var tens = 00; 

  var mins = 00;
  var runing= false;
  var results = document.getElementById("results");
  var appendTens = document.getElementById("tens");
  var appendSeconds = document.getElementById("seconds");
  var appendmins = document.getElementById("mins");
  var buttonStart = document.getElementById('button-start');
  var buttonStop = document.getElementById('button-stop');
  var buttonRest = document.getElementById('button-rst');
  var buttonlap = document.getElementById('button-lap');
  var ticks = document.getElementById('count');
  buttonStart.onclick = function() {   
  if (runing== false) {
  Interval = setInterval(startTimer, 10);
 
  runing= true;  
  }
  }
  function clearChildren() {
  	
    while (results.lastChild)
        results.removeChild(results.lastChild);
  }
  buttonStop.onclick = function() {
  clearInterval(Interval);
  runing= false;
  }
  buttonRest.onclick = function  (){
  		results.style.visibility = "hidden";  
	clearInterval(Interval); 
	mins = 0;  
   tens = 0  ;
   seconds = 0;
   appendTens.innerHTML = "0" + tens;
   appendSeconds.innerHTML = "0" + seconds;
   appendmins.innerHTML = "00" + mins;		
  	clearChildren();
  	lap=1;
  	runing= false;
   }
	
	buttonlap.onclick = function  () {
	results.style.visibility = "visible";  
	var node2 =document.createElement('li');
   var textnode = document.createTextNode("Lap"+ lap + ":" + mins + ":" +  seconds + ":" + tens); 
   node2.appendChild(textnode);
   document.getElementById("results").appendChild(node2);
   lap++;   
   if (lap==10) {
   	results.style.overflow="auto";
   }
   }
    function startTimer () {
    tens++; 
    ticks.className= "tiktok"+tens;
       if (tens<9) {
    appendTens.innerHTML = "0" + tens;
	 }   
	 if (tens>9) {
    appendTens.innerHTML =  tens;
	 }    
    if (tens>99) {
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;

    }
      if (seconds>9) {
      appendSeconds.innerHTML =   seconds;
      appendSeconds.innerHTML =   seconds;

    }   
    if (seconds>59) {
    mins++;
    seconds = 0;    	
	 appendSeconds.innerHTML = "0" + seconds;    
    appendmins.innerHTML = "00" + mins;		   
    }
    if (mins>9){
        appendmins.innerHTML = "0" + mins;		   
    }   
        if (mins>99){
        appendmins.innerHTML =  mins;		   
    }      
 }
 
 }
