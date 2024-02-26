var byte_array = [
    0x01, 0x04, 0x03, 0x02, 0x08, 0x06, 0x07, 0x05,
    0x04, 0x01, 0x03, 0x02, 0x05, 0x08, 0x07, 0x06,
    0x08, 0x02, 0x01, 0x03, 0x05, 0x04, 0x07, 0x06,
    0x06, 0x02, 0x03, 0x04, 0x01, 0x07, 0x05, 0x08,
    0x07, 0x01, 0x02, 0x03, 0x05, 0x06, 0x04, 0x08,
    0x05, 0x02, 0x03, 0x04, 0x01, 0x08, 0x07, 0x06,
    0x02, 0x03, 0x04, 0x01, 0x05, 0x08, 0x06, 0x07,
    0x03, 0x04, 0x01, 0x02, 0x07, 0x08, 0x05, 0x06,
    0x05, 0x06, 0x01, 0x02, 0x07, 0x08, 0x03, 0x04,
    0x06, 0x07, 0x01, 0x02, 0x05, 0x08, 0x03, 0x04
];

function getCode()
{
  var d = new Date().toISOString().slice(2,10).replace(/-/g,"") + new Date().getUTCHours().toString().padStart(2,'0');
  var qs = d.split('').reduce((a,b) => a + parseInt(b), 0);
  var m = qs % 10;
  var r = "";
  for (var i = 0; i < 8; i++) {
         var index = i + m * 8;
         var c = byte_array[index];
         r += d[c - 1];
  }
  return r;
}

const div = document.querySelector("div");
div.innerHTML = "<mark>"+getCode()+"</mark>";

var d = new Date();
d.setMinutes (d.getMinutes() + 30);
d.setMinutes (0);

var countDownDate =new Date();
countDownDate.setMinutes (countDownDate.getMinutes() + 30);
countDownDate.setMinutes (0);
countDownDate.setHours (countDownDate.getHours() + 1);

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("countdown").innerHTML =  minutes + "m " + seconds + "s ";
  
}, 1000);
