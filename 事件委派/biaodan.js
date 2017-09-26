window.addEventListener('load',function(){
	let table = document.querySelector('tbody')
	let but = document.querySelector('button');
	let student = [
		{name:'zhangsan',age:20,sex:'nv',jiguan:'山西太原'},
        {name:'lisi',age:50,sex:'nv',jiguan:'山西太原'},
        {name:'wangwu',age:20,sex:'nv',jiguan:'山西太原'},
        {name:'zhaoliu',age:80,sex:'nv',jiguan:'山西太原'},
        {name:'huangqi',age:120,sex:'nan',jiguan:'山西太原'},
        {name:'zhangsi',age:20,sex:'nv',jiguan:'山西太原'},
        {name:'zhaosi',age:60,sex:'nan',jiguan:'山西太原'}
	]


	table.ondblclick = function(e){
		let element = e.target;
		if(element.nodeName=='TD'&&element.className!='dle'){
			let oldv = element.innerText;
			element.innerText = '';
			let inputs = document.createElement('input');
			inputs.value = oldv;
			element.appendChild(inputs);
			inputs.onblur = function(){
				let newv = this.value;
				element.removeAttribute(inputs);
				element.innerText = newv;
				inpus = null;
				if(newv){
                    element.innerText = newv;
				}else{
					element.innerText = oldv;

				}

			}
		}else if( element.nodeName=='BUTTON'){
			let fu = element.parentNode.parentNode;
			table.removeChild(fu)
		}
	}
	student.forEach(element=>{
             TJ(element)
    })
	function TJ(obj) {table
		let jia = document.createElement('tr')
		jia.innerHTML=`
		        <td>${obj.name}</td>
				<td>${obj.age}</td>
				<td>${obj.sex}</td>
				<td>${obj.jiguan}</td>
				<td class="dle"><button>删除</button></td>`
		table.appendChild(jia)
    }
})
