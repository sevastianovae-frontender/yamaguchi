function move(){

setTimeout(start3, 100);
setTimeout(start1, 500);
setTimeout(start2, 1500);

 function start1(){   let el=document.getElementById('fig');
 el.classList.add('up1'); }
 
 function start2(){   let el=document.getElementById('fig');
 el.classList.add('up2'); }
 
 function start3(){   let el=document.getElementById('fig_el');
 el.classList.add('fig_el'); }

}