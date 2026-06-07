let cookies = navigator.cookieEnabled; 
document.getElementById("demo").innerHTML = "cookies enabled: " + cookies;

let language = navigator.language;
document.getElementById("språk").innerHTML = "Browser language: " + language;

let agent = navigator.userAgent;
document.getElementById("agent").innerHTML = "User-agent:<br>" + agent;