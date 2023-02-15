//get html element for manip
const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');

//Toggle nav
toggle.addEventListener('click', function(){ document.body.classList.toggle('show-nav') });

//Show
open.addEventListener('click', ()=> modal.classList.add('show-modal'));

//Hide modal by btn close
close.addEventListener('click', ()=> modal.classList.remove('show-modal'));

//Hide modal on outside click
window.addEventListener('click', function(e){ 
    if(e.target == modal){
        modal.classList.remove('show-modal');
    }else{
        return false;
    }
 });

