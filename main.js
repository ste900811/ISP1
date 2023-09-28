function getCurrentTime() {
  var datetime = new Date();
  console.log(datetime);
  return datetime;
}

function getBrowserInformation() {
  let language = navigator.userAgent;
  return language;
}

function calculateFactorial() {
  let input = document.getElementById("numberInput").value;
  let x = input;
  if(x < 0){
    alert("The number you entered is negative, please re-enter");
    return;
  }
  let result = 1;
  while(x > 1){
      result = result * x;
      x = x - 1;
  }
  document.getElementById("answer").innerHTML = "\xa0\xa0\xa0\xa0" + input + "! =\xa0" + result;
}

function getClickPosition(e) {
  let image = document.querySelector("#image");

  let xPosition = e.clientX - imageoriginx - image.clientWidth/4;
  let yPosition = e.clientY - imageoriginy;

  // let xPosition = e.clientX - imageoriginx - image.clientWidth;
  // let yPosition = e.clientY - imageoriginy - image.clientHeight;

  image.style.left = xPosition + "px";
  image.style.top = yPosition + "px";
}
