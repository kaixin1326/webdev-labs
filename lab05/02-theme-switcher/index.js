/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/
var nav = document.getElementById('nav');
var content = document.getElementById('content');
var header = document.getElementById('header');
var text = document.getElementById('text');

const switchTheme = (nav, content, header, text, navcolor, contentcolor, headercolor, textcolor) => {
   nav.style.backgroundColor = navcolor;
   content.style.backgroundColor = contentcolor;
   header.style.color = headercolor;
   text.style.color = textcolor;
}

document.querySelector("#default").addEventListener('click', () => { switchTheme(nav, content, header, text, "#F2F2F2", "white", "#555", "#666") });
document.querySelector("#desert").addEventListener('click', () => { switchTheme(nav, content, header, text, "#CA6702", "#CB997E", "#FFE8D6", "#FFE8D6") });
document.querySelector("#ocean").addEventListener('click', () => { switchTheme(nav, content, header, text, "#0077B6", "#90E0EF", "white", "#0096C7") });
document.querySelector("#high-contrast").addEventListener('click', () => { switchTheme(nav, content, header, text, "black", "white", "white", "black") });
