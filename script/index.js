// Copyright © Antartica Org. All rights reserved. - United States
// SCRIPT STARTS
// LANGUAGE (en-US)

function consoleonloadFunction() {
console.log("%cWarning! Do not enter or type any commands that you do not know.", "background: none; color: #fc4e4b; font-size: x-large");
console.log("%cWelcome to Settings / Antartica.Org", "background: none; color: #4bfcd3; font-size: xx-large"); 
}

function printaFunction() {
closemodal9();
window.print();
}

function printbFunction() {
window.print();
}

function statsFunction() {
let cookieconsenta = getCookie("cookieconsent");
if (cookieconsenta == "1") {
let xaaa = getCookie("statcookie1");
if (xaaa <= "0") {
let caa = xaaa - 1;
setCookie("statcookie1", caa, 30);
}
else {
setCookie("statcookie1", "0", 30);
}
}
else {
}
}

// ERROR MESSAGE FUNCTION STARTS
function contentnotfoundFunction() { 
alert("Antartica.Org\n\nError (404)\nContent not found :("); 
}
// ERROR MESSAGE FUNCTION ENDS

// THIS FUNCTION IS VERY IMPORTANT
// IT HELPS IN COOKIE CREATION
function setCookie(cname,cvalue,exdays) {  const d = new Date();  d.setTime(d.getTime() + (exdays*60*60*60*50*300));  let expires = "expires=" + d.toUTCString();  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"; }
function getCookie(cname) {  let name = cname + "=";  let decodedCookie = decodeURIComponent(document.cookie);  let ca = decodedCookie.split(';');  for(let i = 0; i < ca.length; i++) {    let c = ca[i];    while (c.charAt(0) == ' ') {      c = c.substring(1);    }    if (c.indexOf(name) == 0) {      return c.substring(name.length, c.length);    }  }  return ""; }
// THIS FUNCTION IS VERY IMPORTANT

// THE ABOVE SECTION ENDS

// SCRIPT ENDS
// Copyright © Antartica Org. All rights reserved. - United States
