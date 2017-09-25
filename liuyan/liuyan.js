window.onload=function(){

	let shuruban = document.querySelector('textarea');
	let button = document.querySelector('button');
	let liuyanban = document.querySelector('.liuyanban')
	console.log(liuyanban)
	let span = liuyanban.querySelector('span')

		HTMLElement.prototype.prependChild = function(element){
			let first = this.firstElementChild;
			// console.log(first)
			if(first){
				this.insertBefore(element,first)
			}else{
				this.appendChild(element)
			}
		}

	
	button.addEventListener('click',function(){
	
		let p = document.createElement('p');
		p.innerHTML = shuruban.value;
		
     	liuyanban.prependChild(p,span)
     	span.innerHTML = null
     	
     	shuruban.value = null;
	})

}

