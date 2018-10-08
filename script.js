// write your JS code here
let sent = '';
function displayValue(x){
	sent+=x;
	document.querySelector(".message").innerHTML = sent;
};

function massageSent() {
	document.querySelector('.message').innerHTML = " ";
	alert("Your message has been sent!!!");
	sent="";
}


