// Copyright © Antartica Org. All rights reserved. - United States
// SCRIPT STARTS
// LANGUAGE (en-US)

let cookieconsent = getCookie("cookieconsent");
if (cookieconsent == "1") {
let ae = getCookie("ae");
	if (ae == "1") {
	document.getElementById("cookieconsentb").style.display = 'none';
	}
	else {
	document.getElementById("cookieconsentb").style.display = 'block';
	}

console.info("Privacy Info - Cookie Consent: Optional cookies accepted (1)");
document.getElementById("currentcookieconsentstatus").innerHTML = "Optional cookies accepted (1)"; 
}

else if (cookieconsent == "2") {
let ae = getCookie("ae");
	if (ae == "1") {
	document.getElementById("cookieconsentb").style.display = 'none';
	}
	else {
	document.getElementById("cookieconsentb").style.display = 'block';
	}

console.info("Privacy Info - Cookie Consent: Optional cookies refused (2)"); 
document.getElementById("currentcookieconsentstatus").innerHTML = "Optional cookies refused (2)"; 
}

else {
document.getElementById("cookieconsenta").style.display = 'block';
setCookie("cookieconsent", "0", 30);
setCookie("ae", "0", 30);
console.info("Privacy Info - Cookie Consent: (default) Only essential cookies are enabled (3)"); 
document.getElementById("currentcookieconsentstatus").innerHTML = "(default) Only essential cookies are enabled (3)"; 
}


setCookie("testcookie", "1", 30);
var testa = document.getElementById("testcookiebb");
var cookieconsentbuttona = document.getElementById("cookieconsentbutton");
let test = getCookie("testcookie");
if (test > "0") {
 testa.style.display = "none";
} 
else {
cookieconsentbuttona.style.display = "none";
document.getElementById("testcookie").innerHTML = "[ Some parts of this page may not work because cookies are disabled. ]";
document.getElementById("testcookieab").innerHTML = "Current cookie consent status: (default) Only essential cookies are enabled (4)";
 testa.style.display = "block";
document.getElementById("currentcookieconsentstatus").innerHTML = "(default) Only essential cookies are enabled (4)";
console.info("[ Some parts of this page may not work because cookies are disabled. ]"); 
}


function cookieconsenttype1Function() {
setCookie("cookieconsent", "1", 30);
document.getElementById("cookieconsenta").style.display = 'none';
document.getElementById("cookieconsentb").style.display = 'block';
console.info("Privacy Info - Cookie Consent: Optional cookies accepted (1)"); 
document.getElementById("currentcookieconsentstatus").innerHTML = "Optional cookies accepted (1)"; 
}

function cookieconsenttype2Function() {
setCookie("cookieconsent", "2", 30);
document.getElementById("cookieconsenta").style.display = 'none';
document.getElementById("cookieconsentb").style.display = 'block';
console.info("Privacy Info - Cookie Consent: Optional cookies refused (2)"); 
document.getElementById("currentcookieconsentstatus").innerHTML = "Optional cookies refused (2)"; 
}

function bbcookieconsenttype1Function() {
setCookie("ae", "1", 30);
document.getElementById("cookieconsentb").style.display = 'none';
console.info("Your cookie preferences have been saved. To change your preferences at any time, see our cookie policy or visit the link in the page footer."); 
}

// THIS FUNCTION IS VERY IMPORTANT
function setCookie(cname,cvalue,exdays) {  const d = new Date();  d.setTime(d.getTime() + (exdays*60*60*60*50*300));  let expires = "expires=" + d.toUTCString();  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"; }
function getCookie(cname) {  let name = cname + "=";  let decodedCookie = decodeURIComponent(document.cookie);  let ca = decodedCookie.split(';');  for(let i = 0; i < ca.length; i++) {    let c = ca[i];    while (c.charAt(0) == ' ') {      c = c.substring(1);    }    if (c.indexOf(name) == 0) {      return c.substring(name.length, c.length);    }  }  return ""; }
// THIS FUNCTION IS VERY IMPORTANT
// SCRIPT ENDS
// Copyright © Antartica Org. All rights reserved. - United States
