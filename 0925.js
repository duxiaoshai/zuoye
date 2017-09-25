class Drag{
	constructor(obj){
		this.obj = obj;
 
	}
	move(e){
		let that = this
		this.obj.addEventListener('mousedown',function(e){
			let ox = e.offsetX , oy = e.offsetY;
			document.addEventListener('mousemove',fn)
			that.obj.addEventListener('mouseup',function(){
           			 document.removeEventListener('mousemove',fn)
				})
				function fn(e){
		            let cx = e.clientX, cy = e.clientY;
		            that.obj.style.left = `${cx-ox}px`;
		            that.obj.style.top = `${cy-oy}px`
				}
		})
		

	}

}
