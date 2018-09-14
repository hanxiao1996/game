class Game{
	constructor() {
      this.screen="";
      this.letters =[];

      /*
      [

      {top:x,left:x,node:node}
      ]
       */
	}
	// 创建字母
	createletter(){
	  let div=document.createElement("div")
	  let asc,letter
	  div.className="zm";  
	  // 判断字母是否重复
	  do{
       		 asc=Math.floor(Math.random()*26+65);
           letter=String.fromCharCode(asc);      //将生成的数字转换为字母
	  }while(letterrepeat(letter,this.letters))  
      let left;
      do{
      	 left=Math.random()*(7.5-0.53*3)+0.53;
        }
      while(leftrepeat(left,this.letters))
      // console.log(this.letters)
      div.style.left=`${left}rem`;
      let top=Math.random();
      div.style.top=`${top}rem`;
      div.style.backgroundImage=`url("img/A_Z/${letter}.png")`;
      this.screen.appendChild(div);
       // 存放每个字母的信息(用json格式)
       let speed=Math.random()*0.05+0.05;// 随机给每个字母速度值
       let obj={}
           obj['top']=top; 
           obj['left']=left;
           obj['node']=div;
           obj['name']=letter;
           obj['speed']=speed
      this.letters.push(obj);
	}
	// 下落
  run(){
        // let that=this;
      this.t=setInterval(()=>{
        for(let item of this.letters){
          item['top']+=item['speed']
          // 判断当前下落的字母消失的位置
          if(item['top']>=7.94){
           this.remove(item['name'],0);
            continue;
          }
          item['node'].style.top=item['top']+"rem"
        }
      },30)
    }
// 消失
    remove(letter,type){
      // 需要传入字母
      // 从screen中移除对应节点
      // 从this.letters数组中移除对应的数据
      // type类型   如果type=0 减少生命值 type=1 增加分数 
      for(item of this.letters){
       if(item['name']==letter){
        let index=this.letters.indexOf(item)
        this.screen.removeChild(item['node']);
        this.letters.splice(index,1);
        this.createletter();
        let health=document.querySelector(".health")
         let point=document.querySelector(".point")
         if(type==0){
           let sm=health.innerText;
          sm--;
          health.innerText=sm;
         }
          else if(type==1){
            let fs=point.innerText
            fs++;
           point.innerText=fs;
         }
         if(health.innerText==0){
          clearInterval(this.t)
          let alertbox=document.querySelector(".alertbox");
          alertbox.style.display="block";
         }
       }
         }

  }
 // 暂停
  stop(){
    clearInterval(this.t);  
         
} 
 //重新开始 
 repeatStart(){
  let alertbox=document.querySelector(".alertbox");
      alertbox.style.display="none";
      for(item of this.letters){
        // console.log(item['node'].className=="zm");
        if(item['node'].className=="zm"){
          let index =this.letters.indexOf("item")
          this.screen.removeChild(item['node']);
          this.letters.splice(index,1); 
        }
      }
      this.createletter();
}


 }
function leftrepeat(left,letters){
  for(item of letters){
    if(Math.abs(item['left']-left)<0.53){
      return true;
    }
  }
  return false;
}

function letterrepeat(letter,letters){
	for(item of letters){
		if(item['name']==letter){
			return true;
		}
           
	} return false;
}



