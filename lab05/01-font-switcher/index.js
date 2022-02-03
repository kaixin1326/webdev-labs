const makeBigger = () => {
   var header = document.getElementById('header1');
   var style1 = window.getComputedStyle(header, null).getPropertyValue('font-size');
   var fontSize1 = parseFloat(style1);
   header.style.fontSize = (fontSize1 + 3) + 'px';

   var content = document.getElementById('content1');;
   var style2 = window.getComputedStyle(content, null).getPropertyValue('font-size');
   var fontSize2 = parseFloat(style2);
   content.style.fontSize = (fontSize2 + 3) + 'px';
};

const makeSmaller = () => {
   var header = document.getElementById('header1');
   var style1 = window.getComputedStyle(header, null).getPropertyValue('font-size');
   var fontSize1 = parseFloat(style1);
   header.style.fontSize = (fontSize1 - 3) + 'px';

   var content = document.getElementById('content1');;
   var style2 = window.getComputedStyle(content, null).getPropertyValue('font-size');
   var fontSize2 = parseFloat(style2);
   content.style.fontSize = (fontSize2 - 3) + 'px';
};

document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

