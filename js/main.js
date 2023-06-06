'use strict';

const openMenuBtn=document.querySelector('#menu-open');
const navList=document.querySelector('#main-nav');


openMenuBtn.addEventListener('click',()=>{
	if(openMenuBtn.getAttribute('src')==='images/icon-close.svg'){
		openMenuBtn.setAttribute('src','images/icon-hamburger.svg');
	}else{
		openMenuBtn.setAttribute('src','images/icon-close.svg');
	}
	navList.classList.toggle('active');
});