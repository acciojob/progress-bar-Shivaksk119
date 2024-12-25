//your JS code here. If required.
const circles = document.querySelectorAll('.circle');
const lines = document.querySelectorAll('.line');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let currC = 0;
let currL = -1;

nextBtn.addEventListener('click', ()=>{
	if(currC<circles.length-1 && currL<lines.length-1){
		currC++;
		currL++;
		lines[currL].classList.add('active');
		circles[currC].classList.add('active');
		prevBtn.disabled = false;

		if(currC===circles.length-1){
			nextBtn.disabled = true;
		}
	}
})

prevBtn.addEventListener('click', ()=>{
	if(currC>0 && currL>-1){
		lines[currL].classList.remove('active');
		circles[currC].classList.remove('active');
		currC--;
		currL--;
		
		if(currC<circles.length-1){
			nextBtn.disabled = false;
		}
	}
})
